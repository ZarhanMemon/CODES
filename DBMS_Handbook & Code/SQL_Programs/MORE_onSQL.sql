USE practice_db;

-- SOME IMP :-

-- =====================================================================


-- 1. Logical Operators

-- Logical operators are used to combine multiple conditions in a WHERE clause.

-- Operator              Description                     Example
-- ------------------------------------------------------------------------------------------
-- AND          All conditions must be true          salary > 50000 AND gender = 'Male'
-- OR           At least one condition is true       gender = 'Male' OR gender ='Other'
-- NOT          Reverses a condition                 NOT gender = 'Female'


-- ====================================================================================

-- 2. Add a Column to an Existing Table 
ALTER TABLE user_log 
ADD COLUMN city VARCHAR(100) ,
ADD COLUMN town VARCHAR(100);              -- This adds a new column named city ,town to the user_log table.


-- =====================================================================


-- 3. Wildcard Operators

-- Wildcards are used with the LIKE operator for pattern matching in text.

-- Wildcard                     Description                    Example
-- -------------------------------------------------------------------------------
--  %                         Matches any sequence             WHERE name LIKE 'A%' (starts with A)
--  _                         Matches a single character       WHERE name LIKE '_a%' (second letter is ‘a’)

SELECT * FROM users WHERE name = "_a_h%";   -- return user whos name is -> _a_h___ where second letter is a and forth is h


-- =====================================================================

-- 4. LIMIT with OFFSET

SELECT * FROM users
ORDER BY user_id
LIMIT 5 OFFSET 10;           -- SKIPS FIRST 10 USER row AND print ITS NEXT 5 user  if there

SELECT * FROM users
ORDER BY user_id
LIMIT 10,5 ;               --  WORKS same but -> [ LIMIT offset_no , limit_no ; ] if there

-- ===================================================================================


-- 5. DISTINCT Keyword :  DISTINCT is used to return only unique values if THEY ARE many same copy of its.

SELECT DISTINCT gender FROM users;      -- Returns a list of unique gender values from the users table.


-- ===================================================================================

-- 6. TRUNCATE Keyword :  TRUNCATE removes all rows from a table, but keeps the table structure.
     
TRUNCATE TABLE user_log;

-- Faster than [  DELETE * FROM users ]
-- Cannot be rolled back (unless in a transaction-safe environment)


-- =====================================================================================


-- 7. CHANGE vs MODIFY Column :

-- CHANGE: Rename and change datatype 
ALTER TABLE users
CHANGE COLUMN city location VARCHAR(120) ;  -- city -> location  |  VARCHAR(100) -> VARCHAR(120)


-- MODIFY: Only change datatype
ALTER TABLE users
MODIFY COLUMN salary BIGINT;   -- salary_data_type = INT ==> BIGINT