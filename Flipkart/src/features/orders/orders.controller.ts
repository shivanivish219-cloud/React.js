import type { Request, Response } from "express";
import * as service from "./orders.service.js";
import {
  validateCreateOrder,
  validateOrderId,
} from "./orders.validation.js";

export const create = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({
        error: "Authentication required",
      });
      return;
    }

    const payload = validateCreateOrder(req.body);

    const order = await service.createOrder({
      userId,
      payload,
    });

    res.status(201).json({
      order,
    });
  } catch (error) {
    res.status(400).json({
      error:
        error instanceof Error
          ? error.message
          : "Failed to create order",
    });
  }
};

export const list = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({
        error: "Authentication required",
      });
      return;
    }

    const orders = await service.getMyOrders(userId);

    res.status(200).json({
      orders,
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch orders",
    });
  }
};

export const getOne = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({
        error: "Authentication required",
      });
      return;
    }

    const { orderId } = validateOrderId(req.params);

    const order = await service.getOrderById(
      orderId,
      userId,
    );

    if (!order) {
      res.status(404).json({
        error: "Order not found",
      });
      return;
    }

    res.status(200).json({
      order,
    });
  } catch (error) {
    res.status(400).json({
      error:
        error instanceof Error
          ? error.message
          : "Failed to fetch order",
    });
  }
};

export const cancel = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({
        error: "Authentication required",
      });
      return;
    }

    const { orderId } = validateOrderId(req.params);

    const order = await service.cancelOrder(
      orderId,
      userId,
    );

    if (!order) {
      res.status(404).json({
        error: "Order not found",
      });
      return;
    }

    res.status(200).json({
      order,
    });
  } catch (error) {
    res.status(400).json({
      error:
        error instanceof Error
          ? error.message
          : "Failed to cancel order",
    });
  }
};