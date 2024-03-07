import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Routes from "./routes/routes";
import "./i18n";
import { apiPlugin, storyblokInit } from "@storyblok/react";
import { persistor } from "@redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "./ApolloClient";
import { SpeedInsights } from "@vercel/speed-insights/react";
import {
	VITE_ACCESS_TOKEN_DEFAULT,
	VITE_STORY_BLOK_ACCESS_TOKEN,
} from "@helpers/constants";

setupIonicReact();

const App: React.FC = () => {
	// Get the token from your Redux store
	// Get the token from your Redux store
	// const authToken = useSelector((state: RootState) => state.auth.token);

	const client = createApolloClient(VITE_ACCESS_TOKEN_DEFAULT);

	storyblokInit({
		accessToken: VITE_STORY_BLOK_ACCESS_TOKEN,
		use: [apiPlugin],
		apiOptions: {
			region: "EU",
		},
	});

	return (
		<IonApp>
			<IonReactRouter>
				<IonRouterOutlet>
					<ApolloProvider client={client}>
						<PersistGate loading={null} persistor={persistor}>
							<Routes client={client} />
							<SpeedInsights />
						</PersistGate>
					</ApolloProvider>
				</IonRouterOutlet>
			</IonReactRouter>
		</IonApp>
	);
};

export default App;
