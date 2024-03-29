import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
	IonApp,
	IonIcon,
	IonLabel,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { people, repeatOutline, logoBitcoin } from "ionicons/icons";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Contacts from "./pages/Contacts";
import Contact from "./pages/Contact";
import ContactEdit from "./pages/ContactEdit";
import Send from "./pages/Send";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<IonTabs>
				<IonRouterOutlet>
					<Route path="/tab1" component={Tab1} exact={true} />
					<Route path="/tab2" component={Tab2} exact={true} />
					<Route path="/receive" component={Tab2} exact={true} />
					<Route path="/send" component={Send} exact={true} />
					<Route path="/contact-detail" component={Contact} exact={true} />
					<Route path="/contact-edit" component={ContactEdit} exact={true} />
					<Route path="/contacts" component={Contacts} exact={true} />
					<Route path="/" render={() => <Redirect to="/send" />} exact={true} />
				</IonRouterOutlet>
				<IonTabBar slot="bottom">
					<IonTabButton tab="tab1" href="/tab1">
						<IonIcon icon={logoBitcoin} />
						<IonLabel>Money</IonLabel>
					</IonTabButton>
					<IonTabButton tab="send" href="/send">
						<IonIcon icon={repeatOutline} />
						<IonLabel>Payments</IonLabel>
					</IonTabButton>
					<IonTabButton tab="tab3" href="/contacts">
						<IonIcon icon={people} />
						<IonLabel>Contacts</IonLabel>
					</IonTabButton>
				</IonTabBar>
			</IonTabs>
		</IonReactRouter>
	</IonApp>
);

export default App;
