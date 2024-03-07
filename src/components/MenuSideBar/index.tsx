import React from "react";
import {
	IonMenu,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonList,
	IonItem,
	IonRouterLink,
} from "@ionic/react";
import { menuController } from "@ionic/core";
import { MENU_ITEMS, MENU_TITLE } from "@helpers/constants";

const MenuSideBar: React.FC = () => {
	const handleClick = async () => {
		await menuController.close();
	};

	return (
		<IonMenu menuId="first-menu" contentId="main-content">
			<IonHeader data-testid="menu-header">
				<IonToolbar>
					<IonTitle data-testid="menu-title-id">{MENU_TITLE}</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonList data-testid="menu-list" onClick={handleClick}>
					{MENU_ITEMS.map((item, index) => (
						<IonItem key={item.path} data-testid={`menu-item-${index}`}>
							<IonRouterLink routerLink={item.path}>{item.label}</IonRouterLink>
						</IonItem>
					))}
				</IonList>
			</IonContent>
		</IonMenu>
	);
};

export default MenuSideBar;
