'use strict';

let canvasCreate = (id, w, h) => {
    let canvas    = document.getElementById(id);
    canvas.width  = w | 600;
    canvas.height = h | 300;
    let ctx = canvas.getContext('2d');
    return {
        canvas: canvas,
        ctx   : ctx
    };
};
