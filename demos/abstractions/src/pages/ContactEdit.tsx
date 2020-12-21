import React, { useState } from "react";
import {
	IonModal,
	IonListHeader,
	IonChip,
	IonCard,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonCardContent,
	IonButton,
	IonGrid,
	IonRow,
	IonCol,
	IonIcon,
	IonButtons,
	IonBackButton,
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonList,
	IonItem,
	IonAvatar,
	IonBadge,
	IonLabel,
	IonItemSliding,
	IonToggle,
	IonItemOptions,
	IonItemOption,
	IonItemDivider,
	IonInput,
	IonRadio,
	IonCheckbox,
} from "@ionic/react";
import {
	ellipsisVertical,
	personCircle,
	search,
	ellipsisHorizontal,
	eyeOffOutline,
	eyeOutline,
	arrowForwardOutline,
	arrowDownOutline,
	pin,
	wifi,
	wine,
	warning,
	walk,
	closeCircle,
	close,
	heart,
} from "ionicons/icons";

interface IContact {
	name: string;
	output_descriptors: Array<string>;
	addresses: Array<string>;
}

const Tab3: React.FC = () => {
	const [text, setText] = useState<string>();
	const [contact, setContact] = useState<IContact>({
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
						<IonButton routerDirection="back" routerLink="/contact-detail">
							Cancel
						</IonButton>
					</IonButtons>
					<IonButtons slot="primary">
						<IonButton
							strong
							routerDirection="forward"
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
									<img src="https://gravatar.com/avatar/s8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
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
