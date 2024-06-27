'use strict'

let from = 0;
const to = 5;

function printNumbers(interval){
    from++;
    if(from === to){
        console.log(to);
        clearInterval(interval);
    } else {
        console.log(from);
    }
}

const interval = setInterval(() => printNumbers(interval), 2000);



