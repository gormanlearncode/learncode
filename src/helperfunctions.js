/**
 * Animates an object over a named period of time. For example, the below will move the circle from 20->320px over 100ms.
 * 
 * animate(function(progress){ circle.style.top = 20 + progress * 300 + 'px'; },1000).then(  function(){console.log("done")}  );
 * 
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

/**
 * Motion helps move a div object on the page. For example:<br>
 * ```
 * const person = new Motion("#personDiv");<br>
 * person.turnClockWise(90);
 * ```
 */
class Motion {
  /**
   * Create a Motion object.
   * @param {object} htmldiv - The htmldiv object to move.
   */
  constructor(htmldiv) {
    if(typeof htmldiv === "string")
    {
      this.htmldiv=document.querySelector(htmldiv);
    }
    else
    {
      this.htmldiv=htmldiv;
    }
  }
/**
 * turnClockWise degrees  
 * @param   {number}
 * @returns {Promise} a promise you can use "then" to know when it is complete.
 */
  turnClockWise(degrees)
  {
    return animate((progress)=>{this.htmldiv.style.transform = 'rotate('+(progress*degrees)+'deg)';},200);
  }
/**
 * turnAnticlockwise
 * @param   {number} degrees  
 * @returns {Promise} a promise you can use "then" to know when it is complete.
 */
  turnAnticlockwise(degrees)
  {
    return animate((progress)=>{this.htmldiv.style.transform = 'rotate('+(-progress*degrees)+'deg)';},200);
  }
  /**
   * move
   * @param   {number} pixels  
   * @returns {Promise} a promise you can use "then" to know when it is complete.
   */
  move(pixelX,pixelY)
  {
      const _left=this.htmldiv.style.left;
      const _top=this.htmldiv.style.top;
      return animate((progress)=>{this.htmldiv.style.left = ''+(_left+progress*pixelX)+'px';this.htmldiv.style.top = ''+(_top+progress*pixelY)+'px';},200);
  }
  
  /**
   * moveTo a specific position
   * @param   {number} pixelX  
   * @param   {number} pixelY  
   * @returns {Promise} a promise you can use "then" to know when it is complete.
   */
  moveTo(pixelX,pixelY)
  {
      const _left=this.htmldiv.style.left;
      const _top=this.htmldiv.style.top;
      return animate((progress)=>{this.htmldiv.style.left = ''+(_left+progress*pixelX)+'px';this.htmldiv.style.top = ''+(_top+progress*pixelY)+'px';},200);
  }
  
  /**
   * glideTo a specific position over time.
   * @param   {number} pixelX  
   * @param   {number} pixelY  
   * @param   {number} milliseconds  
   * @returns {Promise} a promise you can use "then" to know when it is complete.
   */
  glideTo(pixelX,pixelY,milliseconds)
  {
      const _left=this.htmldiv.style.left;
      const _top=this.htmldiv.style.top;
      return animate((progress)=>{this.htmldiv.style.left = ''+(_left+progress*pixelX)+'px';this.htmldiv.style.top = ''+(_top+progress*pixelY)+'px';},milliseconds);
  }
  
  /**
   * setyTo
   * @param   {number} pixelY  
   * @returns {Promise} a promise you can use "then" to know when it is complete.
   */
  setyTo(pixelY)
  {
      const _left=this.htmldiv.style.left;
      const _top=this.htmldiv.style.top;
      return animate((progress)=>{this.htmldiv.style.top = ''+(_top+progress*pixelY)+'px';},200);
  }

  /**
   * setxTo
   * @param   {number} pixelX  
   * @returns {Promise} a promise you can use "then" to know when it is complete.
   */
  setxTo(pixelX)
  {
      const _left=this.htmldiv.style.left;
      const _top=this.htmldiv.style.top;
      return animate((progress)=>{this.htmldiv.style.left = ''+(_left+progress*pixelX)+'px';},200);
  }
  
}


