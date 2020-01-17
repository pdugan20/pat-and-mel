import firebase from '@firebase/app';
import '@firebase/firestore';
import '@firebase/storage';

class Fire {
    constructor() {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: 'AIzaSyDAktqHYd74QtVuLCVhAITYetf4Pgad5S0',
                authDomain: 'pat-and-mel.firebaseapp.com',
                databaseURL: 'https://pat-and-mel.firebaseio.com',
                projectId: 'pat-and-mel',
                storageBucket: 'pat-and-mel.appspot.com',
                messagingSenderId: '143721318568',
                appId: '1:143721318568:web:c923f6183f4bd52cc79a9d',
            });
        }
    }
}

Fire.shared = new Fire();
export default Fire;
