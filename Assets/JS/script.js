// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQU3mslnPBmcGw3RxKzrZM8lZ3pLsRhK8",
  authDomain: "ganesan-b689b.firebaseapp.com",
  projectId: "ganesan-b689b",
  storageBucket: "ganesan-b689b.firebasestorage.app",
  messagingSenderId: "36645472628",
  appId: "1:36645472628:web:375f0c8ef78a15737b8421",
  measurementId: "G-3MDE0TPMCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Realtime Database
const database = getDatabase(app);

// Handle form submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("appointmentForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get the form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobilenumber = document.getElementById("mobilenumber").value;
    const address = document.getElementById("addre").value;

    // Validate the required fields
    if (!name || !email || !mobilenumber || !address) {
      alert("Please fill all required fields!");
      return;
    }

    // Create an object to store the appointment data
    const contactData = {
      name,
      email,
      mobilenumber,
      address
    };

    console.log("Contact Data:", contactData);

    // Reference to the Firebase database
    const contactsRef = ref(database, "contacts"); // You can name this "contacts" or anything you like

    // Push the data to Firebase
    push(contactsRef, contactData)
      .then(() => {
        alert("Contact submitted successfully!");
        form.reset(); // Reset the form after submission
      })
      .catch((error) => {
        console.error("Error saving data:", error);
        alert("Failed to submit contact. Please try again.");
      });
  });
});

console.log("Script connected successfully!");
