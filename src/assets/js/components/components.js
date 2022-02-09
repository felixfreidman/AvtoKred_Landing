// Form Logic
let initContainer = document.getElementById("initSlide");
let yesForm = document.getElementById("yesForm");
let noForm = document.getElementById("noform");
let toYesForm = document.getElementById("yesFormTrans");
let toNoForm = document.getElementById("noFormTrans");

toYesForm.addEventListener("click", () => {
    yesForm.classList.toggle("js-hidden--Animated");
    initContainer.classList.toggle("js-hidden--Animated");
});

toNoForm.addEventListener("click", () => {
    noForm.classList.toggle("js-hidden--Animated");
    initContainer.classList.toggle("js-hidden--Animated");
});