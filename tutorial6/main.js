let backdrop=new Backdrop("#backdrop");
let puck=new Sprite("#puck");
backdrop.addSprite(puck);

(async ()=>{
    puck.setDirection(100);
    while(true)
    {
      puck.move(10);
      puck.ifOnEdgeBounce();
      await Controls.wait(1);
      //force hte loop to free up the CPU fir at least 1 tick.
    }
})();
