import React from "react";
import {
	IonHeader,
	IonToolbar,
	IonTitle,
	IonButtons,
	IonButton,
	IonIcon,
} from "@ionic/react";
import { arrowBackOutline, menuOutline } from "ionicons/icons"; // Import Ionicons icons
import { useHistory } from "react-router";
import "./index.css";

interface AuthHeaderProps {
	title: string;
	showBackButton?: boolean;
	showRightIcons?: boolean;
	rightIconAction?: () => void;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({
	title,
	showBackButton,
	showRightIcons,
	rightIconAction,
}) => {
	const history = useHistory();

	const backButtonAction = () => {
		history.goBack();
	};

	return (
		<IonHeader>
			<IonToolbar class="custom-header">
				{showBackButton && (
					<IonButtons slot="start">
						<IonButton data-testid="back-button-id" onClick={backButtonAction}>
							<IonIcon
								data-testid="back-icon-id"
								className="icons-back"
								icon={arrowBackOutline}
							/>
						</IonButton>
					</IonButtons>
				)}

				<IonTitle data-testid="title-id" className="title">
					{title}
				</IonTitle>

				{showRightIcons && (
					<IonButtons slot="end">
						<IonButton data-testid="right-button-id" onClick={rightIconAction}>
							<IonIcon data-testid="right-icon-id" icon={menuOutline} />
						</IonButton>
					</IonButtons>
				)}
			</IonToolbar>
		</IonHeader>
	);
};

export default AuthHeader;
