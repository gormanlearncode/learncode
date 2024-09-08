# Hockey Puck

[demo here](https://gormanlearncode.github.io/learncode/tutorial5/)
  
**(async ()=>{ some-code(); })()**  
This is a way of wrapping code in an asynchronous call. This means it wont wait for the code inside to finish befor moving onto the following code. This can be handy if you want to call async function with the prefix **await**. You cannot call an async function with await, unless you are calling it from inside an async function. In this case I want to call **await Controls.wait(1);** and wait for it to return before continuing the loop.
  
index.html
```html
<!doctype html>
<head>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <h1>Hocky Puck</h1>
    <div id="field">
        <div id="puck1"></div>
        <div id="puck2"></div>
        <div id="puck3"></div>
    </div>
    <script type="text/javascript" src="https://tinyurl.com/462k3dx7"></script>
    <script type="text/javascript" src="main.js"></script>
</body>
</html>
```
styles.css
```css
#puck1
{
  width:30px;
  height:30px;
  background-color:black;
  border-radius:15px;
  position:relative;
}
#puck2
{
  width:30px;
  height:30px;
  background-color:red;
  border-radius:15px;
  position:relative;
}
#puck3
{
  width:30px;
  height:30px;
  background-color:blue;
  border-radius:15px;
  position:relative;
}
#field
{
  width:1000px;
  height:800px;
  background-color:#90EE90;
}
```
  
main.js
```javascript
let field=new Backdrop("#field");
let puck1=new Sprite("#puck1");
let puck2=new Sprite("#puck2");
let puck3=new Sprite("#puck3");
field.addSprite(puck1);
field.addSprite(puck2);
field.addSprite(puck3);

(async ()=>{
    puck1.setDirection(100);
    while(true)
    {
      puck1.move(10);
      puck1.ifOnEdgeBounce();
      await Controls.wait(2);
    }
})();

(async ()=>{
    puck2.setDirection(105);
    while(true)
    {
      puck2.move(10);
      puck2.ifOnEdgeBounce();
      await Controls.wait(2);
    }
})();

(async ()=>{
    puck3.setDirection(110);
    while(true)
    {
      puck3.move(10);
      puck3.ifOnEdgeBounce();
      await Controls.wait(2);
    }
})();

```
