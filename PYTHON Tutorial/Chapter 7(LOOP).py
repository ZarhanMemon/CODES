
# TYPES OF LOOP :  1] While 
#                  2] for 
 
 
                
#    WHILE  Loop

# 1]
a = input("Enter the no:")

while int(a)<=50 :  #condition is true then it works if false then not
    print("Yes",a)  #body 
   
    a = int(a) + 1   #addition code
 
 
# 2)   

b = input("Enter the no:")
while int(b) <=5 :      #condition is true then it works if false then not
    print("Zarhan")    #body 
    
    b = int(b) + 1 
    
# 3]

fruits = ["mango","apple","bannan","grapes"]

i = 0

while int(i) < len(fruits[0:6]):  # i should ne integer in while code
    print(fruits[int(i)])
    i = int(i) + 1
    
#---------------------------------------------------------------------------
 
# FOR Loop    


fruits = ["mango","apple","bannan","grapes"]

for items in fruits:        #--> syntx
  
    print(items)
    

   
# RANGE in For Loop

for i in range(1, 6 , 1):      #--> range( start , stop{n-1} , skip step )
     print(i)  

for i in range(2 , 6 , 2):
    print(i)   
 
    
#--------------------------------------------------------------------------------
    
#   FOR Loop with else


# 1)
a = [1 , 2 , 3 , 4 ]     

for items in a :
    print(items)
else:                   #--> ELSE
    print("DONE")    
   
    
# 2)
for a in range(0 , 10):
    print(a)
  
    if a == 6:      
     break              # at 6 it breaks the loop and hence else will not printed bcz 
 
else:                    #--> ELSE willl only print if our loop ends as it coded
    print("COMPLETED")        
  
  
# -------------------------------------------------------------------------
 
    
#   BREAK , CONTINUE , PAN    


# 1] BREAK

for i in range(0,10):
    print(i)
  
    if i == 6:        # if i comes at 6 then the loop will break at 6
     break                # else will not be use full in this case

# -----------------------------

# 2] CONTINUE

for i in range(0,10):
  
    if i == 6: 
    
     print(i)            # it will only print the no 6 and the loop ends
    
     continue         
else:                     
    print("else is used here") 

# AND 

for i in range(0,10):
  
    if i == 6: 
      continue              
   
    print(i)          # it will skip the no 6 and the loop till ends

else:                    
    print("else is used here") 

#--------------------------------------


#3] PASS
  
for i in range(0,10):
    if i==2:
        pass
    else:
        print("Done") 

      
  
