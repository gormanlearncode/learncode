function* whenLoaded()
{
    console.log("start");
    var sprite = Sprite.create({image:"images/squirrel.png",width:100,height:100});
    var backdrop = Backdrop.create({backgroundCOlor:"yellow",width:800,height:400});
    backdrop.addSprite(sprite);
    sprite.moveTo(100,100);
    let count=0;
    for(var i=0;i<10;i++)
    {
        sprite.move(10);
        sprite.turnClockWise(10);
        yield count;
        count++;
    }
}
console.log("whenLoaded");

window.onload = function() {
    var g=whenLoaded();
    animate(()=>{
        g.next();
    },3000);
}