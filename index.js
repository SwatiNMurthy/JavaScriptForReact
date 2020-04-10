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