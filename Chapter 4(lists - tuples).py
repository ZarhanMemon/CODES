# LIST WRITING

a= [1 , True,"zarhan",8.0,None]

print(a)

# Printing Selected VALUE

a = [1 , True,"zarhan",8.0,None]

print(a[0]) #--> 1
print(a[1]) #--> True
print(a[2]) #--> zarhan

# List SLICING

A = ["H", 1 , 2.3, True]

print(A[0:4])   #--> H,1,2.3,True
print(A[0:3])   #-->H,1,2.3

# CHANGING PERTICULAR VALUE OF LIST THEN PRINTING IT

a1 = [1 , True,"zarhan",8.0,None]

a1[0] = 12
a1[1] = "hello"
a1[2] = False
a1[3] = -2

print(a1)  #--> [12, "hello", False , -2 ,None]


# LIST METHOD

b =[ 2 , 3 , 4 , 1]

# 1]  .SORT() - its arrange no in increasing order
 
b.sort()
print(b)           #--> [1 , 2, 3, 4]


# #2]  .REVERSE() - its arrange no in REVERSERD order

b.reverse()
print(b)      #-->[4,3,2,1]


# 3] 

# .REMOVE(no to remove) - its REMOVE a selected no in previos order list

b.remove(4) #--> [3 , 2 , 1]
print(b)


# OR


# .POP(its posintion where to add) - its SAME AS REMOVE but more precise

b.pop(1)  #--> [3 , 2 ]
print(b)


#4] .APPEND(no to add at end) - its use to add another value indirctly at end of []4]

b.append(5)
b.append(7)
b.append(6)

print(b)


#5] .INSERT(its posintion where to add ,no to add ) - its use 

b.insert(0,10)
b.insert(1,11)
b.insert(2,12)

print(b)

# ---------------------------------------------------------------------------------------------------------

# TUPLES - SAME as List 
#        - BUT CANNOT CHANGES ITS VALUE LATER
#        - CAN BE wr BY ()

t = ( 1 , 2 , 3 )

print(t)

# t[1] = 32   shows error means not be changed
 
 
#TYPES OF TUPLES

# 1] EMPTY

e=()
E = {}
print(e)
print(type(E))

# 2] SINGLE TUPLE - (NO ,)

# f = (1)     Wrong way - its not tuple
f = (1,)     #Right way - it is

print(f)


#3] NORMAL TUPLE

t = ( 1 , 2 , 3,1,1 )
print(t)


# METHODS OF TUPLES

# 1] .INDEX(NO)

print(t.index(2))  #--> index no of 2 is 1
print(t.index(3)) # 3 index no is 2

#2]  .COUNT(NO)

print(t.count(1))  #--> its 3 times 1 in t tuple
print(t.count(3))   #--> its 1 time 3 in tuple