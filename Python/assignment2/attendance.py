totalClasses=50
classesAttended=int(input("enter the number of classes you have attended:"))
attendance=(classesAttended *100)/50
if classesAttended>50:
    print("you are lying")
elif attendance>75:
    print("You are eligible to give exams")
elif attendance < 75:
    print("you are not eligible to give exams")
