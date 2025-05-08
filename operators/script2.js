// OPERATOR

// 1. Arithmetic operators

// let a = 20
// let b = 10
// let c = "10"


// console.log(a + b)
// console.log (a - b)
// console.log (a / b)
// console.log (a % b)
// console.log (a * b)

// // with a string
// console.log ( a + c)
// console.log ( c - b)
// console.log ( c * a)
// console.log ( c / a)
// console.log ( c % a)

// unary { increment and decrement}
// console.log (++a)
// console.log (--b)

// // prefix
// let d = 10
// let e = ++d

// console.log ( d)
// console.log ( e)

// // postfix

// let f = 10
// let g = f++

// console.log ( f)
// console.log ( g)

// 2. Comparism operators (a boolean answer, true/false)

// // 1. equal 
// let a = 10
// let b = 15
// let c = "10"

// console.log ( a==b)
// console.log ( a==c)


// 2.not equal
// let d = 10
// let e = 15

// console.log ( d != e)

// let f = 10
// let g = 10

// console.log ( f != g) ?//true

// 3. strictly equal
// let a = 10
// let b = 15
// let c = "10"

// console.log ( a===b)   //true
// console.log ( a===c)  //false

// // 4. strictly inequality
// let d = 10
// let e = 15

// console.log ( d !== e) //true,they are not equal

// 5. greater than and less than
// let x = 20
// let y = 10

// console.log ( x > y)
// console.log ( x < y)

// // 6. greater than or equals to and less than or equals to
// let  c = 50
// let d = 40

// console.log ( c >= d)
// console.log (c <= d ) 



// 3.LOGICAL OPERATOR

// 1. logical AND (&&) and  2. logical OR (||)

// let a = 20
// let b = 10

// console.log ( a >19  &&   b >9)  //&& true

// console.log ( a >25  ||   b >11)   //|| false 



// 3.logical NOT
//  opposite of the result.


// Logical Operators Precedence

//Ayo's Admission Details
// const fee = true;
// const uniform = false;
// const textbooks = false;
// const idCard = false;

// const checkOR = fee || !textbooks || uniform || idCard;
// const checkAND = fee && textbooks && uniform && idCard;
// const checkAyo = fee && textbooks;
// const checkAyoAgain = (fee && idCard) || (fee && uniform);



// console.log (checkOR)  //true
// console.log (checkAND)   //false
// console.log(checkAyoAgain);   //false
// console.log ( checkAyo)  //false
// // console.log("from idcard", !idCard)


// Conditional operators or Ternary
//  syntax
// var a = 10 ? "yes" : "no"

// console.log (a)

// let x = 10
// let y = 30
// let z = x > y ? "yes" : "no"

// console.log (z)

let ayoAge = 18
let passAge = 18
let ayoagain = ayoAge >= passAge ? "YES" : "NO"

console.log(ayoagain)








