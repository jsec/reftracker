import { z } from 'zod';

export const InfractionSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    minutes: z.number().int(),
    description: z.string()
});

export type Infraction = z.infer<typeof InfractionSchema>;
