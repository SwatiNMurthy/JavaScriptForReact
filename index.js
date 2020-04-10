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


