# Q1]
# ans

f1 = input("Enter the fruit 1 :")
f2 = input("Enter the fruit 2 :")
f3 = input("Enter the fruit 3 :")
f4 = input("Enter the fruit 4 :")
f5 = input("Enter the fruit 5 :")
f6 = input("Enter the fruit 6 :")
f7 = input("Enter the fruit 7 :")

list = [ f1 ,f2 , f3 , f4 ,f5 ,f6 , f7 ]

print(list)


# Q2]
# ans

s1 = input("Enter the 1st student marks : ")
s2 = input("Enter the 2sd student marks : ")
s3 = input("Enter the 3th student marks : ")
s4 = input("Enter the 4th student marks : ")
s5 = input("Enter the 5th student marks : ")
s6 = input("Enter the 6th student marks : ")

student = [int(s1) , int(s2) , int(s3) , int(s4) ,int(s5) ,int(s6)]
student.sort()
print(student)


# Q5]
# ANS 
a = (7,0,8,0,0,9)

a1 = a.count(0)

print("The no of 0 is repeted is",a1)


#Q4]
#ans

a = (7,0,8,0)

print(a[0]+a[1]+a[2]+a[3])  #--> METHOD.1
                              
print(sum(a))               #--> METHOD.2
 
 
#Q3]
#ans

a = (7,0,8,0)

# a[0]= 3   -->ERORO NOT WORK

