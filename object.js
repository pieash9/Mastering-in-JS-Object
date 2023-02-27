//no.1 create object using object literals
const player = {};
player.name = "small nirob";
player.specialty = "bats Man";
player.bat = function () {
  console.log("swing your bat");
};
// console.log(player);
// player.bat();

const student ={
    name:'pandey',
    job:'khay andey',
    ball : function(){
        console.log('throw th eballl');
    },
    salary: 20000
}
// console.log(player2);
// player2.ball()

//no.2  object constructor

const person = new Object();
// console.log(person);

//no. 3 object create method
// const item = Object.create(null);
const atel = Object.create(student)
// console.log(atel.name);

//no. 4 class
class Person{
    name='abul'
    address='sadarghat';
    constructor(age){
        this.age = age;
    }
}
const person1 = new Person(56);
// console.log(person1);

//no.5 function

function Car(model,price){
    this.model=model;
    this.price=price;
}
const tesla = new Car('elon',32);
console.log(tesla);