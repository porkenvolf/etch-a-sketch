const container = document.querySelector("#container");

for (let i = 1; i <= 256; i++) {
    const tempDiv = document.createElement("div");
    tempDiv.classList.add("grid");
    container.appendChild(tempDiv);
}

const grid = document.querySelectorAll(".grid");
grid.forEach((pixel) => {
    pixel.addEventListener("mouseover", (event) => {
        pixel.classList.toggle('painted');
    });
});
