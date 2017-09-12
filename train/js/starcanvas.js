var window_width = 1500;
var window_height = 600;
var canvas, context;
var num = 500;
var stars = [];

window.onload = function () {
    canvas = document.getElementById('canvas');
    canvas.width = window_width;
    canvas.height = window_height;
    context = canvas.getContext('2d');
    addStar();
    setInterval(render, 33);
};
function render() {
    context.fillStyle = 'rgba(17,15,36,0.1)';
    context.fillRect(0, 0, window_width, window_height);
    for (var i = 0; i < num; i++) {
        var star = stars[i];
        star.alpha += star.ra;
        //判斷透明度
        if (star.alpha <= 0) {
            star.alpha = 0;
            star.ra = -star.ra;
            star.vx = Math.random() * 0.2 - 0.1;
            star.vy = Math.random() * 0.2 - 0.1;
        } else if (star.alpha > 1) {
            star.alpha = 1;
            star.ra = -star.ra
        }
        //畫圓
        context.beginPath();
        var bg = context.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.r);
        bg.addColorStop(0, 'rgba(255,255,255,' + star.alpha + ')');
        bg.addColorStop(1, 'rgba(255,255,255,0)');
        context.fillStyle = bg;
        context.arc(star.x, star.y, star.r, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
    }
}
//星星
function addStar() {
    for (var i = 0; i < num; i++) {
        var aStar = {
            x: Math.round(Math.random() * window_width),
            y: Math.round(Math.random() * window_height),
            r: Math.random() * 3, //半徑
            ra: Math.random() * 0.05,
            alpha: Math.random(),//透名度
        };
        stars.push(aStar);
    }
}