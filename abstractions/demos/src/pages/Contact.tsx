import React, { useState } from "react";
import {
	IonModal,
	IonListHeader,
	IonChip,
	IonCard,
	IonCardHeader,
	IonCardSubtitle,
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
	IonCheckbox,
} from "@ionic/react";
import { arrowDownOutline, closeCircle } from "ionicons/icons";

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

				<IonCard>
					<IonCardHeader>
						<IonCardSubtitle>Identifiers</IonCardSubtitle>
					</IonCardHeader>

					<IonItem>
						<IonAvatar slot="start">
							<img
								alt=""
								src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7742?d=identicon&f=y"
							/>
						</IonAvatar>
						<IonLabel>
							<h2>andrerfneves@lightningaddress.com</h2>
							<p>Lightning Address</p>
						</IonLabel>
						{/*-- <IonButton fill="outline" slot="end">Edit</IonButton> --*/}
						<IonButton slot="end">Pay</IonButton>
					</IonItem>

					<IonItem>
						<IonAvatar slot="start">
							<img
								alt=""
								src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
							/>
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
							<img
								alt=""
								src="https://gravatar.com/avatar/dba6bae8c566f4041b9cd9ada7741?d=identicon&f=y"
							/>
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
							<img
								alt=""
								src="https://gravatar.com/avatar/dba6bae8c566f9d4041b9cd9ada7741?d=identicon&f=y"
							/>
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

					<IonItem>
						<IonAvatar slot="start">
							<img
								alt=""
								src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7742?d=identicon&f=y"
							/>
						</IonAvatar>
						<IonLabel>
							<h2>LNURL1DP68GURN8GHJ7MRWW4EXCTT5DAHKCCN00QHXGET8WFJK2UM0VEAX2UN09E3K7MF0W5LHZ0FJVFJKXVTRXCCRGE3HXDJRZCMRVG6RYV33VE3NXDE4XFJKXERPVD3XGCMRVDJXXVM9XCCNVCN9X9JNVVEHXCENJVE4VYENYVTPX4SKYUGX7NR</h2>
							<p>BOLT12</p>
						</IonLabel>
						{/*-- <IonButton fill="outline" slot="end">Edit</IonButton> --*/}
						<IonButton slot="end">Pay</IonButton>
					</IonItem>

					<IonItem>
						<IonAvatar slot="start">
							<img
								alt=""
								src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7742?d=identicon&f=y"
							/>
						</IonAvatar>
						<IonLabel>
							<h2>lno1pg257enxv4ezqcneype82um50ynhxgrwdajx283qfwdpl28qqmc78ymlvhmxcsywdk5wrjnj36jryg488qwlrnzyjczs</h2>
							<p>BOLT12</p>
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
						<IonCardSubtitle>Payment Requests (Addresses/Invoices)</IonCardSubtitle>
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
							<h2>0.00000001 BTC</h2>
							<p>lnbc100u1ps4wy9zpp5v85cym4yvz9nr5q790nz3fh83cphnz943eueflcrmc476ujt908qdq4f3shqupqw3jhxarfdenjqcqzpgxqrrssrzjqvgptfurj3528snx6e3dtwepafxw5fpzdymw9pj20jj09sunnqmwqz468yqqrrqqqyqqqqlgqqqqqqgqjqsp55k4uehq3swq7rnnvt93rr7c5pasycu75m4pzkl9vdywehttz6shs9qyyssq0zx3khgn2t4envx37677dpzmt29s082n5q44695r7ar92e24z77h42lgmyrpurgayrtwlh54a0fytmun2r2yn4fsw2v50f2yxve3p7cpmslve</p>
						</IonLabel>
						<IonBadge slot="end" color="warning">
							Expired
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
							<h2>0.00000120 BTC</h2>
							<p>lnbc100u1ps4dhnmpp52lpp4h97u4qal69vwuejdxsaseyf0gjvz5ju6e5frss0awahhxksdq4f3qhqupqw3jhxarfdenjqcqzpgxqrrssrzjqvgptfurj3528snx6e3dtwepafxw5fpzdymw9pj20jj09sunnqmwqqqqqyqqqqqqqqqqqqlgqqqqqqgqjqnp4qfth37jfa79rxfhk0yy0elpsd6vncewvzp4xexf9jyf78n6uzyuyxsp5eqlks0w2ys9jd2fwzmj2y4xn9yq98hn3hmhvpmh6r46xsqwym5uq9qyyssqaxu6de88sxnvfts8r56339tu6dw3csnc8evpsf5d7meyvrgu0lryqru4rfvpvqww6zl09jcy5dk4fsylxlqvegf93c5s0yt342ldjtqp5vsly</p>
						</IonLabel>
						<IonBadge slot="end" color="light">
							Expires in 59m
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
						<IonButton slot="end">Schedule for Coinjoin</IonButton>
					</IonItem>
					<IonItem>
						<IonCheckbox slot="start" />
						<IonLabel>
							<h2>Ana</h2>
							<p>0.004 BTC</p>
						</IonLabel>
						<IonButton slot="end">Schedule for Coinjoin</IonButton>
					</IonItem>
					<IonItem lines="none">
						<IonCheckbox slot="start" />
						<IonLabel>
							<h2>zkSnacks</h2>
							<p>0.000005 BTC</p>
						</IonLabel>
						<IonButton slot="end">Schedule for Coinjoin</IonButton>
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
