namedFunction();
//attempting to call the funcExpression will lead in error
//funcExpression();
function namedFunction(){
    console.log('Named function for demonstrating function hoisting');
}
var funcExpression = function(){
    console.log('This function will not be hoisted');
}
//funcExpression();
function loopItems(){

    for (var i = 0; i < 10; i++ ){
        console.log('The value of i is '+i);
    }

    console.log(`The value of i after the loop is ${i}`)
}

loopItems();

var user={
    name:'Ravi',
    place:'Chennai'
}

var car={
    name:'BMW',
    model:'X5'
}

var obj={
    printName:function(){
        console.log('The name is '+this.name);
    }
}