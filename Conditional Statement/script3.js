// if statement
// let startclass = "3pm"
// if (startclass >= "2pm") { 
//      console.log ( "we can start class")
// }


// let group = 10
// if (group <= 15) {
// console.log ( "yes,they a a group")
// }



// if else statement
// let group = 10

// if (group >= 9) {
// console.log ( "yes,they are group")
// }
// else {
//     console.log ("they are not  group") 
// }


// let minimum = 40

// if ( minimum < 30 ) { 
//     console.log ( "pass")
// }
// else {
//     console.log (" fail")
// }




// let startclass = "5pm"

// if (startclass < "4pm ") { 
//      console.log ( "we can start class")
// }
// else {
//      console.log ("we cannot start class" )
// }


// let number = 30 

// if (number % 2===0) {
//      console.log ( "even number")
// }
// else {
//      console.log ("odd number ")
//      }


// let number =  prompt("input a number")
// if (number %  2 === 0) {
//      alert ( "even number")
// }
// else {
//      alert("odd number ") 
//      }


// if ( 10 > 5){ console.log ( "10 is greatert than 5")
// } else 
// { console.log ("5 is greater than 10")}



// if (20 > 5) 
//     {console.log ( "20 is the highest")
// }
// else {console.log ( "5 is the greatest")}

//a is not defined
// if (a > b) {
//   console.log("The first Value is the greatest");
// } else {
//   console.log("The second value is the greatest");
// } 


// let databasepassword = "12345fad"
// let password = "12345fad"

// if ( databasepassword === password) {
//     alert ( "LOG IN")
//     // console.log ( "LOG IN")
    
// }
// else {
// alert ( "INCORRECT PASSWORD")
// // console.log ( "INCORRECT PASSWORD")
// }

// let a = 30
// let b = 40
// alert ( a + b)

// const name =" abbey"
// const myStory = `${name} is a good boy ,${name} is 3 yrs old , ${name} is in primary 5 , ${name} doesnt like woman`

// console.log (myStory)
// alert (myStory)


// PROMPT

// let myAge = prompt( "enter your age")
// console.log (myAge)

// let score = prompt( "enter your score")
// console.log ( `${score} is your score`)

// const name = prompt ("whats your name?")
// console.log ( `WELCOME BACK ${name}`)



// const a = 50;
// console.log(a);
// console.log(typeof a);
// console.log(a.toString());   //conversion of number to string


// parseint and parse float
//parse int - convert strings to number {ignores decimal}
//parse float - convert strings to number {keeps decimal}


// let a = parseInt (prompt( "enter first value"))
// let b = parseInt (prompt( "enter first value"))
// let c = a + b

// console.log (c)
// alert (c)


// let a = 39
// let b = parseInt(a)
// console.log( typeof a)
// console.log ( typeof b)


// let two = "34";
// let test = parseInt(two);

// console.log(two);
// console.log(typeof two);

// console.log(test);
// console.log(typeof test);


// let a = parseFloat (prompt( "enter first value"))
// let b = parseFloat (prompt( "enter first value"))
// let c = a === b

// console.log (c)
// alert (c)


// EXERCISE

// let a = -20
// if ( a > 0 ) {
//     console.log ( `${a} is a positive number`)
// }
// else { console.log (`${a} is a negative number`)}


// let passmark = 40
// if (passmark <=  35 ){
//     console.log ( "pass")}
//  else { console.log ("fail")}


// let pass = parseInt(prompt("enter your score"))
// if (pass >= 40 ){
//     console.log ( "pass")}

//  else { console.log ("fail")}


// else if else

// let a = parseInt(prompt ( "enter a number"))
// if ( a > 0 ) {
//     console.log ( `${a} is a positive number`)}
// else if ( a === 0) {
//     console.log ( "invalid number")}
// else if ( isNaN(a)) { 
//     console.log ("not a Number")}
// else { console.log (`${a} is a negative number`)}


// let a = parseInt(prompt ( "enter a number"))
// if ( a % 2 === 0) {
//     console.log ( `${a} is an even mumber`)}
// else if ( isNaN(a)) { 
//     console.log ("not a Number")}

// else { console.log (`${a} is an odd number`)}



// let a = parseInt(prompt ( "enter first number"))
// let b = parseInt(prompt ( "enter second number"))

// if ( a > b) {
//     console.log ( `${a}  is greater than ${b}`)}
// else if ( isNaN(a)) { 
//     console.log ("not a Number")}
// else { console.log (`${b}  is greater than ${a}`)}

// et grade = parseInt(prompt ( "enter your grade"))
// if ( grade >=0 &&  grade <=39 ) {
//     alert ( "GRADE - F")
// }
// else if( grade >=40 &&  grade <=44 ) {
//     alert (" GRADE - E")
// }
// else if( grade >=45 &&  grade <=49 ) {
//     alert ( "GRADE - D")
// }
// else if( grade >=50 &&  grade <=59 ) {
//     alert ( "GRADE - C")
// }
// else if( grade >=60 &&  grade <=69 ) {
//    alert (" GRADE - B")
// }
// else if( grade >=70 &&  grade <=100 ) {
//     alert ( "GRADE - A")
// }
// else if (isNaN(grade)) {
//     alert ( "please input a number between 0 to 100")
// }
// else {
//     alert ( "invalid score")
// }



let age = parseInt (prompt( "Enter your age to get your ticket price"))

if ( age <= 12 ) {alert ( `${age} years old ticket fee is $5`)}
else if( age <= 18 ) {alert ( `${age} years old ticket fee is $10`)}
else if( age <= 60 ) {alert ( `${age} years old ticket fee is $20`)}
else if (isNaN(age)) { alert ("Not a number")}

else {
    alert (`${age} years old ticket fee is $15`)
}











































