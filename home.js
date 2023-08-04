document.addEventListener("DOMContentLoaded", function () {
var loggedInUserName = localStorage.getItem('loggedInUserName');

if (loggedInUserName) {
  document.querySelector("h1").innerHTML = `Welcome to Route, ${loggedInUserName}`;
}
});