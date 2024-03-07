// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDgUAoWVNa-PhC54DFQroL8KOASyw17RH8",
	authDomain: "visita-4ed62.firebaseapp.com",
	databaseURL: "https://visita-4ed62-default-rtdb.firebaseio.com",
	projectId: "visita-4ed62",
	storageBucket: "visita-4ed62.appspot.com",
	messagingSenderId: "745136331548",
	appId: "1:745136331548:web:dbd052fc93404eddb778d9",
	measurementId: "G-8X7CSS03CL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get authentication instance
export const auth = getAuth(app);
