import z from "zod";

const userSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long." })
    .max(20, { message: "Username cannot exceed 20 characters." })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username must contain only letters, numbers, or underscores.",
    }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." })
    .max(16, { message: "Password cannot exceed 16 characters." }),
});

function validaUser(input, partial = false) {
  const schemaToValidate = partial ? userSchema.partial() : userSchema;
  return schemaToValidate.safeParse(input);
}

export { userSchema, validaUser };
