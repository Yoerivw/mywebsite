import { inferProcedureOutput } from "@trpc/server";
import React, { createContext, useContext } from "react";
import { AppRouter } from "../server/router";

type TQuery = keyof AppRouter["_def"]["queries"];

type inferQueryOutput<tRouteKey extends TQuery> = inferProcedureOutput<
	AppRouter["_def"]["queries"][tRouteKey]
>;

const UserContext = createContext<inferQueryOutput<"users.me">>(null);

function UserContextProvider({
	children,
	value,
}: {
	children: React.ReactNode;
	value: inferQueryOutput<"users.me"> | undefined;
}) {
	return (
		<UserContext.Provider value={value || null}>
			{children}
		</UserContext.Provider>
	);
}

const useUserContext = () => useContext(UserContext);

export { useUserContext, UserContextProvider };
