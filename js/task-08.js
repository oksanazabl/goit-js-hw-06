const form = document.querySelector(".login-form");


  

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value.trim() === "" || password.value === "") {
    return alert("Увага! Всі поля повинні бути заповнені");
  }
  const info = {};
  info.email = email.value;
  info.password = password.value;

  console.log(info);
  event.currentTarget.reset();
}
