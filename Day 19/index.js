function tenth(callback) {
    callback("SSC completed");
}
function inter(callback) {
    callback("Inter completed");
}
function btech(callback) {
    callback("B Tech completed");
}

function mtech(callback) {
    callback("M tech completed");
}

function job(callback) {
    callback("Got the job ");
}

tenth((ten) => {
    console.log(ten)
    inter((interv) => {
        console.log(interv);
        btech((btechv) => {
            console.log(btechv);
            job((jobv) => {
                console.log(jobv);
            })
        })
    })
});









