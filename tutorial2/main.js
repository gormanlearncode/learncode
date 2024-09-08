console.log("start");
async function run(){
     var sprite = Sprite.create({image:"images/squirrel.png",width:100,height:100});
     var backdrop = Backdrop.create({backgroundColor:"yellow",width:800,height:400});
     backdrop.addSprite(sprite);
     for(let i=0;i<50;i++)
     {
          let x=10+i*10;
          sprite.moveTo(x,100);
          await Controls.wait(20);
     }
     console.log("end");
}
run();
