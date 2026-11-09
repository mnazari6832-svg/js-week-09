// Tip Calculator - Week 10

// 1. Basic information
const restaurantName = "  Green Garden Restaurant  ".trim();
const billAmount = 100;
const tipPercentage = 15;
const numberOfFriends = 4;

// 2. Arithmetic operators
// Calculate the tip using multiplication and division.
const tipAmount = billAmount * (tipPercentage / 100);

// Add the bill and tip together.
const totalAmount = billAmount + tipAmount;

// Divide the total amount between four friends.
const amountPerPerson = totalAmount / numberOfFriends;

// Round each person's payment to two decimal places.
const roundedAmount = Math.round(amountPerPerson * 100) / 100;

// Use the remainder operator to check leftover cents.
const leftoverCents = Math.round(totalAmount * 100) % numberOfFriends;

// 3. Comparison and logical operators
const validTip = tipPercentage >= 0 && tipPercentage <= 100;
const enoughFriends = numberOfFriends === 4;
const hasRestaurantName = restaurantName !== "";

// Check the conditions.
if (validTip && enoughFriends && hasRestaurantName) {
    console.log("CALCULATION SUCCESSFUL");
}

// 4. String methods
// Use slice() to get the first part of the restaurant name.
const shortName = restaurantName.slice(0, 12);

// Use includes() to check a word.
const hasGarden = restaurantName.includes("Garden");

// Use length to count the characters.
const nameLength = restaurantName.length;

// Use toLowerCase() to change the name to lowercase.
const lowerName = restaurantName.toLowerCase();

// 5. Print the receipt in uppercase letters.
console.log("--------------------------------");
console.log("RESTAURANT RECEIPT".toUpperCase());
console.log("--------------------------------");

console.log(("RESTAURANT: " + restaurantName).toUpperCase());
console.log(("SHORT NAME: " + shortName).toUpperCase());
console.log(("BILL AMOUNT: $" + billAmount).toUpperCase());
console.log(("TIP: " + tipPercentage + "%").toUpperCase());
console.log(("TIP AMOUNT: $" + tipAmount.toFixed(2)).toUpperCase());
console.log(("TOTAL AMOUNT: $" + totalAmount.toFixed(2)).toUpperCase());
console.log(("NUMBER OF FRIENDS: " + numberOfFriends).toUpperCase());
console.log(("EACH PERSON PAYS: $" + roundedAmount.toFixed(2)).toUpperCase());

console.log("--------------------------------");

// 6. Display additional information.
console.log("RESTAURANT NAME LENGTH: " + nameLength);
console.log("DOES THE NAME INCLUDE GARDEN? " + hasGarden);
console.log("LOWERCASE NAME: " + lowerName);
console.log("LEFTOVER CENTS: " + leftoverCents);
console.log("--------------------------------");
console.log("THANK YOU FOR VISITING!");
