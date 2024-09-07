# learncode
A simple html, css and javascript tutorial, that you can do 100% in the browser with no extra tools. Dont worry to much about understanding the html and css just yet. Once you have published your own copy of this app you can start making changes that will help you lean what is happening here. The helper functions used here and others, are documented [here](https://gormanlearncode.github.io/learncode/docs/index.html).

### Tutorial 1 - Make a simple webpage containging a javascript app.

You can see this example running here: https://gormanlearncode.github.io/learncode/

1) ”Sign up for GitHub” —> here https://github.com/
2) Create a user name, this will be in your website URL, so make it nice.
3) Select “Continue for free”
4) “Create a repository”, call it **webapp** make it public and tick the box to add a README file
5) Click “Add file” —> Create new file
6) At the top name your file “index.html”
7) Add this HTML code to the main text area. HTML is the display layer of our code. Importantly, the “div” tag is an object we are going to format, shape and move from JavaScript.
 
```html
<html>
<head>
  <!-- this should reduce how long it takes your page to refresh after a change -->
  <meta http-equiv='cache-control' content='no-cache'> 
  <meta http-equiv='expires' content='0'> 
  <meta http-equiv='pragma' content='no-cache'>
  <!-- this imports all your formatting from the css file -->
  <link rel="stylesheet" type="text/css" href="styles.css">
  <!-- this imports some helper functions you can use in your code -->
  <script type="text/javascript" src=https://tinyurl.com/462k3dx7></script>
</head>
  <body>
    <h1>Learncode Example App</h1>
    <!-- these are the building blocks of your site. You will format them in css and move them in javascript -->
    <div id="mainarea">
      <div id="circle"></div>
      <div id="square"></div>
      <div id="sometext1"><b>Learn Code!</b></div>
    </div>
    <button id="startbutton">START!</button>
    <!-- this will run your code -->
    <script type="text/javascript" src="main.js"></script>
  </body>
</html>

```
8) Click “Commit changes” then click commit chnages on the popup.
9) Do the same again to adding “styles.css”. CSS or style sheets are used to format HTML.
```css
/* these format the color and shap of each of your html building blocks */
#mainarea{
 /* this sets an image as the background of main area */
 background-image: url("https://gormanlearncode.github.io/learncode/images/24716919.jpg");
 background-size: cover;
 background-color: white;
 width:1000px;
 height:852px;
}
/* this sets circle object to round, with an orange background */
#circle{
  border: 5px solid black;
  border-radius:35px;
  /* radius needs to be 35 because total width is 70px, when you addd the 5px boarder */
  background-color: orange;
  margin: 0px;
  padding: 0px;
  top:320px;
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
  width:320px;
  border: 5px solid black;
  background-color: white;
  font-size: 40px;
  text-align: center;
  position: relative;
  display: none;
}
#startbutton{
  margin-left:20%;
  margin-top:20px;
  font-size: 40px;
}
```
10) Do the same again to adding “main.js”
```javascript
//these give us access to the objects in the html
const mainarea = document.querySelector("#mainarea");
const circle = document.querySelector("#circle");
const square = document.querySelector("#square");
const sometext1 = document.querySelector("#sometext1");
const startbutton = document.querySelector("#startbutton");
var count=0;

//this is a simple example of a function that will be called 4 times a second
//you can do what you want in here, "setInterval" controls how often it is called.
function runloop(){
  var newPosition=20+count*20;
  console.log("DEBUG: I am moving the square to "+newPosition+"px");
  square.style.left=""+newPosition+"px";
  count=count+1;
  if(count>40){
    count=0;
    //show the text after ten seconds
    sometext1.style.display="block";
    setTimeout(function(){
      //hide the text again after two seconds
      sometext1.style.display="none";
    },2000);
  }
}


//this is a more complicated example function. It calls the animate function, passing a function that moves the circle 
//down for 1000ms 'then' when that is done moves it up for 1000ms, then calls the function again and again and again.
function bounceball()
{
  animate(function(progress){
      circle.style.top = 320 + progress * 300 + 'px';
  },1000).then(function(){
      animate(function(progress){
        circle.style.top = 620 - progress * 300 + 'px';
      },1000).then(bounceball);
  });
}

startbutton.onclick=function(){
  //run 'runloop' every 250ms, this will count to 20 and start again by setting count equal to zero.
  setInterval(runloop,250);
  //this starts a recursive loop calling 'bounceball'.
  bounceball();
}

```
11) Click **Settings**, at the top of the page with the sprocket icon.
12) Select **Pages** in the left side tabs
13) Under build and deploy, under **Branch** where it says **None** select main, and press Save.
14) refresh the site with your browsers button several times, until you see at the top “**Your site is live at** https://your page.com”
15) Click visit site.
16) You have deployed a web page with code that moves a square!
17) Go to **Settings** --> **Pages** to open your web page, it will be something like https://your-username.github.io/webapp/
18) Try adding a like to your page in your README.md, by editing it. This will make your page easier to find.
19) When you make changes, old copies of your page will be cached in your browser. "Open Link in new Incognito Widow" [e.g.](https://gormanlearncode.github.io/learncode/images/open%20incognito.png) will force it to refresh your page.
20) In the top right of your browser, click on the triple dots, select more tools, select developer tools.
21) Select the **Console** [e.g.](https://gormanlearncode.github.io/learncode/images/example%20console.png) tab to see the debug [e.g.](https://gormanlearncode.github.io/learncode/images/debug%20menu.png) comments from you code. (or errors if you have errors)
22) Learn all you need to know here https://www.w3schools.com/js/ and by asking google for examples.

### Please explain?

You have now learnt all the basics of GitHub. You have created a html file, which is the basis of all web pages. You have created a css file that formats objects such as "div" in a web page. You have created a JavaScript file that can manipulate the objects in the html from code. You have published a webpage, you have looked at the "Console" to see comments and possibly errors from your code. Now you can move onto tutorials that will explore more concepts with coding. You will inject html into the browser document without having to have added it in the html file.


[Continue to tutorial 2](https://github.com/gormanlearncode/learncode/tree/main/tutorial2)
