// single-line comment
/*
Comment with
multiple lines
*/

//Assertions
assert.equal(7 + 1, 8); // assert is the object and equal() is the method

//Console
// Printing a value to standard out (another method call)
console.log('Hello!');
// Printing error information to standard error
console.error('Something went wrong!');

//Operators
// Operators for booleans
assert.equal(true && false, false); // And
assert.equal(true || false, true); // Or
// Operators for numbers
assert.equal(3 + 4, 7);
assert.equal(5 - 1, 4);
assert.equal(3 * 4, 12);
assert.equal(10 / 4, 2.5);
// Operators for bigints
assert.equal(3n + 4n, 7n);
assert.equal(5n - 1n, 4n);
assert.equal(3n * 4n, 12n);
assert.equal(10n / 4n, 2n);
// Operators for strings
assert.equal('a' + 'b', 'ab');
assert.equal('I see ' + 3 + ' monkeys', 'I see 3 monkeys');
// Comparison operators
assert.equal(3 < 4, true);
assert.equal(3 <= 4, true);
assert.equal('abc' === 'abc', true);
assert.equal('abc' !== 'def', true);

//Constants
//immutable.
// Declaring and initializing x (immutable binding):
const x = 8;
// Would cause a TypeError:
// x = 9;
//let creates mutable variable bindings:
// Declaring y (mutable binding):
let y;
// We can assign a different value to y:
y = 3 * 5;
// Declaring and initializing z:
let z = 3 * 5;

//Function declaration
//Ordinary function declarations
// add1() has the parameters a and b
function add1(a, b) {
return a + b;
}
// Calling function add1()
assert.equal(add1(5, 2), 7);
//Arrow function expressions
/*Arrow function expressions are used especially as arguments of function calls and
method calls:*/
const add2 = (a, b) => { return a + b };
// Calling function add2()
assert.equal(add2(5, 2), 7);
// Equivalent to add2:
const add3 = (a, b) => a + b;

//Plain objects
// Creating a plain object via an object literal
const obj = {
first: 'Jane', // property
last: 'Doe', // property
getFullName() { // property (method)
return this.first + ' ' + this.last;
},
};
// Getting a property value
assert.equal(obj.first, 'Jane');
// Setting a property value
obj.first = 'Janey';
// Calling the method
assert.equal(obj.getFullName(), 'Janey Doe');

//Arrays
// Creating an Array via an Array literal
const arr = ['a', 'b', 'c'];
assert.equal(arr.length, 3);
// Getting an Array element
assert.equal(arr[1], 'b');
// Setting an Array element
arr[1] = 'β';
// Adding an element to an Array:
arr.push('d');
assert.deepEqual(arr, ['a', 'β', 'c', 'd']);

//Control flow statements
//Conditional statement:
if (x < 0) {
x = -x;
}

//for-of loop:
const arr = ['a', 'b'];
for (const element of arr) {
console.log(element);
}
// Output:
// 'a'
// 'b'

//Modules
/*Each module is a single file. Consider, for example, the following two files with modules
in them:
file-tools.mjs
main.mjs
The module in file-tools.mjs exports its function isTextFilePath():*/
export function isTextFilePath(filePath) {
return filePath.endsWith('.txt');
}
//The module in main.mjs imports the whole module path and the function isTextFilePath():
// Import whole module as namespace object `path`
import * as path from 'path';
// Import a single export of module file-tools.mjs
import {isTextFilePath} from './file-tools.mjs';

//classes
class Person {
constructor(name) {
this.name = name;
}
describe() {
return `Person named ${this.name}`;
}
static logNames(persons) {
for (const person of persons) {
console.log(person.name);
}
}
}

class Employee extends Person {
constructor(name, title) {
super(name);
this.title = title;
}
describe() {
return super.describe() +
` (${this.title})`;
}
}

const jane = new Employee('Jane', 'CTO');
assert.equal(
jane.describe(),
'Person named Jane (CTO)');

//Exception handling
function throwsException() {
throw new Error('Problem!');
}

function catchesException() {
try {
throwsException();
} catch (err) {
assert.ok(err instanceof Error);
assert.equal(err.message, 'Problem!');
}
}
/*Note:
• try-finally and try-catch-finally are also supported.
• We can throw any value, but features such as stack traces are only supported by
Error and its subclasses.
*/

//Casing styles
/*
Common casing styles for concatenating words are:
• Camel case: threeConcatenatedWords
• Underscore case (also called snake case): three_concatenated_words
• Dash case (also called kebab case): three-concatenated-words

In general, JavaScript uses camel case, except for constants.
*/

