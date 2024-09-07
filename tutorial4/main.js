console.log("start");
var sprite = Sprite.create({image:"../tutorial3/images/squirrel.png",width:100,height:100});
var backdrop = Backdrop.create({backgroundColor:"yellow",width:800,height:400});
backdrop.addSprite(sprite);
sprite.moveTo(10,100);
async function run(){
     for(let i=0;i<20;i++)
     {
          let x=10+i*10;
          sprite.move(100);
          sprite.turnClockwise(10);
          await Controls.wait(100);
     }
     for(let i=0;i<20;i++)
     {
          let x=10+i*10;
          sprite.move(100);
          sprite.turnAnticlockwise(10);
          await Controls.wait(100);
     }
     await sprite.glideTo(20,20,2000);
     await Controls.wait(1000);
     sprite.seyY(300);
     await Controls.wait(1000);
     sprite.seyX(300);
     
     console.log("end");
}
let button1=document.createElement("button");
button1.innerText="RUN";
button1.onclick=run;
document.body.append(button1);ton1.onclick=run;
