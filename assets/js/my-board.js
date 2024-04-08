// ============= Sub Navigation Tab Function ==============

var mainTabContents = document.getElementsByClassName("tab-content");
var mainTabButtons = document.getElementsByClassName("tab-button");

// console.log(mainTabButtons);
// console.log(mainTabContents);

// Function to open a specific tab
function openTab(event, tabName) {
  // Check if the tab is already active
  if (event.currentTarget.classList.contains("active")) {
    return; // Do nothing
  }

  // Hide all tab content
  for (var i = 0; i < mainTabContents.length; i++) {
    mainTabContents[i].classList.remove("active");
  }

  // Deactivate all tab buttons
  for (var i = 0; i < mainTabButtons.length; i++) {
    mainTabButtons[i].classList.remove("active");
  }

  // Show the specific tab content
  document.getElementById(tabName).classList.add("active");

  // Activate the clicked tab button
  event.currentTarget.classList.add("active");
}

// 
function toggleDropdownContents(buttonId) {
  var dropdownContent = document.getElementById(buttonId).nextElementSibling;
  dropdownContent.classList.toggle('hide-dropdown-contents');
}

// function beginLoading() {
//   console.log('hello');
//   // Simulate loading for a few seconds
//   setTimeout(function () {
//     // Hide the loader and show the no-data-message
//     document.querySelectorAll(".loading").forEach(function (loader) {
//       loader.classList.add("hidden");
//     });
//     document.querySelectorAll(".no-data-message").forEach(function (message) {
//       message.classList.remove("hidden");
//     });
//   }, 3000);
// }

// function beginLoading() {
//   console.log('hello');

//   // Set the timer and store the timeout ID
//   var timeoutId = setTimeout(function () {
//       // Hide the loader and show the no-data-message
//       document.querySelectorAll(".loading").forEach(function (loader) {
//           loader.classList.add("hidden");
//       });
//       document.querySelectorAll(".no-data-message").forEach(function (message) {
//           message.classList.remove("hidden");
//       });
//   }, 3000);

//   // Example of how to clear the timer after it has run
//   setTimeout(function () {
//       clearTimeout(timeoutId);
//       console.log('Timer cleared!');
//   }, 4000); // Adjust the time as needed
  
// }

function beginLoading() {
  console.log('hello');

  // Remove the hidden class from loaders
  document.querySelectorAll(".loading").forEach(function (loader) {
      loader.classList.remove("hidden");
  });

  // Remove the hidden class from no-data-messages
  document.querySelectorAll(".no-data-message").forEach(function (message) {
      message.classList.add("hidden");
  });

  // Set the timer to hide the loaders and show the no-data-messages
  setTimeout(function () {
      // Hide the loader and show the no-data-message
      document.querySelectorAll(".loading").forEach(function (loader) {
          loader.classList.add("hidden");
      });
      document.querySelectorAll(".no-data-message").forEach(function (message) {
          message.classList.remove("hidden");
      });
  }, 3000);
}
  