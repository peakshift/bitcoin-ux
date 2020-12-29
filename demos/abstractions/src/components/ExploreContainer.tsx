import React from "react";
import "./ExploreContainer.css";

import { IonSegment, IonSegmentButton, IonLabel, IonGrid, IonRow, IonCol, IonButton } from "@ionic/react";

interface ContainerProps {
	name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
	return (
		<div className="container">
			{/*-- Default Segment --*/}
			<IonSegment
				onIonChange={(e) => console.log("Segment selected", e.detail.value)}
			>
				<IonSegmentButton value="friends">
					<IonLabel>Privacy</IonLabel>
				</IonSegmentButton>
				<IonSegmentButton value="enemies">
					<IonLabel>No Privacy</IonLabel>
				</IonSegmentButton>
			</IonSegment>

			<strong>{name}</strong>
			<p>
				<a href="/send">Send</a>
			</p>
			<p>
				<a href="/receive">Receive</a>
			</p>

	        <IonGrid>
	          <IonRow className="ion-align-items-center">
	            <IonCol className="ion-align-self-center">
	             <IonButton expand="block">Block Button</IonButton>
	            </IonCol>
	          </IonRow>
	        </IonGrid>


		</div>
	);
};

export default ExploreContainer;
