import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyB6yNqORcg6HqUQQ5_qts77oFC60bNkSZM',
	authDomain: 'crown-clothing-8754b.firebaseapp.com',
	projectId: 'crown-clothing-8754b',
	storageBucket: 'crown-clothing-8754b.appspot.com',
	messagingSenderId: '864378544137',
	appId: '1:864378544137:web:e312de727b90da10dfd8d8',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
