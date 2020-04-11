// var - Function scope
// let - Block scope
// const - Block scope, but read only

function sayHello() {
    for (var i=0; i<5;i++) {
        console.log(i);
    }
    console.log(i);

    for (let j=0; j<5; j++) {
        console.log(j);
    }
    console.log(j); //Throws error

    const x=5;
    x=6; //Error
}

sayHello();

//Objects

const person = {
    name: 'Swati',
    walk: function() {},
    talk() {}
}; //Object with data members and methods.


person.talk();
person['walk'];
person['name'] = 'Snm';


const targetMember = 'name'; //When we donno what property we are gonna refer
person[targetMember.value] = 'Abc';


//this method
//returns reference to current object
const person2 = {
    name: 'Swati',
    walk() {
        console.log(this);
    }
};

person2.walk();


const walk = person2.walk; //NOT CALLING. Just a ref
console.log(walk);

walk(); //gives undefined. or window object if strict is enabled.
//'this' determined by how its called. If its called using an object, it returns the object called.
//If called like above, standalone fn, outside of object, returns Global object, window. If strict mode is enabled, gives undefined.

//To solve above problem, we should use binding
//BIND

//functions are object in JS

const walk2 = person2.walk.bind(person2)//1st object decides what 'this' is gonna hold

walk2();//function actually called.

//ARROW FUNCTION

//OLD
const square = function(number) {
    return number * number;
}

//NEW
const square2 = (number) => {
    return number * number;
}

const square3 = number => number * number;

//All give same result
square(5);
square2(5);
square3(5);


const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: false}
]

const activeJobs = jobs.filter(function(job) {return job.isActive; });
const activeJobs = jobs.filter(job => job.isActive);