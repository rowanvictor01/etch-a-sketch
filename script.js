// DOM
const containerEl = document.querySelector(".container");
const changeGridBtnEl = document.querySelector("#change-grid-size");
const clearBtnEl = document.querySelector("#clear");

defaultGrid();

// buttons click event
changeGridBtnEl.addEventListener("click", userDefinedGrid);
clearBtnEl.addEventListener("click", clearDrawing);


function defaultGrid() {
    for (let i = 1; i < 257; ++i) {
        const div = document.createElement("div");
        div.setAttribute("class", "default-grid");
        containerEl.appendChild(div);
        div.addEventListener("mouseover", () => div.style.backgroundColor = "blue");
    }
}

function clearDefaultGrid() {
    const defaultDivEls = document.querySelectorAll(".default-grid");
    defaultDivEls.forEach(div => containerEl.removeChild(div));
}

function userDefinedGrid() {
    const userSize = prompt("Enter grid side length that's less than 100");

    // make sure size does not exceed 100
    if (userSize > 100) {
        alert("Grid size can't exceed 100");
        return;
    }

    // clear default grid
    clearDefaultGrid();
    clearUserGrid();

    // calculate square's dimensions to fit container
    let size = 672 / userSize;

    // generate new grid based on user size
    for (let i = 0; i < userSize * userSize; ++i) {
        const div = document.createElement("div");
        div.setAttribute("class", "user-grid");
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        containerEl.appendChild(div);
        div.addEventListener("mouseover", () => div.style.backgroundColor = "orange");
    }
}

function clearUserGrid() {
    const userDivEls = document.querySelectorAll(".user-grid");
    userDivEls.forEach(div => containerEl.removeChild(div));
}

function clearDrawing() {
    const defaultDivEls = document.querySelectorAll(".default-grid");
    const userDivEls = document.querySelectorAll(".user-grid");

    defaultDivEls.forEach(div => div.style.backgroundColor = "white");
    userDivEls.forEach(div => div.style.backgroundColor = "white");
}
