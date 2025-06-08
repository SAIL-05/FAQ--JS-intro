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

// async function user(post) {

// try{ 
//      post = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     let postresult = await post.json();
//     console.log(postresult)
// }
// catch {
//     console.error(err)};
  
// }
// user()


// async function a() {
//     try{
//         let b = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//         let c = await b.json();
//         console.log(c)
//     }
    
//     catch{
//         console.error(err)
//     }
// }








// async function spongebobcheck() {
//     // let inputSpongebobname = document.getElementById("inputspongebob").value
//     // let checksponge = document.getElementById(`check`)
//     try{ 
//      spongebag = await fetch ("https://pokeapi.co/api/v2/pokemon/ditto")
//       let  jsonSponge = await spongebag.json();
//         // console.log(jsonSponge) 
 
//       document.getElementById("image").innerText = jsonSponge

//     }

//     catch{
//         console.error(err)
//     };  
// }
// spongebobcheck()



let student = {
    name : "ade",
    class : "sss",
    age: 15
}
let jsonStudent = JSON.stringify(student)
console.log(jsonStudent)
console.log(student.age)



let user = ["ade" ,"bisi","peju","ay0"]
let jsonuser = JSON.stringify(user)
console.log(jsonuser)




