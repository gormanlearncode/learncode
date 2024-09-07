### Tutorial 4

Lets experiment will al sorts of things. Create a new directory for tutorial 4 (e.g. create **tutorial4/README.md**) and add the following files.

You might need to download this image add add it to your images directory. [basketball image](https://gormanlearncode.github.io/learncode/images/24716919.jpg)

Notice in the code how you can reference images in parrent directories using **"../"**

Notice that the code is getting very long, beacuse it is creating all the **Div** and **Button** tags and setting all their styles, from code. We need to start using the html and css again, or our code will be 90% style formating and only 10% logic.

[demo here](https://gormanlearncode.github.io/learncode/tutorial4/)

index.html
```html
<!doctype html>
<head>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <center>
        <h1>Tutorial 4</h1>
        <p>Minimal HTML and CSS. But the code is getting very long, just to create and style html objects..</p>
        <div id="backdrop"></div>
        <div id="put_buttons_here"></div>
        <!-- I am not creating the backdrop from code, because I want control of where I put it in the html -->
        <h2>Header size 2</h2>
        <h3>Header size 3</h3>
        <p>Html is greate for text, images tables and other static content.</p>
        <p>Html has <i>Italic</i> formating add <b>BOLD</b> and <span style="color: blue;">COLOUR</span></p>
        <table>
            <tr><th>Header Cell</th><th>Header Cell</th><th>Header Cell</th></tr>
            <tr><td>Row Cell</td><td>Row Cell</td><td>Row Cell</td></tr>
            <tr><td>Row Cell</td><td>Row Cell</td><td>Row Cell</td></tr>
        </table>
    </center>
    <script type="text/javascript" src="https://tinyurl.com/462k3dx7"></script>
    <script type="text/javascript" src="main.js"></script>
</body>
</html>
```
styles.css
```css
table {
  border: 1px solid;
}
th{
    background-color: #505050;
    color: #fff;
}
```
main.js
```javascript
console.log("start");
var sprite = Sprite.create({image:"../tutorial3/images/squirrel.png",width:100,height:100});
var backdrop = new Backdrop("#backdrop");
backdrop.htmldiv.style.backgroundImage="url('../images/24716919.jpg')";
backdrop.htmldiv.style.backgroundColor="yellow";
backdrop.htmldiv.style.width="1000px";
backdrop.htmldiv.style.height="900px";
backdrop.htmldiv.style.overflow="hidden";
backdrop.htmldiv.style.backgroundSize = "contain";
backdrop.htmldiv.style.backgroundRepeat = "no-repeat";
backdrop.htmldiv.style.backgroundPosition = "center";
backdrop.addSprite(sprite);
sprite.moveTo(10,100);

/**
  * run() This is the main function that is called when pressing the RUN button. It is 
  * an async function, meaning it wont wait for its content to finish, it will allow the
  * following code to continue in parrallel to the code in the run() loop.
  * you will see that some function start with 'await' this mean that the were also async
  * but that we want the run loop to wait for them to finish.
  */
async function run(){
     sprite.turnClockwise(10);
     for(let i=0;i<20;i++)
     {
          sprite.move(10);
          await Controls.wait(100);
     }
     sprite.turnAnticlockwise(10);
     for(let i=0;i<20;i++) 
     {
          sprite.move(10);
          await Controls.wait(100);
     }
     for(let i=0;i<25;i++) 
     {
          sprite.turnClockwise(15);
          sprite.move(10);
          await Controls.wait(10);
     }
     sprite.setDirection(90);
     await sprite.glideTo(800,500,2000);
     await sprite.glideTo(10,500,2000);
     await Controls.wait(1000);
     sprite.seyY(300);
     await Controls.wait(1000);
     sprite.seyX(300);
/**
  * createElement("div") this is similaer to adding a <div>DONE!</div> to the HTML.
  * however we are setting the css values directy in code. It can get very messy if
  * you set all your css values in code, that is why you might use HTML and css istead.
  */
     let someText=document.createElement("div");
     someText.innerText="DONE!";
     someText.style.backgroundColor="white";
     someText.style.fontSize="40px";
     someText.style.position="relative";
     someText.style.left="400px";
     someText.style.top="300px";
     document.body.append(someText);
     console.log("end");
}
let button1=document.createElement("button");
button1.innerText="RUN";
button1.onclick=run;


/**
  * button2() This adds a second button, which checks the current backgrond color
  * and chnages it from red to yellow and back. Noye how code can access the css style
  * of the DIV, to read it and to write to it.
  */
let button2=document.createElement("button");
button2.innerText="ALERT";
button2.onclick=function(){
     if(backdrop.htmldiv.style.backgroundColor=="red")
     {
          backdrop.htmldiv.style.backgroundColor="yellow";
     }
     else
     {
          backdrop.htmldiv.style.backgroundColor="red";
     }
};

/**
  * button3() This adds a third button, which spins rgw Sprite 360 degrees.
  * It uses the animate function. Which calles the provided function many times
  * passing a progress value e.g. 0.5 when it is 50$ of the way through the time period.
  * progress allows you to know how much chage your function shoud do each time.
  * NOTE: here we track lastVal, as we just want to add slices of the 360 that finally
  * total 360. If we did not it would rotate 1,2,3 then ... 350,355, then 360 degrees
  * many many more tines than the one rotatio originally planned.
  */
let button3=document.createElement("button");
button3.innerText="SPIN!";
button3.onclick=function(){
     let lastVal=0;
     animate((progress)=>{
          sprite.turnClockwise(progress*360-lastVal);
          lastVal=progress*360;
     },500);
};

let buttonLocationDiv=document.querySelector("#put_buttons_here");
buttonLocationDiv.append(button1);
buttonLocationDiv.append(button2);
buttonLocationDiv.append(button3);
```
