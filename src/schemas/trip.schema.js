import { z } from "zod";

export const createTrip = z.object({
  income: z.number({ required_error: "Income is a Number" }),
  expenses: z.number({ required_error: "Income is a Number" }),
  balance: z.number({ required_error: "Income is a Number" }),
});

export const updateTrip = z.object({
  income: z.number({ required_error: "Income is a Number" }).optional(),
  expenses: z.number({ required_error: "Income is a Number" }).optional(),
  balance: z.number({ required_error: "Income is a Number" }).optional(),
});
