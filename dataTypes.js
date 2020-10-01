//======Task 8, part 2, bullet 2: (Definitions of the following Data types) ======

// Integer definition: An Integer is a non-fractional or whole number that is either positive or negative.
// Interger example below:
let number = 111111111111111; //Integers are numbers that have no period or exponent notations and have a maximun of 15 digits that are acurate.

//Double definition: The double refers to the type of floating-point number that has more digits to the right of the desimal point than a single-precision number. (Javascript always stores numbers in 64-bit floating point numbers.)
// Double example below:
let desimal = 0.1; // x will be 0.10000000000000002, a maximum number of 17 desimals exist in Javascript but these aren't always 100 percent accurate.

// String definition: Strings are none or plenty of characters that are written within quotation mark: "" || ''.
// String example below:
let information = "zero or lots of characters between quotation marks";

// Array definition: An array is a single and special variable that can store more than one value at a time. (i.e- A list of fruit types for example, under the variable information.) The values are seperated by "," and written between square brackets "[]".
// Example of an array below:
let type = ["type1", "type2", "type3"]; // Different types for a particular variable category.

// Object definition: An object allows you to store many values to a specific variable. (i.e- different information stored for a particular object/variable.) The values are seperated by "," but different from the array, are written between curly brackets "{}".
// Example of an object below:
let specificInfo = { color: "Blue", height: "5 cm", weight: "10 kg" }; // Different information stored about a specific variable.

// Task 8, part 2, bullet 3, data output, following bullet 2:
console.log(number);
console.log(desimal);
console.log(information);
console.log(type);
console.log(specificInfo);

// Task 8, part 2, bullet 4, 'typeof' function used to check above variables:
console.log("This is a " + typeof number + " with the value of " + number + ".");
console.log("This is a " + typeof desimal + " with the value of " + desimal + ".");
console.log("This is a " + typeof information + " with the value of " + information + ".");
console.log("This is a " + typeof type + " with the value of " + type + ".");
console.log("This is a " + typeof specificInfo + " with the value of " + specificInfo + ".");

// Task 8, part 2, bullet 5, array with numbers & strings:
let numberString = [1 + "two" + 3];
// I expect the about data type to be a string because the array will automatically output as a string because of the word 'two', that is written between quotation marks within the same square brackets as the numeric values.

// Task 8, part 2, bullet 6,  'typeof' function used for above data type:
console.log("this is a " + typeof numberString + " with the value of " + numberString + ".");

// Task 8, part 2, bullet 7, null & undefined variable:
// Undefined variable-
let noDeclaration;

// Null Variable-
let nothing = { color: "blue", height: "5 cm", weight: "10 kg" };
nothing = null; // Even though the variable data has been removed with the 'null= nothing' data type, the variable data type is still classified as an object.

console.log(nothing);
console.log("This is a " + typeof nothing + " with the value of " + nothing + ".");
// ====== End of Task 8 ======

