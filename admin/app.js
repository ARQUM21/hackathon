// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getFirestore, } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

// Your web app's Firebase configuration
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
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const logout_btn = document.getElementById("logout_btn");
logout_btn.addEventListener("click", logout);

studentFrom.addEventListener("click", register);
function register(){
    window.location.href = "../registration/index.html"
}

studentPortal_btn.addEventListener("click", portal);
function portal(){
    window.location.href="../student_portal/index.html";
}

studentMarks_btn.addEventListener("click", marks);
function  marks() {
    window.location.href="../marks/index.html"
}

async function logout() {
    try {
        await signOut(auth);
        window.location.href = "../login/index.html";
    } catch (error) {
        console.error("Sign out error:", error.message);
    }
}

