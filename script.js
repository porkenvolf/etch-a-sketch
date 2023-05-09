const container = document.querySelector("#container");

function newGrid(squaresPerSide) {
    let amount = squaresPerSide ** 2;
    let relativeSize = 100 / squaresPerSide;

    for (let i = 1; i <= amount; i++) {
        const tempDiv = document.createElement("div");
        tempDiv.classList.add("grid");
        tempDiv.style.cssText = `flex: 0 1 ${relativeSize}%;`;
        container.appendChild(tempDiv);
    }
    container.style.cssText = "flex: 0 1 92vh;";
    const grid = document.querySelectorAll(".grid");
    grid.forEach((pixel) => {
        pixel.addEventListener("mouseover", (event) => {
            pixel.classList.toggle("painted");
        });
    });
}
newGrid(100);
