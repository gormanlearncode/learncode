let field=new Backdrop("#field");
let puck=new Sprite("#puck");

(async ()=>{
    puck.setDirection(91);
    while(true)
    {
      puck.move(10);
      puck.ifOnEdgeBounce();
    }
})()
