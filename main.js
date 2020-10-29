canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var last_pos_of_x,last_pos_of_y;
color="turquoise";
width_of_line=3;
var width=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;
if(width<992) {
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e) {
console.log("my_touchstart");
    last_pos_of_x= e.touches[0].clientX-canvas.offsetLeft;
    last_pos_of_y= e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e) {
    current_pos_of_touch_x= e.touches[0].clientX-canvas.offsetLeft;
    current_pos_of_touch_y= e.touches[0].clientY-canvas.offsetTop;

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
console.log("last_position_of_X_and_Y coordinate =");
console.log("x = "+last_pos_of_x+" y = "+last_pos_of_y);
ctx.moveTo(last_pos_of_x,last_pos_of_y);
console.log("current position of X_and_Y coordinate =");
console.log("x = "+current_pos_of_touch_x+" y = "+current_pos_of_touch_y);
ctx.lineTo(current_pos_of_touch_x,current_pos_of_touch_y);
ctx.stroke();

last_pos_of_x=current_pos_of_touch_x;
last_pos_of_y=current_pos_of_touch_y;
}