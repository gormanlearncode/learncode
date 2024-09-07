## Gorman Learn Code

### Helper Functions

Some simple functions that you can use in your code.

Fore example:

### Animating a change over time.
```javascript
function bounceball()
{
  animate(function(progress){
      circle.style.top = 320 + progress * 300 + 'px';
  },1000).then(function(){
      animate(function(progress){
        circle.style.top = 620 - progress * 300 + 'px';
      },1000).then(bounceball);
  });
}
```

### Connecting to a Div
```javascript
//attached to div with id="personDiv" and move it to position 1000px from the top and 1000px from the left.
const person=new Sprite("#personDiv");
person.moveTo(1000,1000);
```
### Pause, Sleep and wait commands.
```javascript
//wait 1sec print, them another second and print etc. The following code must ne insode the "then" block.
Controls.wait(1000).then(()=>{
  console.log("do something 1000ms later");
  Controls.wait(1000).then(()=>{
    console.log("do something 2000ms later");
    Controls.wait(1000).then(()=>{
      console.log("do something 3000ms later");
    });
  });
});
//or us await, inside an async loop/
await Controls.wait(1000);
```
### Repete a function 10 times
```
Controls.repeat(
  function(i,c){ console.log(`${i} of ${c}`); },
  10).then(
  function(){
    console.log("done");
});
```
### Backdrops and Sprite
```javascript
var sprite = Sprite.create({image:"../tutorial3/images/squirrel.png",width:100,height:100});
var backdrop = Backdrop.create({image:"../images/24716919.jpg",backgroundColor:"yellow",width:1000,height:900});
backdrop.addSprite(sprite);
sprite.moveTo(10,100);
```

