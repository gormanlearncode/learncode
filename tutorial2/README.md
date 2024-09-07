### Tutorial 2

In tutorial 1, we used html "div" tags to create objects in the browser that we could format, shape and move. You can also create then from code. The helper function **Sprite.create** and **Backdrop.create**, create div tags and add them to the html document. Below is the minimum tags required to create a simple app.


[demo here](https://gormanlearncode.github.io/learncode/tutorial2/)

```html

<!-- You must have html tag, body tag and a script tag. This has 2 script tags,
     one for e helperfunctions and one for the main program-->
<!doctype html>
<body>
    <h1>Tutorial 2</h1>
    <p>Minimal HTML and CSS. See how you can do almost everything from code.</p>
    <script type="text/javascript" src="https://tinyurl.com/462k3dx7"></script>
    <script type="text/javascript" src="main.js"></script>
</body>
</html>

```
This is a minimal program, that creates a sprite (div) and created a backdrop (div). Then adds the sprite to the backdrop and moves it to the position 100x100. By using the "create functions, we don’t have to have the div's defined in our HTML or CSS. This is just a way of adding them to the html document programmatically. The code is wrapped in an **async** function call run. This allows the "await" statement to be called on the asynchronous **Controls.wait** function.
```javascript
console.log("start");
async function run(){
     var sprite = Sprite.create({image:"images/squirrel.png",width:100,height:100});
     var backdrop = Backdrop.create({backgroundColor:"yellow",width:800,height:400});
     backdrop.addSprite(sprite);
     for(let i=0;i<20;i++)
     {
          let x=100+i*10;
          sprite.moveTo(x,100);
          await Controls.wait(100);
     }
     console.log("end");
}
run();
```
Try creating this app yourself. In your github repository create new files as follow:
1) name = **tutorial/index.html** with the html above.
2) name = **tutorial/main.html** with the javascript above.
3) name = **images/README.md** you can check this in empty. It is just to create the images directory.
4) Upload into the images directory, a file named = **squirrel.png** you can download my image from [here](https://gormanlearncode.github.io/learncode/tutorial2/images/squirrel.png) and upload it to your github.

### Please explain?

You have created an app that has minimal html and no css. You have seen that **div** objects can be injected into the html document from code.

[Continue to tutorial 3](https://github.com/gormanlearncode/learncode/tree/main/tutorial3)
