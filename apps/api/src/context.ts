import { inferAsyncReturnType } from '@trpc/server';
import { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createContext({ req, res }: CreateFastifyContextOptions) {
    return { req, res };
}

export type Context = inferAsyncReturnType<typeof createContext>;
