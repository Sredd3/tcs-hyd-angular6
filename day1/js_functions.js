//functions as first class citizens
/*
    1. function can be assiged to a variable
    2. function can be passed as argument
    3. function can be returned from a function
*/

var x = 45;
//console.log('x', x);
//function expresession
var x_fun = function(){ return 45;}
//console.log('x_fun', x_fun);


var executeFun = function (fun){
    console.log('executing a function');
    return fun();
}
//console.log(executeFun(x_fun));

//function can return another function

var returnFunction = function(a, b ){
    var sum = function(a, b){
        return a + b;
    }
    return sum;
}

var valueReturned = returnFunction(45,56);
console.log(valueReturned(4,4));