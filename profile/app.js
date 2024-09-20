// Import the Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

// Firebase configuration
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
const db = getFirestore(app);

// Get the studentId from localStorage
const studentId = localStorage.getItem("studentId");
const back_btn =document.getElementById("back_btn");

back_btn.addEventListener("click", back);
function  back(){
    window.location.href="../student_portal/index.html"
}
// Profile elements
const profileContainer = document.getElementById("profileContainer");

// Fetch and display profile data
async function displayProfile() {
    if (!studentId) {
        profileContainer.innerHTML = "No student is logged in.";
        return;
    }

    try {
        // Retrieve the student's profile from Firestore
        const profileRef = doc(db, "profile", studentId);
        const profileSnap = await getDoc(profileRef);

        if (profileSnap.exists()) {
            const profileData = profileSnap.data();
            profileContainer.innerHTML = `
                <h2>Student Profile</h2>
                <p><strong>First Name:</strong> ${profileData.firstName}</p>
                <p><strong>Last Name:</strong> ${profileData.lastName}</p>
                <p><strong>Student ID:</strong> ${profileData.studentId}</p>
                <p><strong>CNIC:</strong> ${profileData.cnic}</p>
            `;
        } else {
            profileContainer.innerHTML = "Profile data not found.";
        }
    } catch (error) {
        console.error("Error fetching profile data:", error);
        profileContainer.innerHTML = "Error fetching profile data.";
    }
}

// Call the function to display profile data
displayProfile();

