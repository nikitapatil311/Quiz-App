const mainElement = document.querySelector('[data-js="main-head"]');

const toggleElement = document.querySelector('[data-js="toggle-btn"]');

toggleElement.addEventListener("click", () => {
  console.log("you clicked a toggle button");
  mainElement.classList.toggle("dark");
});
