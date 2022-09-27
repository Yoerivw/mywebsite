// src/server/router/context.ts
import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { Session } from "next-auth";
import { getServerAuthSession } from "../../server/common/get-server-auth-session";
/* import { prisma } from "../db/client"; */
import { prisma } from "../../utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { verifyJwt } from "../../utils/jwt";

type CreateContextOptions = {
	session: Session | null;
};

/** Use this helper for:
 * - testing, where we dont have to Mock Next.js' req/res
 * - trpc's `createSSGHelpers` where we don't have req/res
 **/
export const createContextInner = async (opts: CreateContextOptions) => {
	return {
		session: opts.session,
		prisma,
	};
};

/**
 * This is the actual context you'll use in your router
 * @link https://trpc.io/docs/context
 **/
interface CtxUser {
	id: string;
	email: string;
	name: string;
	iat: string;
	exp: number;
}

function getUserFromRequest(req: NextApiRequest) {
	const token = req.cookies.token;

	if (token) {
		try {
			const verified = verifyJwt<CtxUser>(token);
			return verified;
		} catch (e) {
			return null;
		}
	}

	return null;
}

export const createContext = async ({
	req,
	res,
}: {
	req: NextApiRequest;
	res: NextApiResponse;
}) => {
	const user = getUserFromRequest(req);

	return { req, res, prisma, user };
};
/* 	(
	opts: trpcNext.CreateNextContextOptions
) => {
	const { req, res } = opts;

	// Get the session from the server using the unstable_getServerSession wrapper function
	const session = await getServerAuthSession({ req, res });

	return await createContextInner({
		session,
	}); */
/* }; */

type Context = trpc.inferAsyncReturnType<typeof createContext>;

export const createRouter = () => trpc.router<Context>();

/**
 * Creates a tRPC router that asserts all queries and mutations are from an authorized user. Will throw an unauthorized error if a user is not signed in.
 **/
/* export function createProtectedRouter() {
	return createRouter().middleware(({ ctx, next }) => {
		if (!ctx.session || !ctx.session.user) {
			throw new trpc.TRPCError({ code: "UNAUTHORIZED" });
		}
		return next({
			ctx: {
				...ctx,
				// infers that `session` is non-nullable to downstream resolvers
				session: { ...ctx.session, user: ctx.session.user },
			},
		});
	});
} */
