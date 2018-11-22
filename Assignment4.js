var canvas = document.getElementById('canvas');

canvas.properties = {
    backgroundColor: "white",
    border: "1px",
    borderColor: "blue",
    height: "75%",
    width: "60%",
    marginLeft: "3%",
    position: "relative",
    display: "inline-block",
    overflow: "hidden"
}

var go = document.getElementById("sizeChange");
go.addEventListener("click", changeCanvassize);

function changeCanvassize (e) {
    var newHeight = document.getElementById("newHeight").value;
    var newWidth = document.getElementById("newWidth").value;
    var newHeightparsed = parseInt(newHeight);
    var newWidthparsed = parseInt(newWidth);
    canvas.style.height = newHeightparsed + "px";
    canvas.style.width = newWidthparsed + "px";
}

var md  = "square";
var paintbrushproperties={
    color: "black",
    height:"5px",
    width: "5px",
    borderRadius: "0px"
}

var colorpicker = document.getElementById("color-picker");
colorpicker.addEventListener("change", ColorWheel);
var blackpaint = document.getElementById("black");
blackpaint.addEventListener("click", changeBlack);
var redpaint = document.getElementById("red");
redpaint.addEventListener("click", changeRed);
var greenpaint = document.getElementById("green");
greenpaint.addEventListener("click", ChangeGreen);
var bluepaint = document.getElementById("blue");
bluepaint.addEventListener("click", ChangeBlue);
var purplepaint = document.getElementById("purple");
purplepaint.addEventListener("click", ChangePurple);
var eraser = document.getElementById("eraser");
eraser.addEventListener("click", Erase);

function ColorWheel (e) {
    paintbrushproperties.color =  colorpicker.value;
}
function changeBlack (e) {
    paintbrushproperties.color = "black";
}
function changeRed (e) {
    paintbrushproperties.color = "red";
}
function ChangeGreen (e) {
    paintbrushproperties.color = "green";
}
function ChangeBlue (e) {
    paintbrushproperties.color = "blue";
}
function ChangePurple (e) {
    paintbrushproperties.color = "purple";
}
function Erase (e) {
    paintbrushproperties.color = "white";
}

var rect = document.getElementById("rectbrush");
rect.addEventListener("click", function checkRecttrue (){
    md = "rect";
});
var round = document.getElementById("roundbrush");
round.addEventListener("click", function checkRoundtrue (){
    md = "round";
});
var square = document.getElementById("squarebrush");
square.addEventListener("click", function checkSquaretrue (){
    md = "square";
});
eraser.addEventListener("click", function checkerasertrue (){
    md = "erase";
});

function changeBrushStyle () {
    if (md == "rect") {
        paintbrushproperties.height = "10px";
        paintbrushproperties.width = "2px";
    } else if (md == "round") {
        paintbrushproperties.borderRadius = "100px";
        paintbrushproperties.height = "5px";
        paintbrushproperties.width = "5px";
    } else if (md == "square") {
        paintbrushproperties.borderRadius = "0px";
        paintbrushproperties.height = "5px";
        paintbrushproperties.width = "5px";
    } else if (md == "erase") {
        paintbrushproperties.height = "25px";
        paintbrushproperties.width = "25px";
    }
}

canvas.addEventListener("mousedown", mouseDown);
canvas.addEventListener("mouseup", mouseUp);

function mouseDown (event) { 
    canvas.addEventListener("mousemove", mouseMove); 
}
function mouseUp () {
    canvas.removeEventListener("mousemove", mouseMove);
}


function mouseMove (event){
    var d = document.createElement("div");
    var frame = canvas.getBoundingClientRect();
    x = frame.left;
    y = frame.top;
    d.style.backgroundColor = paintbrushproperties.color;
    changeBrushStyle();
    d.style.height = paintbrushproperties.height;
    d.style.width = paintbrushproperties.width;
    d.style.borderRadius = paintbrushproperties.borderRadius;
    d.style.position = "absolute";
    d.style.left = event.clientX - x + "px";
    d.style.top = event.clientY - y + "px"; 
    canvas.appendChild(d);
}
