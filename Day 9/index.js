console.log("Hello world ");
// alert("Helloallert");



function add(a, b) {

    a = 20;
    b = 30;
    let c;
    c = a + b;

    console.log(c);

}

add(10, 20);

function game() {

    let a = Math.random();

    if (a > 0) {
        console.log('a greater than 0 ' + a);
    } else if (a < 0) {
        console.log('a is les than 0' + a);
    } else {
        console.log('a is equal to 0' + a);
    }

}

game();


function numbers() {
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
}

numbers();



function square(n) {
    let mul = n * n;
    console.log(mul);
}

square(10);



function evenOrOdd(number) {
    if (number % 2 == 0) {
        console.log(' Given number is Even Number');
    } else if (number == 0) {
        console.log(' Given number is Number is 0');

    } else {
        console.log('Given number is Odd Number');
    }

}

evenOrOdd(100);



function palindrome(number) {
    let original = number;
    let reversed = 0;
    while (number > 0) {
        let reminder = number % 10;
        reversed = reversed  * 10 + reminder;
        number = Math.floor(number / 10);
    }
    console.log(reversed);
    if (original == reversed) {
        console.log('Given number is an palindrome ');
    } else {
        console.log('The given number is not an palindrome');
    }

}

palindrome(123321);


function arraysProblem(){



let arr = [ 1 ,2,3,4,5,6,7,8,5,4,8,2,];


arr.push(20);
arr.pop(2);


}