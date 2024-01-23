let num = 5;
let test = null;
if(test){
    num = num+5;
}
else{
    num=num+10;
}

function sum(){
    num=num+20; 
    return num;       //revisit
}
console.log(sum());

