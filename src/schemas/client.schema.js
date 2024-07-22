import { z } from "zod";

export const createClientSchema = z.object({
  firstName: z.string({ required_error: "FirstName is required" }),
  nickName: z.string({ required_error: "NickName is required" }),
  phoneNumber: z.number({ required_error: "Phone Number is required" }),
  address: z.string({ required_error: "Address is required" }),
});

export const updateClientSchema = z.object({
  firstName: z.string({ required_error: "FirstName is required" }).optional(),
  nickName: z.string({ required_error: "NickName is required" }).optional(),
  phoneNumber: z
    .number({ required_error: "Phone Number is required" })
    .optional(),
  address: z.string({ required_error: "Address is required" }).optional(),
});
