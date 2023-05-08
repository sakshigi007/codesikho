class Student{
    constructor(name,rollNum){
        this.name=name;
        this.rollNum=rollNum;
    }
    setAge(age){
        this.age=age
    }
    setMarks(marks){
        this.marks=marks
    }
    display(){
        console.log("name: ",this.name,"roll number: ",this.rollNum,"marks: ",this.marks,"age: ",this.age)
    }
    
}
s1= new Student("sakshi",1)
s2=new Student("sarthak",2)

s1.setAge(24)
s1.setMarks(80)
s1.display()

s2.setAge(25)
s2.setMarks(76)
s2.display()