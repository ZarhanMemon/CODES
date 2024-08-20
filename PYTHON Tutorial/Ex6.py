# # 1]
 
# a1 = int(input("Enter no 1:"))
# a2 = int(input("Enter no 2:"))
# a3 = int(input("Enter no 3:"))
# a4 = int(input("Enter no 4:"))

# if(a1>a2 and a1>a3 and a1>a4):
#     print("The greatest no is",a1)

# elif(a2>a1 and a2>a3 and a2>a4):
#     print("The greatest no is",a2)   

# elif(a3>a1 and a3>a2 and a3>a4):
#     print("The greatest no is",a3) 

# elif(a4>a1 and a4>a2 and a4>a3):
#     print("The greatest no is",a4) 

# else:
#     print("None")            
    

# # 2]

# sub1 = float(input("Enter subject 1 :"))    
# sub2 = float(input("Enter subject 2 :"))  
# sub3 = float(input("Enter subject 3 :"))

# T = sub1 + sub2 + sub3

# if((sub1 >= 33 and sub2 >= 33 and sub3 >= 33) or (T >= 40)):
#     print("You are pass!")

# else:
#     print("You failed")  
    
 
# # 4]

# name = input("Enter your username:")         

# ln = len(name[0:])

# if(int(ln) < 10 ):
#     print("The length of", name ,"is less than 10.")
# else:
#     print("The length of", name ,"is not less than 10.")    
    

# # 5]


# list = ["rehan","zarhan","iqra","arshi"] 

# A = input("Enter the name to find:")

# if(A in list):
#     print("The",A,"is there in list")
# else:
#     print("The",A,"is not there in list")       
    
    
# 6]

# sub1 = float(input("Enter subject 1 :"))    
# sub2 = float(input("Enter subject 2 :"))  
# sub3 = float(input("Enter subject 3 :")) 
# sub4 = float(input("Enter subject 4 :"))    
# sub5 = float(input("Enter subject 5 :"))  
# sub6 = float(input("Enter subject 6 :"))

# total = sub1+sub2+sub3+sub4+sub5+sub6

# t1 = (total/600)*100

# print("Your percentage is",t1)

# if(int(t1) >= 90 and int(t1) <= 100):
#     print("Your grade is S")
# elif(int(t1) >= 80 and int(t1) <= 90):
#     print("Your grade is A")    
# elif(int(t1) >= 70 and int(t1) <= 80):
#     print("Your grade is B")
# elif(int(t1) >= 60 and int(t1) <= 70):
#     print("Your grade is C")
# elif(int(t1) >= 50 and int(t1) <= 60):
#     print("Your grade is D")
# elif(int(t1)<50 ):
#     print("Your grade is F")                  
# else:
#     print("Eror")   


# 6]

# mon1 = int(input("Enter no of monster killed:"))   
# mon2 = int(input("Enter no of dragon killed:")) 

# if((mon1 >= 90 and mon1 <= 100) or mon2 >= 20):
#     print("Your rank is S")
# elif((mon1 >= 80 and mon1 <= 90)or (mon2 >= 1 and mon2 < 20)):
#     print("Your rank is A")    
# elif(mon1 >= 70 and mon1 <= 80):
#     print("Your rank is B")
# elif(mon1 >= 60 and mon1 <= 70):
#     print("Your rank is C")
# elif(mon1 >= 50 and mon1 <= 60):
#     print("Your rank is D")
# elif(mon1<50 ):
#     print("Your rank is F")                  
# else:
#     print("DONE")    


# 7]

sent = input("Enter the sentence:")

h = "harry"
H = "Harry"
H1 = "HARRY"
if(h,H,H1 in sent):
    print("The sentence is talking about harry.")
else:
    print("The sentence is not talking about harry.")  