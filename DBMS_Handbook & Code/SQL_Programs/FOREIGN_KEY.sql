
USE practice_db;  -- give access to use the users table here


DROP TABLE IF EXISTS users_pincode;


-- FOREIGN KEY :   IMP

-- 1.  A foreign key is a column that creates a link between two tables. It ensures that
--     the value in one table must match a value in another table.
-- 2. This is used to maintain data integrity between related data.

CREATE TABLE users_pincode (
  id INT AUTO_INCREMENT PRIMARY KEY,  -- PRIMARY KEY for this table
  userRef_id INT,                     -- key which ref the row data of THat table in order
  Pincode VARCHAR(120) NOT NULL,      -- the pincode data of the users in THAT table
  
   CONSTRAINT fk_user FOREIGN KEY (userRef_id) references users(user_id) ON DELETE CASCADE  
   -- making THE userRef_id AN FOREIGN KEY to link THIS table WITH THAT one
 
 --  ON DELETE CASCADE -> enable feature of automatically delete the ref row in link tabled if that row data which its link to in deleted
--       "     SET NULL -> if main table row delete the , sub table row which point/link to that main row data == NULL ( it dont ref anything) 
--       "     RESTRICT -> YOUR ARE NOT ALLOWED TO UPDATE/DELETE any MAIN row data , if mysql err

);


INSERT INTO users_pincode (userRef_id, Pincode) VALUES
(1, '10001'),  -- New York
(2, '90001'),  -- Los Angeles
(3, '60601'),  -- Chicago
(4, '77001'),  -- Houston
(5, '33101'),  -- Miami
(6, '94101'),  -- San Francisco
(7, '98101'),  -- Seattle
(8, '02101'),  -- Boston
(9, '75201');  -- Dallas



-- ALTER + FOREIGN_KEY:-
ALTER TABLE users_pincode DROP FOREIGN KEY fk_user;
ALTER TABLE users_pincode ADD CONSTRAINT fk_user FOREIGN KEY (id) REFERENCES users(user_id);


SELECT * FROM users_pincode;
SELECT * FROM users;

-- WITH out (ON DELETE ___ ) when u delete any maintable row data ->  throw error  |  But not when del sub table row data
DELETE FROM users WHERE user_id=1;      -- yes err
DELETE FROM users_pincode WHERE id=1;    -- no err
