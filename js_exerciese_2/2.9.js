function return_value(arr,prop){
    const values=arr.map((obj)=>obj[prop]);
    return values;
}

const people = [
    { name: "Pranay", age: 20, gender: "male" },
    { name: "Nidhi", age: 21, gender: "female" },
    { name: "Soumya", age: 21, gender: "male" },
  ];
  
  console.log(getPropertyValues(people, "name")); // ["Pranay", "Nidhi", "Soumya"]
  console.log(getPropertyValues(people, "age")); //  [20, 21, 21]
  console.log(getPropertyValues(people, "gender")); // ["male", "female", "male"]
  console.log(getPropertyValues(people, "address")); // [undefined, undefined, undefined]