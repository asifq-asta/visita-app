import React from "react";
import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonList,
	IonSkeletonText,
} from "@ionic/react";

const Skeleton: React.FC = () => {
	return (
		<>
			<IonList>
				{Array.from({ length: 5 }).map((_, index) => (
					<IonCard key={index}>
						<IonCardHeader>
							<IonCardTitle>
								<IonSkeletonText
									animated
									style={{ width: "80%", height: "24px" }}
								/>
							</IonCardTitle>
						</IonCardHeader>
						<IonCardContent>
							<IonCardSubtitle>
								<IonSkeletonText
									animated
									style={{ width: "60%", height: "20px" }}
								/>
							</IonCardSubtitle>
							<IonSkeletonText
								animated
								style={{ width: "100%", height: "80px" }}
							/>
						</IonCardContent>
					</IonCard>
				))}
			</IonList>
		</>
	);
};

export default Skeleton;
