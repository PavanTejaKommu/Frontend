console.log("Start");


setTimeout(()=>{
    console.log("First Callback");


}, 3000);
    for( i =0; i <= 5000; i++){
        console.log("i");
    }


setTimeout(() => {

    console.log("Second Callback");

}, 1000);