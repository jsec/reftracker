import * as trpc from '@trpc/server';
import { z } from 'zod';

export const appRouter = trpc.router().query('getById', {
    input: z.string(),
    async resolve({ input }) {
        return input;
    }
});

export type AppRouter = typeof appRouter;
