USE practice_db;

-- FOR demo
CREATE TABLE user_log(
id INT auto_increment PRIMARY KEY,
user_id INT   ,
name VARCHAR(100) ,
created_at  timestamp default current_timestamp
);


-- Trigger                Component Description
-- ---------------------------------------------------------------
-- BEFORE / AFTER          When the trigger runs
-- INSERT / UPDATE /       What kind of action triggers it
-- DELETE
-- NEW.column              Refers to the new row (for INSERT , UPDATE )
-- OLD.column              Refers to the old row (for UPDATE , DELETE )
-- FOR EACH ROW            Executes for each affected row



-- ==========================================================================


-- TRIGGER :-

-- A trigger is a special kind of stored program that is automatically executed
-- (triggered) when a specific event occurs in a table — such as INSERT , UPDATE , or
-- DELETE .


-- Triggers are commonly used for:-
--    Logging changes
--    Enforcing additional business rules
--    Automatically updating related data

-- Triggers can be fired:
--   BEFORE or AFTER an event
--   On INSERT , UPDATE , or DELETE


DELIMITER // 
CREATE TRIGGER after_user_add
AFTER INSERT ON users                         -- after any user added in users table
FOR EACH ROW                                  -- for each new user row
BEGIN
      INSERT INTO user_log (user_id , name ) VALUES (NEW.user_id , NEW.name );   -- take the name ,user_id of new user by NEW.name NEW.user_id 
END //                                                                           -- AND add that user data to user_log table
DELIMITER ;

-- Explanation:
--  AFTER INSERT means the trigger fires after the user is inserted.
--  NEW refers to the new row being added to the users table.
--  We insert the new user’s ID and name into the user_log table.
--  STORED IN users TABLE FOLDER

-- -------------------------------------------------------------------------

-- Test the Trigger :
INSERT INTO users (name , email , gender , age , date_of_birth , salary , city)
VALUES ('RitikNa Jain', 'ritikNa@example.com', 'F', 54 , '1996-03-12', 74000 , 'dEHLI');


-- Now check the user_log table: You should see RitikNa’s info automatically logged.
SELECT * FROM user_log;

 -- -------------------------------------------------------------------------

-- DROPING THE TRIGGER:-
DROP TRIGGER IF EXISTS after_user_add;