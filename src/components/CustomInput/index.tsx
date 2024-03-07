import React from "react";
import { IonInput, IonItem, IonLabel } from "@ionic/react";

type TextFieldTypes = "text" | "password" | "email" | "number" | "search";

interface CustomInputProps {
	label: string;
	value: string;
	onBlur?: () => void;
	onFocus?: () => void;
	onInputChange: (value: string) => void;
	type: TextFieldTypes | undefined;
	placeholder: string;
	error?: string | undefined | boolean;
	testid?: string;
	errorTestId?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
	label,
	value,
	onBlur,
	onFocus,
	onInputChange,
	type,
	placeholder,
	error,
	testid,
	errorTestId,
}) => (
	<>
		<IonLabel data-testid="label-test-id">{label}</IonLabel>
		<IonItem>
			<IonInput
				type={type}
				value={value}
				placeholder={placeholder}
				onIonBlur={onBlur}
				data-testid={testid}
				onIonFocus={onFocus}
				onIonChange={(e) => {
					onInputChange(e.detail.value!);
					if (error) {
						onBlur && onBlur();
					}
				}}
			/>
		</IonItem>
		{error && (
			<p data-testid={errorTestId} style={{ color: "red", marginTop: "5px" }}>
				{error}
			</p>
		)}
	</>
);

export default CustomInput;
