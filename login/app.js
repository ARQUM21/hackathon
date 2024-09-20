// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import { getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword ,
 } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl6RfAL7ZYJklKKEaXMhacF_2iBb7g19c",
  authDomain: "hackathon-8896a.firebaseapp.com",
  projectId: "hackathon-8896a",
  storageBucket: "hackathon-8896a.appspot.com",
  messagingSenderId: "7922859534",
  appId: "1:7922859534:web:2326c367f836ef5e9c065f",
  measurementId: "G-1ESVRC6VH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);
console.log("Auth=>", auth);



onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("user is logged In")
      const uid = user.uid;
      // ...
    } else {
      console.log("user is not logged In")
    }
  });

const login_email = document.getElementById("login_email");
const login_pass = document.getElementById("login_pass");
const login_btn =document.getElementById("login_btn");

login_btn.addEventListener("click", createUserAccount);

function createUserAccount(){
    signInWithEmailAndPassword(auth, login_email.value, login_pass.value)
  .then((userCredential) => {
    const user = userCredential.user;
    
    console.log("user")
    window.location.href = "../admin/index.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });

}