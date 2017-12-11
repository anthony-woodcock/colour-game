var numSquares = 6
var colours = generateRandomColours(numSquares)
var squares = document.querySelectorAll(".square")
var pickedColour = pickColour()
var colourDisplay = document.getElementById("colourDisplay")
var messagesDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset")
var modeButtons = document.querySelectorAll(".mode")

init()

function init() {
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected")
            modeButtons[1].classList.remove("selected")
            this.classList.add("selected")
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6
            //figure out how many squres to show
            //pick new colours
            //pick a new pickedColor
            //update page to reflect changes
            reset()
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

colourDisplay.textContent = pickedColour

for(var i = 0; i < squares.length; i++) {
    //add initial colours to squares
    squares[i].style.backgroundColor = colours[i]

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab colour of clicked square
        var clickedColour = this.style.backgroundColor
        //compare colour to pickedColour
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
