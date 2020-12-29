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

const Tab3: React.FC = () => {
	const [showModal, setShowModal] = useState(false);
	return (
		<IonPage>
			{/*-- Header --*/}
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonBackButton defaultHref="/contacts" />
					</IonButtons>
					<IonTitle>nothingmuch</IonTitle>

					<IonButtons slot="primary">
						<IonButton routerDirection="root" routerLink="/contact-edit">
							Edit
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			{/*-- Content --*/}
			<IonContent fullscreen>
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

				<IonCard>
					<IonCardHeader>
						<IonCardSubtitle>Output Descriptors</IonCardSubtitle>
					</IonCardHeader>

					<IonItem>
						<IonAvatar slot="start">
							<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
						</IonAvatar>
						<IonLabel>
							<h2>kukks$paystring.kukks.org</h2>
							<p>Pay String</p>
						</IonLabel>
						{/*-- <IonButton fill="outline" slot="end">Edit</IonButton> --*/}
						<IonButton slot="end">Pay</IonButton>
					</IonItem>

					<IonItem>
						<IonAvatar slot="start">
							<img src="https://gravatar.com/avatar/dba6bae8c566f4041b9cd9ada7741?d=identicon&f=y" />
						</IonAvatar>
						<IonLabel>
							<h2>donate.kukks.org</h2>
							<p>BTC Pay Server</p>
						</IonLabel>
						{/*-- <IonButton fill="outline" slot="end">Edit</IonButton> --*/}
						<IonButton slot="end">Pay</IonButton>
					</IonItem>

					<IonItem lines="none">
						<IonAvatar slot="start">
							<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041b9cd9ada7741?d=identicon&f=y" />
						</IonAvatar>
						<IonLabel>
							<h2>
								pk(xpub661MyMwAqRbcFtXgS5sYJABqqG9YLmC4Q1Rdap9gSE8NqtwybGhePY2gZ29ESFjqJoCu1Rupje8YtGqsefD265TMg7usUDFdp6W1EGMcet8)
							</h2>
							<p>Output Descriptor</p>
						</IonLabel>
						{/*-- <IonButton fill="outline" slot="end">Edit</IonButton> --*/}
						<IonButton slot="end">Pay</IonButton>
					</IonItem>

					{/*-- <IonCardContent>
             <IonButton fill="outline" expand="block">Add New</IonButton>
          </IonCardContent> --*/}
				</IonCard>

				<IonCard>
					<IonCardHeader>
						<IonCardSubtitle>Payment Requests (Addresses)</IonCardSubtitle>
					</IonCardHeader>

					<IonItem>
						<IonIcon icon={arrowDownOutline} slot="start" />
						<IonLabel>
							<h2>UNDEFINED BTC</h2>
							<p>2Muc52RXvLk4ybgXag7GiPethDB7jUG63KD</p>
						</IonLabel>
						<IonBadge slot="end" color="light">
							Unused
						</IonBadge>
						{/*-- <IonButton fill="outline" slot="end">View</IonButton> --*/}
					</IonItem>

					<IonItem>
						<IonIcon icon={arrowDownOutline} slot="start" />
						<IonLabel>
							<h2>0.00234 BTC</h2>
							<p>2Muc52RXvLk4ybgXag7GiPethDB7jUG63KD</p>
						</IonLabel>
						<IonBadge slot="end" color="light">
							Unused
						</IonBadge>
						{/*-- <IonButton fill="outline" slot="end">View</IonButton> --*/}
					</IonItem>

					<IonItem>
						<IonIcon icon={arrowDownOutline} slot="start" />
						<IonLabel>
							<h2>0.00234 BTC</h2>
							<p>2Muc52RXvLk4ybgXag7GiPethDB7jUG63KD</p>
						</IonLabel>
						<IonBadge slot="end" color="light">
							Unused
						</IonBadge>
						{/*-- <IonButton fill="outline" slot="end">View</IonButton> --*/}
					</IonItem>

					<IonItem lines="none">
						<IonIcon icon={arrowDownOutline} slot="start" />
						<IonLabel>
							<h2>0.00234 BTC</h2>
							<p>2Muc52RXvLk4ybgXag7GiPethDB7jUG63KD</p>
						</IonLabel>
						<IonBadge slot="end" color="light">
							Unused
						</IonBadge>
						{/*-- <IonButton fill="outline" slot="end">View</IonButton> --*/}
					</IonItem>

					<IonCardContent>
						<IonButton expand="block" onClick={() => setShowModal(true)}>
							Request Payment
						</IonButton>
					</IonCardContent>
				</IonCard>

				<IonList>
					{/*-- Known Coins --*/}
					<IonListHeader lines="full">
						<IonLabel>Coins known by nothingmuch</IonLabel>
					</IonListHeader>
					<IonItem>
						<IonCheckbox slot="start" />
						<IonLabel>
							<h2>2NAAib51FEBU45evHfF86SzpCY3gAppvpks</h2>
							<p>0.00435 BTC</p>
						</IonLabel>
					</IonItem>
					<IonItem>
						<IonCheckbox slot="start" />
						<IonLabel>
							<h2>2NAAib51FEBU45evHfF86SzpCY3gAppvpks</h2>
							<p>0.00435 BTC</p>
						</IonLabel>
					</IonItem>
					<IonItem lines="none">
						<IonCheckbox slot="start" />
						<IonLabel>
							<h2>2NAAib51FEBU45evHfF86SzpCY3gAppvpks</h2>
							<p>0.00435 BTC</p>
						</IonLabel>
					</IonItem>

					<IonListHeader lines="full">
						<IonLabel>Coins linked to other contacts</IonLabel>
					</IonListHeader>
					<IonItem>
						<IonCheckbox slot="start" />
						<IonLabel>
							<h2>Dan</h2>
							<p>0.6 BTC</p>
						</IonLabel>
					</IonItem>
					<IonItem>
						<IonCheckbox slot="start" />
						<IonLabel>
							<h2>Ana</h2>
							<p>0.004 BTC</p>
						</IonLabel>
					</IonItem>
					<IonItem lines="none">
						<IonCheckbox slot="start" />
						<IonLabel>
							<h2>zkSnacks</h2>
							<p>0.000005 BTC</p>
						</IonLabel>
					</IonItem>

					<IonListHeader>
						<IonLabel>Actions</IonLabel>
					</IonListHeader>
					<IonItem>
						<IonLabel color="primary">Send Payment</IonLabel>
					</IonItem>
					<IonItem>
						<IonLabel color="primary">Join on Lightning</IonLabel>
					</IonItem>
					<IonItem lines="none">
						<IonLabel color="primary">Message over Tor</IonLabel>
					</IonItem>
				</IonList>

				{/*-- MODALS --*/}
				<IonModal isOpen={showModal} cssClass="my-custom-class">
					<IonHeader>
						<IonToolbar>
							<IonButtons slot="start">
								<IonBackButton defaultHref="/contacts" />
							</IonButtons>
							<IonTitle>nothingmuch</IonTitle>

							<IonButtons slot="primary">
								<IonButton onClick={() => setShowModal(false)}>Close</IonButton>
							</IonButtons>
						</IonToolbar>
					</IonHeader>
					<IonContent fullscreen>
						<IonHeader collapse="condense">
							<IonToolbar>
								<IonTitle size="large">Request Payment</IonTitle>
							</IonToolbar>
						</IonHeader>
						{/* --- */}
						<IonList lines="full" class="ion-no-margin">
							<IonItem>
								<IonLabel position="stacked">hello</IonLabel>
							</IonItem>
						</IonList>

						<IonGrid>
							<IonRow className="ion-align-items-center">
								<IonCol className="ion-align-self-center">
									<IonButton>Save</IonButton>
								</IonCol>
							</IonRow>
						</IonGrid>
					</IonContent>
				</IonModal>
			</IonContent>
		</IonPage>
	);
};

export default Tab3;
