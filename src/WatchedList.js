import { collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase.js";
import { UserAuth } from './Context/AuthContext.js';


function WatchedList() {
  const { user } = UserAuth();
  let userWatched = [];
  let watched = [];
  const usersRef = collection(db, `/users/${user.uid}/watched`);
  getDocs(usersRef)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        userWatched.push({...doc.data(), id: doc.id})
      })
      for(let i=0; i<userWatched.length; i++)
        {watched.push(userWatched[i].title);
      }
    });
    // console.log(watched);
}

export default WatchedList;
