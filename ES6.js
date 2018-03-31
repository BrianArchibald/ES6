//  Default function arguments  in ES6  //

function calculateBill (total, tax = 0.13, tip = 0.15) {
	return total + (total * tax) + (total * tip);
}

const totalBill = calculateBill(100);
console.log(totalBill);

tax = 0.13 will be the default if no parameter is passed
or you can use (100, undefined, 0.25)  if you want to change the tax
	and leave tax the same



////// var, let, const ///////////

var are function scoped - will leak out of block if there is no function

let are blocked scope- let doesn't have to be in a function, can't be redeclared in same scope, can be updated

let points = 50;
points = 60; // points is now 60


const are blocked scope - can't be redeclared, can't be updated

let and const can replace IIFE's

use var for top level variables going to be shared
use let for local variables with smaller scope
refactor let and const if sure no reassignment




/// Arrow Functions///////////

arrows are anonymous functions, concise, implicit returns, doesnt rebind value of this when inside another function
the 'this' in arrow functions inherits the this from the parent element




/// Accessing variables outside function scope IIFE and other scope issues

you can access IIFE variables outside the function if you use --  window.varInsideFunction = varInsideFunction;

functions can always remember the variables they see at creation -- inside debugger, variables inside the function are shown
as 'local',  'closure' is variables that the function has closure over, and then ther is 'global' variables.

///Closure Example///
functions can always remember the variables they see at creation !!



(fucntion()) {
	var name = 'james';

	function sayName1() {
		console.log(name);
	}
	window.sayName1 = sayName1;
}
sayName1 has closure over the var name.

or another library system

librarySystem('sandwichLibray', function () {
	// sandwich.js: A simple library for sandwich
	//Demo usage: sandwichLibrary.breads.wheat ==> 'The healthy option'

	var breads = {
		wheat: 'The healthy option',
		white: 'The unhealthy option'
	};

	var fillings = {
		turkey: 'For boring sandwiches',
		cheese: 'For the vegetarians'
	};

	var sandwichLibrary = {
		breads: breads,
		fillings: fillings
	};

	return sandwichLibrary;
})


//then when want to use the library system

(fucntion () {
	var sandwichLibrary = librarySystem('sandwichLibrary');

	console.log(sandwichLibrary);
})(); //object {breads: Object, fillings: Object}


////////Arrow Functions//////////////////////////

// ES5
var multiplyES5 = function(x, y) {
  return x * y;
};

// ES6
const multiplyES6 = (x, y) => { return x * y };

const multiplyES6 = (x, y) => x * y;

//ES5
var phraseSplitterEs5 = function phraseSplitter(phrase) {
  return phrase.split(' ');
};

//ES6
const phraseSplitterEs6 = phrase => phrase.split(" ");

console.log(phraseSplitterEs6("ES6 Awesomeness"));  // ["ES6", "Awesomeness"]

//ES5
var setNameIdsEs5 = function setNameIds(id, name) {
  return {
    id: id,
    name: name
  };
};

// ES6
var setNameIdsEs6 = (id, name) => ({ id: id, name: name });

console.log(setNameIdsEs6 (4, "Kyle"));   // Object {id: 4, name: "Kyle"}

const smartPhones = [
  { name:'iphone', price:649 },
  { name:'Galaxy S6', price:576 },
  { name:'Galaxy Note 5', price:489 }
];
We could create an array of objects with just the names or prices by doing this in ES5:

// ES5
var prices = smartPhones.map(function(smartPhone) {
  return smartPhone.price;
});

console.log(prices); // [649, 576, 489]
An arrow function is more concise and easier to read:

// ES6
const prices = smartPhones.map(smartPhone => smartPhone.price);
console.log(prices); // [649, 576, 489]

////////////////////Prototype//////////////////////

var dog = {
	fetch: function() {
		console.log('fetch');
	}
};

var myDog = Object.create(dog);
myDog.name = 'Alexis';

var randomDog = Object.create(dog);
randomDog.name = 'Hey';

///myDog has acces to fetch function

myDog.fetch(); ///fetch

Object.getPrototypeof(myDog) === dog ////true

/////Constructor Functions///// use capitalized first letter

var testDog = new Dog();

fucntion Dog() {
	//this is set to empty object
	//this is returned
	this.name = name;
}

////////Recursion/////////////

Functions can see themselves, if you can see yourself
you can call yourself.  Functions can call themselves. 
If it calls itself it is a recursive funciton

function recurse () {
	console.log(recurse);
} 
recurse() // prints out function defition.


function recurse () {
	recurse();
}///recursive function  /// max call stack exceeded.

///////////////// Bang operator //////////////////////////


!!(null) //false  - gives you a Boolean value of null

!(null)  // true

Boolean(null) === !!(null)   // may be better to use Boolean operator as it is clearer.