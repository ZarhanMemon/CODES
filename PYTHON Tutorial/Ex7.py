#Q1]

a = int(input("Enter the no of multi table :"))

for i in range(0,11):
    print(str(a),"x",str(i),"=",str(a*i))
# or
# F string  --> print(f"{a}x{i}={a*i}") 


 #Q2]

l1 = ["Harry", "Soham", "Sachin", "Rahul"]

for items in l1:
    if items.startswith("S"):
        print("GM",items)

# Q3]

b = int(input("Enter the no of multi table :"))
i = 0
while b >0 and i <= 10 :
    print(f"{b} x {i} = {b*i}")
    i = i+1


# Q4]

c = int(input("Enter the no to find its odd or even :"))

while c%2 == 0 : 
   print("The no",c,"is even")
   break
else:
    print("The no",c,"is odd")    


#Q5]

n = int(input("Enter the no to find sum of first n natural no :"))
m=0
for i in range(1,n+1):
  m = i+  m

print(f"The sum of first {n} natural no is {m}")

  
#Q6]

n1 = int(input("Enter the no to find its factorial no :"))
m=1
for i in range(1,n1+1):
    m = m * i
if i==n1:
    print(f"The factorial no of {n1} is {m}")
 
 
 
# Q7]

n=3
for i in range(0,n):
    print(" "*(n-i-1) , end=" ")
    print("*"*((2*i)+1) , end=" ")
    print(" "*(n-i-1))

  
  
# Q8]

n = 3
for i in range(1,n+1):
    print("*"*i)
  
 
  
#Q9]

n=3

for i in range(1,n+1):
 if i==2:
  print("*"+" "*(n-i)+"*")      
 else:
  print("*"*n)
  
     
# Q10]

a1 = int(input("Enter the no of multi table :"))

for i in reversed ( range(1,11)):
    print(str(a1),"x",str(i),"=",str(a1*i))