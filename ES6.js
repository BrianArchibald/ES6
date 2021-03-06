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



///////// New String methods  ///////////////////


const course = 'RFB3';
const flightNumber = '20-AC2018-jz';
const accountNumber = '8252422334RT345235';

course.startsWith('RFB') // true  , it is case sensitive

flightNumber.startsWith('AC',3) // true start looking after 3 characters.
flightNumber.endsWith('jz') // true

accountNumber.endsWith('RT',11) // only take the first 11 numbers and look at those

.includes // checks if anywhere in the string

.repeat // allows you to repeat a string

function leftPad(str, length = 20) {
	return `-> ${' '.repeat(length - str.length)}${str}`; 
}  // will give 20 left spaces for all the items you put in.



/////////// Descrtructing array  ///////////



allows you extract data from something and use them

const person = {
	first: 'Brian',
	last: 'Archibald',
	links: {
		social: {
			twitter: 'url'  
		}
	}
};

const { first, last } = person;  /// give me a variable called
//first and a var called last and take if from person

first // 'Brian'

// using Descrtructing in nested items
// instead of  const twitter = person.links.social.twitter;

const { twitter } = person.links.social;

//renaming variables with destructuring

const { twitter:tweet } = person.links.social; // now names tweet

//use defaults with descrtructuring
const setting = { width: 300, color: 'black'} // no height
const { width = 100, height = 100, color = "blue"} = settings;
// will use width 300 but will set height to 100 and use black



////////////  Destructuring Arrays  /////////////////////

const details = ['Brian', 123, 'brianarchibald.me'];

const name = details[0]; // normal way

const [name, id, website] = details;
console.log(name, id, website);

const data = 'basketball, sports, 90210, 23';
const [itemName, category, sku, inventory] = data.split(',');
// if there are extras items in the array they will just be ignored. or
const [itemName, category, ...other] = data.split(',');  //rest operator ...


///////// Swapping vars with Destructuring  //////////

let inRing = 'Hulk';
let onSide = "Rock";

[inRing, onSide] = [onSide, inRing];  //let is important here

///// Destructing Functions   ///


function convertCurrency(amount) {
	const converted = {
		USD: amount * 0.76,
		MEX: amount * 13.30
	};

	// const hundo = convertCurrency(100);
	// console.log(hundo); // USD 76   MEX 1330

	const {USD, MEX} = convertCurrency(100);
	console.log(USD, MEX);  // order doesnt matter

}

///////   Array.of()   Array.from()  /////////

will take array like elements and turn them into an array, such as 
DOM elements .. Array.from can take a 2nd argument

<div class	= 'people'>
<p> Me </p>
<p> You </p>  // DOM elements can be arrayish

const people = document.querySelectorAll('.people p');

or
const people = Array.from(document.querySelectorAll('.people p'));

//const peopleArray = Array.from(people);
const names = peopleArray.map(person => person.textContent);

////
function sumAll() {
	const nums = Array.from(arguments);  // arguments is arrayish
	return nums.reduce((prev,next) => prev + next, 0);
}

sumAll(2,23,234,242);

////// array.of  /////////

const ages = Array.of(12,33,232,232);
console.log(ages);


//////////  Array.find     Array.findIndex

const post = posts.find(post => {
	console.log(post.code); // code is a key in object
	if(post.code === 'thew323h2') {  //'thew323h2' is the code pair
		return true;
	}
	return false;
});

or even easier

const post = posts.find(post => post.code === 'thew323h2');


//// findIndex

const postIndex = post.findIndex((post) => {
	if(post.code === 'shwsehrwe') {
		return true;
	}
	else return false;
})

