import { z } from "zod";

export const createBillsSchema = z.object({
  types: z.string({ required_error: "Types is required" }),
  value: z.number({ required_error: "Value is a Number" }),
  description: z.string({ required_error: "Description is required" }).optional(),
});

export const updateBillsSchema = z.object({
  types: z.string({ required_error: "Types is required" }).optional(),
  value: z.number({ required_error: "Value is a Number" }).optional(),
  description: z
    .string({ required_error: "Description is required" })
    .optional(),
});
