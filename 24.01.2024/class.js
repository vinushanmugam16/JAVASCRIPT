class Person{
    name;

intro(){
    return this.name='vinu';
}}
const object = new Person();
console.log("I am "+ object.intro());


class Details{
    // employeeId;

    constructor(employeeId){
        this.id=employeeId;
    }
    myfunc(id){
        return this.id;
    }
}
const Employee =new Details(1234);
Employee.myfunc();
console.log(Employee);


class multiply{
    contructor(num1,num2,num3){
        this.a=num1;
        this.b=num2;
        this.c=num3;
    }
    makeMultiply(a,b,c){
        return a*b*c;
    }
}
const PerformMultiply=new multiply(3,21,9);
console.log(PerformMultiply.makeMultiply(3,21,9));


