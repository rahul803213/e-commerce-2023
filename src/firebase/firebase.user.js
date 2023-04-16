import firebase from 'firebase/compat/app'; //step 1: import firebase this is important
import 'firebase/compat/auth';
import { firestore } from './firebase.utils';
export const PushCartItemsInDB = async (id) =>{

    const cartRef= firestore.collection(`/users/${id}/cart`);
    const cartArray = await cartRef.get();
    console.log(cartArray);



}