import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyDeK9ykGwibMcdsOtJTy_XuAgUPohWK7ks",
  authDomain: "barterapp-61ad3.firebaseapp.com",
  projectId: "barterapp-61ad3",
  storageBucket: "barterapp-61ad3.appspot.com",
  messagingSenderId: "383702076097",
  appId: "1:383702076097:web:70cd3c403f84a221836240"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();