<h1>Hockey Puck</h1>
[demo here](https://gormanlearncode.github.io/learncode/tutorial5/)
```javascript
let field=new Backdrop("#field");
let puck1=new Sprite("#puck1");
let puck1=new Sprite("#puck2");
let puck1=new Sprite("#puck3");
field.addSprite(puck1);
field.addSprite(puck2);
field.addSprite(puck3);

(async ()=>{
    puck1.setDirection(101);
    while(true)
    {
      puck1.move(10);
      puck1.ifOnEdgeBounce();
      await Controls.wait(1);
    }
})()

(async ()=>{
    puck2.setDirection(104);
    while(true)
    {
      puck2.move(10);
      puck2.ifOnEdgeBounce();
      await Controls.wait(1);
    }
})()

(async ()=>{
    puck3.setDirection(107);
    while(true)
    {
      puck3.move(10);
      puck3.ifOnEdgeBounce();
      await Controls.wait(1);
    }
})()
```
