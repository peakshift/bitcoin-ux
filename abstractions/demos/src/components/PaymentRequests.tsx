import React from "react";
import "./ExploreContainer.css";

import { IonSegment, IonSegmentButton, IonLabel } from "@ionic/react";

interface ContainerProps {
	name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
	return (
		<div className="container">
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
		</div>
	);
};

export default ExploreContainer;
