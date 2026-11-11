function add(val){
  return  new Promise((resolve, rejec)=>{
    resolve(val + 10)
    
})
}


function sub(val){
    return new Promise((resolve,reject)=>{
        resolve(val-5)
    })
}
function mul(val){
    return new Promise((resolve , reject)=>{
        resolve(val * 20)
    })
}
function div(val){
    return new Promise((resolve , reject)=>{
        resolve( val / 5)
    });
}


add(10)
.then((addres)=>{console.log(addres); return sub(addres)})
.then((subres)=>{console.log(subres); return mul(subres)})
.then((mulres)=>{console.log(mulres); return div(mulres)})
.then((divres)=>{console.log(divres)});

