console.log("start");
async function run(){
  var sprite1 = Sprite.create({image:"images/squirrel.png",width:100,height:100});
  var backdrop = Backdrop.create({backgroundColor:"yellow",width:800,height:400});
  backdrop.addSprite(sprite1);
  sprite1.moveTo(100,100);
  console.log("moveTo 100");
  await Controls.wait(1000);
  console.log("moveTo 200");
  sprite1.moveTo(200,100);
  await Controls.wait(1000);
  console.log("moveTo 300");
  sprite1.moveTo(300,100);
  await Controls.wait(1000);
  console.log("moveTo 400");
  sprite1.moveTo(400,100);
  console.log("end");
}
run();
