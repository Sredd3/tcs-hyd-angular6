var user={
    id:12,
    name:'ram',
    place:'bangalore'
}

var iskon_temple={
    id:344,
    name:'Iskon Temple',
    place:'Hyderabad'
}

var printName = function(greet, message ){
    console.log(greet +' '+this.name+',  '+message);
}

//printName.call(user, "Hey!!", "How are you doing today");
//printName.call(iskon_temple, "Welcome to ", " ");

//printName.apply(user, ["Hey!!", "How are you doing today"]);

var result = printName.bind(user);
console.log('***************');
console.log('%%%%%%%%%%%%');
result('Hi!! ', ' welcome ')

