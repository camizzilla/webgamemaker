'use strict';

let canvasInit = canvasCreate("platform-canvas-init", 600, 400);
let canvasInit2 = canvasCreate("platform-canvas-init2", 600, 400);
let canvasInit3 = canvasCreate("platform-canvas-init3", 600, 400);
let canvasInit4 = canvasCreate("platform-canvas-init4", 600, 400);



let tilesBundle= new Image();
tilesBundle.src = 'https://image.ibb.co/hMB0E9/tiles_spritesheet.png';

let ItemsBundle= new Image();
ItemsBundle.src = 'https://image.ibb.co/gE8G6e/items_spritesheet.png';

let sMario= new Image();
sMario.src = 'https://image.ibb.co/hJBkCy/mario.png';

var loopGame = () => {
    canvasInit.ctx.drawImage(sMario, 0,0);
    canvasInit2.ctx.drawImage(sMario, 0,0, 100,100);
    canvasInit3.ctx.drawImage(ItemsBundle, 131, 72, 70, 70, 100, 300, 70, 70);
    canvasInit3.ctx.drawImage(ItemsBundle, 131, 72, 70, 70, 200, 150, 140, 140);

    canvasInit4.ctx.drawImage(ItemsBundle, 131, 72, 70, 70, 420, 200, 70, 70);
    canvasInit4.ctx.drawImage(ItemsBundle, 131, 72, 70, 70, 100, 100, 140, 140);

    canvasInit4.ctx.drawImage(tilesBundle, 432, 720, 70, 70, 270, 350, 35, 35);
    canvasInit4.ctx.drawImage(tilesBundle, 648, 648, 70, 70, 305, 350, 35, 35);
    canvasInit4.ctx.drawImage(tilesBundle, 792, 648, 70, 70, 340, 350, 35, 35);

    canvasInit4.ctx.drawImage(tilesBundle, 432, 720, 70, 70, 400, 250, 35, 35);
    canvasInit4.ctx.drawImage(tilesBundle, 648, 648, 70, 70, 435, 250, 35, 35);
    canvasInit4.ctx.drawImage(tilesBundle, 792, 648, 70, 70, 470, 250, 35, 35);

    canvasInit4.ctx.drawImage(tilesBundle, 432, 720, 70, 70, 100, 200, 35, 35);
    canvasInit4.ctx.drawImage(tilesBundle, 648, 648, 70, 70, 135, 200, 35, 35);
    canvasInit4.ctx.drawImage(tilesBundle, 648, 648, 70, 70, 170, 200, 35, 35);
    canvasInit4.ctx.drawImage(tilesBundle, 648, 648, 70, 70, 205, 200, 35, 35);
    canvasInit4.ctx.drawImage(tilesBundle, 792, 648, 70, 70, 240, 200, 35, 35);
}




var startGame = () => {
    (ItemsBundle && tilesBundle).onload = function() {
        loopGame();
    }
};

startGame();

