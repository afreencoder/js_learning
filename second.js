// var - GLobal scope

var a = 5;
var b = 10;

function addition() {
    a = 6;
    console.log(a + b);
    a = 8;
    console.log(a + b);
    document.getElementById("addition").innerHTML = a + b;
    
}
//addition();

var a = 10;
console.log(a + b);




// Let - local, block scope
let c = 10;
let d = 2;
let e = 3;

function subtraction() {
    let e = 6
    document.getElementById("subtraction").innerHTML = c - d;
    console.log(c - d);
   
}
//subtraction();

console.log(c-e); 

//CONST

//const local/block scope but value is constant i.e it cannot be overridden

const fruit = "apple";
console.log(fruit);

// const with array - array value can update
const names = ["John", "Mark", "Joe"];
document.getElementById("currentNames").innerHTML = "Current names:" + " " +
names[0] + ", " +  names[1] + ", " + names[2];
console.log(names);

function updateNames(){
    names.push("Maria", "Sarah");
    document.getElementById("updateNames").innerHTML = "Updated names:" + " " + names;
}
console.log(names);
