import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonButtons, IonButton } from '@ionic/react';
import ContactList from '../components/ContactList';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Contacts</IonTitle>
          <IonButtons slot="primary">
            <IonButton>
              Add
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contacts</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonSearchbar placeholder="Search Contacts" />
        <ContactList />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
