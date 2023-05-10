const container = document.querySelector("#container");
const colorBtn = document.querySelector("#color");
const rainbowBtn = document.querySelector("#rainbow");
const clearBtn = document.querySelector("#clear");
const slider = document.querySelector("#slider");
const picker = document.querySelector("#picker");
const toggleGrid = document.querySelector("#toggleGrid");
/* ---------------------------------------------------------------------- */
let mouseClicked = false;
document
    .querySelector("body")
    .addEventListener("mousedown", () => (mouseClicked = true));
document
    .querySelector("body")
    .addEventListener("mouseup", () => (mouseClicked = false));
/* ---------------------------------------------------------------------- */
function newGrid(squaresPerSide) {
    container.style.cssText = "flex: 0 1 60vh;";

    let amount = squaresPerSide ** 2;
    let relativeSize = 100 / squaresPerSide;
    for (let i = 1; i <= amount; i++) {
        const tempDiv = document.createElement("div");
        tempDiv.classList.add("grid");
        if (toggleGrid.checked) {
            tempDiv.classList.add("toggled");
        }
        tempDiv.style.cssText = `flex: 0 1 ${relativeSize}%;`;
        tempDiv.addEventListener("mouseover", (event) => {
            if (mouseClicked) {
                let color;
                if (mode === "color") {
                    color = picker.value;
                } else if (mode === "rainbow") {
                    let r = Math.random() * 255;
                    let g = Math.random() * 255;
                    let b = Math.random() * 255;
                    color = `rgb(${r}, ${g}, ${b})`;
                }
                tempDiv.style.backgroundColor = color;
            }
        });
        container.appendChild(tempDiv);
    }
}
/* ---------------------------------------------------------------------- */
function clear() {
    const grid = document.querySelectorAll(".grid");
    grid.forEach((item) => {
        item.remove();
    });
    newGrid(slider.value);
}
clearBtn.addEventListener("click", clear);
slider.addEventListener("input", (event) => {
    clear();
});
/* ---------------------------------------------------------------------- */
let mode = "color";
colorBtn.addEventListener("click", () => (mode = "color"));
rainbowBtn.addEventListener("click", () => (mode = "rainbow"));
picker.addEventListener("click", () => (mode = "color"));
/* ---------------------------------------------------------------------- */
toggleGrid.addEventListener("input", () => {
    let grid = document.querySelectorAll(".grid");
    grid.forEach((item) => {
        item.classList.toggle("toggled");
    });
});
/* ---------------------------------------------------------------------- */
newGrid(slider.value);
