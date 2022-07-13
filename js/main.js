var elForm = document.querySelector(".form")
var elWalk = document.querySelector(".text__walk")
var elVelo = document.querySelector(".text__velo")
var elCar = document.querySelector(".text__car")
var elPlane = document.querySelector(".text__plane")

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var inputValue = document.querySelector(".input1").value;
  var speedWalk = 3.6 / 60;
  var speedVelo = 20.1 / 60;
  var speedCar = 70 / 60;
  var speedPlane = 800 / 60;

 if (!isNaN(inputValue) && inputValue <= 9999999 && inputValue >= 0) {
  var resultWalk = Math.floor((inputValue/speedWalk) / 60) + " hours " + Math.floor((inputValue/speedWalk) %60) + " m";

  var resultVelo = Math.floor((inputValue/speedVelo) / 60) + " hours " + Math.floor((inputValue/speedVelo) %60) + " m";

  var resultCar = Math.floor((inputValue/speedCar) / 60) + " hours " + Math.floor((inputValue/speedCar) %60) + " m";

  var resultPlane = Math.floor((inputValue/speedPlane) / 60) + " hours " + Math.floor((inputValue/speedPlane) %60) + " m";

  elWalk.textContent = resultWalk;
  elVelo.textContent = resultVelo;
  elCar.textContent = resultCar;
  elPlane.textContent = resultPlane;
 } else if (inputValue >= 9999999) {
  alert("Iltimos kichikroq son kiriting !")
 } else if (isNaN(inputValue)) {
  alert("Iltimos faqat son kiriting")
 } else {
  alert("Iltimos musbat son kiriting !!!")
 }
})