USE practice_db;

DROP TABLE IF EXISTS users;

-- Create users table with date_of_birth and salary columns
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    gender ENUM('M', 'F', 'O') NOT NULL,
    age INT,
    date_of_birth DATE,
    salary DECIMAL(10,2),
    city VARCHAR(100)
);

-- Insert sample data including date_of_birth and salary
INSERT INTO users (name, email, gender, age, date_of_birth, salary, city) VALUES
('Alice Johnson', 'alice@example.com', 'F', 25, '2000-09-15', 55000.00, 'New York'),
('Bob Smith', 'bob@example.com', 'M', 30, '1995-03-22', 70000.00, 'Los Angeles'),
('Charlie Lee', 'charlie@example.com', 'M', 22, '2003-07-10', 48000.00, 'Chicago'),
('Diana Brown', 'diana@example.com', 'F', 28, '1997-01-05', 62000.00, 'Houston'),
('Evan Davis', 'evan@example.com', 'M', 35, '1990-11-30', 75000.00, 'Miami'),
('Fiona Clark', 'fiona@example.com', 'F', 27, '1998-06-18', 59000.00, 'San Francisco'),
('George Miller', 'george@example.com', 'M', 40, '1985-04-25', 80000.00, 'Seattle'),
('Hannah Wilson', 'hannah@example.com', 'F', 31, '1994-02-14', 67000.00, 'Boston'),
('Ian Thomas', 'ian@example.com', 'M', 29, '1996-08-08', 61000.00, 'Dallas'),
('Olivia Martin', 'olivia@example.com', 'F', 26, '1999-12-01', 56000.00, 'Denver');

-- Display the users table
SELECT * FROM users;
SELECT * FROM users_pincode;



