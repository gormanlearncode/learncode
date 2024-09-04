function runloop(){
  var newPosition=20+count*20;
  console.log("DEBUG: I am moving the square to "+newPosition+"px");
  square.style.left=""+newPosition+"px";
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
