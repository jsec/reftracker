import { z } from 'zod';

export const AssignmentSchema = z.object({
    id: z.string().uuid(),
    officialId: z.string().uuid(),
    gameId: z.string().uuid()
});

export type Assignment = z.infer<typeof AssignmentSchema>;
