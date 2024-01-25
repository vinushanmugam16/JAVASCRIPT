const details={};
details.height= '154cm';
details.city='Erode';
details.bloodgrp='B+ve';
details.nationality='Indian';
console.log(details);


const Place=new Object();
Place.city='Gobi';
Place.District='Erode';
Place.pincode= 638476;
console.log(Place);


const person={
    fName: 'Vinu',
    lName:'dharshini',
    age: 21,
    domain: 'Lamp' 
}
let x=person;
x.age=22;
// delete person.domain;
// console.log(person);
console.log("Her Name is "+ person.fName+person.lName+ ' and her age is '+ person.age + ' from '+ person.domain + ' domain. ');


const student={
    name:{
        fname:'Deva',
        Lname:'Ashwin'
    },
    score:{
        Subject:['Maths','Computer'] ,
        mark:[89,98]
    }
}
console.log('His Lastname is ' + student.name.Lname);
console.log(student.score);


const Employee={
    employ_id: 1641,
    employ_name: 'Nick Thomas',
    Workstatus:'Work from office',
    employLocation:'Siruseri',
    detail:function(){
        return this.employ_id + "-"+ this.employ_name + "\n"+ this.Workstatus + '\n' + this.employLocation;
    }
}
console.log(Employee.detail());


console.log(Object.values(Employee));


// getter | setter

// const record={
//     height: '156cm',
//     city:' ',
//     bloodgrp:'B+ve',
//     nationality:'Indian',
//     set city(){
//        return this.city='Gobi';
//     }                                          //revisit
// }
// console.log(city);


function Sibling(first,second,third,firstAge,secondAge,thirdAge){
    this.FirstSib=first;
    this.SecondSib=second;
    this.ThirdSib=third;
    this.FirstAge=firstAge;
    this.SecongAge=secondAge;
    this.ThirdAge=thirdAge;
}
// Sibling.prototype.nationality='Indian';
const family= new Sibling('Lisa','Kavi','Tina',23,14,10);
console.log(family);
// console.log('sibling\'s are '+ Sibling.nationality + ' nationality.');



const alphabets=new Set (['a','b','c','d','e']);
alphabets.add('f');
console.log(alphabets.size);
