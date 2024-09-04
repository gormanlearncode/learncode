# learncode
Simple html css and javascript tutorial

You can see this example running here: https://gormanlearncode.github.io/learncode/

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
  <!-- this should reduce how long it takes your page to refresh after a change -->
  <meta http-equiv='cache-control' content='no-cache'> 
  <meta http-equiv='expires' content='0'> 
  <meta http-equiv='pragma' content='no-cache'>
  <!-- this imports all your formatting from the css file -->
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
  <body>
    <div id="mainarea">
      <div id="circle"></div>
      <div id="square"></div>
      <div id="sometext1"><b>Learn Code!</b></div>
    </div>
    <!-- this will run your code -->
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
  border-radius:35px;
  /* radius needs to be 35 because total width is 70px, when you addd the 5px boarder */
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
  left:220px;
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
  var newPosition=20+count*20;
  console.log("DEBUG: I am moving the square to "+newPosition+"px");
  square.style.left=""+newPosition+"px";
  count=count+1;
  if(count>20){
    count=0;
    //show the text after ten seconds
    sometext1.style.display="block";
    setTimeout(function(){
      //hide the text again after three seconds
      sometext1.style.display="none";
    },3000)
  }
}
//run the loop every half second, this will count to 20 and start again by setting count equal to zero.
setInterval(runloop,500)

```
11) Click **Settings**, at the top of the page with the sproket icon.
12) Select **Pages** in the left side tabs
13) Under build and deploy, under **Branch** where it says **None** select main, and press Save.
14) refresh the site with your browers button several times, until you see at the top “**Your site is live at** https://your page.com”
15) Click visit site.
16) You have deployed a web page with code that moves a square!
17) Go to setting Pages to open your web page.
18) When you make changes, old copiues of your page will be cached in your browswer. "Open Link in new Incognito Widow" will force it to refresh your page.
19) In the top right of your browser, click on the tripple dots, select more tools, select developer tools.
20) Select the **Console** tab to see the debug comments from you code. (or errors if you have errors) 
