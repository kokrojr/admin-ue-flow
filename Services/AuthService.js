// Authentication Service
// Accend. - Last Update Feb. 2024


// ======================================================================
// -------------------- CONNECT TO FIREBASE -----------------------------
// ======================================================================

const firebaseConfig = {
    apiKey: "AIzaSyCpz4xjt630kj5hkJdJMtDigz0Cqk5Gm9g",
    authDomain: "ue-books.firebaseapp.com",
    projectId: "ue-books",
    storageBucket: "ue-books.appspot.com",
    messagingSenderId: "501305508788",
    appId: "1:501305508788:web:5aee9e57a5539c1a6f28e1",
    measurementId: "G-NP5RGLNZBJ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Vars
let currentUser = null;
let currentUserID = null;

// ======================================================================
// ---------------------------- USER ------------------------------------
// ======================================================================

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
    // - User is signed in
    currentUser = user.email;
    currentUserID = user.uid;
    // localStorage.setItem("userID", JSON.stringify(currentUserID));
    console.log("User is logged in:", currentUser);

  } else {
    // - User is signed out
    console.log("User is logged out");
    localStorage.removeItem("userID");
  }
});

// ----------------- Check if user is signed in -----------------
var isUserSignedIn = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      return true;
    } else {
      // - User is signed out
      localStorage.removeItem("userID");
      return false;
    }
  });
}

// ======================================================================
// -------------------------- SIGN IN USER ------------------------------
// ======================================================================

var signInUser = () => {
  // Btns
  const signInCtaBox = document.getElementById("sign-in-cta-bx");
  const signInBtn = document.querySelector('#sign-in-btn');
  const forgotPasswordBox = document.querySelector('#forgot-password-bx');

  // Inputs
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  // Disable inputs
  emailInput.disabled = true;    
  passwordInput.disabled = true;

  // Hide Btn
  forgotPasswordBox.classList.add('not-visible');

  // Insert Pre-loader
  signInCtaBox.innerHTML = "<span id='loader' class='loader'></span>";

  // Get User Login Details
  const userEmail = emailInput.value;
  const userPassword = passwordInput.value;

  // Validate Details
  if (userEmail !== "" | userPassword !== "") {
    if (userEmail !== "" && userPassword !== "") {
      // Validate email expression
      if (ValidateEmail(userEmail)) {
        // Sign-in User
        firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
        .then((userCredential) => {
          
          // User signed in successfully
          const user = userCredential.user;
          currentUser = user; // Get current user
          console.log(user);

          // Redirect to System-check.html
          window.location.href = 'system-check.html';

        })
        .catch((e) => {
          // Error signing in user
          console.log(e);

          // Restore Btns
          signInCtaBox.innerHTML = "<button id='sign-in-btn' onclick='beginSignIn()' class='sign-in-btn pri-cta'>Sign in</button>";
          forgotPasswordBox.classList.remove('not-visible');

          // Enable inputs
          emailInput.disabled = false;    
          passwordInput.disabled = false;

          // User Feedback
          emailInput.classList.add('input-error');
          passwordInput.classList.add('input-error');

          // Alert Box
          const alertBox = document.querySelector('#alert-box');
          alertBox.classList.remove('hide-alert');
          alertBox.classList.add('show-alert');

          // Parse the message JSON string into a JavaScript object
          const messageObject = JSON.parse(e.message);
          document.getElementById('alert-message').innerText = messageObject.error.message;

          // Remove the 'show-alert' class after 3 seconds
          setTimeout(function() {
            alertBox.classList.remove('show-alert');
            alertBox.classList.add('hide-alert');
          }, 3000); 

        });
      } else {
        // Invalid email address
        console.log("Invalid email address.");

        // Restore Btns
        signInCtaBox.innerHTML = "<button id='sign-in-btn' onclick='beginSignIn()' class='sign-in-btn pri-cta'>Sign in</button>";
        forgotPasswordBox.classList.remove('not-visible');

        // Enable inputs
        emailInput.disabled = false;    
        passwordInput.disabled = false;
      }

    } else {
      // Invalid Credentials
      console.log("Input field required.");

      // Restore Btns
      signInCtaBox.innerHTML = "<button id='sign-in-btn' onclick='beginSignIn()' class='sign-in-btn pri-cta'>Sign in</button>";
      forgotPasswordBox.classList.remove('not-visible');

      // Enable inputs
      emailInput.disabled = false;    
      passwordInput.disabled = false;
    }
    // 
  } else {
    // Invalid Credentials
    console.log("Invalid Credentials");

    // Restore Btns
    signInCtaBox.innerHTML = "<button id='sign-in-btn' onclick='beginSignIn()' class='sign-in-btn pri-cta'>Sign in</button>";
    forgotPasswordBox.classList.remove('not-visible');

    // Enable inputs
    emailInput.disabled = false;    
    passwordInput.disabled = false;
  }

  // User Feedback
  if (userEmail == "") {
    emailInput.classList.add('input-error');
  }

  if (userPassword == "") {
    passwordInput.classList.add('input-error');
  }

}

//=================== Perform System Checks =================== //

let checkSystemOnSignIn = () => {
  // Perform checks

  // User is Signed In?
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
    // User is signed in
    currentUser = user;
    currentUserID = user.uid;

    // All checks passed
    // Redirect to index.html
    window.location.href = '/workspace/my-board.html';
    // window.location.href = 'dashboard.html';


  } else {
    // User is signed out
    // Redirect to index.html
    window.location.href = 'sign-in.html';
    
  }
});

  // User Signed In is Admin?

  // If all checks are successful

  // setTimeout(function() {
  //   // Redirect to index.html
  //   window.location.href = 'dashboard.html';
  // }, 3000); 

}


// Initialize Cloud Firestore
// const database = firebase.firestore();