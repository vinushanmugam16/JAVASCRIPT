// const fruits=new Promise((resolve,reject)=>{
//     let apple=112, orange=112,j;
    
//         if(apple == orange){
//             j=apple+orange;
//             setTimeout(resolve,2000,j);
//         }
//         else{
//             reject(orange-apple);
//         }
// })
// fruits.then((message)=>console.log(message))
// .catch((error)=>console.log(error));


const checking=new Promise((resolve,reject)=>{
    let user= 'vinu',pass='1234';
    if(user.length === pass.length){
        setTimeout(resolve,3000,'Lengths are matching!');
    }
    else{
        reject('Lengths are not matching');
    }
})

async function logging(){
    try{
        const result=await checking;
        console.log(result);
        console.log("Thank you"); 
    }
    catch(error){
        console.log(error);
    }
}
logging();
