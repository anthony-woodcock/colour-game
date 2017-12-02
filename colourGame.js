var colours = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)", 
]

var squares = document.querySelectorAll(".square")
var pickedColour = pickColour()
var colourDisplay = document.getElementById("colourDisplay")
var messagesDisplay = document.querySelector("#message")

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
            changeColours(clickedColour)
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