or 
const postIndex = post.findIndex((post => post.code === 'sseww');


///////   Array.some()   and Array.every()  //////////
will check items in array to see if some or every matches

const ages = [32,15,19,12];

const adultPresent = ages.some(age => age >=18); // will stop once it reaches
//the first one and return true

const allOldEnough = ages.every(age => age >= 19); // return false




////// Spread Operator  //////

takes every item from a string/array and apply it to the containing 
element

[...'Brian']  // spreads each item into an array

let pizzas = [...featured,'veg' ...specialty]; // concats 2 arrays and 
//adds veg in between as well



// can copy an array as well without affecting the first array

const fridayPizzas = [...pizzas];

<h2 class ='jump'>Spreads</h2>   ///

const heading = document.querySelector('.jump');
cont spans = sparanWrap(heading.textContent);

function sparanWrap(word) {
	return [...word].map(letter => `<span>${letter}</span>`).join('');
} 
//wrap all the letters in a span



const people = Array.from(document.querySelectorAll('.people p'));
//now have array functions
or 
const people = [...document.querySelectorAll('.people p')];


creat new array on a property on an object

const shoppingList = ['Milk', 'Flour', ...deepDish.ingredients];
//takes all the ingredients in the object deepDish and prop ingredients.
// its a true copy and not a reference to the prop

find and remove a comment from an array called comments

const id = 632;

const commentIndex = comments.findIndex(comment => comment.id === id);
//comment index is at 2 you want to remove
const newComments = [...comments.slice(0,commentIndex), ...comments.slice(commentIndex + 1)];

/// Spread into a function  ///

const inventors = ['Einstein', 'Newton'];
const newInventors = ['Musk', 'Jobs'];

// push alone doesn't work creats two arrays, i wnat to just add musk and jobs
// to new array

inventors.push(...newInventors); // works


const name = ['Brian', 'Archibald'];

function sayHi(first, last) {
	alert(`Hey there ${first} ${last}`);
}

sayHi(...name);



///////////  ....Rest Param  ////////////
rest param takes multiple things and packs them into an array....opposite of spread operator


fucntion covertCurrency (rate, ...amounts) {  //will grab multiple amounts 
	console.log(rate, amounts);  /// amounts will be in an array now. rate is not in function
	//or other use
	// return amount.map(amount => amount * rate);
}

convertCurrency(1.54, 10, 23, 33);

// can use when destructuring as well.

const runner = ['Name', 123, 5.5, 5 ,3, 6]; // first name, id, then run lengths
const [name, id, ...runs] = runner;

const team = ['Capt', 'Asst', 'player1', 'player2'];

const [captain, assistant, ...players] = team;



////////////   Object Literal Upgrades      /////////////

const first = 'snickers';
const last = 'archibald';

//old way 
const dog = {
	first: first,
	last: last
};

///but if first and first are the same you can..

const dog = {
	first,
	last
};

// modal

const modal = {
	open:  function () {   //// now only     open() {   }

	},
	close:  function () {

	},
	create:  function () {

	},
};

const keys = ['size', 'color'];
const values = ['medium', 'red'];

const shirt {
	[keys.shift()]; values.shift();
	[keys.shift()]; values.shift();
}// now its an object with size: medium, color: red




///////// Template strings   ///////////////////

const name = 'Lucy'
const sentence = `My dog ${name}`;  ///can also do
// ${age * 7} 


//can do multiple lines   - HTML fragments
const markup = `
	<div class='person'>
	<h2>
		${person.name}
		<span class='job'>${person.job}</span>
	</h2>
	</div>
`;

document.body.innerHTML = markup;

//they can be nested inside of one another


////  tagged template literals

function highlight() {
	return 'cool';
}

const name = 'Snickers';
const age = '100';
const sentence = highlight `My dog's name is ${name} and he is 
	${age} years old`;
	// function will only return the string cool

function highlight(strings, ...values) { //strings is array
				// and breaks up array into 3 chunks , values is snickers and 100
	
}

const name = 'Snickers';
const age = '100';
const sentence = highlight `My dog's name is ${name} and he is 
	${age} years old`;
	// function will only return the string cool

//////// Promises //////////

browser already has a fetch() to retrieve data, you can fetch any type of data not just json 

const postsPromise = fetch('http://somewhere.com/wp-json/wp/v2/posts');

postsPromise      // the thens only fire when the data successfully comes back
	.then(data => data.json())
	.then(data => {console.log(data)})
	.catch((err) => {
		console.error(err);
	})   // runs with error
 

$('a').on('click',function() {
	alert('hey'); // runs when someone clicks it similar to a thne function, runs when clicked
})

///create own promise

const p = new Promise((resolve, reject) => {

	resolve('cool');
});

p.then (data => {
	console.log(data);  // immediately consoles 'cool' 
})

/////////////


const p = new Promise((resolve, reject) => {
	setTimeout (() => {
		resolve('cool');
	}, 1000);
	
});

p.then (data => {
	console.log(data);  // now logs after 1 second
})

////////////

const p = new Promise((resolve, reject) => {
	setTimeout (() => {
		reject(Error('not cool'));
	}, 1000);
	
});

p.then (data => {
	console.log(data); 
})

.catch(err => {
	console.error(err);  /// now logs the error 'not cool'
})


//// chaining promises

const posts = [some data];
const authors = [some more data];


//create two promises, then chain them together

function getPostById(id) {
	// creat a new promise
	return new Promise((resolve, reject) => {
		//use setTimeout to mimic database
		setTimeout(() => {
			//find post we want
		const post = posts.find(post => post.id === id);
		if(post) {
			resolve(post) // send back post
		} else {
			reject(Error('No post found'));
		}
		}, 200);
	});
}

funtion hydrateAuther(post) {
	// create new promis
	return new Promise((resolve, reject) => {
		//find  author
		const authorDetails = authors.find(person => person.name === post.author);
		if(authorDetails) {
		//'hydrate the post object with the author object' 
			post.author = authorDetails;
			resolve(post);
		} else {
			reject(Error('cant find author'));
		}
		
	});
}

getPostById(2)
	.then(post => {
		console.log(post);
		hydrateAuther(post); //this is going to return another promise.
	})
	.then(post => {
		console.log(post);
	} )
	catch(err => {
		console.error(err);
	});

	////// working with multiple promises,
	// you have multiple promises that dont depend on one another and you want to get them
	// both back as soon as possible.

	Promise
		.all([weather, tweets])
		.then(responses => {
			const [weatherInfo, tweetsInfo] = responses; 
			console.log(weatherInfo, tweetsInfo);   // waiting for all the promises to be resolved befor the 'then'
		})
//////////////////////////////

const postsPromise = fetch('data');
const streetCarPromise = fetch('data');

		Promise
			.all([postsPromise, streetCarPromise])
			.then(responses => {
				return Promis.all(responses.map(res => res.json())) // turns reg data into json
			})
			.then(responses => {
				console.log(responses);
			});

/////////////////////////

Key in objects

There also exists a special operator "in" to check for the existence of a property.

The syntax is:

"key" in object

let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist

///////////////  For in loop for objects ////////

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for(let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}

//////// copy object not by reference...normally it is by reference only ////

let user = {
  name: "John",
  age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}

or object.assign

let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }

