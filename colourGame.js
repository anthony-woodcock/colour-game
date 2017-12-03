var colours = generateRandomColours(6)

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

function generateRandomColours(num){
    //make an array
    var arr = []
    //add num random colours to array
    for(var i = o; i < num; i++){
        //get random colour and push into arrx
    }
    //return that array
    return arr
}

function randomColour(){
    //pick a "red" from 0 - 255
    //pick a "green" from 0 - 255
    //pick a "blue" from 0 - 255
}