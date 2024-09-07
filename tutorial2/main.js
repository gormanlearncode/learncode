function* whenLoaded()
{
    console.log("start");
    var sprite = Sprite.create({image:"images/squirrel.png",width:100,height:100});
    var backdrop = Backdrop.create({backgroundCOlor:"yellow",width:800,height:400});
    backdrop.addSprite(sprite);
    sprite.moveTo(100,100);
    let count=0;
    while(true)
    {
        sprite.move(100);
        yield count;
        count++;
    }
}
console.log("whenLoaded");
whenLoaded();

const gen = whenLoaded();

console.log(gen.next().value);
// Expected output: 10

console.log(gen.next().value);
// Expected output: 20