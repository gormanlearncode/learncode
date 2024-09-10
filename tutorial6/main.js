let backdrop=new Backdrop("#backdrop");
let puck=new Sprite("#puck");
backdrop.addSprite(puck);

(async ()=>{
    puck.setDirection(100);
    while(true)
    {
      puck.turnClockwise(5);
      puck.move(10);
      puck.ifOnEdgeBounce();
      await Controls.wait(1);
      //force the loop to free up the CPU for at least 1 tick.
    }
})();
