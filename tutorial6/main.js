let field=new Backdrop("#backdrop");
let puck1=new Sprite("#puck");
field.addSprite(puck);

(async ()=>{
    puck.setDirection(100);
    while(true)
    {
      puck.move(10);
      puck.ifOnEdgeBounce();
      await Controls.wait(20);
    }
})();
