import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ContactDetail from '../components/ContactDetail';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contact</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">nothingmuch</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ContactDetail />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
