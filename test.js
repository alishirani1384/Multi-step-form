const steps = document.querySelectorAll(".stp");
const circleSteps = document.querySelectorAll(".step");
const formInputs = document.querySelectorAll(".step-1 form input");
const plans = document.querySelectorAll(".plan-card");
const switcher = document.querySelector(".switch");
const addons = document.querySelectorAll(".box");
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

switcher.addEventListener("click", () => {
  const val = switcher.querySelector('input').checked;
  if (val) {
    document.querySelector(".monthly").classList.remove("sw");
    document.querySelector(".yearly").classList.add("sw");
  } else {
    document.querySelector(".monthly").classList.add("sw");
    document.querySelector(".yearly").classList.remove("sw");
  }
  switchPrice(val);
})
addons.forEach(addon => {
  addon.addEventListener("click", () => {
    const addonSelect = addon.querySelector("input");
    if (addonSelect.checked) {
      addonSelect.checked = false;
    } else {
      addonSelect.checked = true;
    }
  })
})

function switchPrice(checked) {
  const yearlyPrice = [90, 120, 150];
  const monthlyPrice = [9, 12, 15];
  const prices = document.querySelectorAll(".plan-priced");
  if (checked) {
    prices[0].innerHTML = `$${yearlyPrice[0]}/yr`;
    prices[1].innerHTML = `$${yearlyPrice[1]}/yr`;
    prices[2].innerHTML = `$${yearlyPrice[2]}/yr`;
  } else {
    prices[0].innerHTML = `$${monthlyPrice[0]}/mo`;
    prices[1].innerHTML = `$${monthlyPrice[1]}/mo`;
    prices[2].innerHTML = `$${monthlyPrice[2]}/mo`;
  }
  
}
