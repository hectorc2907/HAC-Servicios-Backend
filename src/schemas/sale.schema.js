import { z } from "zod";

export const createSaleSchema = z.object({
  quantity: z.number({ required_error: "Income is a Number" }),
  price: z.number({ required_error: "Expenses is a Number" }),
  total: z.number({ required_error: "Balance is a Number" }),
  customer: z.string({ required_error: "FirstName is required" }),
});

export const updateSaleSchema = z.object({
  quantity: z.number({ required_error: "Income is a Number" }).optional(),
  price: z.number({ required_error: "Expenses is a Number" }).optional(),
  total: z.number({ required_error: "Balance is a Number" }).optional(),
  customer: z.string({ required_error: "FirstName is required" }).optional(),
});
