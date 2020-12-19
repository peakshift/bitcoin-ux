import React, { useState } from 'react';
import { IonIcon, IonBadge, IonItemDivider, IonAvatar, IonButtons, IonModal, IonActionSheet, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButton, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import { trash, share, caretForwardCircle, heart, close, personAdd, qrCode } from 'ionicons/icons';
import './Tab2.css';
import ContactList from '../components/ContactList';

const Tab2: React.FC = () => {
  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
            <IonTitle size="large">Request Payment</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* --- */}
        <IonList lines="full" class="ion-no-margin">
          <IonItem>
            <IonLabel position="stacked">From</IonLabel>
            <IonInput
              value={text}
              placeholder="Choose a contact or paste an address..."
              onFocus={() => setShowModal(true)}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Amount</IonLabel>
            <IonInput
              value={text}
              placeholder="... BTC"
            />
          </IonItem>
        </IonList>

        <IonGrid>
          <IonRow className="ion-align-items-center">
            <IonCol className="ion-align-self-center">
             <IonButton expand="block" onClick={() => setShowActionSheet(true)}>Continue</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonActionSheet
          isOpen={showActionSheet}
          onDidDismiss={() => setShowActionSheet(false)}
          cssClass='my-custom-class'
          header='We advise that you create or assign this address to an appropreate contact so you can keep a track of your spending and manage your privacy.'
          buttons={[{
            text: 'Create New Contact',
            handler: () => {
              console.log('New contact');
            }
          },{
            text: 'Add to Existing Contact',
            handler: () => {
              console.log('Existing contact');
            }
          }, {
            text: 'Continue Without Making Contact',
            handler: () => {
              console.log('No contact');
            }
          }, {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }]}
        >
        </IonActionSheet>

{/*-- MODALS --*/}
        <IonModal isOpen={showModal} cssClass='my-custom-class'>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
              </IonButtons>
              <IonTitle>Request Payment</IonTitle>

              <IonButtons slot="primary">
                <IonButton onClick={() => setShowModal(false)}>
                  Close
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
            {/* --- */}
            <IonList>
              <IonItem>
                <IonAvatar slot="start" className="ion-avatar-icon ion-align-items-center ion-justify-content-center">
                  <IonIcon className="ion-align-self-center" icon={personAdd} />
                </IonAvatar>
                <IonLabel>New Contact</IonLabel>
              </IonItem>

              <IonItem lines="none">
                <IonAvatar slot="start" className="ion-avatar-icon ion-align-items-center ion-justify-content-center">
                  <IonIcon className="ion-align-self-center" icon={qrCode} />
                </IonAvatar>
                <IonLabel>Add via QR Code</IonLabel>
              </IonItem>

              {/* --- */}

              <IonItemDivider>
                <IonLabel>
                  Frequent
                </IonLabel>
              </IonItemDivider>
              <IonItem>
                <IonAvatar slot="start">
                  <img src="//logo.clearbit.com/peakshift.com" />
                </IonAvatar>
                <IonLabel>
                  <h2>Peak Shift Ltd.</h2>
                  <p>0 BTC</p>
                </IonLabel>
                <IonBadge slot="end" color="light">0</IonBadge>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <img src="https://picsum.photos/id/1074/200" />
                </IonAvatar>
                <IonLabel>
                  <h2>nothingmuch</h2>
                  <p>0.00435 BTC</p>
                </IonLabel>
                <IonBadge slot="end" color="light">47</IonBadge>
              </IonItem>
              <IonItem lines="none">
                <IonAvatar slot="start">
                  <img src="//logo.clearbit.com/wasabiwallet.io" />
                </IonAvatar>
                <IonLabel>
                  <h2>zkSnacks</h2>
                  <p>0.00435 BTC</p>
                </IonLabel>
                <IonBadge slot="end" color="light">49</IonBadge>
              </IonItem>
            </IonList>
            <IonItemDivider>
              <IonLabel>
                Contacts
              </IonLabel>
            </IonItemDivider>
            <ContactList />
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
