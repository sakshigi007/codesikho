marks=int(input("enter your marks:"))
if marks<25:
    print("You are failed")
elif (marks>25 & marks<=45):
    print("Your grade is E")
elif (marks>45 & marks<=50):
    print("Your grade is D")
elif (marks>50 & marks<=60):
    print("Your grade is C")
elif (marks>60 & marks<=80):
    print("Your grade is B")
elif marks>80:
    print("Your grade is A")
