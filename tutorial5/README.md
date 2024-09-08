# Hockey Puck

[demo here](https://gormanlearncode.github.io/learncode/tutorial5/)

**(async ()=>{ some-code(); })()** is a way of wrapping code in an asynchronous call. This means it wont wait for the code inside to finish befor moving onto the following code. This can be handy if you want to call async function with the prefix **await**. You cannot call an async function with await, unless you are calling it from inside an async function. In this case I want to call **await Controls.wait(1);** and wait for it to return before continuing the loop.


```javascript
let field=new Backdrop("#field");
let puck1=new Sprite("#puck1");
let puck2=new Sprite("#puck2");
let puck3=new Sprite("#puck3");
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
