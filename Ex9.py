#Q1]

a = open("poem.txt")
a1= a.read()
print(a1)
if "twinkle" in a1:
    print("Yes")
    print(f"The times the word is repeated is {a1.count('twinkle')}")
else:
    print("No")
a.close()


#Q2]

def game():
    return 434

hiscore = game()

b = open("hiscore.txt")
prev_score1 = b.read()

   
if prev_score1 =='':              # here if file is blank then do same thg
   b = open("hiscore.txt","w")   
   b.write(str(hiscore)) 

else: 
  if int(prev_score1) < hiscore :  # here if not blank then do same thing
      b = open("hiscore.txt","w")   
      b.write(str(hiscore))
  else:
    print("Error: Previous score in hiscore.txt is not a valid integer.") 
  
print("Done Updating the hi-score")
   
b.close()


