const loginForm = document.querySelector("form.login-form");

console.log(loginForm);
loginForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  window.location.href = "../index.html";
})