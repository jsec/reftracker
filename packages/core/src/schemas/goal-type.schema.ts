import { z } from 'zod';

export const GoalTypeSchema = z.object({
    id: z.string().uuid(),
    type: z.string(),
    description: z.string()
});

export type GoalType = z.infer<typeof GoalTypeSchema>;
