'use strict';

let canvasGrid = canvasCreate("platform-canvas", 600, 400);
let pointX = 300;
let pointY = 200;
let inputX = document.getElementById("pointXId");
let inputY = document.getElementById("pointYId");
let pointBtn = document.getElementById("pointBtn");

pointBtn.addEventListener("click", (e) => {
    pointX = inputX.value;
    pointY = inputY.value;
  }, false);

function drawBoard() {
    for (var x = 0; x <= canvasGrid.canvas.width; x += 10) {
        canvasGrid.ctx.moveTo(x, 0);
        canvasGrid.ctx.lineTo(x, canvasGrid.canvas.height);
    }

    for (var x = 0; x <= canvasGrid.canvas.height; x += 10) {
        canvasGrid.ctx.moveTo(0, x);
        canvasGrid.ctx.lineTo(canvasGrid.canvas.width, x);
    }

    canvasGrid.ctx.strokeStyle = "black";
    canvasGrid.ctx.stroke();
}

function draw(x, y) {
    if(x > canvasGrid.canvas.width){
        x = canvasGrid.canvas.width;
    }
    if(y > canvasGrid.canvas.height){
        y = canvasGrid.canvas.height;
    }
    canvasGrid.ctx.beginPath();
    canvasGrid.ctx.arc(x,  y, 10, 0, Math.PI*2);
    canvasGrid.ctx.fillStyle = "#0095DD";
    canvasGrid.ctx.fill();
    canvasGrid.ctx.closePath();
}

let loop = () => {
    canvasGrid.ctx.clearRect(0, 0, canvasGrid.canvas.width, canvasGrid.canvas.height);
    drawBoard();
    draw(pointX, pointY);
}

setInterval(loop, 10);
