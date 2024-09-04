//these give us access to the objects in the html
const mainarea = document.querySelector("#mainarea");
const circle = document.querySelector("#circle");
const square = document.querySelector("#square");
const sometext1 = document.querySelector("#sometext1");
var count=0;

//the main function
function runloop(){
  var newPosition=20+count*10;
  console.log("DEBUG: I am moving the square to "+newPosition+"px");
  square.style.left=""+newPosition+"px";
  count=count+1;
  if(count>40){
    count=0;
    //show the text after ten seconds
    sometext1.style.display="block";
    setTimeout(function(){
      //hide the text again after three seconds
      sometext1.style.display="none";
    },3000);
  }
}
//run the loop every 250ms, this will count to 20 and start again by setting count equal to zero.
setInterval(runloop,250);

animate({duration:1000,draw(progress) {
    circle.style.top = progress * 200 + 'px';
}});
