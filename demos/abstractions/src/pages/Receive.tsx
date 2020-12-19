import React from "react";
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { IonSegment, IonSegmentButton, IonLabel } from "@ionic/react";

const Tab3: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Receive</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Receive</IonTitle>
					</IonToolbar>
				</IonHeader>
			</IonContent>
		</IonPage>
	);
};

export default Tab3;
