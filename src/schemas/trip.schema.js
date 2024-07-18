import { z } from "zod";

export const createTrip = z.object({
  income: z.number({ required_error: "Income is a Number" }),
  expenses: z.number({ required_error: "Income is a Number" }),
  balance: z.number({ required_error: "Income is a Number" }),
});
