import React, { useState } from "react";
import {
	IonChip,
	IonButton,
	IonGrid,
	IonRow,
	IonCol,
	IonIcon,
	IonButtons,
	IonContent,
	IonHeader,
	IonPage,
	IonToolbar,
	IonList,
	IonItem,
	IonAvatar,
	IonLabel,
	IonInput,
} from "@ionic/react";
import { closeCircle } from "ionicons/icons";

interface IContact {
	name: string;
	output_descriptors: Array<string>;
	addresses: Array<string>;
}

const Tab3: React.FC = () => {
	const [contact, setContact] = useState<IContact>({
		name: "",
		output_descriptors: [],
		addresses: [],
	});
	setContact({
		name: "nothingmuch",
		output_descriptors: [],
		addresses: [],
	});
	return (
		<IonPage>
			{/*-- Header --*/}
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonButton routerDirection="root" routerLink="/contact-detail">
							Cancel
						</IonButton>
					</IonButtons>
					<IonButtons slot="primary">
						<IonButton
							strong
							routerDirection="root"
							routerLink="/contact-detail"
						>
							Save
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			{/*-- Content --*/}
			<IonContent fullscreen>
				<IonList lines="full" class="ion-no-margin">
					<IonItem>
						<IonLabel position="stacked">Name</IonLabel>
						<IonInput value={contact.name} placeholder="... BTC" />
					</IonItem>

					<IonItem>
						<IonLabel position="stacked">Amount</IonLabel>
						<IonInput value={contact.name} placeholder="... BTC" />
					</IonItem>

					<IonItem>
						<IonLabel position="stacked">Expiration</IonLabel>
						<IonInput value="3600" placeholder="Time in seconds" />
					</IonItem>
				</IonList>

				<IonGrid>
					<IonRow className="ion-align-items-center">
						<IonCol className="ion-align-self-center">
							<IonChip outline color="tertiary">
								<IonLabel>Exchange</IonLabel>
								<IonIcon icon={closeCircle}></IonIcon>
							</IonChip>

							<IonChip outline color="tertiary">
								<IonAvatar>
									<img
										alt=""
										src="https://gravatar.com/avatar/s8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
									/>
								</IonAvatar>
								<IonLabel>Contact Name</IonLabel>
								<IonIcon icon={closeCircle} />
							</IonChip>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	);
};

export default Tab3;
