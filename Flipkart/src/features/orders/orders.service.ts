import { Types } from "mongoose";
import { Order } from "./orders.model.js";
import type { CreateOrderInput } from "./orders.validation.js";

interface CreateOrderParams {
  userId: string;
  payload: CreateOrderInput;
}

export const createOrder = async ({
  userId,
  payload,
}: CreateOrderParams) => {
  const items = payload.items.map((item) => ({
    productId: new Types.ObjectId(item.productId),

    // Temporary snapshot values.
    // These should come from Product DB, not from client,
    // when we connect this with your products feature.
    productName: "Product",
    price: 0,

    quantity: item.quantity,
    total: 0,
  }));

  const subtotal = items.reduce((sum, item) => sum + item.total, 0);

  const deliveryFee = subtotal >= 500 ? 0 : 40;

  const total = subtotal + deliveryFee;

  const order = await Order.create({
    userId: new Types.ObjectId(userId),

    items,

    pricing: {
      subtotal,
      discount: 0,
      deliveryFee,
      total,
    },

    shippingAddress: payload.shippingAddress,

    payment: {
      method: payload.paymentMethod,
      status: payload.paymentMethod === "COD" ? "PENDING" : "PENDING",
    },

    status: "PLACED",
  });

  return order;
};

export const getMyOrders = async (userId: string) => {
  return Order.find({
    userId: new Types.ObjectId(userId),
  }).sort({ createdAt: -1 });
};

export const getOrderById = async (
  orderId: string,
  userId: string,
) => {
  return Order.findOne({
    _id: new Types.ObjectId(orderId),
    userId: new Types.ObjectId(userId),
  });
};

export const cancelOrder = async (
  orderId: string,
  userId: string,
) => {
  const order = await Order.findOne({
    _id: new Types.ObjectId(orderId),
    userId: new Types.ObjectId(userId),
  });

  if (!order) {
    return null;
  }

  if (!["PLACED", "CONFIRMED"].includes(order.status)) {
    throw new Error(
      "Only placed or confirmed orders can be cancelled",
    );
  }

  order.status = "CANCELLED";

  await order.save();

  return order;
};