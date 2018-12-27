'use strict';

var car={
    'name':'BMW',
    'model':'X9',
    'price':2300000,
    description:function() {
        console.log('The name of the car is '
            + this.name+' model '
            + this.model + ' price '
            +this.price);
    }
}

var car2={
    'name':'Baleno',
    'model':'Alpha',
    'price':300000,
    description:function() {
        console.log('The name of the car is '
            + this.name+' model '
            + this.model + ' price '
            +this.price);
    }
}


//car2.description();

var sum = function(a,b){
    console.log(this);
}
sum(23,23);