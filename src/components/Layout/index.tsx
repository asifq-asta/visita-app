// src/components/Layout.tsx
import React, { ReactNode } from "react";
import { IonContent } from "@ionic/react";
import Breadcrumbs from "@components/Breadcrumbs";
import Header from "@components/Header";
import { RouteComponentProps } from "react-router";
import Footer from "@components/Footer";

interface LayoutProps {
	breadcrumbs: string[];
	children: ReactNode;
	props: RouteComponentProps;
}

const Layout: React.FC<LayoutProps> = ({ breadcrumbs, children, props }) => (
	<>
		{/* <MenuSideBar /> */}
		<IonContent id="main-content">
			<Header />
			<Breadcrumbs trail={breadcrumbs} props={props} />
			{children}
		</IonContent>
		<Footer />
	</>
);

export default Layout;
