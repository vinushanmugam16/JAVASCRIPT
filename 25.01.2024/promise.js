const odd=new Promise((resolve,reject)=>{
  let s=4;
  if(s%2!=0){
    setTimeout(resolve,2000,'It is an odd num');
  }
  else{
    setTimeout(reject,3000,'Not an odd num');
  }
})

async function myAsync(){
  try{
  const res=await odd;
  console.log(res);
  console.log("Thank  you!");
  }
  catch(error){
    console.log(error);
  }
}
myAsync();


// const check1=new Promise((resolve,reject)=>{
//     let pass='12345';
//     if(pass.length>=5){
//         setTimeout(resolve,3000,'Pass Lengths are matching!');
//     }
//     else{
//         reject('Pass Lengths are not matching');
//     }
// })
// const check2=new Promise((resolve,reject)=>{
//     let user='vinu';
//     if(user.length === 4){
//         setTimeout(resolve,1000,'User Lengths are matching!');
//     }
//     else{
//         reject('User Lengths are not matching');
//     }
// })
// const check3=new Promise((resolve,reject)=>{
//     let t=true;
//     if(t){
//         setTimeout(resolve,2000,'Successfully Login');
//     }
//     else{
//         reject('Failed');
        
//     }
// })


//   Promise.allSettled([check1,check2,check3])
//   .then((message)=>console.log(message))
//   .catch((error)=>console.log(error))                                     
// Promise.all([check1,check2,check3])
// .then((message)=>console.log(message))
// .catch((error)=>console.log(error))                                  
// Promise.any([check1,check2,check3])
// .then((message)=>console.log(message))
// .catch((error)=>console.log(error))                           
// Promise.race([check1,check2,check3])
// .then((message)=>console.log(message))                            
// .catch((error)=>console.log(error)) 





