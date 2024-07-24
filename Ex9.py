# #Q1]

# a = open("poem.txt")
# a1= a.read()
# print(a1)
# if "twinkle" in a1:
#     print("Yes")
#     print(f"The times the word is repeated is {a1.count('twinkle')}")
# else:
#     print("No")
# a.close()


# #Q2]

# def game():
#     return 434

# hiscore = game()

# b = open("hiscore.txt")
# prev_score1 = b.read()

   
# if prev_score1 =='':              # here if file is blank then do same thg
#    b = open("hiscore.txt","w")   
#    b.write(str(hiscore)) 

# else: 
#   if int(prev_score1) < hiscore :  # here if not blank then do same thing
#       b = open("hiscore.txt","w")   
#       b.write(str(hiscore))
#   else:
#     print("Error: Previous score in hiscore.txt is not a valid integer.") 
  
# print("Done Updating the hi-score")
   
# b.close()


# #Q3]


# for i in range(2,21):                        # first this code is used for table and then to print particulr table in its own file
 
#   with open(f"Tables/Table(2-20).txt{i}","w") as file:    # and its in 2nd line bcz i want to use i variable          
#                                                           # here {i} and this to create txt file
    
#     for m in range(1,11):                    #this again for table
        
#          file.write(f"{i} x {m} = {m*i}\n")  #this to print code output
 
#     break                                     # remove break if u want all tables
# print("Done Q3")   
         
#Q4]

# with open("donkey1.txt","r") as f:
#    f1 =  str(f.read())

# f1 = f1.replace("###","donkey")

# with open("donkey1.txt","w") as f:
#     f.write(f1) 
       
# print("Done Q4")    


#Q5]

# words = ["Donkey", "stupid","jerk"]

# with open("donkey2.txt","r") as t:
#    t1 =  str(t.read())
   
# for word in words:
#  t1 = t1.replace(word,"###")

# with open("donkey2.txt","w") as t:
#     t.write(t1) 
       
# print("Done Q5") 


#Q6]

# with open("log.txt") as m:
#    m1 = m.read().lower()          # .lower() convert all string in file to lowercase letter
   
#    m2 =  m1.find("pyhton")
#    m3 =  m1.count("python")

# if m2 :
#      print(f"Yes, ther are {m3} python in line no is there in file")
# else:
#     print(None)   


#Q7]

# with open("this.txt") as n:
#   n1 = n.read()
#   with open("copythis.txt","w") as n:
#     n.write(str(n1))