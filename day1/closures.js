/*function idGenerator(users){
    var initialVal=100;
    for(var i = 0; i < users.length; i ++){
        users[i].id=function(){
          return initialVal + i;
        }
    }
    return users;
}*/

/*function idGenerator(users){
    var initialVal=100;
    for(var i = 0; i < users.length; i ++){
        users[i].id=function(){
              return initialVal + i;
        }()
    }
    return users;
}


var users=[
    {name:'vishnu',id:0},
    {name:'vikram',id:0},
    {name:'hari',id:0},    
    {name:'john',id:0}
]

var newUsers = idGenerator(users);
console.log(newUsers[3].id);
*/

var setTax=function(tax){

    var calculateTotalBill = function(amount){
        return amount + (tax/100*amount)
    }
    return calculateTotalBill;
}

var taxReadyFunc = setTax(18);
taxReadyFunc = setTax(20);

//console.log('Total amount is '+ taxReadyFunc(100));


var calculate = function(a){

    var innerFunction = function(b){
        return a + b;
    }
    return innerFunction;
};

var addTwo = calculate(2);
var addThree = calculate(3);
var addFive = calculate(5);

console.log(calculate(2)(4));