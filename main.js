var cn=document.getElementById("myCanvas");
var ctx=cn.getContext("2d");
var me=" ";
cn.addEventListener("mousedown",mmd);
function mmd(e)
{
    me="md";
}
cn.addEventListener("mouseup",mmu);
function mmu(e)
{
    me="mu";
}
cn.addEventListener("mouseleave",mml);
function mml(e)
{
    me="ml";
}
cn.addEventListener("mousemove",mmo);
function mmo(e)
{
    var current_mouse_x=e.clientX-cn.offsetLeft;
    var current_mouse_y=e.clientY-cn.offsetLeft;
    if(me=="md")
    {
        ctx.beginPath();
        ctx.strokeStyle="red";
        ctx.lineWidth=3;
        ctx.moveTo(last_mouse_x,last_mouse_y);
        ctx.lineTo(current_mouse_x,current_mouse_y);
        ctx.stroke();
    }
    var last_mouse_x=current_mouse_x;
    var last_mouse_y=current_mouse_y;
}