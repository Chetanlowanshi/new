// Async vs sync
//   console.log("1");
//   console.log("2"); 
//   console.log("3");


//  setTimeout vs setInterval

//  setTimeout(()=>{
//     console.log("hello");
//  } , 3000)


// setTimeout => Example - Instagram

// console.log("template of story ");
//  setTimeout(()=>{
//     console.log("data of story");
//  } , 7000) 

//  console.log("templeate of body");
//  setTimeout(()=>{
//     console.log("data of body");
//  } , 5000)
//  console.log("template of footer");

 
// setTimeout(()=>{
// console.log("hlooooo");
// } , 3000)

// const name =function(){
//     console.log("chetan");
//     }
// setTimeout( name,2000)


// const changetext =(function(){
//     document.querySelector('h1').innerHTML ="My name is Chetan"
// })
// const changeme = setTimeout(changetext,2000)
 

































































// _______________________________________________________________________________________________________________________________
 
// Call BackFunction



//  _______________________________________________________________________________________________________

// Promise
// then and catch in the place on if else

// const result = new Promise((resolve,reject)=>{
//     console.log("hlow");
// })



// const serverReg=()=>{
//     return new Promise ((res,rej)=>{
//    console.log("I am a new Request on server");
//    res("data sent")
// // rej("promise check your connection")

//     })
// }
//  let promise = serverReg();
//  promise.then(()=>{
//     console.log("rendering data on front end");
//  })
//  promise.catch(()=>{
//     console.log("data cant be abstracted");
//  })


// ______________________________________________________________________________________________

//  async await

// console.log("1");

// async function hello(){
//     console.log("Hlo friends");
// }
//  let result =hello();
//  console.log(result);

// console.log("2");





 async function apiDelhi(){
 return new  Promise((res , rej)=>{
    setTimeout(()=>{
     console.log("weather data of Delhi");
     res ("Succesful")
    },3000)
 }) 
}


async function apiPune(){
    return new  Promise((res , rej)=>{
       setTimeout(()=>{
        console.log("weather data of Pune");
        res ("Succesful")
       },3000)
    }) 
   }
//  apiDelhi();
//  apiPune();

async function GetWeatherDate(){
   
}











































































