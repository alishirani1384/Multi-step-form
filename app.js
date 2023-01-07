const infoInputs = document.querySelectorAll(".step-1 form input");
const nextBtn = document.querySelector(".next-stp");
let currentStep = 1;
const step = document.querySelector(`.step-${currentStep}`);


infoInputs.forEach(input => {
    nextBtn.addEventListener("click", () => {
        if (!input.value) {
            findLabel(input).nextElementSibling.style.display = "flex";
            input.classList.add("err");
        } else {  
            findLabel(input).nextElementSibling.style.display = "none";
            input.classList.remove("err")
        }
    })

})

function findLabel(el) {
    const idVal = el.id;
    const labels = document.getElementsByTagName("label");
    for (let i = 0; i < labels.length; i++) {
      if (labels[i].htmlFor == idVal) return labels[i];
    }
}
