import * as z from 'zod';

export const userSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string(),
  email: z.string().email(),
  personalEmail: z.string().email().optional().nullable(),
  certifiedEmail: z.string().email().optional().nullable(),
  phone: z.string().optional(),
  birthDate: z.string().optional(),
  githubUsername: z.string().optional(),
  jiraUsername: z.string().optional(),
});
