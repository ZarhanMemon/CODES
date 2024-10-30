
# '''
# Attemt 1 -

# import pyautogui as pag
# import random
# import time

# while True:
#    x = random.randint(100, 1000)
#    y = random.randint(500, 1000)
#    pag.moveTo(x, y, 2)
#    time.sleep(1)


# ----------------------------------

# Attempt 2 -->

# import pyautogui as pag
# import random
# import time

# def move_cursor():
#     while True:
#         x = random.randint(100, 1000)
#         y = random.randint(500, 1000)
#         pag.moveTo(x, y, 2)
#         time.sleep(1)
        
#         # Ask user if they want to continue
#         user_input = input("Do you want to continue moving the cursor? (yes/no): ").strip().lower()
#         if user_input == 'no':
#             print("Stopping cursor movement.")
#             break

# # Start moving the cursor
# move_cursor()


# NOTE: 

# Drawbacks of This Approach
# --> Cursor Movement: The cursor will pause while waiting for your input, which may not be as smooth or responsive as using threads.
# --> User Experience: You might miss some movements if the input is required at every interval.

# Using threading provides a better user experience for this kind of interactive application, but if you prefer simplicity and don't mind the cursor pausing, the non-threaded version will work as well.

# '''





import pyautogui as pag
import random
import time
import threading

running = True

def move_cursor():
    while running:
        x = random.randint(100, 1000)
        y = random.randint(500, 1000)
        pag.moveTo(x, y, 2)
        time.sleep(1)

def ask_to_continue():
    global running
    while running:
        user_input = input("Do you want to continue moving the cursor? (yes/no): ").strip().lower()
        if user_input == 'no':
            running = False
            print("Stopping cursor movement.")
        elif user_input != 'yes':
            print("Please enter 'yes' or 'no'.")

# Start the cursor movement in a separate thread --> bcz if not then it wait for user to response every single time the move 
cursor_thread = threading.Thread(target=move_cursor)
cursor_thread.start()

# Ask the user in the main thread
ask_to_continue()

# Wait for the cursor thread to finish
cursor_thread.join()


# #NOTE:
# I used threading in the previous example to allow the cursor to move continuously while simultaneously accepting user input. Here’s why threading is helpful in this case:

# --> Simultaneous Execution: Without threading, the program would need to pause the cursor movement to wait for user input, which isn't what you want. Threading allows both actions to happen at the same time.

# --> Responsiveness: The user can input their choice (to continue or stop) at any time without interrupting the cursor's movement. This creates a more interactive experience.

# --> Simple Control: It makes it easier to manage the state of the cursor movement (running or not) with a simple global variable.
