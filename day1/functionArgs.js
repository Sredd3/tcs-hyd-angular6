var printName=function(fname, lastname, city){
    console.log('Function called with '+ arguments.length);
    console.log(fname +' '+lastname +' from '+city);
}

//printName('Ravi', 'Kumar', 'Chennai', 22);
//printName('Ravi', 'Kumar');

//variable scope in Javascript

var functionScopeDemo=function(){
    //console.log(notDefined);
    //variables will be hoisted to the top of the function
    // var declaredLater ;
    console.log(declaredLater);
    var flag = true;
    if (flag){
        var declaredLater = "Getting initialized now";
    }
    console.log('Logging after the if Block ',
     declaredLater);
}
functionScopeDemo();