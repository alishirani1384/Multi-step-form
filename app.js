const infoInputs = document.querySelectorAll(".step-1 form input");
const nextBtns = document.querySelectorAll(".next-stp");
const prevBtns = document.querySelectorAll(".prev-stp");
let currentStep = 0;
const step = document.querySelectorAll(".stp");
shownextStep(currentStep);
function shownextStep(n) {
  step[n].style.display = "flex";
  if (n > 0) {
    step[n - 1].style.display = "none";
  }
}
function showPrevStep(n) {
  if (n > 0) step[n].style.display = "flex";
}
infoInputs.forEach((input) => {
  nextBtns.forEach((nextBtn) => {
    nextBtn.addEventListener("click", () => {
      if (!input.value) {
        findLabel(input).nextElementSibling.style.display = "flex";
        input.classList.add("err");
      } else {
        findLabel(input).nextElementSibling.style.display = "none";
        input.classList.remove("err");
      }
      if (validateForm() == true) {
        shownextStep(currentStep + 1);
      }
    });
  });
});

function validateForm() {
  let valid = true;
  for (let i = 0; i < infoInputs.length; i++) {
    if (!infoInputs[i].value) {
      valid = false;
    } else {
      valid = true;
    }
  }
  return valid;
}
function findLabel(el) {
  const idVal = el.id;
  const labels = document.getElementsByTagName("label");
  for (let i = 0; i < labels.length; i++) {
    if (labels[i].htmlFor == idVal) return labels[i];
  }
}

prevBtns.forEach((prevBtn) => {
  prevBtn.addEventListener("click", showPrevStep(currentStep - 1));
});
