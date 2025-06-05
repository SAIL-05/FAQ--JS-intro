// console.log("one")


 
// function caller(){
//  setTimeout(() =>{ console.log("delay")}
//    ,5000){
    //ARGUment

// }

// }
// caller()


// console.log("two")

async function user(name) {

try{  name = await fetch("https://jsonplaceholder.typicode.com/posts")
    let nameOne = await name.json();
    console.log(nameOne)
}
catch {console.error(err)};
  
}
user()

