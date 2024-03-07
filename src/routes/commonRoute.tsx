import React from "react";
import { Route, RouteProps, RouteComponentProps, Redirect } from "react-router";
import Layout from "@components/Layout";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

interface ComponentProps {
	client?: ApolloClient<NormalizedCacheObject> | any;
}

interface CommonRouteProps extends RouteProps {
	component:
		| React.ComponentType<RouteComponentProps<ComponentProps>>
		| React.ComponentType<ComponentProps>;
	client?: ApolloClient<NormalizedCacheObject>;
}

const CommonRoute: React.FC<CommonRouteProps> = ({
	component: Component,
	client,
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				props.location.pathname === "/" ? (
					<Redirect to="/home" />
				) : (
					<Layout
						breadcrumbs={props.location.pathname.split("/")}
						props={props}
					>
						<Component {...props} client={client} />
					</Layout>
				)
			}
		/>
	);
};

export default CommonRoute;
