import {getDatabase} from "firebase/database"
import { app } from "./firebase.utils"
import firebase from "./firebase.utils";
import { firestore } from "./firebase.utils";


//const database = getDatabase(app);
//  database= firebase.database();

export const PushCartItemsInDB = async (id,items)=>{
        // Create a new post reference with an auto-generated id
        
        await firestore.collection(`users/${id}/cart`).doc().set(items).then((a)=>console.log(a));

}

export const FetchCartItemsFromDatabase = async (id) =>{

     await firestore.collection(`users/${id}/cart`).doc().get().then((a)=>console.log(a));
}