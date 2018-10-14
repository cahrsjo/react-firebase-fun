
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCe85KcqVLOGV8lAlEtHHXeEI_r7iZMywc",
    authDomain: "rfmdb-a2f2b.firebaseapp.com",
    databaseURL: "https://rfmdb-a2f2b.firebaseio.com",
    projectId: "rfmdb-a2f2b",
    storageBucket: "rfmdb-a2f2b.appspot.com",
    messagingSenderId: "444804104658"
};

firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
