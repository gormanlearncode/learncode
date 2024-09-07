async function whenLoaded()
{
    console.log("start");
    var sprite = Sprite.create({image:"images/squirrel.png",width:100,height:100});
    var backdrop = Backdrop.create({backgroundColor:"yellow",width:800,height:400});
    backdrop.addSprite(sprite);
    sprite.moveTo(100,100);
    sprite.move(100); 
    console.log("x");
    sprite.turnClockWise(10);
    sprite.move(100);
    console.log("x");
    sprite.turnClockWise(10);
    sprite.move(100);
    console.log("x");    
    sprite.turnClockWise(10);
    sprite.move(100);
    console.log("x");
    sprite.turnClockWise(10);
    sprite.move(100);
    console.log("x");
    sprite.turnClockWise(10);
    sprite.move(100);
    console.log("x");
    sprite.turnClockWise(10);
    sprite.move(100);
    console.log("x");
    sprite.turnClockWise(10);
    sprite.move(100);
    console.log("x");
    sprite.turnClockWise(10);
    sprite.move(100);
    console.log("x");
    sprite.turnClockWise(10);
    sprite.move(100);
    console.log("x");
    sprite.turnClockWise(10);
    sprite.move(100);
    console.log("x");
    sprite.turnClockWise(10);
    sprite.move(100);
    console.log("x");
    sprite.turnClockWise(10);
    sprite.move(100);
    console.log("x");
    sprite.turnClockWise(10);
    sprite.move(100);
    console.log("x");

}
console.log("whenLoaded");

window.onload = function() {
    whenLoaded();
}