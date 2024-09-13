import random

print("\n       ====The-Perfect-Guess====  ")
  
ply = input("\nEnter yur name? :")


def Guess():
   
 random_no = random.randint(1,100)
#  print(random_no)
    
 ply_choice=None
 guess =0
 lives = 5
   
 while (ply_choice != random_no):
    
   ply_choice = int(input("\nEnter your guess no: "))
  
   guess +=1
  
   if (ply_choice == random_no):
     print(f"U have Guessed Right {ply}!..\n") 
     print(f"You guessed the no in {guess} guesses")

   else:
    print(f"Your guessed is wrong..")
    if (ply_choice > random_no): 
      print(f"\nHINT : Guess is high, guess low no plz**\n")
    elif (ply_choice < random_no): 
      print(f"\nHINT : Guess is low, guess high no plz**\n")
    else:
        print("INVALID")
      
   lives -= 1
   if lives>0 and guess!=random_no:
    print(f"U have {lives} lives left..Play save\n")
    print("-------------------------------------")
   elif lives==0 and guess!=random_no:
      print("\n======You Lost the Game======")
      break
   
 if True :
  play_again= input("\nDo you want to play again? (y/n):").strip().lower()  #strip is used to cut the space and lower to print next to line
  while 0==0:
     if play_again == "n":
       break  
  else:
      print("INVALID")
      
 print("\n Thanks for playing!")


Guess()