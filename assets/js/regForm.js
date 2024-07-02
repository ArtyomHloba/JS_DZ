'user strict';

const form = document.querySelector(".reg-form");

form.onsubmit = e => {
  console.log("Send Form ");
  e.preventDefault();
};
