// Coding Challenge #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// 1. Store Mark's and John's mass and height in variables
var markMass1 = 78;
var markHeight1 = 1.69;
var johnMass1 = 92;
var johnHeight1 = 1.95;

var markMass2 = 95;
var markHeight2 = 1.88;
var johnMass2 = 85;
var johnHeight2 = 1.76;

// 2. Calculate both their BMIs using the formula (you can even implement both
//     versions)

// Data 1
var markBMI1 = markMass1 / markHeight1 ** 2;
var johnBMI1 = johnMass1 / johnHeight1 ** 2;
console.log('Data 1');
console.log('Mark: height:', markHeight1, 'mass:', markMass1, 'BMI:', markBMI1);
console.log('John: height:', johnHeight1, 'mass:', johnMass1, 'BMI:', johnBMI1);

// Data 2
var markBMI2 = markMass2 / markHeight2 ** 2;
var johnBMI2 = johnMass2 / johnHeight2 ** 2;
console.log('Data 2');
console.log('Mark: height:', markHeight2, 'mass:', markMass2, 'BMI:', markBMI2);
console.log('John: height:', johnHeight2, 'mass:', johnMass2, 'BMI:', johnBMI2);

// 3. Create a Boolean variable 'markHigherBMI' containing information about
//     whether Mark has a higher BMI than John.

markHigherBMI1 = markBMI1 > johnBMI1 ? true : false; // markHigherBMI = markBMI1 > johnBMI1

markHigherBMI2 = markBMI2 > johnBMI2 ? true : false; // markHigherBMI = markBMI2 > johnBMI2

// Coding Challenge #2

// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

// Data 1 
console.log('Data 1');
if (markHigherBMI1) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}

// Data 2
console.log('Data 2');
if (markHigherBMI2) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}

// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

// Data 1 
console.log('Data 1');
if (markHigherBMI1) {
    console.log(`Mark's BMI${markBMI1} is higher than John's${johnBMI1}!`);
} else {
    console.log(`John's BMI${johnBMI1} is higher than Mark's${markBMI1}!`);
}

// Data 2
console.log('Data 2');
if (markHigherBMI2) {
    console.log(`Mark's BMI${markBMI2} is higher than John's${johnBMI2}!`);
} else {
    console.log(`John's BMI${johnBMI2} is higher than Mark's${markBMI2}!`);
}