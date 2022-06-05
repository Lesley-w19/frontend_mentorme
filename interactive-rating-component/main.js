// get the desired classes
const rateCard = document.querySelector(".rate-card");
const thankCard = document.querySelector(".thank-card");
const btnRate = document.querySelectorAll(".btn-rate");

// add active class onclick to the rating buttons
//1. remove active in all btns.
//2.add active class to the selected btn

btnRate.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    btnRate.forEach((btn) => btn.classList.remove("btn-active"));
    button.classList.add("btn-active");

    const value = button.childNodes[1].value;

    document.querySelector(".rate-value").innerHTML = value;
  });
});

// change between two cards
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  thankCard.classList.remove("card-active");
  rateCard.classList.add("card-active");
});