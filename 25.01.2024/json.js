// {
//     "members": [
//         {
//             "name":"Ben",
//             "id":1234  
//         },
//         {
//             "name":"Elsa",
//             "id":1232
//         },
//         {
//             "name":"Ell",
//             "id":1242
//         }
//     ],
//     "Course":"mySql",
//     "Training": ["HTMl","CSS"],
//      "city":"Erode"
// }



const person='{"records": "Records noted" ,"count ":10000}'
const result=JSON.parse(person);
console.log(result.records);           
console.log(result.count);              

const check= JSON.parse('{"x":13 , "y":4}',(key,value)=>value<=3 ? value*value : value);
console.log(check);

console.log(JSON.stringify({x:4,name:'vinu',y:13}));

