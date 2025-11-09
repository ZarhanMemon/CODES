USE practice_db;


-- For practice of union 

DROP TABLE IF EXISTS admin_users;

CREATE TABLE admin_users (
id INT  PRIMARY KEY,
 name VARCHAR(100),
 email VARCHAR(100),
 age INT NOT NULL ,
 gender ENUM('Male', 'Female', 'Other'),
 date_of_birth DATE,
 salary INT
);
INSERT INTO admin_users (id, name, email, age , gender, date_of_birth, salary) VALUES
(101, 'Anil Kumar', 'anil@example.com',21 , 'Male', '1985-04-12', 60000),
(102, 'Pooja Sharma', 'pooja@example.com',11 , 'Female', '1992-09-20', 58000),
(103, 'Rakesh Yadav', 'rakesh@example.com', 32, 'Male', '1989-11-05', 54000),
(104, 'Fatima Begum', 'fatima@example.com',56, 'Female', '1990-06-30', 62000);




-- Operator            |    Behavior
-- -----------------------------------------------------------------
-- UNION               |   Combines results, removes duplicates
-- UNION ALL           |   Combines results, keeps duplicates


-- ====================================================================================


-- SQL UNION and UNION ALL :

-- > The UNION operator in SQL is used to combine the result sets of two or more TABLE similar column data in one 
--    SELECT statements. It removes duplicates by default.

-- > If you want to include all rows including duplicates, use UNION ALL .

-- ------------------------------------------------------------------------------------

-- UNION :  This returns a single list of unique names from both tables.

SELECT name FROM users         -- User table  +  Admin table  -> only for name column
UNION
SELECT name FROM admin_users;


-- ====================================================================================

-- UNION ALL :  If you want to keep duplicate names (if any), use UNION ALL .

SELECT name FROM users
UNION ALL
SELECT name FROM admin_users;
-- This returns a single list of unique and its dublicate names too from both tables.


-- ====================================================================================

-- 1 .   Using More Than One Column
-- 2 .   Adding separate col to get the roles ( if User else Admin )
-- 3 .   Using Order By name ASC with UNION -> so to get alphabetical order col

SELECT name , email , salary , 'Users' as role FROM users
UNION 
SELECT name ,email , salary , 'Admin' as role FROM admin_users
ORDER BY name ASC;


-- ====================================================================================

-- Rules of UNION :--

-- 1.  The number of columns and their data types must match in all SELECT statements mean the col u r concatinating should have similar data in it and constraints of it.
-- 2.  UNION removes duplicates by default , only shows that data single time.
-- 3.  UNION ALL shows/keep all duplicates datas too with original one.


-- When to Use UNION :---

-- When you have two similar tables (like current and archived data).
-- When you need to combine filtered results (e.g., high-salary users from two sources).
-- When performing cross-category reporting.









-- Q :  Find MAX salary from union table ( below is alternate way But we USE SUBQUERY in Union : means select query me select query)
SELECT name , salary FROM users
UNION 
SELECT name , salary FROM admin_users
ORDER BY salary DESC;
