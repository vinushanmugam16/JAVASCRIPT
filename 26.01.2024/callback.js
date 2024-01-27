function Multiply(val1,val2,result){
     let out=val1*val2;
     result(out);
}
function display(out){
    console.log(out);
}
Multiply(20,30,display);




let condition=false;
let check=new Promise ((resolve,reject)=>{
    if(condition){
        resolve('The condition is true');
    }
    else{
        reject('The condition is false');
    }
}) 

check.then((message)=>console.log(message))
.catch((error)=>console.log(error));






let person=[
    {
        person_id:123,
        firstname:"vinu",
        Lname:"dharshini"
    },
    {
        person_id: 128,
        firstname:"janu",
        Lname:"shree"
    },
    {
        person_id: 124,
        firstname:"sumi",
        Lname:"malar "
    }
]
// function getRequired(person,fname,Lname){
//     let out=[];
//     for(let i=0;i<person.length;i++){
//         out=person.push(person[i][fname]+person[i][Lname]);
        
//     }
//     return out;
// }

// const result=getRequired(person,"firstname","Lname");
// console.log(result);



function getNames(person,fname,lname){
    let out=[];
    for(let i of person){
        
      out.filter((item)=>Object.values(item[i][fname]+item[i][lname]));
       
    }
    return out;
}
const name=getNames(person,"firstname","Lname");
console.log(name);