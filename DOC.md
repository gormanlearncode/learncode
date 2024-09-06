##Gorman Learn Code

###Helper Functions

Some simple functions that you can use in your code.

Fore example:
```javascript
//attached to div with id="personDiv" and move it to position 1000px from the top and 1000px from the left.
const person=new Motion("#personDiv");
person.moveTo(1000,1000);

//wait 1sec print, them another second and print etc. The following code must ne insode the "then" block.
Controls.wait(1000).then(()=>{
  console.log("do something 1000ms later");
  Controls.wait(1000).then(()=>{
    console.log("do something 2000ms later");
    Controls.wait(1000).then(()=>{
      console.log("do something 3000ms later");
    });
  });
});
```
