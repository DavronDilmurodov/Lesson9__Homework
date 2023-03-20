var form = document.querySelector(".form");
var bgInput = document.querySelector(".form__bg-input");
var colorInput = document.querySelector(".form__color-input");
var pInput = document.querySelector(".form__p-input");
var borRInput = document.querySelector(".form__borrad-input");
var borColInput = document.querySelector(".form__borcol-input");
var fsInput = document.querySelector(".form__fs-input");
var button = document.querySelector(".btn");
var card = document.querySelector(".card");
var cardText = document.querySelector(".card__text");
var result = document.querySelector(".result");

button.addEventListener("click", function () {
  card.style.backgroundColor = bgInput.value;
  card.style.color = colorInput.value;
  card.style.padding = pInput.value;
  card.style.borderRadius = borRInput.value;
  card.style.borderColor = borColInput.value;
  card.style.fontSize = fsInput.value;
});
