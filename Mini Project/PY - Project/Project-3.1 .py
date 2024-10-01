import random
import os

def generate_random_no():
    return random.randint(0, 100)

def get_player_guess():
    while True:
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

def update_lives(lives):
    return lives - 1

def game_over(lives, secret_no):
    if lives <= 0:
        print(f"Out of lives! The correct number was {secret_no}.")
        print("\n========== Game over. ==========")
        return True
    return False

def update_highscore(guess):
    folder_path = "D:/Program Files/vs codes/CODES/Mini Project"
    os.makedirs(folder_path, exist_ok=True)
    
    highscore_file = os.path.join(folder_path, 'highscore_Perfect_Guess-3:1.txt')
    
    try:
        with open(highscore_file, 'r') as f:
            high_score = int(f.read())
        if guess < high_score:
            with open(highscore_file, 'w') as f:
                f.write(str(guess))
            print("Updated the high score")
        else:
            print("Make a High Score next time **")
    except FileNotFoundError:
        with open(highscore_file, 'w') as f:
            f.write(str(guess))
        print("Initial high score set!")

def play_game(player_name):
    print("\n ^^^^^$====The-Perfect-Guess====$^^^^^ \n")
    print(f"Welcome! {player_name} to Perfect Guess__\n")

    while True:
        secret_no = generate_random_no()
        lives = 10
        guess_count = 0
        
        while lives > 0:
            print(f"Lives = {lives}")
            player_guess = get_player_guess()
            guess_count += 1
            
            if guess_no(player_guess, secret_no):
                print(f"\nCongratulations, {player_name}! You've guessed the number correctly!\n")
                print(f"You guessed the number in {guess_count} tries.\n")
                update_highscore(guess_count)
                print("Your data is stored**")
                print("--" * 30 + "\n")
                break
            
            lives = update_lives(lives)
            print(f"Incorrect. You have {lives} lives left.\n")
            print("--" * 30, "\n")

            if game_over(lives, secret_no):
                break
        
        play_again = input("\nDo you wish to play again? (y/n): ").strip().lower()
        print("\n")
        if play_again != "y":
            print("\nThanks for playing!\n")
            print("--" * 20)
            break

def main():
    player_name = "Zarhan"
    play_game(player_name)

main()

    
