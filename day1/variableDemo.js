var message="hello";

//console.log(message);

message = true;
//console.log(message);
//console.log(typeof message);

//node filename.js
/*
  javascript borrows
  the syntax from Java language
  This is a multi line comment
*/

//semicolons are optional in Javascript
//object in Javascript
var account = {
    'first-name':'Dhananjay',
    addresses:[
        {
            city:'bangalore',
            zipCode: 577142,
            state:'Karnataka',
            type:'communication'        
        },
        {
            city:'bangalore',
            zipCode: 577142,
            state:'Karnataka',
            type:'permanent'        
        }
    ],
    age:33,
    isCurrrent:true,
    
}

account.nominee='Vineetha';

//console.log(account.address.city);
//console.log(account['first-name']);
console.log(account.addresses.length);
console.log(account.addresses[1]);


           