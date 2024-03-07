import React from "react";
import { IonButton } from "@ionic/react";

interface CustomButtonProps {
	onClick: () => void;
	text: string;
	testid?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
	onClick,
	text,
	testid,
}) => (
	<IonButton onClick={onClick} data-testid={testid}>
		{text}
	</IonButton>
);

export default CustomButton;
