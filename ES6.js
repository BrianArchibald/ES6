//  Default function arguments  in ES6

function calculateBill (total, tax = 0.13, tip = 0.15) {
	return total + (total * tax) + (total * tip);
}

const totalBill = calculateBill(100);
console.log(totalBill);

// tax = 0.13 will be the default if no parameter is passed
// or you can use (100, undefined, 0.25)  if you want to change the tax
// 	and leave tax the same



// var, let, const

// var are function scoped - will leak out of block if there is no function

// let are blocked scope- let doesn't have to be in a function, can't be redeclared in same scope, can be updated

let points = 50;
points = 60; // points is now 60


// const are blocked scope - can't be redeclared, can't be updated

// let and const can replace IIFE's

// use var for top level variables going to be shared
// use let for local variables with smaller scope
// refactor let and const if sure no reassignment
