import { z } from 'zod';

export const TeamSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    nickname: z.string(),
    arenaId: z.string().uuid()
});

export type Team = z.infer<typeof TeamSchema>;
