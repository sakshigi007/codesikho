const range=(start,end)=>{
    const length=end-start;
    return Array.from({length},(_,i)=>start+i);
}
for (item in range(0,6)){
    if(item%2===0){
        console.log("my number is even: ",item)
    }
    else{
        console.log("my number is odd: ",item)
    }
}