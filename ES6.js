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

/////////////regex//////////////

regex: /pattern/

'gordy'.match(/g/); /// finds g in gordy

'gg'.match(/g/g);  // first g is pattern, second g is the all instances
 						// 2nd g is the flag(global flag)
(/./g) // . is a meta character and stands for any character , inclues 
//spaces	

[/*members of a set*/]  .match(/[a-z]/g);  //captures all a-z letters

'abAB'.match(/[A-Z]/g);  // uppercase

'1abA2B1'.match(/[0-9]/g);    /// 3 total   1,2,1

.match(/[a-zA-Z0-9]/g) // matches all of them

.match(/[^A-Z]/);  // ^ matches everything that is not A-Z

.match(/[a-zA-Z]{1, 20}/g) // {}- quantifier.  look for at least 1 letter up to 
//20 times ---

if unknown how long the word will be you can leave out 2nd number {1,}
or you can just use a + instead of {1,} // they are the same.

.match(/[a-z]/gi); // the i is case insenstive flag. will get uppers too.

/////operators//////

a = a + 2  === a += 2   or -= works for substacting

var a = 42
if(a)  /// converts a to Bool // if true, run.

falsy = null, undefined, 0, -0, NaN, "", false


///Destructuring

const = {name, weapon, room} = {
	"name": "Rusty",
	"room": "kitchen",
	"weapon": "candlestick"
}
//name 
//"Rusty"

//Omit certain values
var [a, ,b] = [1,2,3];
console.log(a,b); // 1 3

//combine with spread/rest operator
var [a, ...b] = [1,2,3];
console.log(a,b); // 1 [2,3]

//swap variable easily without temp
var a =1, b=2;
[b, a] = [a,b];
console.log(a,b); // 2 1

//Advance deep arrays
var[a [b [c,d]]] = [1 [2 [[[3,4] 5] 6]]];
console.log ('a:' a, 'b:', b, 'c:', c, "d:", d);
// a: 1 b:2 c: [[3,4],5] d:6


var suspects = [
	{
		name: "rusty",
		color: 'orange'
	}, {
		name: "mrs white",
		color: "red"
	}
]

var [color, color2] = [suspects[0].color, suspects[1].color];
//or the same result below
var [{color: firstColor}, {color: secondColor}] = suspects


//// For of loop  //////////////////////////////////////////////

//can loop over any type of data that is an iterable, except objects

const cuts = ['Chuck', 'Brisket', 'Shank','Short Rib'];

// for (let i = 0; i < cuts.length; i++) {
// 	console.log(cuts[i]);
// }


// cuts.forEach((cut) => {   // can't skip one or abort loop
// 	console.log(cut);
// })


// for(const index in cuts) {
// 	console.llog(cuts[index]);
// }   /// iterate over things that have been added to prototype as well

for (const cut of cuts) {
	console.log(cut);
}

cuts.entries(); // gives your the arrayiterator

const meat = cuts.entries();
//  meat.next()
// gives you done: false // array is not done yet
// then the first index of array
then you can use Destructuring

for (const [i, cut] of cuts.entries()) {
	console.log(`${cut} is the ${i + 1} item`);
}  // Chuck is the 1 item, etc...


function addUpNumbers () {
	let total = 0;
	for (const num of arguments) {
		total += num;
	}
	return total;
}

addUpNumbers(10,23,34,45);


const name = "Brian";
for (const char of name) {
	console.log(char);
} // B r i a n

// you can use for DOM elements

const ps = document.querySelectorAll('p');
for (const paragraph of ps) {
	paragraph.addEventListener('click', function() {
		console.log(this.textContent);
	})
} // logs what is there when clicked

