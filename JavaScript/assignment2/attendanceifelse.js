attendedClasses=60
totalClasses=50
minCriteria=(attendedClasses*100)/totalClasses
if(attendedClasses>50){
    console.log("you are lying")
}
if(minCriteria<75){
    console.log("not allowed",minCriteria)
}
if(minCriteria>75&&minCriteria<100){
    console.log("allowed",minCriteria)
}
