import random

def generate_random_no():
    return random.randint(0, 100)

def get_player_guess():
    while 0==0:
        try:
            return int(input("Enter Your Guess: "))
        except ValueError:
            print("Please enter a valid number.")
            

def guess_no(player_guess, secret_no):
    if player_guess == secret_no:
        return True
    elif player_guess > secret_no:
        print("\nHint: Lower Guess.")
    else:
        print("\nHint: Higher Guess.")
    return False


def update_live(live):
    live-=1
    return live  


def game_over(live, secret_no):
    if live == 0:
        print(f"Out of lives! The correct number was {secret_no}.")
        print("\n========== Game over. ==========")


def update_highscore(guess):
    try:
        with open('highscore.txt', 'r') as f:
            high_score = int(f.read())
        if high_score > guess:
            with open('highscore.txt', 'w') as f:
                f.write(str(guess))
            print("Updated the high score")
    except FileNotFoundError:
        with open('highscore.txt', 'w') as f:
            f.write(str(guess))
        print("Initial high score set!")
        
        

def play_game(player_name):
    live = 10
    
    print("\n ^^^^^$====The-Perfect-Guess====$^^^^^ \n")
    print(f"Welcome! {player_name} to Perfect Guess__\n")
    print(f"Lives = {live}" + "\n")

    while True:
        secret_no = generate_random_no()
        guess = 0
        
        while live > 0:
            player_guess = get_player_guess()
            guess += 1
            if guess_no(player_guess, secret_no):
                
                print(f"\nCongratulations, {player_name}! You've guessed the number correctly!\n")
                print(f"You guessed the no in {guess} tries.\n")
                print( "--" * 30+"\n" )
                
                update_highscore(guess)
                print("\n" + "--" * 30)
                
                break
            
            live = update_live(live)
            print(f"Incorrect. You have {live} lives left.\n")
            print("--"*30,"\n")
            
            game_over(live, secret_no)
            
            
        play_again = input("\nDo you want to play again? (y/n): ").strip().lower()
        print("\n")
        
        if play_again != "y":
            print("\nThanks for playing!\n")
            print("--" * 20)
            break

def main():
    player_name = "Zarhan"
    play_game(player_name)
    
    
main()