const email = document.querySelector("#email");
const form = document.querySelector("#form");
const errorMessage = document.querySelector(".error-msg");

form.addEventListener("submit", (e) => {
  let message = [];
  let nomessage = [];
  const regx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.value === "" || email.value == null || !email.value.match(regx)) {
    message.push("Please provide a valid email");
  }

  if (message.length > 0) {
    e.preventDefault();
    errorMessage.innerText = message;
    form.classList.add("error");
  } else {
    form.classList.remove("error");
    errorMessage.innerText = nomessage;
  }
});
