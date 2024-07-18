import { z } from "zod";

export const createTripSchema = z.object({
  income: z.number({ required_error: "Income is a Number" }),
  expenses: z.number({ required_error: "Expenses is a Number" }),
  balance: z.number({ required_error: "Balance is a Number" }),
});

export const updateTripSchema = z.object({
  income: z.number({ required_error: "Income is a Number" }).optional(),
  expenses: z.number({ required_error: "Expenses is a Number" }).optional(),
  balance: z.number({ required_error: "Balance is a Number" }).optional(),
});
