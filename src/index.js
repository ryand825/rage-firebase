import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDEQbpOmkynUHJov_HXUysrH_X0GN4ps8U",
    authDomain: "rage-store.firebaseapp.com",
    databaseURL: "https://rage-store.firebaseio.com",
    projectId: "rage-store",
    storageBucket: "",
    messagingSenderId: "731440704696"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
