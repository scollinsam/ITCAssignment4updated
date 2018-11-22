Pizza.generateDynamicToppings = function(){
    var paintColors = document.getElementById("colors");
    for (var i = 0; i < colorArray.length ; i++){
        var buttonItem =  document.createElement("li"); 
        var newButton = document.createElement("button"); 
        var buttonLabel = document.createTextNode(colorArray[i]);
        newButton.id = colorArray[i];
        buttonItem.appendChild(newButton);
        newButton.appendChild(buttonLabel);
        paintColors.appendChild(buttonItem);
        newButton.addEventListener("click",function(e){
            var selectedColor = this;
            Pizza.selectedTopping = clickedTopping.id;
            allToppingsButtons = document.getElementsByClassName("toppings-btn")
            for( var j = 0; j < allToppingsButtons.length; j++ ){
                allToppingsButtons[j].classList.remove("selected");
            }
            clickedTopping.classList.add("selected");
        });
    }
};


for (var i = 0 ; i < a.length ; a ++) {
    a.addEventListener("click", colorChange);
}   
function colorChange (e) {
paintbrushproperties.color = e.value;

var square = document.getElementById("sqaurebrush");
square.addEventListener("click")

var colorArray = ["black", "red", "blue", "green"]
canvas.selectedColor = undefined;

var md = false;
var d = document.createElement("div");
var selectedColor;

canvas.propertiess = {
    backgroundColor: white,
    border: "1px",
    borderColor: "blue",
    height: "75%",
    width: "60%",
    marginLeft: "3%",
    position: relative,
    display: inline-block,
    overflow: hidden
}
function changeCanvassize (e) {

}