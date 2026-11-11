//  Put operation
// const URL = "http://localhost:3000/data/5";

// let operation={
//     "method":"PUT",
//     "header":{
//         "Content-Type":"application/json"
//     },
    
//     "body":JSON.stringify({
//         "id": 20,
//         "name": "harish",
//         "age":59
//     })

// }



//post operation

/* const URL = "http://localhost:3000/data";

let operation={
    "method":"POST",
    "header":{
        "Content-Type":"application/json"
    },
    
    "body":JSON.stringify({
        "id": "26",
        "name": "Snake",
        "age":"25"
    })

}


fetch(URL,operation)
.then((res)=>{
    if(res.ok){
        console.log( res.status, res.statusText);
    }
}).catch(res=>console.log(res));
*/



//patch 

/*const URL =  "http://localhost:3000/data/4";
let operation = {
    "method":"PATCH",
    "head":{
        "Content-Type":"application/json"
    },
    "body":JSON.stringify({
        "id":"89",
        "name":"Hyd",
        
    })
}

fetch(URL, operation)
.then((res)=>{
    if(res.ok){
        console.log(res.status,res.statusText);
    }
}).catch(res=>console.log(res));
*/



//Delete 

// const   URL = "http://localhost:3000/data";

// let operation={
//     "method":"DELETE"
// }
// fetch(URL,operation)
// .then((res)=>{
//     console.log(res.status,res.statusText);
// }).catch(res=>console.log(res));


//

const   URL = "http://localhost:3000/data";

let operation={
    "method":"DELETE"
}
fetch(URL,operation)
.then((res)=>{
    console.log(res.status,res.statusText);
}).catch(res=>console.log(res));
