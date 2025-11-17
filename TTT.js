let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset_button");
let start0 = document.querySelector("#iamO");
let startX = document.querySelector("#iamX");
let turnO = true;  // default turn
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// ---------------------- BUTTON EFFECTS ----------------------
start0.addEventListener('mouseover', () => {
    start0.style.backgroundColor = "white";
    start0.style.color = "black";
});

start0.addEventListener('mouseout', () => {
    start0.style.backgroundColor = "black";
    start0.style.color = "white";
});

start0.addEventListener("click", () => {
    turnO = true;   // O starts
    console.log("Start as 0");
});

startX.addEventListener('mouseover', () => {
    startX.style.backgroundColor = "white";
    startX.style.color = "black";
});

startX.addEventListener('mouseout', () => {
    startX.style.backgroundColor = "black";
    startX.style.color = "white";
});

startX.addEventListener("click", () => {
    turnO = false;  // X starts
    console.log("Start as X");
});

// ---------------------- RESET BUTTON ----------------------
resetBtn.addEventListener('mouseover', () => {
    resetBtn.style.backgroundColor = "red";
    resetBtn.style.color = "white";
});

resetBtn.addEventListener('mouseout', () => {
    resetBtn.style.backgroundColor = "black";
    resetBtn.style.color = "white";
});

resetBtn.addEventListener('click', () => {
    location.reload();
});

// ---------------------- WIN PATTERNS ----------------------
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// ---------------------- DISABLE ALL BOXES ----------------------
const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

// ---------------------- SHOW WINNER ----------------------
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

// ---------------------- CHECK WINNER ----------------------
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                return;
            }
        }
    }
};

// ---------------------- CHECK DRAW ----------------------
const checkDraw = () => {
    for (let box of boxes) {
        if (box.innerText === "") {
            return false;   // still empty box → not a draw
        }
    }

    // no winner AND no empty box → draw
    msg.innerText = "It's a Draw!";
    msgContainer.classList.remove("hide");
    disableBoxes();
    return true;
};


// ---------------------- GAME CLICK LOGIC ----------------------
boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turnO) {
            box.innerText = "0";
        } else {
            box.innerText = "X";
        }

        box.disabled = true;
        turnO = !turnO;

        // first check if anyone won
        if (!checkWinner()) {
            checkDraw();   // only check draw if no winner
        }
    });
});
