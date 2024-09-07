/**
 * Animates an object over a named period of time. For example, the below will move the circle from 20->320px over 100ms.
 * @example
 * animate(function(progress){ 
 *    circle.style.top = 20 + progress * 300 + 'px';
 * },1000).then( function(){
 *    console.log("done");
 * });
 * 
 * @param   {function} draw  A function that is called to animate your object, it contains a float, between 0-1, 
 *                     used in your code to set how far your animation should move as a ration of the total move
 *                     you want to make.
 * @param   {number} duration  How long should the animation last.
 * @param   {function} timing  an [optional] function that can manipulate the timing of the loop [default]=liniar.
 * @returns {Promise} a promise you can use "then" to know when it is complete. 
 */
function animate(draw, duration, timing) {

  return new Promise((resolve, reject) => {
    let start = performance.now();
    if (!timing) timing = function (timeFraction) { return timeFraction; }

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
      else {
        resolve();
      }

    });
  });
}

/**
 * Sprite helps move a div object on the page. For example:
 * @example
 * const person = new Sprite("#personDiv");
 * person.turnClockWise(90);
 *
 */
class Sprite {
  /**
   * Create a Sprite object.
   * @param {object} htmldiv - The htmldiv object to move.
   */
  constructor(htmldiv) {
    if (htmldiv == null) {
      this.htmldiv = document.createElement("div");
      this.htmldiv.style.position = "relative";
    }
    else if (typeof htmldiv === "string") {
      this.htmldiv = document.querySelector(htmldiv);
    }
    else {
      this.htmldiv = htmldiv;
    }
    this.direction=90;

  }
  /**
  * create 
  * @param   {image}
  * @param   {height}
  * @param   {width}
  * @returns {Sprite} a new Sprite.
  */
  static create({ image, height, width }) {
    let sprite = new Sprite();
    sprite.htmldiv.style.backgroundImage = `url('${image}')`;
    sprite.htmldiv.style.backgroundSize = "contain";
    sprite.htmldiv.style.height = `${height}px`;
    sprite.htmldiv.style.width = `${width}px`;
    return sprite;
  }
  /**
   * turnClockWise degrees  
   * @param   {number}
   * @returns {Promise} a promise you can use "then" to know when it is complete.
   */
  turnClockWise(degrees) {
    this.direction=this.direction+degrees;
    return animate((progress) => { this.htmldiv.style.transform = 'rotate(' + (progress * (this.direction-90)) + 'deg)'; }, 200);
  }
  /**
   * turnAnticlockwise
   * @param   {number} degrees  
   * @returns {Promise} a promise you can use "then" to know when it is complete.
   */
  turnAnticlockwise(degrees) {
    this.direction=this.direction-degrees;
    return animate((progress) => { this.htmldiv.style.transform = 'rotate(' + (progress * (this.direction-90)) + 'deg)'; }, 200);
  }
  /**
   * move
   * @param   {number} steps  
   * @returns {Promise} a promise you can use "then" to know when it is complete.
   */
  move(steps) {
    const _left = this.htmldiv.style.left;
    const _top = this.htmldiv.style.top;
    let pixelX=steps*Math.sin(direction);
    let pixelY=-steps*Math.cos(direction);
    return animate((progress) => { this.htmldiv.style.left = '' + (_left + progress * pixelX) + 'px'; this.htmldiv.style.top = '' + (_top + progress * pixelY) + 'px'; }, 200);
  }

  /**
   * moveTo a specific position
   * @param   {number} pixelX  
   * @param   {number} pixelY  
   * @returns {Promise} a promise you can use "then" to know when it is complete.
   */
  moveTo(pixelX, pixelY) {
    const _left = this.htmldiv.style.left;
    const _top = this.htmldiv.style.top;
    return animate((progress) => { this.htmldiv.style.left = '' + (_left + progress * pixelX) + 'px'; this.htmldiv.style.top = '' + (_top + progress * pixelY) + 'px'; }, 200);
  }

  /**
   * glideTo a specific position over time.
   * @param   {number} pixelX  
   * @param   {number} pixelY  
   * @param   {number} milliseconds  
   * @returns {Promise} a promise you can use "then" to know when it is complete.
   */
  glideTo(pixelX, pixelY, milliseconds) {
    const _left = this.htmldiv.style.left;
    const _top = this.htmldiv.style.top;
    return animate((progress) => { this.htmldiv.style.left = '' + (_left + progress * pixelX) + 'px'; this.htmldiv.style.top = '' + (_top + progress * pixelY) + 'px'; }, milliseconds);
  }

  /**
   * setyTo
   * @param   {number} pixelY  
   * @returns {Promise} a promise you can use "then" to know when it is complete.
   */
  setyTo(pixelY) {
    const _left = this.htmldiv.style.left;
    const _top = this.htmldiv.style.top;
    return animate((progress) => { this.htmldiv.style.top = '' + (_top + progress * pixelY) + 'px'; }, 200);
  }

