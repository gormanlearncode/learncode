let backdrop=new Backdrop("#backdrop");
let puck=new Sprite("#puck");
backdrop.addSprite(puck);

(async ()=>{
    puck.setDirection(100);
    while(true)
    {
      if(Math.random()>0.8)puck.turnClockwise(1);
      puck.move(20);
      puck.ifOnEdgeBounce();
      await Controls.wait(50);
      //force the loop to free up the CPU for at least 1 tick.
    }
})();
