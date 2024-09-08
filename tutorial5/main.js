let field=new Backdrop("#field");
let puck1=new Sprite("#puck1");
let puck2=new Sprite("#puck2");
let puck3=new Sprite("#puck3");
let puck4=new Sprite("#puck4");
let puck5=new Sprite("#puck5");
let puck6=new Sprite("#puck6");
let puck7=new Sprite("#puck7");
field.addSprite(puck1);
field.addSprite(puck2);
field.addSprite(puck3);
field.addSprite(puck4);
field.addSprite(puck5);
field.addSprite(puck6);
field.addSprite(puck7);

(async ()=>{
    puck1.setDirection(100);
    while(true)
    {
      puck1.move(10);
      puck1.ifOnEdgeBounce();
      await Controls.wait(2);
    }
})();

(async ()=>{
    puck2.setDirection(105);
    while(true)
    {
      puck2.move(10);
      puck2.ifOnEdgeBounce();
      await Controls.wait(2);
    }
})();

(async ()=>{
    puck3.setDirection(110);
    while(true)
    {
      puck3.move(10);
      puck3.ifOnEdgeBounce();
      await Controls.wait(2);
    }
})();
(async ()=>{
    puck4.setDirection(110);
    while(true)
    {
      puck4.move(10);
      puck4.ifOnEdgeBounce();
      await Controls.wait(2);
    }
})();
(async ()=>{
    puck5.setDirection(115);
    while(true)
    {
      puck5.move(10);
      puck5.ifOnEdgeBounce();
      await Controls.wait(2);
    }
})();
(async ()=>{
    puck6.setDirection(120);
    while(true)
    {
      puck6.move(10);
      puck6.ifOnEdgeBounce();
      await Controls.wait(2);
    }
})();
(async ()=>{
    puck7.setDirection(130);
    while(true)
    {
      puck7.move(10);
      puck7.ifOnEdgeBounce();
      await Controls.wait(2);
    }
})();

