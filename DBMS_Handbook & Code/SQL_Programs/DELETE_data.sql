USE practice_db;
SET SQL_SAFE_UPDATES = 0;  -- these is for protection from sudden UPDATE/DELETING

select * from users;

-- ------------------------------------------------------------------------------------------

-- DELETE data -> its same as update

DELETE FROM users WHERE user_id = 2;   -- only row with id 2 deleted
DELETE FROM users WHERE gender = "F";  -- all the rows having gender as "F" DELETED

DELETE FROM users;     -- delete all rows in users , not the TABLE users

DROP TABLE users;      -- delete whole TABLE users , the row too ( use carefully )
					   -- This removes the table structure and all data permanently

-- ------------------------------------------------------------------------------------------

-- Best Practices : BACKUP the data ,table , db before destroying it

-- Always use WHERE unless you’re intentionally updating/deleting everything.
-- Consider running a SELECT with the same WHERE clause first to confirm what will be affected:
SELECT * FROM users WHERE id = 3;


-- ------------------------------------------------------------------------------------------

-- QUESTION

-- 1.]  Delete the row in users Table where the salary in any row in less than 50000 in users  (eg : salary = 90)
DELETE FROM users
WHERE salary < 50000;

-- 2.]  Delete the row in users Table where the salary in any row IS NULL ( salary = null)
DELETE FROM users
WHERE salary IS NULL;


 