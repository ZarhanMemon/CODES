USE practice_db;

-- Command                           Purpose
-- --------------------------------------------------------------------
-- DELIMITER $$                  Temporarily change statement delimiter
-- CREATE PROCEDURE              Defines a new stored procedure
-- CALL procedure_name(...)      Executes a stored procedure
-- DROP PROCEDURE                Removes an existing procedure 


-- ==========================================================================

-- Stored Procedures  : -

-- A stored procedure is a saved SQL block that can be executed later. 
-- It’s useful when you want to encapsulate logic that can be reused multiple times — like
--   queries, updates, or conditional operations.
-- JUST SIMILAR TO FUNCTIONS not same

-- -----------------------------------------------------------------------

-- Why Change the Delimiter?
-- -> By default, MySQL uses ; to end SQL statements.
-- -> But when defining stored procedures, we use ; inside the procedure as well. This
--     can confuse MySQL. To avoid this, we temporarily change the delimiter (e.g. to
--     $$ or // ) while creating the procedure.

DELIMITER $$

CREATE PROCEDURE print()
BEGIN
 -- SQL statements go here
  SELECT * FROM users; 
  
END $$

DELIMITER ;      -- After the procedure is created, we reset the delimiter back to ; .


CALL print();

-- -----------------------------------------------------------------------

-- Creating a Procedure with Input Parameters :

-- > Input parameters are declared using the ( IN ) keyword.
-- > Stored procedures are stored in the database and can be reused.

DELIMITER $$

-- This creates a procedure named AddUser that accepts five input parameters.
CREATE PROCEDURE insert_user(
-- parmeter in here
IN p_name VARCHAR(100) ,
IN p_email VARCHAR(100) ,
IN p_gender ENUM('M','F') ,
IN p_age INT,
IN p_date_of_birth DATE,
IN p_salary DECIMAL(10,2) ,
IN p_city VARCHAR(100) ,
IN p_ref INT

)
BEGIN
 -- SQL statements go here
 INSERT INTO users (name , email , gender, age , date_of_birth , salary , city , reference_by) VALUES 
 (p_name , p_email , p_gender , p_age , p_date_of_birth , p_salary , p_city , p_ref ) ;
 
  SELECT * FROM users; 
  
END $$

DELIMITER ; 

-- ------------------------------------------------------

-- Calling the Procedure :- This will insert the new user into the users table.
CALL insert_user('Kiran2 Sharma', 'kira2n@example.com', 'F', 12 , '1994-06-15', 72000 , 'abc' , 5);

-- ---------------------------------------------------------

SHOW PROCEDURE STATUS;   -- shows all PROCEDURE existed

DROP PROCEDURE IF EXISTS print;      -- Delete PROCEDURE if there any 