import React, { useState } from 'react';
import { IonActionSheet, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButton, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import { trash, share, caretForwardCircle, heart, close } from 'ionicons/icons';
import './Tab2.css';

const Tab2: React.FC = () => {
  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();
  const [showActionSheet, setShowActionSheet] = useState(false);

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
            <IonInput value={text} placeholder="Choose a contact or paste an address..."> </IonInput>
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
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
