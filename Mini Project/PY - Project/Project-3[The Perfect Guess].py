import random

ply_name = "Zarhan"
print("\n      ^^^^^$====The-Perfect-Guess====$^^^^^      \n")
print(f"Welcome! {ply_name} to Perfect Guess__\n")  

  

def Guess():
  
 random_no = random.randint(1,100)
 #print(random_no)
    
 ply_choice=None
 guess =0
 lives = 10
   
 while (ply_choice != random_no):
   if guess==0:  
    ply_choice = int(input("\nEnter your guess any no from 1 to 100: "))
    guess +=1
   else:
    ply_choice = int(input("\nEnter your guess no : "))
  
   if (ply_choice == random_no):
     print(f"U have Guessed Right {ply_name}!..\n") 
     print(f"You guessed the no in {guess} guesses\n")

   else:
    print(f"Your guessed it wrong***")
    if (ply_choice > random_no): 
      print(f"\nHINT : Guess is high, guess low no plz..\n")
    elif (ply_choice < random_no): 
      print(f"\nHINT : Guess is low, guess high no plz..\n")
    else:
        print("INVALID")
      
   lives -= 1
   if lives>0 and guess!=random_no:
    print(f"U have {lives} lives left..Play save\n")
    print("----------------------------------------")
   else:
     print(f"The correct guess was {random_no}.")
     print("\n======You Lost the Game======")
     
      

def main():
    while 0==0:
        Guess()
        play_again = input("\nDo you want to play again? (y/n): ").strip().lower()
        print("\n----------------------------------------")
        
        if play_again != 'y':
            print("\nThanks for playing!")
            break
          
          
main()