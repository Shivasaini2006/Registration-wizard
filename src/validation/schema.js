import { z } from 'zod';

export const registrationSchema = z.object({
  firstName: z.string().min(2,
    { message: 'First name must be at least 2 characters long' }),

  lastName: z.string().min(2,
    { message: 'Last name must be at least 2 characters long' }),

  // Basic check for valid date

  dateOfBirth: z.string().refine((val) => {
    const date = new Date(val);
    return !isNaN(date.getTime());
  },

    { message: 'Please enter a valid date of birth' }),

  email: z.string().email({ message: 'Please enter a valid email address' }),

  password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),

  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"], // path of error
});
