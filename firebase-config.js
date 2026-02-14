const firebaseConfig = {
    apiKey: "AIzaSyBSWB-gJiYtOAH0Qy-4aLKg-_Wiaobdaq4",
    authDomain: "elitecounselgroup.firebaseapp.com",
    projectId: "elitecounselgroup",
    storageBucket: "elitecounselgroup.firebasestorage.app",
    messagingSenderId: "287055478111",
    appId: "1:287055478111:web:080f627091cc35663d0aea",
    measurementId: "G-K01CWEH4ZD"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage ? firebase.storage() : null; // Add storage if needed later, safe check
