/* //1- Convert the string "123" to a number and add 7.
 var string = "123";
 var result =( Number(string) + 7)
 console.log(result)
 */


/*
// 2. Check if the given variable is falsy and return "Invalid" if it is.
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter a number: ", function (input) {
    var number = Number(input);
    if (!number) {
        console.log("invalid")
    }
    else {
        console.log("valid")
    }
})
*/


/*
//3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue
for (let number = 0; number <= 10; number++) {
    if (number % 2 === 0) {
        continue
    }
    console.log(number)
}
*/


/*
//4. Create an array of numbers and return only the even numbers using filter method.

const numbers = [1, 2, 3, 4, 5];

var evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
})
console.log(numbers)
console.log(evenNumbers)
*/


/*
//5. Use the spread operator to merge two arrays, then return the merged array.

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const mergeArray = [...array1, ...array2]
console.log(mergeArray)
 */



/*
//6. Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday).

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter the day number between 1 to 7: ", function (day) {
    var day = Number(day)
    switch (day) {
        case 1:
            console.log("sat")
            break;
        case 2:
            console.log("sun")
            break;
        case 3:
            console.log("mon")
            break;
        case 4:
            console.log("tue")
            break;
        case 5:
            console.log("wed")
            break;
        case 6:
            console.log("thu")
            break;
        case 7:
            console.log("fri")
            break;
        default:
            console.log("please enter a valid number")
            break;
    }
})
 */



/*
//7. Create an array of strings and return their lengths using map method.
const arr = ["el", "ele", "elem", "element"]

const StringLengths = arr.map(
    function (word) {
        return word.length
    }
)
console.log(StringLengths)
*/


/*
//8. Write a function that checks if a number is divisible by 3 and 5.

const readline = require("readline");
var number = Number(number);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function (number) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("The number is divisible by 3 and 5");
    }
    else {
        console.log("The number is not divisible by 3 and 5");
    }
})
*/



/*
//9. Write a function using arrow syntax to return the square of a number
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var num = Number(num)

rl.question(
    "Enter a number: ",
    (num) => {
        console.log(num ** 2);
    }
)
*/




/*
//10. Write a function that destructures an object to extract values and returns a formatted string.

const user = {
    name: 'boda',
    age: 21,
    city: 'Tanta'
}


const getInfo = (user) => {
    const { name, age, city } = user;
    return `My name is ${name} and I'm ${age} and I'm lives in ${city}`;
}
console.log(getInfo(user))
*/





/*
//11. Write a function that accepts multiple parameters (two or more) and returns their sum.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sum(num1, num2, num3, num4) {
    return num1 + num2 + num3 + num4;
}

rl.question("Enter numbers (e.g. 5 10 15 20): ", function (answer) {

    let nums = answer.trim().split(" ").map(Number);

    let num1 = nums[0] || 0;
    let num2 = nums[1] || 0;
    let num3 = nums[2] || 0;
    let num4 = nums[3] || 0;

    let result = sum(num1, num2, num3, num4);
    console.log("Sum is:", result);

    rl.close();
});
*/



/*
//12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message.

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Sucess")
        }, 3000);
    });
}

console.log(getData())

getData().then((massage) => {
    console.log(massage)
});
const PromiseState = getData();

setTimeout(() => {
    console.log(PromiseState)
}, 3500)
*/


/*
//13. Write a function to find the largest number in an array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function gitMaxNum(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }

    }
    return max;
}

console.log(gitMaxNum(numbers));
 */




/*
//14. Write a function that takes an object and returns an array containing only its keys.


function getKeys() {
    const user = {
        name: "Eng Abdullah",
        age: 21,
        job: "Engneer",
        His_love: {
            name: "Rahma",
            age: 20,
            job: "cute engneer"
        }
    }
    console.log(Object.keys(user));
}

getKeys();
 */



/*
//15. Write a function that splits a string into an array of words based on spaces.

const name = "Abdullah Ashraf Abdullah"


function splitName(str) {
    return str.split(" ")
};

console.log(splitName(name))
*/


//B. Part 2: Essay Questions (2.5 Grade): 


/*
/////1. What is the difference between forEach and for...of? When would you use each? 
forEach(): Used to iterate over all array elements and perform an action on each element. It does not support break or continue.

for...of: Used to iterate over iterable objects and gives more control over the loop. It supports break, continue, and await.

When to use each:
- forEach() for simple array iteration.
- for...of when you need more control over the loop.
 */


/*
///2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples. 
1. Hoisting:

Hoisting is a JavaScript behavior where variable and function declarations are processed before code execution, making them available within their scope.

2. Temporal Dead Zone (TDZ):

TDZ is the period between entering a scope and declaring a let or const variable. During this period, accessing the variable causes a ReferenceError.

Example:
- var is hoisted and initialized with undefined.
- let and const are hoisted but cannot be accessed before declaration.
- Function declarations can be called before they are defined.
In short: Hoisting moves declarations to the top conceptually, while TDZ prevents accessing let and const before their declaration.
 */



/*
////3. What are the main differences between == and ===?
== (Loose Equality): Compares two values after performing type conversion if necessary.

=== (Strict Equality): Compares both value and data type without type conversion.

Example:
- 5 == "5" → true
- 5 === "5" → false
Main difference: == compares values with type coercion, while === compares both value and type.

Recommendation: Always prefer === in JavaScript to avoid unexpected type conversions.
 */



/*
///4. Explain how try-catch works and why it is important in async operations.
try-catch is used in JavaScript to handle errors and prevent the program from crashing unexpectedly.
- try: Contains the code that might produce an error.
- catch: Handles the error if one occurs.
Why is it important in async operations?

In asynchronous operations, such as API requests or database calls, errors may happen while waiting for a response.

Using try-catch with async/await allows us to catch these errors and handle them properly instead of stopping the application unexpectedly.

In short: try-catch helps manage errors, improve application stability, and handle failed asynchronous operations gracefully.
 */


/*

////5. What’s the difference between type conversion and coercion? Provide examples of each.
1. Type Conversion (Explicit):

When the developer manually converts a value from one data type to another.

Example: Converting a string to a number using Number().

2. Type Coercion (Implicit):

When JavaScript automatically converts one data type to another during an operation.

Example: Adding a number to a string causes JavaScript to convert the number into a string.

Main Difference:
- Type Conversion: Done manually by the developer.
- Type Coercion: Done automatically by JavaScript.
 */


