const mainElement = document.querySelector('[data-js="main-head"]');

const answerElement = document.querySelector('[data-js="submit-answer"]');
const toggleElement = document.querySelector('[data-js="toggle-btn"]');
const answerContainer = document.getElementById("answer");

//Visible answer and hide answer
if (answerElement) {
  answerElement.addEventListener("click", () => {
    console.log("you clicked a answer button");
    if (answerContainer.style.display === "none") {
      // Answer is currently hidden, so show it
      answerContainer.style.display = "block";
      answerContainer.innerHTML = "Paris, France";
      answerElement.innerHTML = "Hide Answer";
    } else {
      // Answer is currently visible, so hide it
      answerContainer.style.display = "none";
      answerElement.innerHTML = "Show Answer";
    }
    // answerContainer.innerHTML = "Paris, France";
    //answerElement.innerHTML = "Hide Answer";

    //document.getElementById("answer2").innerHTML = "Snow White";
    // document.getElementById("answer3").innerHTML = "Yellow";
    // document.getElementById("answer4").innerHTML = "1950";
    //document.getElementById("answer5").innerHTML = "Hanna and Barbera";
  });

  //Bookmark Toggle Functionality
  const bookmarkSelectElement = document.querySelector(
    '[data-js="selected-bookmark"]'
  );
  bookmarkSelectElement.addEventListener("click", bookMarkFunc);
  //Bookmark Toggle Function
  function bookMarkFunc() {
    bookmarkSelectElement.classList.toggle("fas");
  }
}
/*
//Toggle dark and light mode
toggleElement.addEventListener("click", () => {
  console.log("you clicked a toggle button");
  mainElement.classList.toggle("dark");
});*/
