function countLetters(str){
    const counts={};
    for(let i=0;i<str.length;i++){
        const char=str[i];
        if(counts[char]){
            counts[char]++;
        }
        else{
            counts[char]=1;
        }
    }
    return counts;
}


// console.log(countLetters('webDevelopment'));
// VM404:1 {w: 1, e: 4, b: 1, D: 1, v: 1, …}