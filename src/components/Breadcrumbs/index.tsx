/* eslint-disable react/prop-types */
import React from "react";
import { IonBreadcrumbs, IonBreadcrumb } from "@ionic/react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";

interface BreadcrumbsProps {
	trail: string[];
	props: RouteComponentProps;
}

const BreadcrumbsComponent: React.FC<BreadcrumbsProps> = ({ trail, props }) => {
	return (
		<IonBreadcrumbs data-testid="breadcrumbs">
			{trail.map((crumb, index) => (
				<IonBreadcrumb key={index}>
					<Link
						to={props.location.pathname
							.split("/")
							.slice(0, index + 1)
							.join("/")}
					>
						{crumb}
					</Link>
				</IonBreadcrumb>
			))}
		</IonBreadcrumbs>
	);
};

export default BreadcrumbsComponent;
