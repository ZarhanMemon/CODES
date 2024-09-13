import random

  

def Guess(ply_name):
  
 random_no = random.randint(0,100)
 #print(random_no)
    
#  ply_choice=None
 guess =0
 lives = 10
   
 print("Enter your guess (1 to 100):")
    
 while lives > 0:
       
    ply_choice = input("\nYour guess: ")
        
  
    if not ply_choice.isdigit():
       print("\nPlease enter a valid no.\n")
       continue
  
    ply_choice = int(ply_choice)
    guess +=1
    
  
    if (ply_choice == random_no):
     
     print(f"Congratulations, {ply_name}! You've guessed the number correctly!\n")
     print(f"You guessed the no in {guess} tries.\n")
     
    else:
     print(f"Your guessed it wrong***")
    
    if (ply_choice > random_no): 
      print(f"\nHINT : Guess Lower\n")
    else : 
      print("Hint: Guess Higher.\n")
      
    lives -= 1
   
    if lives>0 and guess!=random_no:
     print(f"Incorrect. You have {lives} lives left.\n")
     print("--"*10)
    
    else:
     print(f"Out of lives! The correct number was {random_no}.")
     print("\n==========.Game over.==========")
     
      

def main():
 ply_name = "Zarhan"
 print("\n      ^^^^^$====The-Perfect-Guess====$^^^^^      \n")
 print(f"Welcome! {ply_name} to Perfect Guess__\n")  
    
 while 0==0:
        Guess(ply_name)
        play_again = input("\nDo you want to play again? (y/n): ").strip().lower()
        print("\n--"*10)
        
        if play_again != 'y':
            print("\nThanks for playing!")
            break
          
          
main()