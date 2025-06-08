const RegisterForm = document.querySelector("form.Register-form");

RegisterForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  window.location.href = "/index/Login.html";
})