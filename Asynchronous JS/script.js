// console.log("one")


 
// function caller(){
//  setTimeout(() =>{ console.log("delay")}
//    ,5000){
    //ARGUment

// }

// }
// caller()


// console.log("two")

// ASYNC/AWAIT

async function user(post) {

try{  post = await fetch("https://jsonplaceholder.typicode.com/posts")
    let postresult = await post.json();
    console.log(postresult)
}
catch {console.error(err)};
  
}
user()