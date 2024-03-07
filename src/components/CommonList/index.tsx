import React from "react";
import { IonItem, IonLabel, IonList, IonRow } from "@ionic/react";
import {} from "@helpers/constants";

interface DataListProps {
	data: [];
}

const IonListComponent: React.FC<DataListProps> = ({ data }) => {
	return (
		<IonRow>
			<IonList inset={true} lines="full">
				{data.map((element) => (
					<IonItem key={element}>
						<IonLabel>
							<h2>{element}</h2>
						</IonLabel>
					</IonItem>
				))}
			</IonList>
		</IonRow>
	);
};

export default IonListComponent;
