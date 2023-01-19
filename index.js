const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d"); //2d context
//let can be changed, const cannot
let x = 100;
let y = 100;
let radius = 50;
let speed = 5;

let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;

//game loop should run 60 times a second to match htz - WIP
//draw game to match refresh rate
//can use requestAnimationFrame(function)
//can also use setInterval(drawGame, 1000) with 1000 being milliseconds
function drawGame(){
    requestAnimationFrame(drawGame);
    clearScreen();
    inputs();
    boundaryCheck();
    drawGreenBlob();
}

function boundaryCheck() {
    if(y > canvas.height - radius) { //down
        y = canvas.height - radius;
    }
    if(y < radius) { // up position
        y = radius;
    }
    if(x < radius) { //left
        x = radius;
    }
    if(x > canvas.width - radius) { //right
        x = canvas.width - radius;
    }
}

function inputs() {
    if(upPressed) {
        y = y - speed;
    }
    if(downPressed) {
        y = y + speed;
    }
    if(leftPressed) {
        x = x - speed;
    }
    if(rightPressed) {
        x = x + speed;
    }
}

function drawGreenBlob(){
    ctx.fillStyle = "green"; //color of blob
    ctx.beginPath(); //build circle
    ctx.arc(x, y, radius,0, Math.PI *2); //dynamic position of blob
    //starting angle 0 and ending angle 2pi
    //x and y start in top left, y increases downwards
    ctx.fill(); //fills outline with green
}
function clearScreen(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, canvas.width, canvas.height);
}

//initial call of draw game, then inside the function, 
//request frame will initiate loop
drawGame();

document.body.addEventListener('keydown', keyDown);
document.body.addEventListener('keyup', keyUp);

function keyDown(event) {
    //each key has a key code, down arrow is 40, just google it
    //this says if the key pressed has ID 40, the down arrow is pressed
    if(event.keyCode == 40) {
        downPressed = true;
    }
    if(event.keyCode == 38) {
        upPressed = true;
    }
    if(event.keyCode == 37) {
        leftPressed = true;
    }
    if(event.keyCode == 39) {
        rightPressed = true;
    }
}

function keyUp(event) {
    if(event.keyCode == 40) {
        downPressed = false;
    }
    if(event.keyCode == 38) {
        upPressed = false;
    }
    if(event.keyCode == 37) {
        leftPressed = false;
    }
    if(event.keyCode == 39) {
        rightPressed = false;
    }
}