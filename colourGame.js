var numSquares = 6
var colours = []
var pickedColour 
var squares = document.querySelectorAll(".square")
var colourDisplay = document.getElementById("colourDisplay")
var messagesDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset")
var modeButtons = document.querySelectorAll(".mode")

init()

function init() {
    setUpModeButtons()
    setUpSquares()
    reset()
}

function setUpModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected")
            modeButtons[1].classList.remove("selected")
            this.classList.add("selected")
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6

            reset()
        })
    }
}

function setUpSquares(){
    for(var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function(){
            var clickedColour = this.style.backgroundColor
            if(clickedColour === pickedColour){
                messagesDisplay.textContent = "Correct!"
                resetButton.textContent = "Play Again?"
                changeColours(clickedColour)
                h1.style.backgroundColor = clickedColour
            } else {
                this.style.background = "#232323"
                messagesDisplay.textContent = "Try Again"
            }
        })
    }
}

function reset(){
    colours = generateRandomColours(numSquares)
    //pick a new random colour from array
    pickedColour = pickColour()
    //change colour display to match picked colour
    colourDisplay.textContent = pickedColour
    resetButton.textContent = "New Colours"

    messagesDisplay.textContent = ""
    //change colours of squares
    for(var i = 0; i < squares.length; i++){
        if(colours[i]){
            squares[i].style.display = "block"
            squares[i].style.background = colours[i]
        } else {
            squares[i].style.display = "none"
        }
        squares[i].style.backgroundColor = colours[i]
    }
    h1.style.background = "steelblue"
}


resetButton.addEventListener('click',function(){
    reset()
})

function changeColours(colour){
    //loop through all sqaures
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colour
    }
    //change each colour to match given colour
}

function pickColour(){
    var random = Math.floor(Math.random() * colours.length)
    return colours[random]
}

function generateRandomColours(num){
    //make an array
    var arr = []
    //add num random colours to array
    for(var i = 0; i < num; i++){
        //get random colour and push into arr
        arr.push(randomColour())
    }
    //return that array
    return arr
}

function randomColour(){
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256)
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256)
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")"
}
