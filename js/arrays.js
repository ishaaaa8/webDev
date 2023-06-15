// declare
let arr=[1,2,3];
console.log(arr);
//insertion
// end->

arr.push(8);
console.log(arr);

// begin->

arr.unshift(4);
console.log(arr);

// middle->

arr.splice(2,0,10,9 );
console.log(arr); //[4, 1, 10, 9, 2, 3, 8]
// 2-> index where to insert
// 0->number of elements to dlt 
// 10,9 -> elements

// searching

console.log(arr);
console.log(arr.indexOf(8)); //6
console.log(arr.indexOf(5));  //-1

//we want to check if  an element is present or not

if(arr.indexOf(5)==-1)
    console.log('not found');

// or a better practice is: using includes

console.log(arr.includes(10)); //return true or false

// or 
// 
console.log(arr.indexOf(8,4)); //6 //returns index of element 
//here 8-> element
// 4->index from where you want to search for

console.log(arr.indexOf(10,4)); //-1

// index of fails when we have array of objects
 let course=[
    {n:1, name:'isha'},
    {n:2,name:'love'}

 ]

console.log(course.indexOf({n:1,name:'isha'})); //-1
console.log(course.includes({n:1,name:'isha'})); //false

// this is because in case of objects in array the object in array and the one we are trying to find index of are different
// objcts/references are different

// to deal with objects and references in arrays callback function

let c_search=course.find(function(c){
    return c.name=='isha';
})
console.log(c_search);

// whenever we want to search an element in objects we use find
//syntax: arr.find(predicate fn)-> return object you are searching for

// predicate fn will return object whose name is isha
// if not present it will return "undefined"
// we can make it more readable by using arrow fn

// let cSearch=course.find(c=> c.name==='isha'
// );
// function(cSearch){
//     return course.name==='isha';
// }
// console.log(cSearch);

//  if no input parameter -> ()=> 

// REMOVING Element

// end-> pop
let numbers=[1,2,3,4,5,6];
console.log(numbers);
numbers.pop();
console.log(numbers);
// begin-> shift
numbers.shift();
console.log(numbers);
// middle-splice
numbers.splice(3,2);
// 3-> index to be removed
//2-> number of elemnts to be removed
console.log(numbers);


// emptying array


let nums=[1,2,3,4,5];
let nums2=nums; 

nums=[];

console.log(nums); //empty
console.log(nums2);//not empty , it retains all of its items even after nums get empty it is because values stored in nums are stored in nums2 using references and not as values therefore 
// deleting nums wont delete nums2

// therefore a muchh better way to empty a array is :

let num=[1,2,3,4,5];
let num2=nums; 

// nums=[];
num.length=0;

console.log(num); //empty
console.log(num2);//empty 
// both are empty using length=0

// also we can usse splice to empty an array



let n=[1,2,3,4,5];
let n2=nums; 

// nums=[];
n.splice(0,n.length); //do the same work as num.length=0;

console.log(n); //empty
console.log(n2);//empty 
// other way
while(n.length>0){
    n.pop();
}
console.log(n); //empty
console.log(n2);//empty

// combining and slicing arrays
// concat
let first=[1,3];
let second=[2,4];
let combined=first.concat(second);
console.log(combined);

// slice
// HW combining and slicing on objects

let sliced=combined.slice(1,3);
// 1-> start index 3-> ending index but only 1,2 index i.e. exclusive of last index 
// [start,end)-> index
console.log(sliced);

let array=[10,20,30,40 ,50];
 let sliceall=array.slice(1); //will print all elements after from 1 index
 let s=array.slice();//prints entire array i.e it will copy all elemnts of array into s
 console.log(sliceall);
 console.log(s);//full slicing

// spread operator

let f=[1,2,3];
let sec=[5,6,7];
let combo=[...f,'a',...sec,'b',true];
console.log(combo);

// copy create

let another=[...combo];

// iterating an array
// for of loop

let a=[10,20,30,40];

for(let v of a)
{
    console.log(v);
}
// for each loop

a.forEach(function(number){ //call back fn
    console.log(number);
})
// writing for each as arrow fn
a.forEach(number=>console.log(number));

// joining arrays

let digits=[10,20,30,40];
const joined=digits.join('&');
console.log(joined);

// split ->split
let message='this is spliting string into array';
let parts=message.split(' ');
console.log(parts);
// combining-> join
let com_str=parts.join('_');
console.log(com_str);

// sorting

let unsorted=[4,6,29,8,9];  //[4, 40, 6, 8, 9]
//[19, 4, 6, 8, 9]  [29, 4, 6, 8, 9]  ***** ALL THESE EXAMPLES SHOW THAT SORT FN ONLY CONSIDER FIRST DIGIT (converting elements into strings)****
unsorted.sort();
console.log(unsorted);
// reverse
unsorted.reverse();
console.log(unsorted);

// hw : sort references and objects using prdicate fns with sorting condtns

// let negarr=[1,2,-1,-5];
// let filtered=negarr.filter(function(value){
//     return value>=0;
// });
// console.log(filtered); // [1, 2]

// arrow fn
let negarr=[1,2,-1,-5];
let filtered=negarr.filter(value=>value>=0);
console.log(filtered);

// mapping
let maparr=[1,8,7,5,2];
let items=maparr.map(function(value){
    return 'student_no'+value;
});
console.log(items); //5) ['student_no1', 'student_no8', 'student_no7', 'student_no5', 'student_no2']




