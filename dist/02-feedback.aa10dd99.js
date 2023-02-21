const refs = {
    form: document.querySelector(".js-feedback-form"),
    textarea: document.querySelector(".js-feedback-form textarea")
};
refs.form.addEventListener("click", onFormSumbit);
refs.textarea.addEventListener("input", onTextareaInput);
function onFormSumbit(e) {}
function onTextareaInput(e) {
    const message = e.target.value;
    localStorage.setItem("feedbackmsg", message);
}

//# sourceMappingURL=02-feedback.aa10dd99.js.map
