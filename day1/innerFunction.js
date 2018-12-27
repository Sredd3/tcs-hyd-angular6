var outerFunction=function(){
//  var firstname = this.firstname;
//  var lastname = this.lastname;
    var self = this;
  var greetFun = function(greetStr){
    console.log(`
        ${greetStr}  
        ${self.firstname} ,
        ${self.lastname}`);
  }
    return greetFun;
}
//call the outer function
var user={
    firstname:'Kiran',
    lastname:'Kumar'
}

var greeter = outerFunction.call(user);

user.firstname='hari .. '
greeter('Welcome !! ');