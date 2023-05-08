function countUppercaseLower(str){
    countUc=0
    countLc=0
    for (i of str){
        if(i===i.toUpperCase()){
            countUc+=1
        }
        else if(i===i.toLowerCase()){
            countLc+=1
        }
    }
    return {"UC":countUc,"LC":countLc}
}
res=countUppercaseLower("SakshI")
console.log(res)
