'use strict';

let canvasInit = canvasCreate("platform-canvas-init", 600, 400);


var intro = () => {
    canvasInit.ctx.fillStyle = "#ffad6a";
    canvasInit.ctx.fillRect(0, 0, canvasInit.canvas.width, canvasInit.canvas.height);
    canvasInit.ctx.font = "50px Impact";
    canvasInit.ctx.fillStyle = "#6a8aff";
    canvasInit.ctx.textAlign = "center";
    canvasInit.ctx.fillText("INTRODUZIONE", canvasInit.canvas.width / 2, canvasInit.canvas.height / 2);
    canvasInit.ctx.fillStyle = "#6a8aff";
    canvasInit.ctx.font = "20px Arial";
    canvasInit.ctx.fillText("Premi invio per iniziare a giocare",canvasInit.canvas.width / 2,canvasInit.canvas.height / 2 + 50);
}


var loopGame = () => {
    canvasInit.ctx.fillStyle = "#000";
    canvasInit.ctx.fillRect(0, 0, canvasInit.canvas.width, canvasInit.canvas.height);
}

var startGame = () => {
    intro();

};

startGame();