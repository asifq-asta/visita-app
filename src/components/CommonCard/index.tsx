import React, { useState } from "react";
import {
	IonCard,
	IonCardHeader,
	IonCardTitle,
	IonCol,
	IonGrid,
	IonRow,
} from "@ionic/react";
import CustomButton from "@components/CustomButton";
import "./index.css";
import { BUTTON_TEXT } from "@helpers/constants";
import { Attraction } from "@interfaces/attraction";

interface AttractionCardProps {
	attraction: Attraction[];
	selectedCurrency: string;
}

const IonCardComponent: React.FC<AttractionCardProps> = ({ attraction }) => {
	const [displayedItems, setDisplayedItems] = useState(10); // Initially display 10 items

	const handleScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
		const scrollTop = event.currentTarget.scrollTop;

		// Check if scrolled to the bottom (scrollHeight - scrollTop equals clientHeight)
		// and if there are more items to display
		if (scrollTop > 650) {
			// Increase the number of displayed items
			setDisplayedItems(displayedItems + 10);
		}
	};

	return (
		<div
			onScroll={handleScroll}
			style={{ overflowY: "auto", maxHeight: "500px" }}
		>
			<IonGrid>
				<IonRow data-testid="card-container">
					{attraction
						.slice(0, displayedItems) // Display only the specified number of items
						.map((data, index) => (
							<IonCol
								key={data.id}
								size="12"
								sizeSm="6"
								sizeMd="4"
								sizeLg="3"
								sizeXl="3"
							>
								<IonCard
									className="product-card"
									data-testid={`product-card-${index}`}
								>
									<IonCardHeader>
										<IonCardTitle>{data.title}</IonCardTitle>

										<CustomButton text={BUTTON_TEXT} onClick={() => ""} />
									</IonCardHeader>
								</IonCard>
							</IonCol>
						))}
				</IonRow>
			</IonGrid>
		</div>
	);
};

export default IonCardComponent;
