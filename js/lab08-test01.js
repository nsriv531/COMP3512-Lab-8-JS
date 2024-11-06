/* add code below this */

// 1. Provide a prompt to the user to enter a bill total.
let billTotal = prompt("Please enter the bill total:");

// 2. Convert this user input to a number.
billTotal = Number(billTotal);

// 3. Define a constant for the tip percentage.
const TIP_PERCENTAGE = 0.10;

// Calculate the tip amount.
let tipAmount = billTotal * TIP_PERCENTAGE;

// 4. Display the bill total and tip amount in the console.
console.log(`For a bill of $${billTotal}, the tip should be $${tipAmount}`);