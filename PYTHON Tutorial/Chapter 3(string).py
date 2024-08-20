a=34
b="zarhan"
print (a,b)
print(type(a))
print(type(b))

c= 'zarhan"s'
c1='''hi 'hello"
      hwi'''
print(c,c1)

# STRING Adding

A = "hello"
B = "my baby"
print(A + B)     #method 1

C = A + B
print(C)         #method 2


# STRING SLICING [0,1,2....]

n1= "Zarhan"
print(len(n1))   #its show how many character lenght are in string

print(len(n1[0:1]))
print(len(n1[0:2]))      # we can also select petricular character in string to show its lenght
print(len(n1[0:3]))
print(len(n1[0:4]))
print(len(n1[0:5]))
print(len(n1[0:6]))


print(n1[0])     # for Z
print(n1[1])      #for a
print(n1[2])       # for r
print(n1[3])       # for h
print(n1[4])       ## for a
print(n1[5])        # for n

print(n1[0:6])   #remember if i m writing 6 but python will run 5 from start 0 [n=6 for me but n=5 for python]
                       #output= Zarhan
                       
print(n1[0:5])           #output= Zarha            
print(n1[0:4])           #output= Zarh  
print(n1[0:3])           #output= Zar
print(n1[0:2])           #output= Za
print(n1[0:1])           #output= Z               

       # Ans its not compulsory to start from 0

print(len(n1[:4]))   # And also if we not write start then its [start : 4]
print(len(n1[1:]))    #we not write end then its [1: last ]


#NEGATIVE SLICING [-6,-5..... -1]

print(n1[-6:-1])  #is same as [0:6] 

print(n1[-6:-2])  #is same as [0:5]

# SLICING WITH SKIP VALUE

D= "ZARHAN"
print(D[0::3])
print(D[1:5:2])   #is me 2 isliye hai kyu ki are new charcter ke second character wo  print skip karenga
                  #like Z PRINT but not A OK 
                  
                  
# STRING FUNCTION 

H="hello hi khana khake hi jna hae"

#1]

print(len(H))     #show lenth of character in a string
print(len(H[0:6]))


#2] ENDSWITH - verifying the end word is corrct 

print(H.endswith("hae"))   # -->true [it verify that its has correct end ing as commanded
print(H.endswith("ed"))    # -->false


#3] COUNT - count the selected leteer in string
 
print(H.count("h"))       # it count a perticukar letter
print(H.count("e"))
# also used for words
print(H.count("hello"))


#4]  CAPITALIZE - capital first word of sentence
  
print(H.capitalize())   #output is Hello.....


# 5]  FIND -- the position of letter

print(H.find("hae"))  #output is 25th leter 
print(H.find("hi"))   #but if more than 1 same letter is string the n its show frist letter place
 
 
#6] REPLACE -- the og letter form another

print(H.replace("hello" , "mazama kencho")) #output - mazama khemcho... noT hello...

G="duhduh"
print(H.replace("H" , "G"))  #NOT WORK FOR WHOLE STRING



