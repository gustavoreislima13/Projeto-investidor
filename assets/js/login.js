const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === 'reisanselmo7@gmail.com' && password === '123456') {
    window.location.href = 'http://localhost/mapos/';
  } else {
    alert('Invalid email or password.');
  }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === 'cliente@gmail.com' && password === '123456') {
    window.location.href = 'http://localhost/mapos/index.php/mine/painel';
  } else {
    alert('Invalid email or password.');
  }
});