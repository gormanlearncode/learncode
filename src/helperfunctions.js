/**
 * This helps animates an object over a named period of time. The window.requestAnimationFrame() method tells the 
 * browser you wish to perform an animation. It requests the browser to call a user-supplied callback function 
 * before the next repaintFor example, the below will move the circle from 20->320px over 100ms.
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
      this.htmldiv.style.position = "absolute";
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
  * Creates a new Sprite, accepting an image, width and height.
  * @param   {string} image
  * @param   {number} height
  * @param   {number} width
  * @returns {Sprite} a new Sprite.
  * @example
  * var sprite = Sprite.create({image:"images/squirrel.png",width:100,height:100});
  * var backdrop = Backdrop.create({backgroundColor:"yellow",width:800,height:400});
  * backdrop.addSprite(sprite);
  * sprite.moveTo(10,100);
  * async function run(){
  *      for(let i=0;i<60;i++)
  *      {
  *           let x=10+i*10;
  *           sprite.moveTo(x,100);
  *           await Controls.wait(20);
  *      }
  *      console.log("end");
  * }
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
   * Turn this sprite clockwise by a number of degrees  
   * @param   {number} degrees - degrees to rotate
   * @example
   * let field=new Backdrop("#field");
   * let puck1=new Sprite("#puck1");
   * field.addSprite(puck1);
   * puck1.turnClockwise(15);
   * puck1.move(100);
   * puck1.turnClockwise(15);
   * puck1.move(100);
   */
  turnClockwise(degrees) {
    this.direction=this.direction+degrees;
    if(this.direction>=360)this.direction=this.direction-360;
    this.htmldiv.style.transform = 'rotate(' + ((this.direction-90)) + 'deg)';
  }

  /**
   * Set the direction of the sprites movement. The defaulr is to the left, or 90 degrees.
   * At 90 degrees the DIV rotation in it orgiginal state "up and down".
   * @param   {number} - angle in degrees the sprite will face, default is 90, to the left.
   * @example
   * let field=new Backdrop("#field");
   * let puck1=new Sprite("#puck1");
   * field.addSprite(puck1);
   * puck1.setDirection(100);
   * puck1.move(100);
   * puck1.setDirection(10);
   * puck1.move(100);
   */
  setDirection(degrees) {
    this.direction=degrees;
    if(this.direction<0)this.direction=this.direction+360;
    else if(this.direction>=360)this.direction=this.direction-360;
    this.htmldiv.style.transform = 'rotate(' + ((this.direction-90)) + 'deg)';
  }
  /**
   * Turn this sprite anticlockwise by a number of degrees  
   * @param   {number} degrees - degrees to rotate
   * @example
   * let field=new Backdrop("#field");
   * let puck1=new Sprite("#puck1");
   * field.addSprite(puck1);
   * puck1.turnAnticlockwise(15);
   * puck1.move(100);
   * puck1.turnAnticlockwise(15);
   * puck1.move(100);
   */
  turnAnticlockwise(degrees) {
    this.direction=this.direction-degrees;
    if(this.direction<0)this.direction=this.direction+360;
    this.htmldiv.style.transform = 'rotate(' + ((this.direction-90)) + 'deg)';
  }
  /**
   * move the sprit a number of steps (or pixels) in the direction it is set.
   * the default direction is 90 degrees, "or to the left"
   * @param   {number} steps - how far to move in the current direction
   * @example
   * let field=new Backdrop("#field");
   * let puck1=new Sprite("#puck1");
   * field.addSprite(puck1);
   * puck1.setDirection(100);
   * puck1.move(100);
   * puck1.setDirection(10);
   * puck1.move(100);

   */
  move(steps) {
    const _left = parseInt(this.htmldiv.style.left || "0px");
    const _top = parseInt(this.htmldiv.style.top || "0px");
    let pixelX=Math.round(steps*Math.sin(this.direction*Math.PI/180),3);
    let pixelY=Math.round(-steps*Math.cos(this.direction*Math.PI/180),3);
    this.htmldiv.style.left = '' + (_left + pixelX) + 'px'; 
    this.htmldiv.style.top = '' + (_top + pixelY) + 'px';
  }

  /**
   * move To a specific position, realtive to the parrent DIV or Backdrop.
   * @param   {number} pixelX - x position
   * @param   {number} pixelY - y position
   * @example
   * let field=new Backdrop("#field");
   * let puck1=new Sprite("#puck1");
   * field.addSprite(puck1);
   * puck1.moveTo(100,100);
   */
  moveTo(pixelX, pixelY) {
    const _left = parseInt(this.htmldiv.style.left || "0px") || 0;
    const _top = parseInt(this.htmldiv.style.top || "0px") || 0;
    this.htmldiv.style.left = "" + pixelX + "px"; 
    this.htmldiv.style.top = "" + pixelY + "px";
  }

  /**
   * glideTo a specific position over time. The example wraps the code in an (async()=>{})()
   * beacuse this function is asynchronous and here, it wants to call await, which can only
   * be called inside an async function, or and inline async as below.
   * @param   {number} pixelX  
   * @param   {number} pixelY  
   * @param   {number} milliseconds  
   * @returns {Promise} a promise you can use "then" to know when it is complete.
   * @example
   * (async()=>{
   *   let field=new Backdrop("#field");
   *   let puck1=new Sprite("#puck1");
   *   field.addSprite(puck1);
   *   await puck1.glideTo(100,100);
   * })();
   */
  glideTo(pixelX, pixelY, milliseconds) {
    const _left = parseInt(this.htmldiv.style.left || "0px") || 0;
    const _top = parseInt(this.htmldiv.style.top || "0px") || 0;
    return animate((progress) => { 
      this.htmldiv.style.left = '' + (_left + progress * (pixelX-_left)) + 'px'; 
      this.htmldiv.style.top = '' + (_top + progress * (pixelY-_top)) + 'px'; }, milliseconds);
  }

  /**
   * setY
   * @param   {number} pixelY  
   */
  setY(pixelY) {
    this.htmldiv.style.top = '' + pixelY + 'px';
  }

  /**
   * setX
   * @param   {number} pixelX  
   */
  setX(pixelX) {
    this.htmldiv.style.left = '' + pixelX + 'px';
  }

  /**
   * change Y position by 'pixelY' pixels
   * @param   {number} pixelY  
   */
  changeYBy(pixelY) {
    const _left = parseInt(this.htmldiv.style.left || "0px") || 0;
    const _top = parseInt(this.htmldiv.style.top || "0px") || 0;
    this.htmldiv.style.top = '' + (_top+pixelY) + 'px';
  }

  /**
   * change X position by 'pixelY' pixels
   * @param   {number} pixelX  
   */
  changeXBy(pixelX) {
    const _left = parseInt(this.htmldiv.style.left || "0px") || 0;
    const _top = parseInt(this.htmldiv.style.top || "0px") || 0;
    this.htmldiv.style.left = '' + (_left+pixelX) + 'px';
  }
  /**
   * The if on edge, bounce block is a Motion Block and a stack block. The block checks to see 
   * if a sprite is touching the edge of the screen, and if it is, the sprite will point in a 
   * direction that mirrors the direction from which it was coming.
   * @example
   * let field=new Backdrop("#field");
   * let puck=new Sprite("#puck1");
   * field.addSprite(puck1);
   * (async ()=>{
   *     puck1.setDirection(100);
   *     while(true)
   *     {
   *       puck.move(10);
   *       puck.ifOnEdgeBounce();
   *       await Controls.wait(2);
   *     }
   * })();
   */
  ifOnEdgeBounce()
  {
    if(!this.backdrop)return;

    if(this.x<=0 && this.direction>180)
    {
      this.setDirection(90+(270-this.direction));
    }
    else if((this.x+this.width)>=(this.backdrop.width)  && this.direction<180)
    {
      this.setDirection(270+(90-this.direction));
    }
    else if(this.y<=0 && this.direction<90 )
    {
      this.setDirection(180+(this.direction));
    } 
    else if(this.y<=0 && this.direction>270 )
    {
      this.setDirection(180+(360-this.direction));
    }
    else if((this.y+this.height)>=(this.backdrop.height)  && this.direction>90 && this.direction<270)
    {
      this.setDirection(180-this.direction);
    }
      
    
    
  }
  
  /**
   * getDiv
   * @returns {object} a reference to a <div> tag in the DOM.
   */
  getDiv() {
    return this.htmldiv;
  }
  /**
   * get width as an integer
   * @returns {number} width
   */
  get width() {
    return parseInt(getComputedStyle(this.htmldiv).getPropertyValue("width")) | 0;
  }
  /**
   * get height as an integer
   * @returns {number} height
   */
  get height() {
    return parseInt(getComputedStyle(this.htmldiv).getPropertyValue("height")) | 0;
  }
  /**
   * get x as an integer
   * @returns {number} x - X position
   */
  get x() {
    return parseInt(getComputedStyle(this.htmldiv).getPropertyValue("left")) | 0;
  }
  /**
   * get x as an integer
   * @returns {number} y - Y position
   */
  get y() {
    return parseInt(getComputedStyle(this.htmldiv).getPropertyValue("top")) | 0;
  }
  /**
   * Set the back drop that will act as the parent of this sprite.
   * @param {Backdrop} backdrop- a reference to a <div> tag in the DOM.
   */
  setBackdrop(backdrop)
  {
    this.backdrop=backdrop;
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
    if (!this.htmldiv.style.textAlign) {
      this.htmldiv.style.textAlign = "left";
    }
  }
  /**
  * Creates a new Backdrop, accepting an image and a width and height.
  * @param   {string} image
  * @param   {string} backgroundColor
  * @param   {number} height
  * @param   {number} width
  * @returns {Backdrop} a new Backdrop.
  * @example
  * var sprite = Sprite.create({image:"images/squirrel.png",width:100,height:100});
  * var backdrop = Backdrop.create({backgroundColor:"yellow",width:800,height:400});
  * backdrop.addSprite(sprite);
  * sprite.moveTo(10,100);
  * async function run(){
  *      for(let i=0;i<60;i++)
  *      {
  *           let x=10+i*10;
  *           sprite.moveTo(x,100);
  *           await Controls.wait(20);
  *      }
  *      console.log("end");
  * }
  */
  static create({ image, backgroundColor, height, width }) {
    let backdrop = new Backdrop();
    if(image) backdrop.htmldiv.style.backgroundImage = `url('${image}')`;
    if(backgroundColor) backdrop.htmldiv.style.backgroundColor = `${backgroundColor}`;
    if(height) backdrop.htmldiv.style.height = `${height}px`;
    if(width) backdrop.htmldiv.style.width = `${width}px`;
    backdrop.htmldiv.style.overflow="hidden";
    backdrop.htmldiv.style.backgroundSize = "contain";
    backdrop.htmldiv.style.backgroundRepeat = "no-repeat";
    backdrop.htmldiv.style.backgroundPosition = "center";
    backdrop.htmldiv.style.position = "relative";
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
    sprite.setBackdrop(this);
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
    /**
   * get width as an integer
   * @returns {number} width
   */
  get width() {
    return parseInt(getComputedStyle(this.htmldiv).getPropertyValue("width")) | 0;
  }
  /**
   * get height as an integer
   * @returns {number} height
   */
  get height() {
    return parseInt(getComputedStyle(this.htmldiv).getPropertyValue("height")) | 0;
  }
  /**
   * get x as an integer
   * @returns {number} x - X position
   */
  get x() {
    return parseInt(getComputedStyle(this.htmldiv).getPropertyValue("left")) | 0;
  }
  /**
   * get x as an integer
   * @returns {number} y - Y position
   */
  get y() {
    return parseInt(getComputedStyle(this.htmldiv).getPropertyValue("top")) | 0;
  }
}

