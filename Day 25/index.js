const URL = "http://localhost:3000/products/1";
let operation={
    "method":"DELETE"
}


fetch(URL,operation)
.then((res)=>console.log(res));

