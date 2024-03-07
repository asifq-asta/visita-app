import { Route } from "react-router";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserAuth } from "@redux/Users/userSlice";
import Layout from "@components/Layout";

const PrivateRoute = ({ component: Component, client, ...rest }: any) => {
	const { isAuthenticated } = useSelector(selectUserAuth);
	return (
		<Route
			{...rest}
			render={(props) => {
				return isAuthenticated ? (
					<Layout
						breadcrumbs={props.location.pathname.split("/")}
						props={props}
					>
						<Component {...props} client={client} />
					</Layout>
				) : (
					<Redirect to="/" />
				);
			}}
		/>
	);
};

export default PrivateRoute;
