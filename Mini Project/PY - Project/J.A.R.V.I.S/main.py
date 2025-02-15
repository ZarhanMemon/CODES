import win32com.client
import speech_recognition as sr
import webbrowser
import time
import os
import datetime
import requests
import threading
from bs4 import BeautifulSoup

# Function to speak text
def say(text):
    speaker = win32com.client.Dispatch("SAPI.SpVoice")
    speaker.Speak(text)

# Function to listen to user command
def takeCommand():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening for your command...")
        audio = r.listen(source)
        print("Recognizing...")

        try:
            query = r.recognize_google(audio, language="en-in")
            print(f"Recognized text: {query}")
            return query
        except sr.UnknownValueError:
            say("Sorry, I could not understand that. Could you repeat?")
            return None
        except sr.RequestError:
            say("Sorry, I'm having trouble connecting to the speech recognition service.")
            return None

# Function to open websites based on input
def open_website(query):
    websites = {
        "youtube": "https://www.youtube.com",
        "google": "https://www.google.com",
        "wikipedia": "https://www.wikipedia.com",
        "facebook": "https://www.facebook.com",
        "twitter": "https://www.twitter.com",
        "instagram": "https://www.instagram.com",
        "linkedin": "https://www.linkedin.com",
        "reddit": "https://www.reddit.com",
        "pinterest": "https://www.pinterest.com",
        "github": "https://www.github.com",
        "stackoverflow": "https://www.stackoverflow.com",
        "amazon": "https://www.amazon.com",
        "netflix": "https://www.netflix.com",
        "spotify": "https://www.spotify.com",
        "news": "https://www.bbc.com",
        "quora": "https://www.quora.com",
        "yahoo": "https://www.yahoo.com",
        "tumblr": "https://www.tumblr.com",
        "medium": "https://www.medium.com",
        "etsy": "https://www.etsy.com",
        "snapchat": "https://www.snapchat.com",
        "tiktok": "https://www.tiktok.com"
    }

    for site in websites:
        if f"open {site}" in query.lower():
            webbrowser.open(websites[site])
            say(f"Opening {site}...")
            return
    say("Sorry, I couldn't recognize the site.")

# Function to play a song based on the query
def play_song(query):
    songs = {
        "butter": "song\\BUTTER-[BTS].mp3",
        "dna": "song\\DNA-[BTS].mp3",
        "dynamite": "song\\Dynamite-[BTS].mp3",
        "exam": "song\\Exam-[Rehan].mp3",
        "solo leveling": "song\\Solo Leveling-[Zarhan].mp3",
        "squid game": "song\\Squid game-[Dikz].mp3"
    }

    for song in songs:
        if f"play {song}" in query.lower():
            os.system(f"start {songs[song]}")
            say(f"Playing {song}...")
            return songs[song]
    say("Sorry, I couldn't find the song.")
    return None

# Function to stop the current song
def stop_song():
    try:
        os.system("taskkill /im wmplayer.exe /f")  # Stop Windows Media Player
        os.system("taskkill /im vlc.exe /f")  # Stop VLC Player
        os.system("taskkill /im Spotify.exe /f")  # Stop Spotify
        say("Music stopped.")
    except Exception as e:
        say(f"An error occurred: {str(e)}")

# Function to get weather information
def get_weather(city="Pune"):
    api_key = "your_api_key"  # Replace with your OpenWeatherMap API key
    base_url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"
    try:
        response = requests.get(base_url)
        data = response.json()
        if data["cod"] != "404":
            main = data["main"]
            weather = data["weather"][0]
            temperature = main["temp"]
            description = weather["description"]
            say(f"The temperature in {city} is {temperature} degrees Celsius with {description}.")
        else:
            say("City not found. Please try again.")
    except Exception as e:
        say(f"Sorry, I couldn't fetch the weather. Error: {str(e)}")

# Function to get news headlines
def get_news():
    try:
        url = "https://news.google.com/news/rss"
        response = requests.get(url)
        soup = BeautifulSoup(response.content, features="xml")
        news_items = soup.findAll("item")
        for index, item in enumerate(news_items[:5]):  # Read top 5 headlines
            say(f"Headline {index + 1}: {item.title.text}")
            time.sleep(1)
    except Exception as e:
        say(f"Sorry, I couldn't fetch the news. Error: {str(e)}")

# Function to set a reminder
def set_reminder(reminder_text, delay):
    if delay <= 0:
        say("Please provide a positive value for the reminder time.")
        return
    def reminder():
        time.sleep(delay)
        say(f"Reminder: {reminder_text}")
    reminder_thread = threading.Thread(target=reminder)
    reminder_thread.start()

# Main execution loop
if __name__ == "__main__":
    say("Hello, I am Jarvis AI. How can I assist you?")
    current_song = None  # Variable to store the current song being played

    while True:
        input_command = takeCommand()
        if input_command:
            if "open" in input_command.lower():
                open_website(input_command)
            elif "play" in input_command.lower():
                current_song = play_song(input_command)
            elif "stop" in input_command.lower():
                stop_song()
            elif "weather" in input_command.lower():
                city = input_command.lower().replace("weather", "").strip()
                if city:
                    get_weather(city)
                else:
                    get_weather()
            elif "news" in input_command.lower():
                get_news()
            elif "reminder" in input_command.lower():
                say("What should I remind you about?")
                reminder_text = takeCommand()
                if reminder_text:
                    say("In how many minutes?")
                    delay_minutes = int( input("Enter the minutes :"))
                    try:
                        set_reminder(reminder_text, delay_minutes * 60)
                        say(f"Reminder set for {delay_minutes} minutes.")
                    except ValueError:
                        say("Sorry, I didn't understand the time.")
            elif "exit" in input_command.lower():
                say("Shutting down. Goodbye!")
                break
            elif "time" in input_command.lower():
                current_time = datetime.datetime.now().strftime("%H:%M:%S")
                say(f"The current time is {current_time}.")
                print(f"The current time is {current_time}.")
            else:
                say(f"You said: {input_command}")
        time.sleep(1)
    print("End of process.")