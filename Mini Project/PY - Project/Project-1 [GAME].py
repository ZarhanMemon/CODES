import random
 
 
def game(player,comp):
    if ( player =="r" or player =="rock") and comp=="rock":
        print("\nThe match is a tie !")
    elif ( player =="r" or player =="rock") and comp=="paper":
        print("\nComputer has WON!")
    elif ( player =="r" or player =="rock") and comp=="scisor":
        print(f"\n{ply} has WON!")
      
    elif ( player =="p" or player =="paper") and comp=="rock":
        print(f"\n{ply} has WON!")
    elif  ( player =="p" or player =="paper") and comp=="paper":
        print("\nThe match is a tie !")
    elif ( player =="p" or player =="paper") and comp=="scisor":
        print("\nComputer has WON!")   
   
    elif  ( player =="s" or player =="scisor") and comp=="rock":
        print("\nComputer has WON!")
    elif  ( player =="s" or player =="scisor") and comp=="paper":
        print(f"\n{ply} has WON!")
    elif  ( player =="s" or player =="scisor") and comp=="scisor":
        print("\nThe match is a tie !") 
        
    else:
        return print("Invalid")  
    
             
while 0==0:
  randomno=random.randint(1,3)
  if randomno== 1:
   comp = "rock"
  elif randomno==2:
    comp = "paper"
  elif randomno==3:
    comp="scisor"

  print("\n       ====GAME====  ")
  
  ply = input("\nEnter yur name? :")
  
  print("\nComp Enter's : Rock , Paper or Scisor ?")
  player = input(f"{ply} Enter : Rock(r), Paper(p) or Scisor(s) :")
  
  print(f"\n{ply} turn :{player.capitalize()}")
  print(f"Comp turn :{comp.capitalize()}")
  


  game(player,comp)

# this by chatgpt -- because i want it to repeat or quit the game

  play_again= input("\nDo you want to play again? (y/n):").strip().lower()  #strip is used to cut the space and lower to print next to line

  if play_again == "n":
    break  

print("Thanks for playing!")

