import {
	IonContent,
	IonDatetime,
	IonDatetimeButton,
	IonModal,
} from "@ionic/react";

const Setting: React.FC = () => {
	return (
		<>
			<IonContent>
				<h4>Ionic Date time Picker new </h4>
				<IonDatetimeButton datetime="datetime"></IonDatetimeButton>

				<IonModal keepContentsMounted={true}>
					<IonDatetime id="datetime"></IonDatetime>
				</IonModal>
			</IonContent>
		</>
	);
};

export default Setting;
