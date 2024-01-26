// let num=5;
// let test =null;
// if(test){
//    num=num+5;
// }
// else{
//     num=num+10;
// }
// // console.log(x);
// function sum(){
   // let num =20
//     num= num+20;          
//     return num;
// }
// console.log(sum());


function square(number){
    return number * number;
}
function cube(number){
    return number*number*number;
}
number=5;
console.log(square(number));
console.log(cube(number));
var number;



function subtract(a,b){
    let sub= a-b;
    return sub;
}
const a= 30, b=8;
console.log(subtract(a,b));



// -------SCOPING------

let least_fav='apple';      
const hateFruit='Lime';
if(true){
    var favorite='Orange';

    console.log(least_fav);
    console.log(hateFruit);
}
console.log(favorite);


if(1){
    let x=10;
    const y=80;
    console.log(x,y);

}
