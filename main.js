// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsrmSl9g5WYn2vLCwQfUf0YpivYXzeTtk",
  authDomain: "login-818f2.firebaseapp.com",
  projectId: "login-818f2",
  storageBucket: "login-818f2.appspot.com",
  messagingSenderId: "992088012491",
  appId: "1:992088012491:web:6598b72d19ea8c75480d4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en'
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function(){
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = "../logged.html";

    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
})