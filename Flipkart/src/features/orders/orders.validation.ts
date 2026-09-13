import { z } from "zod";

export const createOrderSchema = z.object({
  items: z
    .array(
      z.object({
        productId: z.string().min(1),
        quantity: z.number().int().min(1),
      }),
    )
    .min(1),

  shippingAddress: z.object({
    name: z.string().min(2),
    phone: z.string().min(10).max(15),
    addressLine1: z.string().min(3),
    addressLine2: z.string().optional(),
    city: z.string().min(2),
    state: z.string().min(2),
    pincode: z.string().min(6).max(6),
  }),

  paymentMethod: z.enum(["COD", "ONLINE"]),
});

export const orderIdSchema = z.object({
  orderId: z.string().min(1),
});

export type CreateOrderInput = z.infer<typeof createOrderSchema>;

export const validateCreateOrder = (body: unknown): CreateOrderInput => {
  return createOrderSchema.parse(body);
};

export const validateOrderId = (params: unknown) => {
  return orderIdSchema.parse(params);
};