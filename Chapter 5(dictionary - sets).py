# DICTIONARY

A = { "key": "value",
      "Anime":"naruto",
    "integer":"23",
    "list" : [1, 2 , 3,4],
    "tuple" : (1 ,1 ,1 ),
    1:2
 }

print(A)

print(A["key"])
print(A["Anime"])



# DICTIONARY METHODS

A = { "key": "value",
      "Anime":"naruto",
    "integer":"23",
    "list" : [1, 2 , 3,4],
    "tuple" : (1 ,1 ,1 ),
    1:2
 }


# 1]
print(A.keys())     #--> its print only keys


# 2]
print(A.values())   #--> its print the values of keys only


#3]
print(A.items())     #--> print all items


#4]
updateA = { "key": "value",
         "Anime":"Bleach",
         "integer":"0",
         "list" : [1, 2 ],
         "tuple" : (1 ,1 ,1 ),
         1:3    
}

A.update(updateA)  #--> now A become updated A as updateA

print(A)           # this print updateA


#5]

print(A.get("Anime"))   #method1

print(A["Anime"])      #method 2

     # THE DIFFERENCE BETWEEN .get("") & [""]

print(A.get("Anime2"))  #--> it shows none as instead error
#print(A["Anime2"])     #--> shows error

#but if u se it for any non key value like. key be Anime2


                         # SET
                      
a = {0, 1 , 2 , 3 , 0}

print(type(a))             # shows type as set
print(a)            #--> it dont print 0 again        


 #EMPTY set or EMPTY dict
 
b = { }             # wrong way for empty set
print(type(b))    # it shows as type DICT not set

#or

c = set()        # rigth way for empty set
print(type(c))    # it shows as type as SET


#HOW TO ADD NO IN EMPTY SET

c = set()

c.add(1)
c.add(2)
c.add(3)
c.add(1)

print(c)  # print as c = {1,2,3} only not 1 again printed


# ADDING TUPLE , LIST , DICT in SET

# 1] Tuples

c.add((4 , 5))  # yes it shows 
print(c)        # bcz TUPLES NOT be CHANGED


# 2] List

# c.add([6 , 7])  # no it shows error
# print(c)         bcz LIST can be CHANGED


#3] Dict

# c.add({8 , 9})    # no it shows error
# print(c)           bcz DICT can be CHANGED


# METHODS IN SET 

a = {0, 1 , 2 , 3 }

a.add(0)   #{0, 1 , 2 , 3, 0}


##1] len( the set )

print(len(a))  #--> len = 4 {it not count extra 0}


##2] set.remove( the no )

a.remove(0)  #--> it remove all 0
a.remove(1)  #--> it remove all 1
print(a)


##3] set.pop() 

a1 = a.pop()    # it remove random value
print(a1)


##4] set.clear() 

a.clear()  #--> make a set an empty set like : set()
print(a)


