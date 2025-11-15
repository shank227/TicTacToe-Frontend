let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset_button");
let start0 = document.querySelector("#iamO");
let startX = document.querySelector("#iamX");
let turnO;
let turnX;


start0.addEventListener('mouseover', () => {
    start0.style.backgroundColor = "white";
    start0.style.color = "black";
})

start0.addEventListener('mouseout', () => {
    start0.style.backgroundColor = "black"
    start0.style.color = "white";
})

start0.addEventListener("click", () => {
    turnO = true;
    turnX = false;
    console.log(turnO);
})


startX.addEventListener('mouseover', () => {
    startX.style.backgroundColor = "white";
    startX.style.color = "black";
})

startX.addEventListener('mouseout', () => {
    startX.style.backgroundColor = "black"
    startX.style.color = "white";
})

startX.addEventListener("click", () => {
    turnX = true;
    turnO = false;
    console.log(turnX);
})


resetBtn.addEventListener('mouseover', () => {
    resetBtn.style.backgroundColor = "red";
    resetBtn.style.color = "white";
})

resetBtn.addEventListener('mouseout', () => {
    resetBtn.style.backgroundColor = "black"
    resetBtn.style.color = "white";
})

const winPatterns =  [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log("The box was clicked");
    })
})