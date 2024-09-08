let field=new Backdrop("#field");
let puck=new Sprite("#puck");

(async ()=>{
    puck.setDirection(101);
    while(true)
    {
      puck.move(10);
      puck.ifOnEdgeBounce();
      await Controls.wait(100);
    }
})()
