import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsDzWMBx8euEuwTaH7gSKWPu-W5B8s4js",
  authDomain: "travel-planner-fbc92.firebaseapp.com",
  projectId: "travel-planner-fbc92",
  storageBucket: "travel-planner-fbc92.appspot.com",
  messagingSenderId: "4824184287",
  appId: "1:4824184287:web:5c5dbb89c3d7516d1a806a",
  measurementId: "G-CH3C7885D6",
};

// init firebase
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, "bookedDates");

let retrivedBookedDates = [];
let myBookedDates = [];

// get collection data
getDocs(colRef)
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      retrivedBookedDates.push(doc.data());
    });
    retrivedBookedDates.forEach((bookedDate) => {
      myBookedDates.push(bookedDate.bookedDate);
    });
    return myBookedDates;
  })
  .catch((err) => {
    console.log(err.message);
  });

export default myBookedDates;
