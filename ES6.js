//  Default function arguments  in ES6

function calculateBill (total, tax = 0.13, tip = 0.15) {
	return total + (total * tax) + (total * tip);
}

const totalBill = calculateBill(100);
console.log(totalBill);

// tax = 0.13 will be the default if no parameter is passed
// or you can use (100, undefined, 0.25)  if you want to change the tax
// 	and leave tax the same