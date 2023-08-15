document.getElementById("submit-btn").addEventListener("click", function () {
  const userEmail = document.getElementById("user-email");
  const userPassword = document.getElementById("user-password");
  const email = userEmail.value;
  const password = userPassword.value;
  if (email === "admin@gmail.com" && password === "shuvo2024") {
    location.href = "bank.html";
  } else {
    alert("Please input correct login info");
  }
});
