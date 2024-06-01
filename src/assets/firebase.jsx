import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCPDHPRjr_oFbNeO9xJOZAP8I4UJCMeExk",
    authDomain: "portofolio-793b3.firebaseapp.com",
    projectId: "portofolio-793b3",
    storageBucket: "portofolio-793b3.appspot.com",
    messagingSenderId: "73508487772",
    appId: "1:73508487772:web:4323e74fa21c921cd11c99",
    measurementId: "G-JF6PZGFC5V"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };