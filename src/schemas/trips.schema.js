import { z } from "zod";

export const createTripSchema = z.object({
  kgTotal: z.number({ required_error: "Kilos totales is a Number" }),
});

export const updateTripSchema = z.object({
  income: z.number({ required_error: "Income is a Number" }).optional(),
  expenses: z.number({ required_error: "Expenses is a Number" }).optional(),
  balance: z.number({ required_error: "Balance is a Number" }).optional(),
  kgTotal: z.number({ required_error: "KG is a Number" }).optional(),
  kgSold: z.number({ required_error: "KG is a Number" }).optional(),
  kgDif: z.number({ required_error: "KG is a Number" }).optional(),
});
