// First class functions


// 1. Anonymous function
const fruit = function() {
    console.log("Apple");
}
fruit();


//2. Named function with parameters
function sayHello() {
    return "Hello, ";
 }

 function helloMessage(){
     return "Afreen";
 }
 function greeting(a, b) {
   console.log(a() + b());
 }

 function addition(a, b) {
    console.log(a + b);
  }

  function division(a, b) {
      alert(a/b);
  }

  function name(a, b) {
    console.log(a +' ' + b);
  }
 // Pass `sayHello` as an argument to `greeting` function
 //greeting(sayHello, "JavaScript!");

 greeting(sayHello, helloMessage);
 addition(5,10);
 name("Afreen","Sultan");
 division(9,3);



 // Return a function

const foo = function(){
    return greeting(sayHello, helloMessage);
}

foo();