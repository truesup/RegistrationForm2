const signinBtn = document.querySelector(".signin-btn");
const signupBtn = document.querySelector(".signup-btn");
const formBox = document.querySelector(".form-box");
const body = document.body;

signupBtn.addEventListener("click", function () {
  formBox.classList.add("active");
  body.classList.add("active");
});

signinBtn.addEventListener("click", function () {
  formBox.classList.remove("active");
  body.classList.remove("active");
});
