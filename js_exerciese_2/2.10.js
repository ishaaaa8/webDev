function findMax(arr,prop){
    let maxObj=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i][prop]>maxObj[prop]){
            maxObj=arr[i];
        }
    }
    return maxObj;
}

const arr1 = [
    { name: "apple", price: 1 },
    { name: "banana", price: 2 },
    { name: "orange", price: 3 },
];
const maxObj1 = findMaxByProperty(arr1, "price");
console.log(maxObj1);