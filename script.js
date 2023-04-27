var main=document.querySelector("#main");
var image=document.querySelector("#page>img");

main.addEventListener("mousemove",function(details){
    image.style.top=1-details.clientY*0.05+"px";
    image.style.left=1-details.clientX*0.05+"px";

})
  