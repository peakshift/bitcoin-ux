import React from 'react';
import { IonList, IonItem, IonItemDivider, IonAvatar, IonBadge, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';

const ContactList: React.FC = () => (
  <IonContent>
    {/*-- List of Text Items --*/}
    <IonList>
      <IonItem routerLink="/contact-detail">
        <IonAvatar slot="start">
          <img src="https://picsum.photos/id/1074/200" />
        </IonAvatar>
        <IonLabel>
          <h2>nothingmuch</h2>
          <p>0.00435 BTC</p>
        </IonLabel>
        <IonBadge slot="end" color="light">47</IonBadge>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://picsum.photos/id/919/200" />
        </IonAvatar>
        <IonLabel>
          <h2>Obi</h2>
          <p>0.00435 BTC</p>
        </IonLabel>
        <IonBadge slot="end" color="light">2</IonBadge>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://picsum.photos/id/87/200" />
        </IonAvatar>
        <IonLabel>
          <h2>Ana</h2>
          <p>0.00435 BTC</p>
        </IonLabel>
        <IonBadge slot="end" color="light">8</IonBadge>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://picsum.photos/id/27/200" />
        </IonAvatar>
        <IonLabel>
          <h2>Gatete</h2>
          <p>0.4000003 BTC</p>
        </IonLabel>
        <IonBadge slot="end" color="light">1</IonBadge>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://picsum.photos/id/743/200" />
        </IonAvatar>
        <IonLabel>
          <h2>Oüzgür</h2>
          <p>0.00190048 BTC</p>
        </IonLabel>
        <IonBadge slot="end" color="light">14</IonBadge>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://picsum.photos/id/287/200" />
        </IonAvatar>
        <IonLabel>
          <h2>Chenguang W.</h2>
          <p>0.0024535 BTC</p>
        </IonLabel>
        <IonBadge slot="end" color="light">34</IonBadge>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://picsum.photos/id/976/200" />
        </IonAvatar>
        <IonLabel>
          <h2>Dewi</h2>
          <p>0.00234 BTC</p>
        </IonLabel>
        <IonBadge slot="end" color="light">177</IonBadge>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://picsum.photos/id/44/200" />
        </IonAvatar>
        <IonLabel>
          <h2>Dan</h2>
          <p>0.00435 BTC</p>
        </IonLabel>
        <IonBadge slot="end" color="light">3</IonBadge>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://picsum.photos/id/14/200" />
        </IonAvatar>
        <IonLabel>
          <h2>Taxi Bali</h2>
          <p>0 BTC</p>
        </IonLabel>
        <IonBadge slot="end" color="light">0</IonBadge>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://picsum.photos/id/334/200" />
        </IonAvatar>
        <IonLabel>
          <h2>Fabrise</h2>
          <p>0.00435 BTC</p>
        </IonLabel>
        <IonBadge slot="end" color="light">9</IonBadge>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://picsum.photos/id/1070/200" />
        </IonAvatar>
        <IonLabel>
          <h2>Gina</h2>
          <p>0.00435 BTC</p>
        </IonLabel>
        <IonBadge slot="end" color="light">3</IonBadge>
      </IonItem>
      <IonItemDivider>
        <IonLabel>
          Exchanges
        </IonLabel>
      </IonItemDivider>
      <IonItem>
        <IonAvatar slot="start">
          <img src="//logo.clearbit.com/binance.com" />
        </IonAvatar>
        <IonLabel>
          <h2>Binance</h2>
          <p>0 BTC</p>
        </IonLabel>
        <IonBadge slot="end" color="light">0</IonBadge>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img src="//logo.clearbit.com/cash.app" />
        </IonAvatar>
        <IonLabel>
          <h2>My personals CashApp</h2>
          <p>0.00435 BTC</p>
        </IonLabel>
        <IonBadge slot="end" color="light">13</IonBadge>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img src="//logo.clearbit.com/coinbase.com" />
        </IonAvatar>
        <IonLabel>
          <h2>Coinbase</h2>
          <p>0.00435 BTC</p>
        </IonLabel>
        <IonBadge slot="end" color="light">13</IonBadge>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img src="//logo.clearbit.com/mtgox.com" />
        </IonAvatar>
        <IonLabel>
          <h2>MtGox</h2>
          <p>0 BTC</p>
        </IonLabel>
        <IonBadge slot="end" color="light">0</IonBadge>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img src="//logo.clearbit.com/kraken.com" />
        </IonAvatar>
        <IonLabel>
          <h2>Kraken</h2>
          <p>0.00435 BTC</p>
        </IonLabel>
        <IonBadge slot="end" color="light">1</IonBadge>
      </IonItem>
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
          <img src="//logo.clearbit.com/wasabiwallet.io" />
        </IonAvatar>
        <IonLabel>
          <h2>zkSnacks</h2>
          <p>0.00435 BTC</p>
        </IonLabel>
        <IonBadge slot="end" color="light">49</IonBadge>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://picsum.photos/id/45/200" />
        </IonAvatar>
        <IonLabel>
          <h2>nothingmuch</h2>
          <p>0.00435 BTC</p>
        </IonLabel>
        <IonBadge slot="end" color="light">35</IonBadge>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://picsum.photos/id/35/200" />
        </IonAvatar>
        <IonLabel>
          <h2>nothingmuch</h2>
          <p>0.00435 BTC</p>
        </IonLabel>
        <IonBadge slot="end" color="light">7</IonBadge>
      </IonItem>

      <IonItem>
        <IonCheckbox slot="start" />
        <IonLabel>
          <h2>nothingmuch</h2>
          <p>0.00435 BTC</p>
        </IonLabel>
        <IonBadge slot="end" color="light">7</IonBadge>
      </IonItem>

      <IonItem>
        <IonAvatar slot="start">
          <img src="https://via.placeholder.com/12" />
        </IonAvatar>
        <IonLabel>
          <h2>Dan</h2>
          <h3>0.9012 BTC</h3>
          <p>10 UTXOs</p>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://via.placeholder.com/512" />
        </IonAvatar>
        <IonLabel>
          <h2>Sammy</h2>
          <p>3 UTXOs</p>
        </IonLabel>
        <IonBadge slot="end" color="light">0.00435 BTC</IonBadge>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://via.placeholder.com/512" />
        </IonAvatar>
        <IonLabel>
          <h2>nopara</h2>
          <h3><IonBadge color="light">0.00435 BTC</IonBadge></h3>
          <p>3 UTXOs</p>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://via.placeholder.com/512" />
        </IonAvatar>
        <IonLabel>
          <h2>Peak Shift Ltd.</h2>
          <h3><IonBadge color="light">1.07 BTC</IonBadge></h3>
          <p>3 UTXOs</p>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonAvatar slot="start">
          <img src="https://via.placeholder.com/512" />
        </IonAvatar>
        <IonLabel>
          <h2>zkSnacks</h2>
          <h3>1.09000452 BTC</h3>
          <p>3 UTXOs</p>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Pokémon Yellow</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Mega Man X</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>The Legend of Zelda</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Pac-Man</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Super Mario World</IonLabel>
      </IonItem>
    </IonList>

    {/*-- List of Input Items --*/}
    <IonList>
      <IonItem>
        <IonLabel>Input</IonLabel>
        <IonInput></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel>Toggle</IonLabel>
        <IonToggle slot="end"></IonToggle>
      </IonItem>
      <IonItem>
        <IonLabel>Radio</IonLabel>
        <IonRadio slot="end"></IonRadio>
      </IonItem>
      <IonItem>
        <IonLabel>Checkbox</IonLabel>
        <IonCheckbox slot="start" />
      </IonItem>
    </IonList>

    {/*-- List of Sliding Items --*/}
    <IonList>
      <IonItemSliding>
        <IonItem>
          <IonLabel>Item</IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => {}}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      <IonItemSliding>
        <IonItem>
          <IonLabel>Item</IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => {}}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    </IonList>
  </IonContent>
);

export default ContactList;