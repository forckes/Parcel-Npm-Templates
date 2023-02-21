const throttle = require("lodash.throttle");
import "../css/common.css";
import "../css/feedback.css";

const STORAGE_KEY = "feedbackmsg";

const formData = {};

const refs = {
  form: document.querySelector(".js-feedback-form"),
  input: document.querySelector("[name='name']"),
  textarea: document.querySelector(".js-feedback-form textarea"),
  modal: document.querySelector(".modal-message"),
};

refs.form.addEventListener("click", onFormSumbit);

const throtledMessage = throttle(onInput, 200);
refs.form.addEventListener("input", throtledMessage);

onPopulateTextarea();

function onFormSumbit(e) {
  e.preventDefault();
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  const myTimeout = setTimeout(removeClass, 2500);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  refs.modal.classList.add("successful");
  function removeClass() {
    refs.modal.classList.remove("successful");
  }

  console.log("send form");
}
function onInput(e) {
  const message = e.target.value;
  formData[e.target.name] = message;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function onPopulateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    const parsedForm = JSON.parse(savedMessage);
    refs.input.value = parsedForm.name;
    refs.textarea.value = parsedForm.message;
  }
}
