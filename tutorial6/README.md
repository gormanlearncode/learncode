Builds a mobile phone app? 
  
It is called a PWA. It can be deployed on Apple or Android without having to go to the effort od putting in the app store.

[demo here](https://gormanlearncode.github.io/learncode/tutorial6/index.html)



Once you build a PWA, you can delopy to app stores here.

https://www.pwabuilder.com/

You can check that it is correctly configured here.

https://www.seoreviewtools.com/pwa-testing-tool/


You can use everything else you learnt about web apps. Below are the additional requirements to make it a PWA, that can be installed on a phone with its own icon.

 - viewport: sets the app width to match the width of the phone
 - theme-color: sets the background highlights of the app, e.g. the top toolbar color.
 - meta "mobile/apple/etc": some basic frame setting for when this is not wrapped in a browser.
 - link icon: the icon that will be used when you add the app to your home screen.
 - link manifest: the manifest file contains al sorts of info, for the app stores and for the device the app will run on.
 - register service worker: a service worker is come code that will run in the background, this example chches files, so the app will work offline.

That the main requirements pf a PWA APP. I would suggest that you will want to lock down your page size so it does not scroll. This will give an experiance more like an App than a webpage. You can do this by setting your root div, or Backdrop css style, to be style="position:absolute;top:0px;bottom:0px;left:0px;right:0px;overflow:hidden;".

Note: That here I have cheated a little, including the css directly in the html file. I could have also put it in its own style.css file.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>tutorial6</title>
  <base href="/" />
  <meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0" />
  <meta name="description" content="This is a tutorial6 app" />
  <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#181818" />
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-title" content="tutorial6" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  <link rel="icon" href="/learncode/tutorial6/assets/icons/icon_24.png" type="image/png" />
  <link rel="manifest" href="/learncode/tutorial6/manifest.json" />
</head>
<body style="background-color:black;color:white;font-weight:bold;font-size:16px;overscroll-behavior: none;">
  <div id="backdrop" style="position:absolute;top:0px;bottom:0px;left:0px;right;0px">
      <div id="sometext" style="position:relative;top:60px;left:50px;">Simple PWA APP</div> 
  </p>
  <script>
    //register service worker
    if ('serviceWorker' in navigator) {window.onload = () => {navigator.serviceWorker.register('/learncode/tutorial6/sw.js');}}
  </script>
  <script src="/learncode/tutorial6/main.js"></script>
</body>
</html>
```