//another example
let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user);
	

//////////////   Symbols    ///////////////////////

If we want to use a symbol in an object literal, we need square brackets.    Like this:

let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123 // not just "id: 123"
};


//strings dont convert to a string and can't be overwritten.
// they are skipped in    for..in

// object.assign to copy a object works on them and will copy them.

Global Symbols

// read from the global registry
let id = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again
let idAgain = Symbol.for("id");

// the same symbol
alert( id === idAgain ); // true
//////////////////////////////////////

let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name from symbol
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id


/////// ES6 Symbols  ////

are unique identifiers to avoid naming collisions

const brian = Symbol('Brian') // Brian is just a descriptor 

const classRoom = {
	[Symbol('olivia')] : { grade: 80, gender: 'female'},
	[Symbol('olivia')] : { grade: 80, gender: 'female'}
	
}/// olivia's will be separate and not overwrite one another

//can't loop over symbols. 

Object.getOwnProperySymbols(classRoom);
console.log(syms);  //gives array of symbols but not the object, its just the keys that
//  this gives you
const data = syms.map(sym => classRoom[sym])  // will give you the data



////////   Prototypal inheritance   //////

function Dog(name, breed) {
	this.name = name;
	this.breed = breed;
}

Dog.prototype.bark = function() {
	console.log(`Bark my name is ${this.name}`)
}

const mila = new Dog('Mila', 'Lab');
const zoey = new Dog('Zoey', 'Lab');


both mila and zoey inherit from the 1st object and can use mila.bark() and zoey.bark()
the bark is inherited to every instance of Dog

you can change the bark after the fact and it will be the new bark as well

the bark is on the prototype not on the mila,zoey but can be used with them


//////  Class ////

class Dog {  // class declaration

}

or

const Dog = class { // class expression

}
///// basics of a class   with getters and setters


class Dog {  
	constructor(name, breed) {
		this.name = name;
		this.breed = breed;
	}  // no comma
	bark() {
		console.log(`Bark my name is ${this.name}`)
	} 
	static info(){
		console.log("dogs are great")// not accessible to mila and zoey , only static
	}
	get descriptoin() {
		return `${this.name} is a ${this.breed}`;
	}
	set nickname(value) {
		this.nick = value.trim();
	}
	get nicknames() {
		return this.nick;
	}

	//////////    Classes can be extended  ////////////////

	class Animal {
		constructor(name) {
			this.name = name;
			this.thirst = 100;
			this.belly = [];
		}
		drink() {
			this.thrist -= 10;
			return this.thirst;
		}
		eat(food) {
			this.belly.push(food);
			return this.bellly;
		}
	}

	class Dog extends Animal {
		constructor() {
			super(name);   //// need super here that extends Animal
			this.breed = breed;

		}
	}

	const rhino = new Animal ('Rhiney');
	const snickers = new Dog ('Dog' , 'King Charles');