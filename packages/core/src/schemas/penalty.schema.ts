import { z } from 'zod';

export const PenaltySchema = z.object({
    id: z.string().uuid(),
    teamId: z.string().uuid(),
    gameId: z.string().uuid(),
    infractionId: z.string().uuid(),
    period: z.number().int(),
    time: z.string()
});

export type Penalty = z.infer<typeof PenaltySchema>;
