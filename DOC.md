##Gorman Learn Code

###Helper Functions

Some simple functions that you can use in your code.

Fore example:
```
const person=new Motion("#personDiv");
person.moveTo(1000,1000);

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
