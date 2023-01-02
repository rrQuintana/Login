import { initializeApp } from "firebase/app";
import "firebase/compat/auth";


const firebaseConfig = {
  projectId: "fir-auth-ba2d9",
  appId: "1:1016011699765:web:49e5e0bf36e073347da37c",
  storageBucket: "fir-auth-ba2d9.appspot.com",
  locationId: "us-central",
  apiKey: "AIzaSyB0XjYOLThnOiYRWBdQ1j2Yo1ut83neOT4",
  authDomain: "fir-auth-ba2d9.firebaseapp.com",
  messagingSenderId: "1016011699765",
};
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;