const steps = document.querySelectorAll(".stp");
let current = 1;

steps.forEach(step => {
    const btn = step.querySelector(".next-stp");
    btn.addEventListener("click", () => {
        step.style.display = "none";
        if (current==4) {
            current = 1;
        } else {
            current++;
        }
        document.querySelector(`.step-${current}`).style.display = "flex";
    })
})