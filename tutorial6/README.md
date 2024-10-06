Builds a mobile phone app? 
  
It is called a PWA. It can be deployed on Apple or Android without having to go to the effort od putting in the app store.

[demo here](https://gormanlearncode.github.io/learncode/tutorial6/index.html) on iphone, open this in safari, and click the safari options button and add to home screen.



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

That the main requirements pf a PWA APP. I would suggest that you will want to lock down your page size so it does not scroll. This will give an experiance more like an App than a webpage. You can do this by setting your root div, or Backdrop css style, to take up all the page with, style="position:absolute;top:0px;bottom:0px;left:0px;right:0px;overflow:hidden;".


index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>tutorial6</title>
  <base href="/learncode/tutorial6/" />
  <meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <meta name="description" content="This is a tutorial6 app" />
  <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#181818" />
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-title" content="tutorial6" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  <link rel="icon" href="assets/icons/icon_24.png" type="image/png" />
  <link rel="manifest" href="manifest.json" />
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  <div id="backdrop">
      <div id="puck"></div>
      <div id="sometext">Simple PWA APP</div> 
  </p>
  <script>
    //register service worker
    if ('serviceWorker' in navigator) {window.onload = () => {navigator.serviceWorker.register('/learncode/tutorial6/sw.js');}}
  </script>
  <script type="text/javascript" src="https://tinyurl.com/462k3dx7"></script>
  <script src="main.js"></script>
</body>
</html>
```

main.js
```javascript
let backdrop=new Backdrop("#backdrop");
let puck=new Sprite("#puck");
backdrop.addSprite(puck);

puck.setDirection(100);
function step()
{
    if(Math.random()>0.8)puck.turnClockwise(1);
    puck.move(20);
    puck.ifOnEdgeBounce();
    requestAnimationFrame(step);
}
requestAnimationFrame(step);

```

sw.js
```javascript
// This is the "Offline page" service worker

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const CACHE = "pwabuilder-page";

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlineFallbackPage = "index.html";

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener('install', async (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.add(offlineFallbackPage))
  );
});

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preloadResp = await event.preloadResponse;

        if (preloadResp) {
          return preloadResp;
        }

        const networkResp = await fetch(event.request);
        return networkResp;
      } catch (error) {

        const cache = await caches.open(CACHE);
        const cachedResp = await cache.match(offlineFallbackPage);
        return cachedResp;
      }
    })());
  }
});
```

styles.css
```css
html {
  position: fixed;
  height: 100%;
  overflow: hidden;
}

body {
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  background-color:black;
  color:white;
  font-weight:bold;
  font-size:16px;
  overscroll-behavior: none;
}

#backdrop{
  position:absolute;
  top:0px;
  bottom:0px;
  left:0px;
  right:0px;
  overflow:hidden;
}

#puck{
  position:absolute;
  top:160px;
  left:150px;
  width: 0; 
  height: 0; 
  /* this makes a triangle out of a div */
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 30px solid #E1477E; 
}

#sometext{
  position:relative;
  top:60px;
  left:20px;
}
```

