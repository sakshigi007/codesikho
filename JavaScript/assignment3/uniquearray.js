a=[1,2,3,1,1,4,5,3]
function unqiueArr(arr){
    uniqueList=[]
    for(i of a){
        if(!(i in uniqueList)){
            uniqueList.push(i)
        }
        
    }
    return uniqueList
}
console.log(unqiueArr(a))
