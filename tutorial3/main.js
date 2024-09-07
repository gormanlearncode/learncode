console.log("start");
var sprite = Sprite.create({image:"images/squirrel.png",width:100,height:100});
var backdrop = Backdrop.create({backgroundColor:"yellow",width:800,height:400});
backdrop.addSprite(sprite);
async function run(){
     for(let i=0;i<10;i++)
     {
          let x=100+i*10;
          sprite.moveTo(x,100);
          await Controls.wait(100);
     }
     console.log("end");
}
let button1=document.createElement("button");
document.setInnerText="RUN";
document.body.append(button1);
button1.onclick=run;
