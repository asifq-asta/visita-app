import React from "react";
import { IonImg } from "@ionic/react";

interface IonImageProps {
	src: string;
	alt: string;
	style?: object;
}

const IonImage: React.FC<IonImageProps> = ({ src, alt, style }) => {
	return <IonImg src={src} alt={alt} style={style} />;
};

export default IonImage;
