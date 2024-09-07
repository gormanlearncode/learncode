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
This is a minimal program, that creates a sprite (div) and created a backdrop (div). Then adds the sprite to the backdrop and moves it to the position 100x100. By using the "create functions, we don’t have to have the div's defined in our HTML or CSS. This is just a way of adding them to the html document programmatically. 

```javascript
console.log("start");
var sprite = Sprite.create({image:"images/squirrel.png",width:100,height:100});
var backdrop = Backdrop.create({backgroundColor:"yellow",width:800,height:400});
backdrop.addSprite(sprite);
sprite.moveTo(100,100);
await Controld.wait(1000);
sprite.moveTo(200,100);
console.log("end");
```
