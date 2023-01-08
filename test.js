const steps = document.querySelectorAll(".stp");
const circleSteps = document.querySelectorAll(".step");
const formInputs = document.querySelectorAll(".step-1 form input");
const plans = document.querySelectorAll(".plan-card");
let currentStep = 1;
let currentCircle = 0;

steps.forEach((step) => {
  const nextBtn = step.querySelector(".next-stp");
  const prevBtn = step.querySelector(".prev-stp");
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      document.querySelector(`.step-${currentStep}`).style.display = "none";
      currentStep--;
        document.querySelector(`.step-${currentStep}`).style.display = "flex";
        circleSteps[currentCircle].classList.remove("active");
        currentCircle--;
    });
  }
  nextBtn.addEventListener("click", () => {
    document.querySelector(`.step-${currentStep}`).style.display = "none";
    if (currentStep < 4 && validateForm()) {
        currentStep++;
        currentCircle++;
    }
      document.querySelector(`.step-${currentStep}`).style.display = "flex";
      circleSteps[currentCircle].classList.add("active")
  });
});

function validateForm() {
  let valid = true;
  for (let i = 0; i < formInputs.length; i++) {
    if (!formInputs[i].value) {
      valid = false;
      formInputs[i].classList.add("err");
      findLabel(formInputs[i]).nextElementSibling.style.display = "flex";
    } else {
      valid = true;
      formInputs[i].classList.remove("err")
      findLabel(formInputs[i]).nextElementSibling.style.display = "none";
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

plans.forEach(plan => {
  plan.addEventListener("click", () => {
    document.querySelector(".selected").classList.remove("selected")
    plan.classList.add("selected");
  })
})