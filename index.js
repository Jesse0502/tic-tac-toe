let app = document.querySelector("#app")
let mainHeading = document.querySelector(".heading-main")
let startBtn = document.querySelector(".start-btn")
let body = document.querySelector("body")


startBtn.addEventListener("click", addGame)

function addGame(){ 
    app.remove()
    makeGame();
}

function makeGame(){  
    let X_PLAYER = "X"
    let O_PLAYER = "O"
    let currentPlayer = X_PLAYER
    const playground = document.createElement("div")
    const boxes = [
        document.createElement("button"),
        document.createElement("button"),
        document.createElement("button"),
        document.createElement("button"),
        document.createElement("button"),
        document.createElement("button"),
        document.createElement("button"),
        document.createElement("button"),
        document.createElement("button")
    ]  
    let reset = document.createElement("button")

    body.appendChild(playground)
     
    playground.appendChild(reset) 
    playground.classList.add("playground")
    reset.textContent = "Reset"
    reset.classList.add("resetButton")
  
    reset.addEventListener("click", () => { 
          location.reload(); 
    })

        for(let i = 0; i <= boxes.length; i++){ 
            playground.appendChild(boxes[i]) 
            boxes[i].classList.add("boxes")
            boxes[i].addEventListener("click", () => {
                boxes[i].textContent = currentPlayer
                if(currentPlayer === X_PLAYER){
                    currentPlayer = O_PLAYER
                } else currentPlayer = X_PLAYER
            }, {once: true}
        )        
    }
} 
