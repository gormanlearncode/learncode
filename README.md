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
/* this sets the initial formatting of the main area with an image and a grey backgound */
#mainarea{
 background-image: url("paper.gif");
 background-color: #cccccc;
 width:600px;
 height:400px;
}
/* this sets circle object to round, with an orange background */
#circle{
  border: 5px solid black;
  border-radius:30px;
  background-color: orange;
  margin: 0px;
  padding: 0px
  top:20px;
  left:20px;
  width:60px;
  height:60px;
  position: relative;
}
/* this sets square object to a position 120 pixels down from the top and 20 pixels in from the left */
#square{
  border: 5px solid black;
  top:120px;
  left:20px;
  width:60px;
  height:60px;
  position: relative;
}
/* this sets the text initially to hidden, code will display it after 10 seconds */
#sometext1{
  top:120px;
  left:20px;
  border: none;
  position: relative;
  display: none;
}
```
10) Do the same again to adding “main.js”
```javascript
//these give us access to the objects in the html
const mainarea = document.querySelector("#mainarea");
const circle = document.querySelector("#circle");
const square = document.querySelector("#square");
const sometext1 = document.querySelector("#sometext1");
var count=0;

//the main function
function runloop(){
  square.style.left=""+(20+count*20)+"px";
  count=count+1;
  if(count>10){
    count=0;
    //show the text after ten seconds
    sometext1.style.display="block";
    setTimeout(function(){
      //hide the text again after three seconds
      sometext1.style.display="none";
    },3000)
  }
}
//run the loop every second, this will count to 10 and start again by setting count equal to zero.
setInterval(runloop,1000)

```
11) Click **Settings**, at the top of the page with the sproket icon.
12) Select **Pages** in the left side tabs
13) Under build and deploy, under **Branch** where it says **None** select main, and press Save.
14) refresh the site with your browers button several times, until you see at the top “**Your site is live at** https://your page.com”
15) Click visit site.
16) You have deployed a web page with code that moves a square!
