import { z } from 'zod';

export const LocationSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    address: z.string(),
    city: z.string(),
    state: z.string()
});

export type Location = z.infer<typeof LocationSchema>;
