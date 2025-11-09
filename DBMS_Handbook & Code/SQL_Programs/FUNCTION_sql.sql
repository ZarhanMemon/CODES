USE practice_db;



-- SQL Function :-
--   analyze, transform, or summarize data in your tables.



-- 1. Aggregate Functions : return a single value by using set of row data

-- COUNT() -> GIVES TOTALT NO OF USER ACC TO CONDITION.alter
SELECT COUNT(*) FROM users; -- Count total number of users:
SELECT COUNT(*) FROM users WHERE age = 25;  -- with condition

-- MIN() and MAX() : Get the minimum and maximum data like below age
SELECT MIN(age) AS min_age , MAX(age) AS max_salary FROM users;

-- SUM() : Calculate total of any data like age below 
SELECT SUM(age) AS totalOfAges  FROM users;

-- AVG() : give the average of the total of any data.
SELECT AVG(age) AS avgOfAges FROM users;

-- NOTE 
-- Grouping with GROUP BY : U CAN USE ABOVE FIELD on group too ie if use age and calc. its avg for gender(male , female) 
SELECT gender , AVG(age) as Avg_AGEoFgENDER FROM users GROUP BY gender;  -- eg: male = 2 and female =3 
SELECT user_id , email , AVG(age) as Avg_AGE  FROM users GROUP BY user_id;       -- us get the avg of that row /individula user only == that user data only not avg


-- ========================================================================================================================


-- 2. String Functions : function perform operation on string value eg: lenght , etc

-- LENGTH() : no of letter/symbols/spaces in any string ( Length of user names)
SELECT user_id , name , LENGTH(name) as lenName  FROM users;
SELECT user_id , email , LENGTH(email) as lenEmail  FROM users;

-- LOWER() and UPPER() : Convert string to lowercase or uppercase
SELECT user_id , name , UPPER(name) as upperName , LOWER(name) AS lowerName ,  LENGTH(name) as lenName  FROM users;

-- CONCAT() : Combine 1 string into Single string eg:name and email 
SELECT user_id,  name , email , CONCAT( user_id , name , "_" , email) AS name_email  FROM users;      -- 1 + zarhan + _ + email@.com ==>  1zarhan_email@.com

-- ==================================================================================================================================


-- 3. Date Functions : u can perform/use this to show  date

-- NOW() : Current date and time:
SELECT NOW() AS current_timeDate;

-- YEAR() , MONTH() , DAY() : Extract parts of date_of_birth
SELECT name, YEAR(date_of_birth) AS birth_year , MONTH(date_of_birth) AS month , DAY(date_of_birth) AS day  FROM users;  

-- DATEDIFF() : Find number of days between today and birthdate
SELECT name, DATEDIFF(CURDATE(), date_of_birth) AS days_lived FROM users;

-- TIMESTAMPDIFF() : Calculate age in years/month/days
SELECT name, TIMESTAMPDIFF(YEAR, date_of_birth, CURDATE()) AS age_adv FROM users;  -- if u put MONTH , DAY IN THIS => NO OF mon , days


-- ==================================================================================================================================


-- 4. Mathematical Functions

-- ROUND() , FLOOR() , CEIL() 
SELECT user_id , name , salary,
 ROUND(salary) AS rounded,
 FLOOR(salary) AS floored,
 CEIL(salary) AS ceiled
FROM users;


-- MOD() : Find even or odd user IDs  ( a%2 = 0/even or 1/odd )
SELECT user_id, name , MOD(user_id, 2) AS id_even_odd FROM users;


-- ==================================================================================================================================


-- 5. Conditional Functions :  add the condition

-- IF() 
SELECT user_id, name, gender,
 IF(gender = 'F', 'Yes', 'No') AS is_female   -- IF ( CONDITION , true print , false false )
FROM users;


-- =========================================================================================================

-- 📌 SQL Function Summary Table

-- COUNT()     : Count number of rows (e.g., SELECT COUNT(*) FROM users;)
-- SUM()       : Total sum of values in a column (e.g., SELECT SUM(salary) FROM users;)
-- AVG()       : Average of values (e.g., SELECT AVG(age) FROM users;)
-- MIN()       : Lowest value in a column (e.g., SELECT MIN(salary) FROM users;)
-- MAX()       : Highest value in a column (e.g., SELECT MAX(salary) FROM users;)
-- LENGTH()    : Get string length (e.g., SELECT LENGTH(name) FROM users;)
-- CONCAT()    : Merge strings (e.g., SELECT CONCAT(name, ' - ', city) FROM users;)
-- YEAR()      : Extract year (e.g., SELECT YEAR(date_of_birth) FROM users;)
-- DATEDIFF()  : Days between two dates (e.g., SELECT DATEDIFF(NOW(), date_of_birth) FROM users;)
-- ROUND()     : Round numbers (e.g., SELECT ROUND(salary, 0) FROM users;)
-- IF()        : Conditional logic (e.g., SELECT IF(age > 30, 'Senior', 'Junior') FROM users;)

-- ================================
