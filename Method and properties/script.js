// Array

let a = [ "apple" , "ball" , "cat" , "dog" ," egg" , "fish"]
console.log (a)

// to get the length
a.length
console.log(a.length)

// to get the index number
// a[2]
console.log( a[4] )

// to add more values to an array
 a.push ("goat")
 console.log (a)

 a.push ( "horse")
 console.log (a)

//  to remove from back 
a.pop ()
console.log(a)


// to remove from front
a.shift ()
console.log(a)

// to add from Front 
a.unshift ( "lion")
console.log (a)

// to check if the value is in the array
console.log (a.includes("ayo"))
console.log (a.includes("cat"))


// to get the index of a value

console.log (a.indexOf ( "cat"))
console.log (a.indexOf ( "goat"))

// checkif if the index/value is not in the array

console.log ( a.indexOf ( "ayo"))


// to attach strings together in an array(can be replaced with anything to space it)
console.log (a.join(" "))


// slice and splice in array 
console.log ( a.slice ( 2,5))
// start and end

console.log (a.splice ( 2))





