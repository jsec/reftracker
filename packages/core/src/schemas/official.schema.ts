import { z } from 'zod';

export const OfficialSchema = z.object({
    id: z.string().uuid(),
    firstName: z.string(),
    lastName: z.string(),
    yearHired: z.number().int(),
    number: z.number().int()
});

export type Official = z.infer<typeof OfficialSchema>;
