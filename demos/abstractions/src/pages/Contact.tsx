import React from 'react';
import { IonListHeader, IonChip, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonGrid, IonRow, IonCol, IonIcon, IonButtons, IonBackButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonAvatar, IonBadge, IonLabel, IonItemSliding, IonToggle, IonItemOptions, IonItemOption, IonItemDivider, IonInput, IonRadio, IonCheckbox } from '@ionic/react';
import { eyeOffOutline, eyeOutline, arrowForwardOutline, arrowDownOutline, pin, wifi, wine,warning, walk, closeCircle, close, heart } from 'ionicons/icons';

const Tab3: React.FC = () => {
  return (
    <IonPage>
{/*-- Header --*/}
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/contacts" />
          </IonButtons>
          <IonTitle>nothingmuch</IonTitle>
          <IonButtons slot="end">
            <IonBackButton defaultHref="/contacts" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
{/*-- Content --*/}
      <IonContent fullscreen>

        <IonGrid>
          <IonRow className="ion-align-items-center">
            <IonCol className="ion-align-self-center">

              <IonChip>
                <IonLabel>Default</IonLabel>
              </IonChip>

              <IonChip>
                <IonLabel color="secondary">Secondary Label</IonLabel>
              </IonChip>

              <IonChip color="secondary">
                <IonLabel color="dark">Secondary w/ Dark label</IonLabel>
              </IonChip>

              <IonChip disabled={true}>
                <IonLabel>Disabled Chip</IonLabel>
              </IonChip>

              <IonChip>
                <IonIcon icon={pin} />
                <IonLabel>Default</IonLabel>
              </IonChip>

              <IonChip>
                <IonIcon icon={heart} color="dark" />
                <IonLabel>Default</IonLabel>
              </IonChip>

              <IonChip>
                <IonLabel>Button Chip</IonLabel>
                <IonIcon icon={closeCircle} />
              </IonChip>

              <IonChip>
                <IonIcon icon={pin} color="primary" />
                <IonLabel>Icon Chip</IonLabel>
                <IonIcon icon={close} />
              </IonChip>

              <IonChip>
                <IonAvatar>
                  <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                </IonAvatar>
                <IonLabel>Avatar Chip</IonLabel>
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
            <IonButton slot="end">Send Payment</IonButton>
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
            <IonButton slot="end">Send Payment</IonButton>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start">
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041b9cd9ada7741?d=identicon&f=y" />
            </IonAvatar>
            <IonLabel>
              <h2>pk(xpub661MyMwAqRbcFtXgS5sYJABqqG9YLmC4Q1Rdap9gSE8NqtwybGhePY2gZ29ESFjqJoCu1Rupje8YtGqsefD265TMg7usUDFdp6W1EGMcet8)</h2>
              <p>Output Descriptor</p>
            </IonLabel>
            {/*-- <IonButton fill="outline" slot="end">Edit</IonButton> --*/}
            <IonButton slot="end">Send Payment</IonButton>
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
            <IonBadge slot="end">Unused</IonBadge>
            {/*-- <IonButton fill="outline" slot="end">View</IonButton> --*/}
          </IonItem>

          <IonItem>
            <IonIcon icon={arrowDownOutline} slot="start" />
            <IonLabel>
              <h2>0.00234 BTC</h2>
              <p>2Muc52RXvLk4ybgXag7GiPethDB7jUG63KD</p>
            </IonLabel>
            <IonBadge slot="end">Unused</IonBadge>
            {/*-- <IonButton fill="outline" slot="end">View</IonButton> --*/}
          </IonItem>

          <IonItem>
            <IonIcon icon={arrowDownOutline} slot="start" />
            <IonLabel>
              <h2>0.00234 BTC</h2>
              <p>2Muc52RXvLk4ybgXag7GiPethDB7jUG63KD</p>
            </IonLabel>
            <IonBadge slot="end">Unused</IonBadge>
            {/*-- <IonButton fill="outline" slot="end">View</IonButton> --*/}
          </IonItem>

          <IonItem>
            <IonIcon icon={arrowDownOutline} slot="start" />
            <IonLabel>
              <h2>0.00234 BTC</h2>
              <p>2Muc52RXvLk4ybgXag7GiPethDB7jUG63KD</p>
            </IonLabel>
            <IonBadge slot="end">Unused</IonBadge>
            {/*-- <IonButton fill="outline" slot="end">View</IonButton> --*/}
          </IonItem>

          <IonCardContent>
             <IonButton expand="block">Request Payment</IonButton>
          </IonCardContent>
        </IonCard>

{/*-- 
        <IonGrid>
          <IonRow className="ion-align-items-center">
            <IonCol className="ion-align-self-center">
             <IonButton expand="block">Block Button</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
 --*/}


        <IonList>
{/*-- Known Coins --*/}
          <IonListHeader>Coins known by nothingmuch</IonListHeader>
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
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
