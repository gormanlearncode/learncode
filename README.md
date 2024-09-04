# learncode
Simple html css and javascript tutorial

1) ”Sign up for GitHub” —> here https://github.com/
2) Create a user name
3) Select “Continue for free”
4) “Create a repository”, make it public and add a README file
5) Click “Add file” —> Create new file
6) At the top name your file “index.html”
7) Add this to the main text area:
```html
<html>
<head>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
  <body>
    <div id="mainarea">
      <div id="circle"></div>
      <div id="square"></div>
      <div id="sometext1">Some Text</div>
    </div>
    <script type="text/javascript" src="main.js"></script>
  </body>
</html>
```
8) Click “Commit changes” then click commit chnages on the popup.
9) Do the same again to adding “styles.css”
```css
#mainarea{
 background-image: url("paper.gif");
 background-color: #cccccc;
 width:600px;
 height:400px;
}
#circle{
  border: 5px solid black;
  border-radius:30px;
  top:20px;
  left:20px;
  width:60px;
  height:60px;
  position: relative;
}
#square{
  border: 5px solid black;
  top:120px;
  left:20px;
  width:60px;
  height:60px;
  position: relative;
}
#sometext1{
  top:120px;
  left:20px;
  border: none;
  position: relative;
}
```
9) Do the same again to adding “main.js”
```javascript
const mainarea = document.querySelector("#mainarea");
const circle = document.querySelector("#circle");
const square = document.querySelector("#square");
const sometext1 = document.querySelector("#sometext1");
var count=0;
function runloop(){
  square.style.left=""+(count*10)+"px";
  count=count+1;
  if(count>10){
    count=0;
  }
}

//run the loop every second
setInterval(runloop,1000)

```
