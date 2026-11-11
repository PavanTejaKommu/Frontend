function orderPlaced(callback) {
    callback("order placed");
}

function shippingSuccess(callback) {
    callback("shipping success");
}

function orderDispatch(callback) {
    callback("order dispatch");
}


function deliverSuccess(callback) {
    callback("deliver success");
}



orderPlaced((order) => {
    console.log(order)
    shippingSuccess((shipping) => {
        console.log(shipping)
        orderDispatch((dispatch) => {
            console.log(dispatch)
            deliverSuccess((delivery) => {
                console.log(delivery);
            })
        })
    })
});













/* order placed 
shipinng succ
 order dispatch 
 deliver success
 */