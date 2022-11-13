import { z } from 'zod';

export const GoalSchema = z.object({
    id: z.string().uuid(),
    typeId: z.string().uuid(),
    gameId: z.string().uuid(),
    locationId: z.string().uuid(),
    period: z.number().int(),
    time: z.string()
});

export type Goal = z.infer<typeof GoalSchema>;
