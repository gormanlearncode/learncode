console.log("start");
async{
  var sprite = Sprite.create({image:"images/squirrel.png",width:100,height:100});
  var backdrop = Backdrop.create({backgroundColor:"yellow",width:800,height:400});
  backdrop.addSprite(sprite);
  sprite.moveTo(100,100);
  await Controls.wait(1000);
  sprite.moveTo(200,100);
  console.log("end");
}
