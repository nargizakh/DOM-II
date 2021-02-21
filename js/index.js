// Your code goes here
const Title = document.querySelector(".logo-heading");
Title.addEventListener("click", () => {
  Title.style.color = "green";
});
const nav = document.querySelectorAll(".nav-link");

nav[0].addEventlistener("click", (e) => {
  nav[0].style.color = "red";
  console.log("This is my event listener ");
});
