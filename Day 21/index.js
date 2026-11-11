var orderIdd= 2329;
function orderPlaced(orderId){

    return new Promise((resolve , reject)=>{
        console.log(`Order id : ${orderId} Placed Succesfully `)
        resolve()
    });

}

function orderConfirmed(orderId){
    return new Promise((resolve , reject)=>{
        console.log(`Order Id : ${orderId} Order Confirmed`)
        resolve()
    });
    
}

function orderDispatched(orderId){
    return new Promise((resolve , reject)=>{
        console.log(`order Id : ${orderId} Oreder Dispatched`)
        resolve()
    });
    
}

function orderShiped(orderId){
    return new Promise((resolve , reject)=>{
        console.log(`order Id : ${orderId} Order Shiped`)
        resolve()
    });
    
}

function orderOutForDelivery(orderId){
    return new Promise((resolve , reject)=>{
        console.log(`order Id : ${orderId} Order Out for delivery`)
        resolve()
    });
}

function orderDelivired(orderId){
    return new Promise((resolve, reject)=>{
        console.log(`order Id : ${orderId} Order delivered`)
        resolve()
    });
    
}

orderPlaced(orderIdd)
.then(orderConfirmed(orderIdd))
.then(orderDispatched(orderIdd))
.then(orderShiped(orderIdd))
.then(orderOutForDelivery(orderIdd))
.then(orderDelivired(orderIdd));



/*


function orderPlaced(){

    return new Promise((resolve , reject)=>{
        resolve("Order Placed Succesfully")
    });

}

function orderConfirmed(){
    return new Promise((resolve , reject)=>{
        resolve("Order Confirmed")
    });
    
}

function orderDispatched(){
    return new Promise((resolve , reject)=>{
        resolve("Oreder Dispatched")
    });
    
}

function orderShiped(){
    return new Promise((resolve , reject)=>{
        resolve("Order Shiped")
    });
    
}

function orderOutForDelivery(){
    return new Promise((resolve , reject)=>{
        resolve("Order Out for delivery")
    });
}

function orderDelivired(){
    return new Promise((resolve, reject)=>{
        resolve("Order delivered")
    });
    
}

orderPlaced()
.then((statuss)=>{console.log(statuss);return orderConfirmed()})
.then((temp)=>{console.log(temp);return orderDispatched()})
.then((temp)=>{console.log(temp);return orderShiped()})
.then((temp)=>{console.log(temp);return orderOutForDelivery()})
.then(((temp)=>{console.log(temp);return orderDelivired()}));


*/