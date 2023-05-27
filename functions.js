//first function
function remain(a,b) {
    return a%b;
}
console.log(remain(10,3)); //1


//simple simple calculator
function add(x,y) {
    return x+y;
}

function sub(x,y) {
    return x-y;
}

function div(x,y) {
    return x/y;
}

function mul(x,y) {
    return x*y;
}

console.log(add(2,5)); //7
console.log(sub(16,4)); //12
console.log(div(16,6)); //2.6666666666666665
console.log(mul(2*4)); //


//little bit advanced calculator
function calculator(x,y,operator) {
    if(operator == '+'){
        return x+y;
    }else if(operator == '-') {
        return x-y;
    }else if(operator == '/') {
        return x/y;
    }else if(operator == '*') {
        return x*y;
    }
}
    console.log(calculator(2,5,'+')); //7
    console.log(calculator(21,5,'-')); //16
