const countValue=document.querySelector('#counter');

function decrement(){
    let count=parseInt(countValue.innerText);
    count=count-1;
    countValue.innerText=count;
    
};
function increment(){
    let count=parseInt(countValue.innerText);
    count=count+1;
    countValue.innerText=count;
};