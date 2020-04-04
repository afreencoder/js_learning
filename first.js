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
      console.log(a/b);
  }

  function name(a, b) {
    console.log(a +' ' + b);
  }
 // Pass `sayHello` as an argument to `greeting` function
 //greeting(sayHello, "JavaScript!");


 addition(5,10);
 name("Afreen","Sultan");
 division(9,3);



 // Return a function with two different ways:-



 //1. First way
const foo = function(){
    return greeting(sayHello, helloMessage);
}
foo();

function Hello() {
    return function() {
       console.log("Hello bar!");
    }
 }
const bar = Hello();
bar();

//2. Second way - Use double paranthesis()

Hello()();

//Event keycode
function myFunction(event) {
    var x = event.which || event.keyCode;
    document.getElementById("keycode").innerHTML = "The Unicode value is: " + x;
  }

//Document: getElementById

function elementFunction() {
    document.getElementById("getelementid1").innerHTML = "Hello Afreen";
    document.getElementById("getelementid2").innerHTML = "Good Morning";
  }
  