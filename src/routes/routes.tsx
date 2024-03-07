import React, { Suspense, useEffect } from "react";
import { IonLoading, IonRouterOutlet } from "@ionic/react";
import { AUTH_MUTATION } from "@graphql/Mutations/auth";
import { setToken } from "@redux/Auth/authSlice";
import { RootState } from "@redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
	ApolloClient,
	NormalizedCacheObject,
	useMutation,
} from "@apollo/client";
import {
	CLIENT_ID,
	CLIENT_SECRET,
	AUDIENCE,
	GRANT_TYPE,
	currentTimestamp,
	calculateFutureTime,
	VITE_ACCESS_TOKEN_DEFAULT,
} from "@helpers/constants";
import { Switch } from "react-router";
import {
	Home,
	Setting,
	About,
	Attraction,
	NotFoundPage,
	ContactUs,
	Login,
} from "./lazyLoading";
import CommonRoute from "./commonRoute";
import PrivacyPolicy from "@pages/PrivacyPolicy";

interface RoutesProps {
	client: ApolloClient<NormalizedCacheObject>;
	// Other props if any
}

const Routes: React.FC<RoutesProps> = ({ client }) => {
	let myTimeout: any;
	const dispatch = useDispatch();
	const [auth, { loading, error }] = useMutation(AUTH_MUTATION);
	const { token, expiresIn } = useSelector((state: RootState) => state.auth);

	const handleAuth = async () => {
		try {
			const { data } = await auth({
				variables: {
					clientId: CLIENT_ID,
					clientSecret: CLIENT_SECRET,
					audience: AUDIENCE,
					grantType: GRANT_TYPE,
				},
			});
			dispatch(
				setToken({
					access_token: data.auth.access_token,
					expires_in: calculateFutureTime(
						currentTimestamp,
						Number(data.auth.expires_in),
					),
				}) as ReturnType<any>,
			);
		} catch (error) {
			console.log("Authentication error:", error);
		}
	};

	useEffect(() => {
		if (!token || expiresIn < currentTimestamp) {
			handleAuth();
		} else if (
			expiresIn > currentTimestamp &&
			VITE_ACCESS_TOKEN_DEFAULT !== token
		) {
			const delay = (expiresIn - currentTimestamp) * 1000;
			if (myTimeout) clearTimeout(myTimeout);
			myTimeout = setTimeout(() => {
				handleAuth();
			}, delay);
		}
	}, [token, expiresIn]);

	if (loading)
		return (
			<IonLoading
				isOpen
				message={"Permission is being granted"}
				duration={100}
			/>
		);

	if (VITE_ACCESS_TOKEN_DEFAULT !== token && error) return <p>Error :(</p>;

	return (
		<>
			<IonRouterOutlet>
				<Suspense
					fallback={
						<IonLoading
							isOpen
							message={"Please wait..."}
							duration={100} // Optional: Set a duration for how long the loader should be visible
						/>
					}
				>
					<Switch>
						{/* <PublicRoute component={Login} path="/" exact /> */}
						{/* <PublicRoute component={Login} path="/login" exact /> */}
						<CommonRoute component={Attraction} path="/" exact />
						<CommonRoute component={ContactUs} path="/contact-us" exact />
						<CommonRoute component={Home} path="/home" exact />
						<CommonRoute component={Setting} path="/setting" exact />
						<CommonRoute component={About} path="/about" exact />
						<CommonRoute component={Login} path="/login" exact />
						<CommonRoute
							component={Attraction}
							client={client}
							path="/attraction"
							exact
						/>
						<CommonRoute path="/privacy-policy" component={PrivacyPolicy} />
						<CommonRoute path="/*" component={NotFoundPage} />
					</Switch>
				</Suspense>
			</IonRouterOutlet>
		</>
	);
};

export default Routes;
