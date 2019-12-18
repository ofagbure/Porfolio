var submitE1 = document.querySelector("#submit");
var firstname = document.querySelector("#firstname");
var submissionResponseE1 = document.querySelector("#response");

submitE1.addEventListener("click", function(event) {
    event.preventDefault();

var response = "Thank you for your submission " + firstname.value + "! I will be in touch with you soon!";
submissionResponseE1.textContent = response;
});