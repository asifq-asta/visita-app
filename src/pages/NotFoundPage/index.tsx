// NotFoundPage.jsx
import { IonContent, IonPage, IonText } from "@ionic/react";
import React from "react";
import "./index.css";
import IonImage from "@components/CommonImages";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<IonPage>
			<IonContent>
				<div className="not-found-container ion-padding">
					<IonText>
						<h1 className="not-found-title">404 - Page Not Found</h1>
						<div className="not-found-image-wrapper">
							<div className="not-found-image">
								<IonImage src="../../error.png" alt="Not Found" />
							</div>
						</div>
						<p className="not-found-message">
							Sorry, the page you are looking for could not be found.
						</p>
						<p>
							<Link to="/">Go back to the homepage</Link>
						</p>
					</IonText>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default NotFoundPage;