  /**
   * setxTo
   * @param   {number} pixelX  
   * @returns {Promise} a promise you can use "then" to know when it is complete.
   */
  setxTo(pixelX) {
    const _left = this.htmldiv.style.left;
    const _top = this.htmldiv.style.top;
    return animate((progress) => { this.htmldiv.style.left = '' + (_left + progress * pixelX) + 'px'; }, 200);
  }
  /**
   * getDiv
   * @returns {object} a reference to a <div> tag in the DOM.
   */
  getDiv() {
    return this.htmldiv;
  }

}
/**
 * Controls helps move a div object on the page.
 */
class Controls {
  /**
   * Waits for some milliseconds, and calls the code in the "then" block.
   * @example
   * Controls.wait(1000).then(()=>{console.log("done");});
   * @param   {number} milliseconds  
   * @returns {Promise} a promise you can use "then" to know when it is complete.
   */
  static wait(milliseconds) {
    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve() }, milliseconds);
    });
  }
  /**
   * Calls a given function, in a loop a number of times.
   * @example
   * let func=function(i,c){
   *    console.log(`loop ${i} of ${c}`);
   * };
   * Controls.repeate(func,4).then((i,c)=>{
   *    console.log("done");
   * });
   * @param   {function} func
   * @param   {number} count  
   * @param   {number} delay - [optional] defaults to 10ms
   * @returns {Promise} a promise you can use "then" to know when it is complete.
   */
  static repeat(func, count, delay) {
    let i = 0
    let _func = func;
    let _count = count;
    let _delay = delay || 10;
    return new Promise((resolve, reject) => {
      const loopCode = function () {
        _func(i, _count);
        i = i + 1;
        if (i < _count) {
          setTimeout(loopCode, _delay);
        }
        else {
          resolve();
        }
      };
      loopCode();
    });
  }
}
/**
 * Backdrop helps manipulate a given background DIV
 * @example
 * const mainarea = new Sprite("#mainarea");
 * mainarea.addBackdrop("https://image.com");
 * mainarea.switchBackdropTo(0);
 *
 */
class Backdrop {
  /**
   * Create a Sprite object.
   * @param {object} htmldiv - The htmldiv object to move.
   */
  constructor(htmldiv) {
    if (htmldiv == null) {
      this.htmldiv = document.createElement("div");
      this.htmldiv.id = "backdrop";
    }
    else if (typeof htmldiv === "string") {
      this.htmldiv = document.querySelector(htmldiv);
    }
    else {
      this.htmldiv = htmldiv;
    }
    this.backdrops = [];
    this.bdindex=0;
    if (this.htmldiv.style.backgroundImage) {
      this.backdrops.push(this.htmldiv.style.backgroundImage.replace(/url\(('|")(.*)('|")\).*/, "$1"));
    }
  }
  /**
  * create 
  * @param   {image}
  * @param   {height}
  * @param   {width}
  * @returns {Sprite} a new Sprite.
  */
  static create({ image, backgroundColor, height, width }) {
    let backdrop = new Backdrop();
    if(image) backdrop.htmldiv.style.backgroundImage = `url('${image}')`;
    if(backgroundColor) backdrop.htmldiv.style.backgroundColor = `${backgroundColor}`;
    if(height) backdrop.htmldiv.style.height = `${height}px`;
    if(width) backdrop.htmldiv.style.width = `${width}px`;
    document.body.append(backdrop.htmldiv);
    return backdrop;
  }
  /**
 * Adds an image to the end of a list of backdrops.
 * @example
 * mainarea.addBackdrop("https://image.com");
 * @param   {string} imageURI  
 */
  addBackdrop(imageURI) {
    this.backdrops.push(imageURI);
  }
  /**
   * Adds an sprite to the end of a list of backdrop spites.
   * @example
   * mainarea.addBackdrop("https://image.com");
   * @param   {object} sprite  
   */
  addSprite(sprite) {
    this.htmldiv.append(sprite.getDiv());
  }
  /**
   * Switch backdrop to a specific index of a list of backdrops, starting at zero.
   * @example
   * mainarea.switchBackdropToIndex(0);
   * @param   {number} index  
   */
  switchBackdropToIndex(index) {
    if (index >= this.backdrops.length) return;
    this.htmldiv.style.backgroundImage = 'url("' + this.backdrops[index] + '")';
  }
  /**
   * Next backdrop to a specific index of a list of backdrops, starting at zero.
   * @example
   * mainarea.switchBackdropToIndex(0);
   * @param   {number} index  
   */
  nextBackdrop() {
    this.htmldiv.style.backgroundImage = 'url("' + this.backdrops[this.bdindex+1] + '")';
    this.bdindex=this.bdindex+1;
    if (this.bdindex >= this.backdrops.length) this.bdindex=0;
  }

  /**
   * Change the color  [TBC]
   * @example
   * mainarea.changeColor("red",0);
   * @param   {string} colour  
   * @param   {number} effectBy  
   */
  changeColor(color, effectBy) {

  }
  /**
 * Set the color  [TBC]
 * @example
 * mainarea.setColor("red");
 * @param   {string} color
 */
  setColor(color) {

  }
  /**
   * Clear the graphics effect [TBC]
   * @example
   * mainarea.clearGraphicsEffect();
   * @param   {string} color
   */
  clearGraphicsEffect() {

  }
}

