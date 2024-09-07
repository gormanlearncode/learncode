console.log("start");
var sprite = Sprite.create({image:"../tutorial3/images/squirrel.png",width:100,height:100});
var backdrop = Backdrop.create({image:"../images/24716919.jpg",backgroundColor:"yellow",width:1000,height:900});
backdrop.addSprite(sprite);
sprite.moveTo(10,100);

/**
  * run() This is the main function that is called when pressing the RUN button. It is 
  * an async function, meaning it wont wait for its content to finish, it will allow the
  * following code to continue in parrallel to the code in the run() loop.
  * you will see that some function start with 'await' this mean that the were also async
  * but that we want the run loop to wait for them to finish.
  */
async function run(){
     sprite.turnClockwise(10);
     for(let i=0;i<20;i++)
     {
          sprite.move(10);
          await Controls.wait(100);
     }
     sprite.turnAnticlockwise(10);
     for(let i=0;i<20;i++) 
     {
          sprite.move(10);
          await Controls.wait(100);
     }
     for(let i=0;i<20;i++) 
     {
          sprite.turnClockwise(10);
          sprite.move(10);
          await Controls.wait(100);
     }
     sprite.setDirection(90);
     await sprite.glideTo(800,500,2000);
     await sprite.glideTo(10,500,2000);
     await Controls.wait(1000);
     sprite.seyY(300);
     await Controls.wait(1000);
     sprite.seyX(300);

     let someText=document.createElement("div");
     someText.innerText="DONE!";
     someText.style.backgroundColor="white";
     someText.style.fontSize="40px";
     someText.style.position="relative";
     someText.style.left="400px";
     someText.style.top="300px";
     document.body.append(someText);
     console.log("end");
}
let button1=document.createElement("button");
button1.innerText="RUN";
button1.onclick=run;


/**
  * button2() This is the main function that is called when pressing the RUN button. It is 
  * an async function, meaning it wont wait for its content to finish, it will allow the
  * following code to continue in parrallel to the code in the run() loop.
  * you will see that some function start with 'await' this mean that the were also async
  * but that we want the run loop to wait for them to finish.
  */
let button2=document.createElement("button");
button2.innerText="ALERT";
button2.onclick=function(){
     if(backdrop.htmldiv.style.backgroundColor=="red")
     {
          backdrop.htmldiv.style.backgroundColor="yellow";
     }
     else
     {
          backdrop.htmldiv.style.backgroundColor="red";
     }
};

let button3=document.createElement("button");
button3.innerText="SPIN!";
button3.onclick=function(){
     let lastVal=0;
     animate((progress)=>{
          sprite.turnClockwise(progress*360-lastVal);
          lastVal=progress*360;
     },500);
};
document.body.append(button1);
document.body.append(button2);
document.body.append(button3);
