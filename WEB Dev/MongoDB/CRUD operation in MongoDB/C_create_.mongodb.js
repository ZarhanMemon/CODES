
use("MongoDB")

console.log(db);

db.createCollection("Creating_document")

db.Creating_document.insertOne({
    "name":"Zarhnan Ki journey",
    "age":18,
    "hiegth":`6'3"`
})

db.Creating_document.insertMany([
    {
      "name": "Arya Patel",
      "age": 25,
      "height": "5'7\"",
      "occupation": "Software Engineer",
      "hobbies": ["Coding", "Reading", "Cooking"],
      "favorite_color": "Green"
    },
    {
      "name": "Kiran Mehta",
      "age": 29,
      "height": "5'5\"",
      "occupation": "Teacher",
      "hobbies": ["Writing", "Yoga", "Painting"],
      "favorite_color": "Red"
    },
    {
      "name": "Tariq Khan",
      "age": 32,
      "height": "6'0\"",
      "occupation": "Marketing Specialist",
      "hobbies": ["Football", "Traveling", "Music"],
      "favorite_color": "Black"
    },
    {
      "name": "Sanya Kapoor",
      "age": 24,
      "height": "5'8\"",
      "occupation": "Fashion Designer",
      "hobbies": ["Sketching", "Shopping", "Running"],
      "favorite_color": "Purple"
    },
    {
      "name": "Vikram Reddy",
      "age": 27,
      "height": "5'9\"",
      "occupation": "Photographer",
      "hobbies": ["Hiking", "Exploring Nature", "Music"],
      "favorite_color": "Yellow"
    },
    {
      "name": "Zara Ali",
      "age": 21,
      "height": "5'6\"",
      "occupation": "Student",
      "hobbies": ["Dancing", "Reading", "Photography"],
      "favorite_color": "Pink"
    },
    {
      "name": "Rajveer Singh",
      "age": 23,
      "height": "6'1\"",
      "occupation": "Chef",
      "hobbies": ["Cooking", "Tasting New Foods", "Traveling"],
      "favorite_color": "Orange"
    },
    {
      "name": "Maya Joshi",
      "age": 28,
      "height": "5'4\"",
      "occupation": "Psychologist",
      "hobbies": ["Meditation", "Cycling", "Writing"],
      "favorite_color": "Turquoise"
    },
    {
      "name": "Zain Shah",
      "age": 26,
      "height": "5'10\"",
      "occupation": "Architect",
      "hobbies": ["Sketching", "Chess", "Traveling"],
      "favorite_color": "Brown"
    },
    {
      "name": "Neha Sharma",
      "age": 30,
      "height": "5'3\"",
      "occupation": "Doctor",
      "hobbies": ["Running", "Cooking", "Volunteering"],
      "favorite_color": "White"
    }
  ]
  )