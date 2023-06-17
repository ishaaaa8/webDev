// block of codse that fulfils a soecific task
run(); //we can call a fn above or below its decalaration in js due to hoisting
function run(){ 
    console.log('Running');
}
run(); //calling

// hoisting a process of moving all the functions on top of program by js engine

// fn assignment
// but
// stand(); //error as stand is not a fn but its a funvtn assignmnet

// named fn assignment
let stand=function walk(){
    console.log('walk');
};
stand();
// walk();//error
let jump=stand;
jump();

// anonymous function assignment
let stand2=function(){
    console.log('anonymous');
};
stand2();

function sum(a,b){
    console.log(arguments); //stores every value passed to fn in form of keyvalue pair
    return a+b;
}
console.log(sum(1,2)); //3
console.log(sum(1)); //NaN // as a=1,b=undefined
console.log(sum()); //a=b=notdefined
console.log(sum(1,2,3,4,5,6)); //a=1,b=2//no error


function s(a,b){
    let total=0;
    for(let i of arguments)
        total=total+i;
    return total;
}
console.log(s(1,2,3,4,5,6)); //21 we can pass as many arguments as we want 
console.log(s()); //0
console.log(s(1)); //1


// copy/concat an array:=> array

// rest operator
function ss(num,...args){ //stores in array
    console.log(args); // [2, 3, 4, 5, 6]
}
ss(1,2,3,4,5,6); //num=1 args= [2, 3, 4, 5, 6]

function sarg(num,value,...args){
    //,num2){ //error -> Rest parameter must be last formal parameter
    console.log(args);
}
sarg(1,2,3,4,5,6); 

//note:=> rest parameter must be last formal parameter
// default parameters

// function interest(p,r=10,y){ //error
//     return p*r*y/100;
// }
// console.log(interest(1000,2));
// rule if r is default then all parameters succeding r must be default

function interest(p,r=5,y=10){ //error
    return p*r*y/100;
}
console.log(interest(1000,undefined,10));
//this is hack if we wan tto use default value of r but want to pass a value explicitily for y
// but this is bad practice

let person={
    fName:'Isha',
    lName:'Singh',
    get fullName(){
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value){
        let parts=value.split(' ');
        this.fname=parts[0];
        this.lName=parts[1];

    }
};
// console.log(person.fullName);
// person.fullName='sfafe singh';
// console.log(person.fullName);

