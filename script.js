const container = document.querySelector("#container");
const colorBtn = document.querySelector("#color");
const rainbowBtn = document.querySelector("#rainbow");
const clearBtn = document.querySelector("#clear");
const slider = document.querySelector("#slider");
const picker = document.querySelector("#picker");
const toggleGrid = document.querySelector("#toggleGrid");
/* ---------------------------------------------------------------------- */
let mouseDown = false;

document.body.onmouseup = () => {
    mouseDown = false;
};
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
        tempDiv.addEventListener("mouseover", draw);
        tempDiv.addEventListener("mousedown", (event) => {
            mouseDown = true;
            draw(event);
        });

        container.appendChild(tempDiv);
    }
}
function draw(event) {
    if (!mouseDown) return;
    console.log(event.target);
    let color;
    if (mode === "color") {
        color = picker.value;
    } else if (mode === "rainbow") {
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;
        color = `rgb(${r}, ${g}, ${b})`;
    }
    event.target.style.backgroundColor = color;
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
/* ---------------------------------------------------------------------- */

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
