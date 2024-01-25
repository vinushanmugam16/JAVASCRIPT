class Property{
    a;b;c;
    constructor(a,b,c){
        this.num1=a;
        this.num2=b;
        this.num3=c;
    }
}
class Operation extends Property{
    constructor(num1,num2,num3){
        super(num1,num2,num3);
    }
    performOperations(num1,num2,num3){
        return num1*num2+num3;
    }
}
const object = new Operation(23,19,61);
console.log(object.performOperations(23,9,61));



 class Students{
    stud1;stud2;
    constructor(stud1,stud2,total){
        this.stud1=stud1;
        this.stud2=stud2;
        this.totalStud=total;
        this.totalStud=23;
    }
    branch(){
        return (this.stud1," ",this.stud2 + ' are belong to Computer group .')
    }
 }
 class rank extends Students{
    constructor(stud1,stud2){
        super(stud1,stud2);
        this.totalStud=21;
    }
    branch(){
        return ('So total students in Biology branch are '+ this.totalStud);
    }
 }
 const School = new rank('Lisa','Tina');
 console.log(School.branch()); 



