var sum = function(a,b){
    return a + b;
}

var subtract = function(a , b){
    return a - b;
}

var product = function(a, b){
    return a * b;
}

var biFunction = function(fun, a, b){
    return fun(a,b);
}


var printName = function(firstname, lastname){
    console.log(firstname + ' '+ lastname);
}

var divide = function( a, b){
    console.log('The value of division of a: '+a+' b >> ' + b);
    return a / b;
}

biFunction(printName, 'John', 'Kumar');
var result = biFunction(divide, 100, 5);

console.log(result);