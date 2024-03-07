import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router";
import { selectUserAuth } from "@redux/Users/userSlice";

interface ComponentProps {}

interface PublicRouteProps extends RouteProps {
	component: React.ComponentType<ComponentProps>;
}

const PublicRoute: React.FC<PublicRouteProps> = ({
	component: Component,
	...rest
}) => {
	const { isAuthenticated } = useSelector(selectUserAuth);

	return (
		<Route
			{...rest}
			render={(props) =>
				isAuthenticated ? (
					<Redirect to="/attraction" />
				) : (
					<Component {...(props as ComponentProps)} />
				)
			}
		/>
	);
};

export default PublicRoute;
