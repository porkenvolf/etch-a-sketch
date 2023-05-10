const container = document.querySelector("#container");
const colorBtn = document.querySelector("#color");
const rainbowBtn = document.querySelector("#rainbow");
const clearBtn = document.querySelector("#clear");
const slider = document.querySelector("#slider");

function newGrid(squaresPerSide) {
    container.style.cssText = "flex: 0 1 60vh;";

    let amount = squaresPerSide ** 2;
    let relativeSize = 100 / squaresPerSide;
    for (let i = 1; i <= amount; i++) {
        const tempDiv = document.createElement("div");
        tempDiv.classList.add("grid");
        tempDiv.style.cssText = `flex: 0 1 ${relativeSize}%;`;
        tempDiv.addEventListener("mouseover", (event) => {
            tempDiv.classList.toggle("painted");
        });
        container.appendChild(tempDiv);
    }
}

function clear() {
    const grid = document.querySelectorAll(".grid");
    grid.forEach((item) => {
        item.remove();
    });
    newGrid(slider.value);
}
clearBtn.addEventListener("click", clear);
slider.addEventListener("change", (event) => {
    clear();
});
newGrid(slider.value);
