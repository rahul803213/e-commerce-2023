import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import { FacebookAuthProvider } from "firebase/compat/auth";


const config={
    apiKey: "AIzaSyCXzrnvO-bwSRdlq8LMfbOY3llbex7dArk",
  authDomain: "e-commerce-b4218.firebaseapp.com",
  projectId: "e-commerce-b4218",
  storageBucket: "e-commerce-b4218.appspot.com",
  messagingSenderId: "352925579858",
  appId: "1:352925579858:web:5a65ad7a89871428813d8b",
  measurementId: "G-4Q88CHCD4G"
}

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore =firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
const provider_f = new firebase.auth.FacebookAuthProvider();
/* const provider_recaptcha=new firebase.auth.RecaptchaVerifier();
const provider_phone_number= new firebase.auth.signInWithPhoneNumber(); */
//window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);


//This is for updation in the database of the state we are doing here
export const addCollectionAndDocumentInFirestore = async (collectionKey,objectsToAdd) =>{
 const collectionRef = firestore.collection(collectionKey);
 const batch = firestore.batch();
 objectsToAdd.forEach(obj => {
  const newDocRef = collectionRef.doc();
  batch.set(newDocRef,obj);
 })

 return await batch.commit();
}

export const createUserProfileDocument = async (userAuth ,additionalData) =>{ 
if(!userAuth) return;

const userRef= firestore.doc(`/users/${userAuth.uid}`);
//console.log(userRef);
const snapShot = await userRef.get();
//console.log(snapShot);
if(!snapShot.exits){

const {displayName,email} = userAuth;
//if(additionalData) displayName=additionalData.displayName;
const createdAt = new Date();

try{
    userRef.set({
      displayName,
      email,
      createdAt,
     ...additionalData
    })
}
catch(error) {
console.log('error creating user',error.message);
}


}

return userRef;

}



provider.setCustomParameters({prompt:'select_account'});
provider_f.setCustomParameters({
    'display': 'popup'
  });

export const signInWithGoogle=()=>
auth.signInWithPopup(provider)

export const signInWithFacebook=()=>{
    (auth.signInWithPopup(provider_f))
}

export default firebase;