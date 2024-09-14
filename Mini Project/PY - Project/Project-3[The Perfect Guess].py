import random

  

def Guess(ply_name):
  
  random_no = random.randint(0,100)
  # print(random_no)
    
#  ply_choice=None
  guess =0
  lives = 10
   
  print("Enter your guess (1 to 100):")
    
  while lives > 0:
       
    ply_choice = input("\nYour guess: ")
        
  
    if not ply_choice.isdigit():                   # writen for error handle
       print("\nPlease enter a valid no.")
       continue
  
    ply_choice = int(ply_choice)
    guess +=1
    
  
    if (ply_choice == random_no):
     
     print(f"\nCongratulations, {ply_name}! You've guessed the number correctly!\n")
     print(f"You guessed the no in {guess} tries.\n")
     print("--"*30)
     break
   
    else:
      print(f"Your guessed it wrong***")
      if (ply_choice > random_no): 
        print(f"\nHINT : Guess Lower\n")
      else : 
       print("\nHint: Guess Higher.\n")
      
      lives -= 1
   
      if lives>0 and guess!=random_no:
       print(f"Incorrect. You have {lives} lives left.\n")
       print("--"*30)
    
      else:
       print(f"Out of lives! The correct number was {random_no}.")
       print("\n==========.Game over.==========")
     

# I WILL MKE THIS FEATURE IN FUTURE:--
     
  # with open("highscore.txt") as f:
  #   high_score = int(f.read())
  
  #   if high_score > int(guess) :
  #        with open("highscore.txt","w") as f:
  #          f.write(str(guess))
  #          print("Done Updating the Hi-score")       
  #   else:
  #    print("Error: Previous score in Score Board of Guess.txt is not a valid integer.") 
  
  
     
     
      

def main():
 
 lives=10
 ply_name = "Zarhan"
 print("\n      ^^^^^$====The-Perfect-Guess====$^^^^^      \n")
 print(f"Welcome! {ply_name} to Perfect Guess__\n")  
 print(f"Lives = {lives}"+"\n")
    
 while 0==0:
        Guess(ply_name)
        play_again = input("\nDo you want to play again? (y/n): ").strip().lower()
        print("\n")
        print("--"*20)
        

        
        
        if play_again != 'yes' or play_again!='y':
          print("\nThanks for playing!")
          break
          
          
main()


  
  
