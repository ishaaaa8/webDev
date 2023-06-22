function sumEvenNumbers(arr){
    sum=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            sum+=arr[i];
        }
    }
    return sum;
}


const a=[1,2,3,4,5,6,8,7];

console.log(sumEvenNumbers(a));
o/p: ->  20