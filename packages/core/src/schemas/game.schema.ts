import { z } from 'zod';

export const GameSchema = z.object({
    id: z.string().uuid(),
    homeTeamId: z.string().uuid(),
    awayTeamId: z.string().uuid(),
    startTime: z.date(),
    locationId: z.string().uuid()
});

export type Game = z.infer<typeof GameSchema>;
