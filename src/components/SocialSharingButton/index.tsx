import React from "react";
import { IonButton, IonIcon } from "@ionic/react";
interface ShareViaEmailButtonProps {
	onClick: () => void;
	icon: string;
	size: string;
}

const SocialSharingButton: React.FC<ShareViaEmailButtonProps> = ({
	onClick,
	icon,
	size,
}) => {
	return (
		<IonButton data-testid="social-sharig-btn" onClick={onClick}>
			<IonIcon data-testid="social-sharig-btn-icons" icon={icon} size={size} />
		</IonButton>
	);
};

export default SocialSharingButton;
