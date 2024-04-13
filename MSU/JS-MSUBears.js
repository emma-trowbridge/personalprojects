
//Here is a JavaScript program where the code prints the numbers from 1 to 100
// num % 3 === 0 --- prints MSU for multiples of 3
// num % 5 === 0 --- prints Bears for multiples of 5
// num % 3 === 0 && num % 5 === 0 --- prints MSU for multiples of both 3 and 5


for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("MSUBears");
    } else if (num % 3 === 0) {
        console.log("MSU");
    } else if (num % 5 === 0) {
        console.log("Bears");
    } else {
        console.log(num);
    }
}