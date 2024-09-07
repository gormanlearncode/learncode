console.log("start");
var sprite = Sprite.create({image:"../tutorial3/images/squirrel.png",width:100,height:100});
var backdrop = Backdrop.create({backgroundColor:"yellow",width:800,height:400});
backdrop.addSprite(sprite);
sprite.moveTo(10,100);
async function run(){
     for(let i=0;i<20;i++)
     {
          let x=10+i*10;
          sprite.move(10);
          sprite.turnClockwise(10);
          await Controls.wait(1000);
     }
     for(let i=0;i<20;i++) 
     {
          let x=10+i*10;
          sprite.move(10);
          sprite.turnAnticlockwise(10);
          await Controls.wait(1000);
     }
     await sprite.glideTo(400,300,2000);
     await Controls.wait(1000);
     sprite.seyY(300);
     await Controls.wait(1000);
     sprite.seyX(300);
     
     console.log("end");
}
let button1=document.createElement("button");
button1.innerText="RUN";
button1.onclick=run;

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
document.body.append(button1);
document.body.append(button2);
