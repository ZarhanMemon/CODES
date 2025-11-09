USE practice_db;
SET SQL_SAFE_UPDATES = 0;


-- UPDATE the DATA :-

-- using UPDATE -> we tell to update 
-- SET col_parameter -> what to update 
-- WHERE condition  ->  of whom to update

UPDATE users SET age = 18                   -- what col_value of that row to change 

  -- you can change multiple column
  , name = "Zarhan", email = "zarhan123@gmail.com"
  , gender = "M" , city = "PUNE"
   
WHERE user_id = 3 ;                            -- of which to change(condition)


SELECT * FROM users;

-- -------------------------------------------------------

-- QUESTION

-- 1.] Update the city of user with user_id = 5 to CHENNAI.
UPDATE users SET city = "CHENNAI"
WHERE user_id = 5;


-- 2.] Change the name of the user with email evan@example.com to Aisha Khan .
UPDATE users SET name = "Aisha Khan"
WHERE email = "evan@example.com";

-- 3.] Increase age by 10yrs for all users whose age is less than 30yrs.
UPDATE users
SET age = age + 10
WHERE age < 30;           -- for this DISABLE the safe mode of sql =>  SET SQL_SAFE_UPDATES = 0;

-- 4.] Set the gender of user Alice Johnson to Other 
UPDATE users SET gender = "O"    -- "O" is  correct opt bcz ENUM(M,F,O) FOR IT
WHERE name = "Alice Johnson";

-- 5.] Reset CITY of all users to Delhi (Careful - affects all rows).
UPDATE users SET city = "Delhi";   





