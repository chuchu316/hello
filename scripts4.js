// Google Apps Script URL (replace with your own)
const scriptUrl = "https://script.google.com/macros/s/AKfycbwYnTZQ3ZcrRIf4sW77TWXR-ximfwSWNtmMZA7Aj-1UyLGUaLvLVO0laTMS-5KLSNKQ/exec";

function register() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Make a POST request to Google Apps Script for registration
  fetch(scriptUrl + `?action=register&username=${username}&password=${password}`)
    .then(response => response.json())
    .then(data => {
      alert(data.message);
    })
    .catch(error => console.error('Error:', error));
}

function login() {
  const loginUsername = document.getElementById("loginUsername").value;
  const loginPassword = document.getElementById("loginPassword").value;

  // Make a POST request to Google Apps Script for login
  fetch(scriptUrl + `?action=login&username=${loginUsername}&password=${loginPassword}`)
    .then(response => response.json())
    .then(data => {
      alert(data.message);
    })
    .catch(error => console.error('Error:', error));
}
