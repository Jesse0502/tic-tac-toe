let app = document.querySelector("#app")
let mainHeading = document.querySelector(".heading-main")
let startBtn = document.querySelector(".start-btn")
let body = document.querySelector("body")


startBtn.addEventListener("click", addGame)

function addGame() {
    app.remove()
    makeGame();
}

let X_PLAYER = "X"
let O_PLAYER = "O"
let currentPlayer = X_PLAYER

function makeGame() {
    const playground = document.createElement("div")
    const boxes = Array.from({ length: 9 }, () => document.createElement("button"))
    const winningMessage = document.createElement("div")
    let reset = document.createElement("button")

    body.appendChild(playground)
    body.appendChild(winningMessage)
    playground.appendChild(reset)
    playground.classList.add("playground")
    reset.textContent = "Reset"
    reset.classList.add("resetButton")


    reset.addEventListener("click", () => {
        location.reload();
    })

    boxes[0].id = "box1"
    boxes[1].id = "box2"
    boxes[2].id = "box3"
    boxes[3].id = "box4"
    boxes[4].id = "box5"
    boxes[5].id = "box6"
    boxes[6].id = "box7"
    boxes[7].id = "box8"
    boxes[8].id = "box9"

    let movesByO = []

    let movesByX = []

    function winningFun() {
        winningMessage.classList.add("winningMessage")
        setTimeout(function() { location.reload() }, 2500);
    }

    function checkWinningMoves() {
        if (movesByX.includes("box1") && movesByX.includes("box2") && movesByX.includes("box3")) {
            winningMessage.textContent = "X wins on top!!!"
            boxes[0].style.backgroundColor = "lightgreen"
            boxes[1].style.backgroundColor = "lightgreen"
            boxes[2].style.backgroundColor = "lightgreen"
            winningFun()
            return;
        }
        if (movesByX.includes("box1") && movesByX.includes("box4") && movesByX.includes("box7")) {
            winningMessage.textContent = "X wins on left!!!"
            boxes[0].style.backgroundColor = "lightgreen"
            boxes[3].style.backgroundColor = "lightgreen"
            boxes[6].style.backgroundColor = "lightgreen"
            winningFun()
            return;
        }
        if (movesByX.includes("box2") && movesByX.includes("box5") && movesByX.includes("box8")) {
            winningMessage.textContent = "X wins on mid!!!"
            winningFun()
            boxes[1].style.backgroundColor = "lightgreen"
            boxes[4].style.backgroundColor = "lightgreen"
            boxes[7].style.backgroundColor = "lightgreen"
            return;
        }
        if (movesByX.includes("box3") && movesByX.includes("box6") && movesByX.includes("box9")) {
            winningMessage.textContent = "X wins on right!!!"
            winningFun()
            boxes[2].style.backgroundColor = "lightgreen"
            boxes[5].style.backgroundColor = "lightgreen"
            boxes[8].style.backgroundColor = "lightgreen"
            return;
        }
        if (movesByX.includes("box4") && movesByX.includes("box5") && movesByX.includes("box6")) {
            winningMessage.textContent = "X wins on middle!!!"
            winningFun()
            boxes[3].style.backgroundColor = "lightgreen"
            boxes[4].style.backgroundColor = "lightgreen"
            boxes[5].style.backgroundColor = "lightgreen"
            return;
        }
        if (movesByX.includes("box7") && movesByX.includes("box8") && movesByX.includes("box9")) {
            winningMessage.textContent = "X wins on bottom!!!"
            winningFun()
            boxes[6].style.backgroundColor = "lightgreen"
            boxes[7].style.backgroundColor = "lightgreen"
            boxes[8].style.backgroundColor = "lightgreen"
            return;
        }
        if (movesByX.includes("box1") && movesByX.includes("box5") && movesByX.includes("box9")) {
            winningMessage.textContent = "X wins on diagonal!!!"
            winningFun()
            boxes[0].style.backgroundColor = "lightgreen"
            boxes[4].style.backgroundColor = "lightgreen"
            boxes[8].style.backgroundColor = "lightgreen"
            return;
        }
        if (movesByX.includes("box3") && movesByX.includes("box5") && movesByX.includes("box7")) {
            winningMessage.textContent = "X wins on diagonal!!!"
            winningFun()
            boxes[2].style.backgroundColor = "lightgreen"
            boxes[4].style.backgroundColor = "lightgreen"
            boxes[6].style.backgroundColor = "lightgreen"
            return;
        }


        if (movesByO.includes("box1") && movesByO.includes("box2") && movesByO.includes("box3")) {
            winningMessage.textContent = "O wins on top!!!"
            winningFun()
            boxes[0].style.backgroundColor = "lightgreen"
            boxes[1].style.backgroundColor = "lightgreen"
            boxes[2].style.backgroundColor = "lightgreen"
            return;
        }
        if (movesByO.includes("box1") && movesByO.includes("box4") && movesByO.includes("box7")) {
            winningMessage.textContent = "O wins on left!!!"
            winningFun()
            boxes[0].style.backgroundColor = "lightgreen"
            boxes[3].style.backgroundColor = "lightgreen"
            boxes[6].style.backgroundColor = "lightgreen"
            return;
        }
        if (movesByO.includes("box2") && movesByO.includes("box5") && movesByO.includes("box8")) {
            winningMessage.textContent = "O wins on middle!!!"
            winningFun()
            boxes[1].style.backgroundColor = "lightgreen"
            boxes[4].style.backgroundColor = "lightgreen"
            boxes[7].style.backgroundColor = "lightgreen"
            return;
        }
        if (movesByO.includes("box3") && movesByO.includes("box6") && movesByO.includes("box9")) {
            winningMessage.textContent = "O wins on right!!!"
            winningFun()
            boxes[2].style.backgroundColor = "lightgreen"
            boxes[5].style.backgroundColor = "lightgreen"
            boxes[8].style.backgroundColor = "lightgreen"
            return;
        }
        if (movesByO.includes("box4") && movesByO.includes("box5") && movesByO.includes("box6")) {
            winningMessage.textContent = "O wins on middle!!!"
            winningFun()
            boxes[3].style.backgroundColor = "lightgreen"
            boxes[4].style.backgroundColor = "lightgreen"
            boxes[5].style.backgroundColor = "lightgreen"
            return;
        }
        if (movesByO.includes("box7") && movesByO.includes("box8") && movesByO.includes("box9")) {
            winningMessage.textContent = "O wins on bottom!!!"
            winningFun()
            boxes[6].style.backgroundColor = "lightgreen"
            boxes[7].style.backgroundColor = "lightgreen"
            boxes[8].style.backgroundColor = "lightgreen"
            return;
        }
        if (movesByO.includes("box1") && movesByO.includes("box5") && movesByO.includes("box9")) {
            winningMessage.textContent = "O wins on diagonal!!!"
            winningFun()
            boxes[0].style.backgroundColor = "lightgreen"
            boxes[4].style.backgroundColor = "lightgreen"
            boxes[8].style.backgroundColor = "lightgreen"
            return;
        }
        if (movesByO.includes("box3") && movesByO.includes("box5") && movesByO.includes("box7")) {
            winningMessage.textContent = "O wins on diagonal!!!"
            winningFun()
            boxes[2].style.backgroundColor = "lightgreen"
            boxes[4].style.backgroundColor = "lightgreen"
            boxes[6].style.backgroundColor = "lightgreen"
            return;
        }

        if (movesByX.length === 5) {
            winningMessage.textContent = "It's a tie"
            winningFun()

        }

    }


    for (let i = 0; i < boxes.length; i++) {
        playground.appendChild(boxes[i])
        boxes[i].classList.add("boxes")
        boxes[i].addEventListener("click", () => {
                boxes[i].textContent = currentPlayer

                if (currentPlayer == X_PLAYER) {
                    movesByX.push(
                        boxes[i].id
                    )
                }

                if (currentPlayer == O_PLAYER) {
                    movesByO.push(
                        boxes[i].id
                    )
                }

                if (currentPlayer === X_PLAYER) {
                    currentPlayer = O_PLAYER

                } else currentPlayer = X_PLAYER
                checkWinningMoves();

            }, { once: true }


        )
    }


}
