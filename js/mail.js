document.addEventListener("DOMContentLoaded", function () {
  const emailButton = document.getElementById("emailButton");
  const emailAddress = "pilatesdelabahia@gmail.com";

  emailButton.addEventListener("click", function () {
    window.open("mailto:" + emailAddress);
  });
});
