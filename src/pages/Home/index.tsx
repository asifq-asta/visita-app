import "./index.css";
import { IonButton, IonTitle } from "@ionic/react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";

const Home: React.FC = () => {
	const { t } = useTranslation();

	const history = useHistory();

	const navigateToLogin = () => {
		history.push("/login");
	};

	return (
		<>
			<div className="page-container">
				<div className="button-container">
					<IonButton onClick={navigateToLogin} className="login-button">
						Login
					</IonButton>
				</div>
				<div className="background-image"></div>
				<IonTitle className="ion-text-center heading">
					{t("Welcome to Dubai")}
				</IonTitle>
				<hr className="divider" />
				<div className="subheading">{t("Explore a City of Wonders")}</div>
			</div>
		</>
	);
};

export default Home;
