
console.log('Hello JS! Lets rock...');
console.log('this is js file');
let a=true;
console.log(a);
let b=8;
console.log(b);
var c=4.8;
console.log(c);
var c=10;
console.log(c);

const num=10;

let d;//->undefined
console.log(d); 

let my_name='isha';
console.log(my_name);
my_name=8;
console.log(my_name); //dynamic typing

let lastName='singh';

let firstName=new String('isha');

let message='this is my first message';
let words=message.split(' ');
console.log(words);

let esc_Chr='here we are \n learning \' "escape \nsequences';
console.log(esc_Chr);

let temp_literal=`this will 
remain
as you write
here`;
console.log(temp_literal);

let placeHolder=`${firstName}`;
console.log(placeHolder);

let date=new Date();
console.log(date);

let date2=new Date('feb 15 2020');
console.log(date2);

let date3=new Date(1998,2,15,7);
console.log(date3);

 //setters
//getter
date3.setFullYear(2023);
console.log(date3.getFullYear());

