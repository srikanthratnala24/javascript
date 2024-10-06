let greeting = "Are you sure you want to redirect homepage";
alert(greeting);
console.log("Hello world")

let firstName = 'srikanth';
let lastName = 'ratnala';

console.log(firstName + ' ' +lastName)

const pi = 3.14
let radius = 3
console.log("The circumference of 3 radius circle is: " + (pi*(radius)**2))

//Primitive types

let name = 'srikanth';
let age =28;
let isapproved = false;
let status = undefined;
let isonlie = null;

typeof name;
typeof age;


fruits = ['apple','orange','kiwi']

for (i=0; i<fruits.length; i++){
    console.log(fruits[i])
}

let htmlContent = '';
// let out = fruits.forEach(fruit => console.log(fruit));
fruits.forEach(function(fruit) {
    // Append each fruit inside an <h1> tag
    htmlContent += `<h1>${fruit}</h1>`;
  });

document.getElementById('output').innerHTML = fruits;
document.getElementById('loop').innerHTML = htmlContent;

document.getElementById('func').innerHTML = greet();
//functions

function greet(){
    // console.log("Hello world")
    return("Hello world");
}

// calculating  a value

function square(number){
    return number*number;
}
let message = "hey this a message";

document.write(message);
let square_num = square(2);
document.getElementById('square').innerHTML = square_num;

let points = 110;
let type = points > 100 ? 'gold' : 'silver';
customerMessage = `you are a ${type} customer`;
document.getElementById('customer_type').innerHTML = customerMessage;
console.log(type);

//operators
//Arthemetic operator

let x =10;
let y=3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

//increment(++)
console.log(x++);
console.log(x);

//decrement(--)
// console.log(x--)
console.log(--x);
console.log(x);

//Assignment operators

x = x+5
console.log(x);


//Comparison operators
console.log(x>0);
console.log(x>=1);
console.log(x<=1);
console.log(x<1);

//Equality operators

console.log(x==1);
console.log(x===1); 
console.log(x!=1);
console.log(x!==1);

//strict equaity operator
