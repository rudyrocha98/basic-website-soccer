import React, { Component } from 'react';
import firebase from 'firebase';

import Routes from './Routes'

var config = {
apiKey: "AIzaSyAPq7Y_RLPUYCth2pV3uDHnw2Ldwr92G9I",
authDomain: "cfm-website.firebaseapp.com",
databaseURL: "https://cfm-website.firebaseio.com",
projectId: "cfm-website",
storageBucket: "",
messagingSenderId: "713196352726"
};

firebase.initializeApp(config);

class App extends Component {
	render() {
		return (
			<div className="App">
				<Routes />
			</div>
		);
	}
}

export default App;
