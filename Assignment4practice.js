var md = false;
var canvas = document.getElementById("canvas");
canvas.addEventListener('mousedown', down);
canvas.addEventListener('mouseup', toggledraw);
canvas.addEventListener('mousemove',
function(evt) {
    var mousePos = getMousePos(canvas, evt);
    var posx = mousePos.x;
    var posy = mousePos.y;
    draw(canvas, posx, posy);
    console.log("mouseMove");
});
function down() {
    md = true;
    console.log("true");
}
function toggledraw() {
    md = false;
    console.log("false");
}
function getMousePos (canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    console.log("mousePos")
    return {
        x:evt.clentX - rect.left,
        y:evt.clientY - rect.top
    };
}
function draw (canvas, posx, posy) {
    var context = canvas.getContext('2d');
    if (md) {
        context.fillRect(posx, posy, 4, 4);
        context.fillStyle = "black";
        console.log("draw");
    };
}