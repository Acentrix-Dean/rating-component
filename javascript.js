const sumbmitButton = document.getElementById("submitButton");
const ratingButtonOne = document.getElementById("ratingButtonOne");
const ratingButtonTwo = document.getElementById("ratingButtonTwo");
const ratingButtonThree = document.getElementById("ratingButtonThree");
const ratingButtonFour = document.getElementById("ratingButtonFour");
const ratingButtonFive = document.getElementById("ratingButtonFive");
const rateAgainButton = document.getElementById("rateAgainButton");
const cardOne = document.getElementById("cardOne");
const cardTwo = document.getElementById("cardTwo");

sumbmitButton.onclick = function () {
  cardOne.classList.add("d-none");
  cardTwo.classList.remove("d-none");
  cardTwo.classList.add("card-two");
  if (ratingButtonOne.classList.contains("selected")) {
    ratedSelection.innerText = "You selected 1 out of 5";
  } else if (ratingButtonTwo.classList.contains("selected")) {
    ratedSelection.innerText = "You selected 2 out of 5";
  } else if (ratingButtonThree.classList.contains("selected")) {
    ratedSelection.innerText = "You selected 3 out of 5";
  } else if (ratingButtonFour.classList.contains("selected")) {
    ratedSelection.innerText = "You selected 4 out of 5";
  } else if (ratingButtonFive.classList.contains("selected")) {
    ratedSelection.innerText = "You selected 5 out of 5";
  } else {
    alert("No rating is selected! :(");
  }
};

rateAgainButton.onclick = function () {
  cardOne.classList.remove("d-none");
  cardTwo.classList.add("d-none");
  cardTwo.classList.remove("card-two");
  ratingButtonOne.classList.remove("selected");
  ratingButtonTwo.classList.remove("selected");
  ratingButtonThree.classList.remove("selected");
  ratingButtonFour.classList.remove("selected");
  ratingButtonFive.classList.remove("selected");
};

ratingButtonOne.onclick = function () {
  ratingButtonOne.classList.add("selected");
  ratingButtonTwo.classList.remove("selected");
  ratingButtonThree.classList.remove("selected");
  ratingButtonFour.classList.remove("selected");
  ratingButtonFive.classList.remove("selected");
};

ratingButtonTwo.onclick = function () {
  ratingButtonOne.classList.remove("selected");
  ratingButtonTwo.classList.add("selected");
  ratingButtonThree.classList.remove("selected");
  ratingButtonFour.classList.remove("selected");
  ratingButtonFive.classList.remove("selected");
};

ratingButtonThree.onclick = function () {
  ratingButtonOne.classList.remove("selected");
  ratingButtonTwo.classList.remove("selected");
  ratingButtonThree.classList.add("selected");
  ratingButtonFour.classList.remove("selected");
  ratingButtonFive.classList.remove("selected");
};

ratingButtonFour.onclick = function () {
  ratingButtonOne.classList.remove("selected");
  ratingButtonTwo.classList.remove("selected");
  ratingButtonThree.classList.remove("selected");
  ratingButtonFour.classList.add("selected");
  ratingButtonFive.classList.remove("selected");
};

ratingButtonFive.onclick = function () {
  ratingButtonOne.classList.remove("selected");
  ratingButtonTwo.classList.remove("selected");
  ratingButtonThree.classList.remove("selected");
  ratingButtonFour.classList.remove("selected");
  ratingButtonFive.classList.add("selected");
};
