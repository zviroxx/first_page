const lewagonbutton = document.querySelector(".buttons");
lewagonbutton.addEventListener("click", () => {
  lewagonbutton.innerText = "already clicked";
});

const buttonstmp1 = document.querySelectorAll(".social-media-buttons");
buttonstmp1.forEach((button) => {
  button.addEventListener("click", () => {
    button.innerText = "Tab opened!";
    button.style.backgroundColor = "rgb(143, 79, 79)";
  });
});
