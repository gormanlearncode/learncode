//these give us access to the objects in the html
const mainarea = document.querySelector("#mainarea");
const circle = document.querySelector("#circle");
const square = document.querySelector("#square");
const sometext1 = document.querySelector("#sometext1");
var count=0;

//the main function
function runloop(){
  square.style.left=""+(20+count*20)+"px";
  count=count+1;
  if(count>10){
    count=0;
    //show the text after ten seconds
    sometext1.style.display="block";
    setTimeout(function(){
      //hide the text again after three seconds
      sometext1.style.display="none";
    },3000)
  }
}
//run the loop every second, this will count to 10 and start again by setting count equal to zero.
setInterval(runloop,1000)
