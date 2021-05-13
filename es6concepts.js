// DEFAULT PARAMS
function add(x = 0, y = 0) {
    return x + y;
}
console.log(add());


// TEMPLATE LITERALS
let name1 = 'SLIM SHADY'
let x = `My Name is ${name1}`
console.log(x)
let a = 6
let b = 9
let c = `${b + a}`
console.log(c);

// DESTRUCTURING
// IN ARRAY
let arr = [1, 2, 3]
let [arr1, arr2, arr3] = arr
console.log(arr1, arr2, arr3);
// IN ARRAY WITH SPREAD OPERATORS
let array = [2, 3, 4, 5, 6, 7]
let [ar1, ar2, ...ar4] = array
console.log(ar1, ar2, ar4);

// IN OBJECTS
let obj = { name: 'Anshika', boyfriend: 'Unknown', bestBuddy: 'Mood par depend' }
//let { name, boyfriend, bestBuddy } = obj
//console.log(name, boyfriend, bestBuddy);
// WITH SPREAD OPERATORS
let { name, ...extras } = obj
console.log(name, extras)


//REST PARAMETER
function rest_param(x, y, z, ...abc) { //SPREAD OPERATOR
    console.log(x, y, z, abc);
}
rest_param(1, 2, 3, 67, 8, 9, 0, 8)

// FUNCTION DEC
function withAName() {
    console.log(this);

}

// FUNCTION EXPRESSION
let withExpressionAndName = function withAName() {
    console.log('Love ya the most');
}

// ARROW FUNCTION
let arrowFunction = () => { console.log('Arrow Function'); }

let mul = val => val * 2

// ROLE -> CALLBACK FUNCTIONS
// THE this binding is different
// theThis.js has info about it with binding of functions and call/apply
console.log(someVar);
var someVar = 7;
someVar = undefined;
// DECLARATION / INITIALISATION
// TEMPORAL DEAD ZONE of someVar

// COERCION 
// TYPE CONVERSION -> AUTOMATIC
let sixtyNine = '69' + 99; //6999
console.log(sixtyNine / 12);




