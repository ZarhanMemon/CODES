# # Q1]

a1 = int(input("Enter no 1 :"))
a2 = int(input("Enter no 2 :"))
a3 = int(input("Enter no 3 :"))

def first(a1,a2,a3):
    if a1>a2 and a1>a3:
        print(f"{a1} is the greatest between {a2,a3}")
    elif a2>a1 and a2>a3:
        print(f"{a2} is the greatest between {a1,a3}")
    elif a3>a2 and a3>a1:
        print(f"{a3} is the greatest between {a1,a2}")
    else:
        print("Error")  
        
first(a1,a2,a3)    


# #Q2]

celsius = float(input("Enter the temp in celsius[C] :"))

def second(celsius):
    fahrenheit =(celsius * (9/5)) + 32
    print(f"The conversion of {celsius}C in fahrenheit is {fahrenheit}F")
    
second(celsius)    


# #Q3]

# sent = input("Enter the sentence :")

# def third(sent):
#     print(sent,end=" ")
    
# third(sent)    


# Q4]
# n = 5

# def forth(n):
#     if n == 0:
#         return 0
#     else:
#         return print("The sum of the first", n," natural numbers is:", n + forth(n-1))


# forth(n)



#Q5]

n=3

def fifth(n):
    for i in reversed (range(1,n+1)):
        print("*"*i)
        
fifth(n)


#Q6]

inches = float(input("Enter the inches:"))

def sixth(inches):
   return  print(f"The conversion of {inches} inch into centimeter is {inches * 2.54} cm")

sixth(inches)
    
    
#Q7]

sent2 = "     Hi hello ,Sasuke here         "
print(sent2)

word = input("Enter the word u want to strip from above sent:")

def seventh(sent2):
   a = sent2.replace(word,"")
   return print(a.strip())

seventh(sent2)







    
#Q8]

m = int(input("Enter the no of multi table :"))

def eight(m):
 for i in range(1,11):
     print(str(m),"x",str(i),"=",str(m*i))

eight(m)