USE practice_db;

SELECT * FROM users;

-- MySQL Indexes : 

--  Indexes in MySQL are used to speed up data retrieval
--  They work like the index of a book — helping the database engine find rows faster, especially for searches, filters, and joins.

 
-- Feature           Description
-- --------------------------------------------------
-- SHOW INDEXES      View current indexes on a table
-- CREATE INDEX      Create single or multi-column indexes
-- DROP INDEX        Remove an index
-- imp:- Use when          Query performance on large tables is a concern
-- imp:- Avoid on          Columns that are rarely queried or always unique


-- Important Notes:- 
-- Indexes consume extra disk space
-- Indexes slow down INSERT , UPDATE , and DELETE operations slightly (because the index must be updated)
-- Use indexes only when needed (i.e., for columns used in WHERE , JOIN , ORDER BY )


 SHOW INDEXES FROM users;
-- To see the indexes on a table        
-- NOTE: Primary Key Automatically created its own primary key index becz to search fast is Primary key only used.


-- -----------------------------------------------

-- Creating a Single-Column Index
CREATE INDEX age_index ON users(age);

-- What this does:
-- Creates an index named age_index
-- Improves performance of queries like:
SELECT * FROM users WHERE age = 40;


-- -----------------------------------------------

-- Creating a Multi-Column Index:
CREATE INDEX age_salary_index ON users(age, salary);


-- This query can take advantage of the combined index on gender and salary.
SELECT * FROM users
WHERE age = 40 AND salary > 70000;  -- and if u write WHERE column as in sequece , while create multiIndex of that col then search is more better

-- WHERE AGE = 40;  -> NOT WORK BEACAUSE THE SALARY COL not used there SO it will Not perforM as GOOD as it is

-- ------------------------------------------------------------

-- To delete an index:
DROP INDEX age_index ON users;   