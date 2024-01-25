let student=[
    {
        name:'Lisa',
        id:1123,
        branch:'CS'
    },
    {
        name:'Raj',
        id:1145,
        branch:'bio'
    }
]
console.log(student);
console.log(student.length);
console.log(student[0]);

//array of object have person details like id,firstName,lastName.I want ,firstName,lastName concatenated

let person=[
    {
        person_id:123,
        firstname:"vinu",
        Lname:"dharshini"
    },
    {
        person_id:128,
        firstname:"janu",
        Lname:"shree"
    }
]
console.log(person[1].firstname.concat(person[1].Lname));





const arr=[1,2,3,4];
// arr.push(7);
// arr.pop();
// arr.shift();
// arr.unshift(12);
// console.log(arr);
// console.log(arr.slice(1,2));
// console.log(arr.splice(0,3));
// console.log(arr.length);


// const cars=new Array(2);
// console.log(cars);
// console.log(cars[1]);

// const cars=new Array('BMW','Volvo','Jaquer','Ford','Kia');
// console.log(cars.length);
// console.log(cars[2]);



const vehicle=new Array('5');
console.log(vehicle[2]);
console.log(vehicle[0]);
console.log(vehicle.length);


const fruits=['Apple','mango','banana'];
const v=fruits.entries();
for(x of v){
  console.log(x);
}

console.log(fruits.includes('mango'));
console.log(fruits.indexOf('banana'));


console.log(fruits.at(2));
console.log(fruits.indexOf('mango'));
const y=[1,2,3,4];
console.log(y.concat(fruits));
console.log(y.copyWithin(1,3));

const checks=(value)=>value<5;
console.log(y.every(checks));

console.log(y.fill(6,1,4));

console.log(fruits.filter((value)=>value.length<=5));

const num=[12,56,33,77,24,89];
console.log(num.find((value)=>value>70));

console.log(num.findIndex((value)=>value>50));

console.log(num.findLast((value)=>value>30));

console.log(num.lastIndexOf(56));

const num2=[2,11,23,[3,2]];
console.log(num2.flat());

fruits.forEach((value)=>console.log(value));


console.log(Array.isArray([1,'lion',9]));
console.log(fruits.join());

console.log(num.reverse());
console.log(num.sort());

const str=[1,'coco',23];
console.log(str.toString());