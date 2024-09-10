let backdrop=new Backdrop("#backdrop");
let puck=new Sprite("#puck");
backdrop.addSprite(puck);

puck.setDirection(100);
function step()
{
    if(Math.random()>0.8)puck.turnClockwise(1);
    puck.move(20);
    puck.ifOnEdgeBounce();
    requestAnimationFrame(step);
}
requestAnimationFrame(step);
