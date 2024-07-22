# IF , ELIF , ELSE 

a = 10

##SYNTX of if else ladder

# if(condition1):
    # print("result1")

# elif(condition2):           --> its a second time if 
    # print("result2")
    
# else:
    # print("result 3 , if both is false")


#1]
a = 10

if(a >= 10):
    print("Your ans is correct")
    
else:
    print("Your ans is incorrect")
    

#2]
a= 10
b= 20    
c = 2

b = a * c
a = b/c

if (b == a * c ):
    print("CORRECT b = 20")
elif( a == b/c):
    print(" incorrent ")    
else:
    print("")    
    
#3]
    #  METHOD 1: when input is  integer
    
A = 22

if(A >= 18):
    print("You r eligible to vote")       
else:
    print("You r not eligible to vote")
    
 
#  METHOD 2 : when input is not integer

 
age = input("Enter your age for vote : ") 

#--> you have to convert 
  # input into int from
  # str to do maths in if code
  
if (int(age)>18) :                #--> here                                                            # str to do maths in if code
    print("You r eligible to vote")       
else:
    print("You r not eligible to vote , plz try later")
 
 
 
## MULTIPLE if STATEMENT

a = 10 

if(a == 1):
    print("false") 
    
if(a != 10):              
    print("false") 
   
if(a == 10):       # --> this will print if above if statement is false
    print("true")   #this is combine 1 code 
else:
    print("none")       



# AND , OR , NOT 


A = int(input("Enter the A value:"))
B = int(input("Enter the B value:"))

if(A>21 and B<32):      
    print("TRUE")   
else:
    print("FALSE") 
    


if(A>21 or B<32):      
    print("TRUE")   
else:
    print("FALSE")     
    
    

if(not(A>21) and B<32):      
    print("TRUE")   
else:
    print("FALSE")     
    
    
#Finding in LIST

list = ["rehan","zarhan","iqra","arshi"] 

A = input("Enter the name to find:")

if(A in list):
    print("The",A,"is there in list")
else:
    print("The",A,"is not there in list")  
    
 # IN STRING 
   
sent = "Real again came to harass and harry." 

h = "harry"

if(h in sent):
    print("The harry is there in list")
else:
    print("The harry is not there in list")  