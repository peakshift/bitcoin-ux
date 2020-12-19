import React from 'react';
import { IonGrid, IonRow, IonCol, IonIcon, IonButtons, IonBackButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonAvatar, IonBadge, IonLabel, IonItemSliding, IonToggle, IonItemOptions, IonItemOption, IonItemDivider, IonInput, IonRadio, IonCheckbox } from '@ionic/react';
import { eyeOffOutline, eyeOutline, arrowForwardOutline } from 'ionicons/icons';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>

        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/contacts" />
          </IonButtons>
          <IonTitle>nothingmuch</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

    <IonGrid>
      <IonRow className="ion-align-items-center">
        <IonCol className="ion-align-self-center">ion-col</IonCol>
      </IonRow>
    </IonGrid>




          {/*-- List of Text Items --*/}
          <IonList>
            <IonItemDivider>
              <IonLabel>
                Addresses
              </IonLabel>
            </IonItemDivider>
            {/* Sliding item with text options on both sides */}
            <IonItemSliding>
              <IonItemOptions side="start">
                <IonItemOption onClick={() => console.log('favorite clicked')}>Favorite</IonItemOption>
                <IonItemOption color="danger" onClick={() => console.log('share clicked')}>Share</IonItemOption>
              </IonItemOptions>

              <IonItem>
                <IonLabel>2Muc52RXvLk4ybgXag7GiPethDB7jUG63KD</IonLabel>
                <IonBadge slot="end">Unused</IonBadge>
              </IonItem>
              <IonItem>
                <IonLabel>2MxY77JYDBxbQcm6TntyAAEsjmH6xSi9ucC</IonLabel>
                <IonBadge slot="end">Unused</IonBadge>
              </IonItem>
              <IonItem>
                <IonLabel>2N3bYPgZQxJaLHxgBbzv82D1ch9mpN378K5</IonLabel>
                <IonBadge slot="end">Unused</IonBadge>
              </IonItem>
              <IonItem>
                <IonLabel>2MsyZuBZsShwcBFUUJ9NWCRS3js2oHfy1hD</IonLabel>
                <IonBadge slot="end">Unused</IonBadge>
              </IonItem>


              <IonItemOptions side="end">
                <IonItemOption onClick={() => console.log('unread clicked')}>Unread</IonItemOption>
              </IonItemOptions>
            </IonItemSliding>


            <IonItemDivider>
              <IonLabel>
                Coins known by nothingmuch
              </IonLabel>
            </IonItemDivider>

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
            <IonItem>
              <IonCheckbox slot="start" />
              <IonLabel>
                <h2>2NAAib51FEBU45evHfF86SzpCY3gAppvpks</h2>
                <p>0.00435 BTC</p>
              </IonLabel>
            </IonItem>


            <IonItemDivider>
              <IonLabel>
                Coins linked to other contacts
              </IonLabel>
            </IonItemDivider>
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
            <IonItem>
              <IonCheckbox slot="start" />
              <IonLabel>
                <h2>zkSnacks</h2>
                <p>0.000005 BTC</p>
              </IonLabel>
            </IonItem>


            <IonItemDivider>
              <IonLabel>
                Actions
              </IonLabel>
            </IonItemDivider>

            <IonItem>
              <IonLabel>Send Payment</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Join on Lightning</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Message over Tor</IonLabel>
            </IonItem>

            <IonItem>
              <IonLabel>Address</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>Toggle</IonLabel>
              <IonToggle slot="end"></IonToggle>
            </IonItem>
            <IonItem>
              <IonLabel>Checkbox</IonLabel>
              <IonCheckbox slot="start" />
            </IonItem>
          </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
