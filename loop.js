let num=[1,2,3,4,5];
for(i of num){
    console.log(i);
}

// num.forEach((value)=>console.log(value));

const cars=['BMW','Volvo','Ford'];
for(i in cars){

    console.log(i +":"+ cars[i]);
}



let choice ='sunny', temperature=75;
if(choice === 'sunny'){
    if(temperature>70){
        console.log(`It is ${temperature} degree temperature outside , so it is very hot outside`);
    }
    else if(temperature<70){
        console.log(`It is ${temperature} degree temperature outside, so it is mild hot outside`);
    }
    else{
        console.log("It too hot outside");
    }
}
else{
    console.log("It's very cold outside");
}


let month='Apr';
switch(month){
    case 'Jan':
        console.log('It\'s January month');
        break;
    case 'Feb':
        console.log('It\'s Febuary month');
        break;
    case 'March':
        console.log('It\'s March month');
        break;
    case 'Apr':
        console.log('It\'s April month');
        break;
    default:
        console.log('Thankyou');
}


const value=20;
console.log(value>15? value*2:value);


// let person=[
//     {
//         person_id:123,
//         firstname:"vinu",
//         Lname:"dharshini"
//     },
//     {
//         person_id: 128,
//         firstname:"janu",
//         Lname:"shree"
//     },
//     {
//         person_id: 124,
//         firstname:"sumi",
//         Lname:"malar "
//     }
// ]

// function getRequired(person,fname,Lname){
//     let out=[];

//     for(let i=0;i<person.length;i++){
//         out=person.push(person[i][fname]+person[i][Lname]);
        
//     }
//     return out;
// }
// const result=getRequired(person,"firstname","Lname");
// console.log(result);




function Sibling(first,second,third,firstAge,secondAge,thirdAge){
    this.FirstSib=first;
    this.SecondSib=second;
    this.ThirdSib=third;
    this.FirstAge=firstAge;
    this.SecongAge=secondAge;
    this.ThirdAge=thirdAge;
}

const family= new Sibling('Lisa','Kavi','Tina',23,14,10);
console.log(family);




let test=false;
while(test){
    console.log(`The testcases are ${test},that is success`);
}
console.log(`Testcases are ${test}, that is failed`);


let n=5;
let words='The aspire systems in Siruseri';
let one=words.split(" ");
let len=one.length;
while(n===len){
    console.log(one);
    break;
}
console.log(len);