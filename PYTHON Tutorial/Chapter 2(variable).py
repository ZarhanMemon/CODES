# TYPES OF VARIABLE

 # [str, integer,float no, boolean, none]

a="hi"  #a='hello'
b=4    #b=-34
c=3.3
d=True   #d=False
e=None

# HOW TO PRINT THE VARIABLE 
print(a)
print(b)
print(c)
print(d)
print(e)

# HOW TO DO CALCULATION WITH VARIABLES
z=a*b
print(z)


# Printing type of Variable
print(type(a))
print(type(b))
print(type(c))
print(type(d))
print(type(e))
print(type(z))



# OPERATION

  # ARITHEMATIC op  ( note = % this is used to give remainder of dividing no
  #                               2%2 = 0 
  #                               3%2 = 1  )

A=33
B=12

W=A*B
Y=A-B
print("the value of w is",W)  #TYPE 1
print("THE VALUES OF Y IS", Y)


print("the value of A+B", A+B) #TYPE 2

# ASSIDNMENT op

a1 = 2

a1 -=2
print( a1)

a1 +=3
print(a1)

a1 *=3
print(a1)

a1 /=3
print(a1)

# COMPARISON op

b=4

b =(4==4)
print(b)

b =(4!=0)
print(b)

b =(4>=0)
print(b)

b =(4<=0)
print(b)

b =(4>0)
print(b)

b =(4<0)
print(b)


# LOGIC TABLE op

p= True
q=True
r=False
 
  # AND 1.

print("the truth value of p^q is", (p and q))
print("the truth value of p^r is", (p and r))
print("the truth value of r^r is", (r and r))

  # OR 2.

print("the truth value of pVq is", (p or q))
print("the truth value of pVr is", (p or r))
print("the truth value of rVr is", (r or r))

   # NOT 3. or NEGATION

print("the truth value of ~p is", (not p))
print("the truth value of ~q is", (not q))
print("the truth value of ~r is", (not r))

# (p^q)V(~r)
# ans

print("the truth value of (p^q)V(~r) is ",((p and q) or (not r)))



# TYPE CASTING ( CHANGHING TYPE OF VARIABLE)

A1="32"
print(type(A1))

print(float(A1))    #convert str to float
print(int(A1))    #convert str to int

print(float(A1) * 3)    #type1 to print typecasting with maths
print(int(A1) / 2)

A1 = float(A1)       # type 2 to print type cast no maths
print(A1)



# INPUT() FUNCTION 

B1 = input("Enter number 1 : ")
B2 = input("Enter number 2 : ")

print("The value of B1 x B2 is : " , int(B1) * int(B2))   #converting str b1 b2 to
                                                          # int and then multiplying it 




