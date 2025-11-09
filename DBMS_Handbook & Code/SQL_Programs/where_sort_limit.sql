USE practice_db;




-- Query of DATA

SELECT * FROM users;
SELECT user_id, name FROM users;

--  WHERE :-

SELECT * FROM users WHERE user_id = 10;  -- only 10 userid wala data row

SELECT * FROM users WHERE gender != "F";  --  all MALE USERS row

SELECT * FROM users WHERE age > 22;  -- select users row where thier age is greator than 22
SELECT * FROM users WHERE age < 25;  -- select users row where thier age is less than 25
-- SELECT * FROM users WHERE dateBirth < '1995-01-01';  --  can apply for other parameters


SELECT * FROM users WHERE age >= 22;  -- select users row where thier age is greator than 22 and age is 22
SELECT * FROM users WHERE age <= 22;  -- select users row where thier age is less than 22 and age is 22

SELECT * FROM users WHERE age IS NULL; -- NO USERS HAS AGE ENTER NULL
SELECT * FROM users WHERE age IS NOT NULL; -- EVERY USERS HAS AGE ENTERED

SELECT * FROM users WHERE age BETWEEN 25 AND 30;
-- WHERE age BETWEEN ...         → filter results where:
-- age >= 25
-- and age <= 30
-- ans :- users whos age is (25,26,27,28,29,30) is return if there


SELECT * FROM users WHERE name IN ('Bob Smith', 'Evan Davis');
-- WHERE gender IN ('Male', 'Other') → same as:
-- WHERE gender = 'Male' OR gender = 'Other'
-- IN (...) is just a cleaner way to check against multiple OR values.


SELECT * FROM users WHERE age=30 AND gender="M"; -- check both age and gender if both condition is true then return that users row
SELECT * FROM users WHERE age=30 OR city="Chicago"; -- check both age and city IF ONE OF condition is true then return that users row



-- LIKE (spelling matching):-  here we decide the position of letter acc to % 
SELECT * FROM users WHERE name LIKE "B%"; -- RETURN USER WHERE THE NAME OF IT start WITH "B..."
SELECT * FROM users WHERE name LIKE "%an%"; -- RETURN USER WHERE THE NAME have "...an.." in it
SELECT * FROM users WHERE name LIKE "%n"; -- RETURN USER WHERE THE NAME OF IT ends WITH "....n"


-- -----------------------------------------------------

-- SORTING ROW -> ORDER BY

-- ACENDING order by
SELECT * FROM users ORDER BY name ASC; -- ALPHABETICALLY order the name of users A->Z

-- DECENDING order by
SELECT * FROM users ORDER BY name DESC; -- Reverse of ALPHABETICALLY order the name of users Z->A

-- IMP 

-- Sort all users by gender first, then by name
SELECT * 
FROM users
ORDER BY 
    gender ASC,  -- First: sort by gender (ENUM order: M → F → O because ENUM('M','F','O')) so , M =1st , F = 2nd , O =3rd
    name ASC;    -- Second: if gender is the same/sorted, sort alphabetically by name (A → Z) of the m , f, o groups

-- -----------------------------------------------------

-- LIMIT → restricts how many rows the query returns.
-- OFFSET → skips a given number of rows before starting to return results.

-- LIMIT x → first x rows
-- LIMIT x OFFSET y → skip y rows, then take x rows
-- LIMIT y, x → skip y rows, then take x rows (same as above, just different syntax)
-- Often used with ORDER BY to get top or latest records.

SELECT * FROM users LIMIT 5; -- Top 5 rows

SELECT * FROM users LIMIT 10 OFFSET 5; -- Skip first 5 rows, then get next 10
SELECT * FROM users LIMIT 5, 10; -- Get 10 rows starting from the 6th row (Same as above)
			-- LIMIT skips M user, give N users after it;

-- Get the latest 10 users (needs a 'created_at' column to sort by newest first)
-- FIRSTY WE SORT THE USER ACord WHEN THEY CREATED IN DESCENDING ORDER , newly user at TOP
-- then get TOP 10 USERS as it limit
SELECT * FROM users ORDER BY created_at DESC LIMIT 10;


-- ------------------------------------------------------------------------

 
-- QUESTION

-- 1.}
SELECT * FROM users WHERE user_id > 6 ORDER BY age DESC LIMIT 5;
-- this will retrurn 
-- WHERE user_id>6 -> USER whos user_id is  greator than 6 
-- ORDER BY age DESC -> And sort The above users table in DESCENING order on basis of thier age 
-- LIMIT 5 -> it return the top 5 or under 5 users if there from above sorted users


-- 2.]
SELECT * FROM users ORDER BY age DESC;
-- this will retrurn 
-- ORDER BY age DESC -> Sorted the users table in DESCENDING order by (age) parameter

 
 -- 3.]
 SELECT * FROM users WHERE AGE BETWEEN 30  AND 50 ;
 -- this will retrurn 
 -- WHERE AGE BETWEEN 30  AND 50 -> it gives the users whos age in between 30 - 50 years
