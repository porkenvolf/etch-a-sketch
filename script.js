const container = document.querySelector("#container");

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
newGrid(15);
