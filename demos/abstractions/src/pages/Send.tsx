import React, { useState, useEffect } from "react";
import {
	IonIcon,
	IonBadge,
	IonItemDivider,
	IonAvatar,
	IonButtons,
	IonModal,
	IonActionSheet,
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonGrid,
	IonRow,
	IonCol,
	IonButton,
	IonInput,
	IonItem,
	IonLabel,
	IonList,
	IonSearchbar,
	IonChip,
} from "@ionic/react";
import {
	trash,
	share,
	caretForwardCircle,
	heart,
	close,
	personAdd,
	qrCode,
	closeCircle,
	people,
} from "ionicons/icons";
import "./Tab2.css";
import ContactList from "../components/ContactList";

const presetOptions: Array<string> = [
	"👨‍ Friends & Family",
	"💸 Work",
	"🚗 Travel",
	"🍕‍ Food & Drink",
	"🏠 Home",
	"🔧 Utilities",
	"🔧 Exchange",
];

const Send: React.FC = () => {
	const [text, setText] = useState<string>();
	const [number, setNumber] = useState<number>();
	const [showActionSheet, setShowActionSheet] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [checked, setChecked] = useState<Array<number>>([]);

	const handleCheck = (option: number) => {
		if (checked.includes(option)) {
			let removedFromChecked = checked.filter((item) => item !== option);
			setChecked(removedFromChecked);
		} else {
			setChecked([...checked, option]);
		}
	};

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Request Payment</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Send Payment</IonTitle>
					</IonToolbar>
				</IonHeader>
				{/* --- */}
				<IonList lines="full" class="ion-no-margin">
					{/*
						NOTE: Send flow (when copied)
						If the wallet doesn't support output descriptors
						or another mechanism for generating addresses
						the From/To field can be replaced with a field
						to paste the address manually. Before send, the
						user can be prompted with actions to create or add
						the address to a Contact.

						This way labeling would not be as forced onto
						the user - and may be a way to transition to the
						desired user behaviour around contacts and address
						generations.
					*/}
					<IonItem>
						<IonLabel position="stacked">To</IonLabel>
						<IonInput
							value={text}
							placeholder="Choose a contact or paste an address..."
						/>
						<IonAvatar
							slot="end"
							className="ion-avatar-icon ion-align-items-center ion-justify-content-center"
						>
							<IonIcon
								className="ion-align-self-center"
								icon={people}
								color="primary"
								onClick={() => setShowModal(true)}
							/>
						</IonAvatar>
						<IonAvatar
							slot="end"
							className="ion-avatar-icon ion-align-items-center ion-justify-content-center"
						>
							<IonIcon
								className="ion-align-self-center"
								icon={qrCode}
								color="primary"
							/>
						</IonAvatar>
					</IonItem>

					<IonItem>
						<IonLabel position="stacked">Amount</IonLabel>
						<IonInput value={text} placeholder="... BTC" />
					</IonItem>
				</IonList>

				<IonGrid>
					<IonRow className="ion-align-items-center">
						<IonCol className="ion-align-self-center">
							{presetOptions.map((option, index) => {
								return (
									<IonChip
										key={index}
										color="tertiary"
										outline={checked.includes(index) ? false : true}
										onClick={() => handleCheck(index)}
									>
										<IonLabel>{option}</IonLabel>
									</IonChip>
								);
							})}
						</IonCol>
					</IonRow>
				</IonGrid>

				<IonGrid>
					<IonRow className="ion-align-items-center">
						<IonCol className="ion-align-self-center">
							<IonButton
								expand="block"
								onClick={() => setShowActionSheet(true)}
							>
								Send Payment
							</IonButton>
						</IonCol>
					</IonRow>
				</IonGrid>

				<IonActionSheet
					isOpen={showActionSheet}
					onDidDismiss={() => setShowActionSheet(false)}
					cssClass="my-custom-class"
					header="We advise that you create or assign this address to an appropreate contact so you can keep a track of your spending and manage your privacy."
					buttons={[
						{
							text: "Create New Contact",
							handler: () => {
								console.log("New contact");
							},
						},
						{
							text: "Add to Existing Contact",
							handler: () => {
								console.log("Existing contact");
							},
						},
						{
							text: "Continue Without Making Contact",
							handler: () => {
								console.log("No contact");
							},
						},
						{
							text: "Cancel",
							role: "cancel",
							handler: () => {
								console.log("Cancel clicked");
							},
						},
					]}
				></IonActionSheet>

				{/*-- MODALS --*/}
				<IonModal
					isOpen={showModal}
					//swipeToClose={true}
					//onDidDismiss={() => setShowModal(false)}
					cssClass="my-custom-class"
				>
					<IonHeader>
						<IonToolbar>
							<IonButtons slot="start"></IonButtons>
							<IonTitle>Select Contact to Send Payment</IonTitle>

							<IonButtons slot="primary">
								<IonButton onClick={() => setShowModal(false)}>Close</IonButton>
							</IonButtons>
						</IonToolbar>
					</IonHeader>
					<IonContent fullscreen>
						<IonSearchbar placeholder="Search Contacts" />
						{/* --- */}
						<IonList>
							<IonItem>
								<IonAvatar
									slot="start"
									className="ion-avatar-icon ion-align-items-center ion-justify-content-center"
								>
									<IonIcon
										className="ion-align-self-center"
										icon={personAdd}
										color="primary"
									/>
								</IonAvatar>
								<IonLabel color="primary">New Contact</IonLabel>
							</IonItem>

							<IonItem lines="none">
								<IonAvatar
									slot="start"
									className="ion-avatar-icon ion-align-items-center ion-justify-content-center"
								>
									<IonIcon
										className="ion-align-self-center"
										icon={qrCode}
										color="primary"
									/>
								</IonAvatar>
								<IonLabel color="primary">Add via QR Code</IonLabel>
							</IonItem>

							{/* --- */}

							<IonItemDivider>
								<IonLabel>Frequent</IonLabel>
							</IonItemDivider>
							<IonItem>
								<IonAvatar slot="start">
									<img src="//logo.clearbit.com/peakshift.com" />
								</IonAvatar>
								<IonLabel>
									<h2>Peak Shift Ltd.</h2>
									<p>0 BTC</p>
								</IonLabel>
								<IonBadge slot="end" color="light">
									0
								</IonBadge>
							</IonItem>
							<IonItem>
								<IonAvatar slot="start">
									<img src="https://picsum.photos/id/1074/200" />
								</IonAvatar>
								<IonLabel>
									<h2>nothingmuch</h2>
									<p>0.00435 BTC</p>
								</IonLabel>
								<IonBadge slot="end" color="light">
									47
								</IonBadge>
							</IonItem>
							<IonItem lines="none">
								<IonAvatar slot="start">
									<img src="//logo.clearbit.com/wasabiwallet.io" />
								</IonAvatar>
								<IonLabel>
									<h2>zkSnacks</h2>
									<p>0.00435 BTC</p>
								</IonLabel>
								<IonBadge slot="end" color="light">
									49
								</IonBadge>
							</IonItem>
						</IonList>
						<IonItemDivider>
							<IonLabel>Contacts</IonLabel>
						</IonItemDivider>
						<ContactList />
					</IonContent>
				</IonModal>
			</IonContent>
		</IonPage>
	);
};

export default Send;
