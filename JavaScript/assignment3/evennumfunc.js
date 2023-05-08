list=[1,2,3,4,5,6,7,8]
function evenNum(arr){
    newList=[]
    for(i of list){
        if(i%2==0){
            newList.push(i);
        }
    }
    return newList
}
res=evenNum(list)
console.log(res)






