console.log("Hello Javascript");
console.log("Script");


function myfunc(){
    window.history.back();
}

// const example=document.getElementById("calc");
// document.getElementById("")

// var a=document.querySelector("button");
// function change(){
//     a.style.color="red";
// }

// const b =document.querySelector("button");
// b.addEventListener("click", (event)=>{
//     b.textContent="Continue...";
// })


// const first=new Promise((resolve,reject)=> {
//     let f=true
//     if(f){
//         setTimeout(resolve,1000,'Ram reached')
//     }
//     else{
//         reject('Ram not reached');
//     }
// })
//   const second =new Promise((resolve,reject)=> {
//     let f=false
//     if(f){
//         setTimeout(resolve,2000,'Vasu reached')
//     }                                                       //promise
//     else{
//         reject('Vasu not reached');
//     }
//   })
//   const third =new Promise((resolve,reject)=> {
//     let f=true;
//     if(f){
//         setTimeout(resolve,3000,'Kevin reached')
//     }
//     else{
//         reject('Kevin not reached');
//     }
//   })


//   Promise.allSettled([first,second,third])
//   .then((message)=>console.log(message))
//   .catch((error)=>console.log(error))


//   const wait=new Promise((resolve,reject)=>{
//     let a=true;
//     if(a){
//         setTimeout(resolve, 4000,"Ticket has confirmed");
//     }
//     else{
//         reject("Ticket has rejected",2000);
//     }
//   })                                                                     //async await

//   async function myfunc(){
//     try{
//         const res = await wait;
//         console.log(res);
//         console.log("ThankYou!");
//     }
//     catch(error){
//         console.log("Error Occured");
//     }
//   }
//   myfunc();




//   function greet(){
//     console.log('Good Morning');
//   }
//   function status(name){                                  //callback
//     console.log("Hello"+ " " + name);
//   }
//   setTimeout(greet,3000);
//   status('Kevin');

  let a=9;b=8;
  let x= (a,b) => (a*b);
  console.log(x(a,b));


  const res={
    Fname:'Vinu',
    Age:21,
    Domain:'LAMP',
    details:function(){
        return this.Fname +" "+ this.Age + " " + this.Domain;
    }
  }
  console.log(res.details());


  y=5;
  console.log(y);
  var y;                   //hoisting


  const num = [3,9,6,2,8];
  console.log(num.filter(item=>item%3==0));
 
console.log(num.map(item=>item*2));

const num1=[2,3,4,5,9];
const result=num1.filter(myfunc);

function myfunc(item){
  return item>4;
}
console.log(result);

// const arr=['Apple','mango','banana'];
// console.log(arr.join(" * "));
// console.log(arr.pop());
// console.log(arr);
// console.log(arr.push("kiwi"));
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift('lime');
// console.log(arr);
// console.log(arr.length);
// const arr1=['pine','olive','carrot'];
// console.log(arr.concat(arr1));
// const arr2=arr.concat(arr1);
// console.log(arr2.copyWithin(3,1));
// console.log(arr2.flat());
// console.log(arr2.toString());
// arr.sort();
// console.log(arr);
// arr.reverse();
// console.log(arr);



const name='mom';
let palin="";
let len=name.length;
for (let i=len-1;i>=0;i--){
  palin=palin+name[i];
}
  if(name == palin){
    console.log("Palindrome");
  }
  else{
    console.log("Not a Palindrome");;
  }

  const str='Vinu';
  let rev='';
  let len1=str.length;
  for(let i=len1-1;i>=0;i--)
  {
    rev=rev+str[i];
  }
  console.log(rev); 



  // const prom=new Promise((resolve,reject)=>{
  //   let h=false;
  //   if(h){
  //     setTimeout((resolve),4000,'Ram has reached his town');
  //   }
  //   else{
  //     reject('Ram hasn\'t reached');
  //   }
  // })
  
  //  prom.then((message)=>console.log(message));
  //  prom.catch((error)=>console.log(error));


  // const one=new Promise((resolve,reject)=>{
  //   let j=true;
  //   if(j){
  //     setTimeout(resolve,3000,'Sri\'s Ticket reserved');
  //   }
  //   else{
  //     reject('Sri\'s Ticket cancelled');
  //   }
  // })
  // const two=new Promise((resolve,reject)=>{
  //   let j=true;
  //   if(j){
  //     setTimeout(resolve,5000,'Hari\'s Ticket reserved');
  //   }
  //   else{
  //     reject('Hari\'s Ticket cancelled');
  //   }
  // })
  // const three=new Promise((resolve,reject)=>{
  //   let j=true;
  //   if(j){
  //     setTimeout(resolve,1000,'Devi\'s Ticket reserved');
  //   }
  //   else{
  //     reject('Devi\'s Ticket cancelled');
  //   }
  // })

  // Promise.all([one,two,three])
  // .then((message)=>console.log(message));
  // .catch((error)=>console.log(error));


// const odd=new Promise((resolve,reject)=>{
//   let s=4;
//   if(s%2!=0){
//     setTimeout(resolve,2000,'It is a odd num');
//   }
//   else{
//     reject('Not a odd num');
//   }
// })

// async function myAsync(){
//   try{
//   const res=await odd;
//   console.log(res);
//   console.log("Thank you!");
//   }
//   catch(error){
//     console.log(error);
//   }
// }
// myAsync();


const arr=['Apple','mango','banana'];
const v=arr.entries();
for(x of v){
  console.log(x);
}

console.log(arr.includes('mango'));
console.log(arr.indexOf('banana'));



