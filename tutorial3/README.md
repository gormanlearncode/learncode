
### Tutorial 3

In tutorial 2, we made a simple app. Below takes that a step further, adding a button programmatically, without helper code.

**[demo here](https://gormanlearncode.github.io/learncode/tutorial3/)** remember to get used to right click, **Open link in Incognito Window** it will force a refresh if there are any changes.

```html

<!-- You must have html tag, body tag and a script tag. This has 2 script tags,
     one for e helperfunctions and one for the main program-->
<!DOCTYPE html>
<html lang="en">
<body>
    <h1>Tutorial 3</h1>
    <p>Minimal HTML and CSS. See how you can do almost everything from code.</p>
    <script type="text/javascript" src="https://gormanlearncode.github.io/learncode/src/helperfunctions.js"></script>
    <script type="text/javascript" src="main.js"></script>
</body>
</html>

```
This is a minimal program, that creates a sprite (div) and created a backdrop (div). Then adds the sprite to the backdrop and moves it to the position 100x100. By using the "create functions, we don’t have to have the div's defined in our HTML or CSS. This is just a way of adding them to the html document programmatically. The code is wrapped in an **async** function call run. This allows the "await" statement to be called on the asynchronous **Controls.wait** function.
```javascript
console.log("start");
var sprite = Sprite.create({image:"images/squirrel.png",width:100,height:100});
var backdrop = Backdrop.create({backgroundColor:"yellow",width:800,height:400});
backdrop.addSprite(sprite);
sprite.moveTo(10,100);
async function run(){
     for(let i=0;i<60;i++)
     {
          let x=10+i*10;
          sprite.moveTo(x,100);
          await Controls.wait(20);
     }
     console.log("end");
}
/** 
 * Adding the button code here.
 * Create it, then set the text, then set the function to run, then add it to the html body.
 */
let button1=document.createElement("button");
button1.innerText="RUN";
button1.onclick=run;
document.body.append(button1);
```
Try creating this app yourself. In your github repository create new files as follow:
1) name = **tutorial/index.html** with the html above.
2) name = **tutorial/main.html** with the javascript above.
3) name = **images/README.md** you can check this in empty. It is just to create the images directory.
4) Upload into the images directory, a file named = **squirrel.png** you can download my image from [here](https://gormanlearncode.github.io/learncode/tutorial2/images/squirrel.png) and upload it to your github.

### Please explain?
This is the same as adding this to the html. \<button\>\</button\>
```javascript
document.createElement("button")
```
This changes adds a name to the button like this \<button\>RUN\</button\>
```javascript
document.innerText="RUN";
```
This assign a function to call when the button is pressed.
```javascript
button1.onclick=run;
```
This adds the generated html to the actual html document (at the end before \</body\> tag)
```javascript
document.body.append(button1);
```
Notice that I moved the below, outside the run() function. Otherwise they would not be called until the button is pressed.
```javascript
var sprite = Sprite.create({image:"images/squirrel.png",width:100,height:100});
var backdrop = Backdrop.create({backgroundColor:"yellow",width:800,height:400});
backdrop.addSprite(sprite);
```

[Continue to tutorial 4](https://github.com/gormanlearncode/learncode/tree/main/tutorial4)
