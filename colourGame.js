var colours = generateRandomColours(6)
var squares = document.querySelectorAll(".square")
var pickedColour = pickColour()
var colourDisplay = document.getElementById("colourDisplay")
var messagesDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1")

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
