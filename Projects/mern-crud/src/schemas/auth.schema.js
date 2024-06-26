import { z } from "zod";

export const registerSchema = z.object({
  userName: z.string({
    required_error: "Username is required"
  }),
  email: z.string({
    required_error: 'Email is required'
  })
    .email({
      message: 'Invalid email'
    }),
  password: z.string({
    required_error: 'Password required'
  })
    .min(6, {
      message: 'Password must be at least 6 characters'
    })
})

export const LoginSchema = z.object({
  email: z.string({
    required_error: 'Email is required'
  }).
    email({
      message: 'Invalid email'
    }),
  password: z.string({
    required_error: 'Password required'
  })
    .min(6, {
      message: 'Password must be at least 6 characters'
    })
})

