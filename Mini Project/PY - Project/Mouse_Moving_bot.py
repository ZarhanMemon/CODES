import pyautogui as pag
import random
import time

while True:
    x = random.randint(600,700)
    y = random.randint(500,600)
    
    pag.moveTo(x,y,0.5)
    time.sleep(1)
    