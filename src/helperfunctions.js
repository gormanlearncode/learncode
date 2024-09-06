/**
 * Animates an object over a named period of time.
 * 
 * bounceball(){ 
 *     animate(function(progress){
 *       circle.style.top = 20 + progress * 300 + 'px';  
 *     },1000).then(bounceball);
 * } 
 * 
 * @param   {function} draw  A function that is called to animate your object, it contains a float, between 0-1, 
 *                     used in your code to set how far your animation should move as a ration of the total move
 *                     you want to make.
 * @param   {number} duration  How long should the animation last.
 * @param   {function} timing  an [optional] function that can manipulate the timing of the loop [default]=liniar.
 * @returns {Promise} a promise you can use "then" to know when it is complete.
 */

function animate(draw, duration,timing) {

  return new Promise((resolve, reject) => {
    let start = performance.now();
    if(!timing) timing=function(timeFraction){return timeFraction;}
  
    requestAnimationFrame(function animate(time) {
      // timeFraction goes from 0 to 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      // calculate the current animation state
      let progress = timing(timeFraction)
  
      draw(progress); // draw it
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
      else
      {
        resolve();
      }
  
    });
  });


}
