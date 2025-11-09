USE practice_db;

--  GROUP BY  --  HAVING 

-- Use GROUP BY to organize data, and HAVING to filter those groups based on
-- aggregate conditions.

-- Clause               Purpose                       Can use aggregates?
-- WHERE           Filters rows before grouping              No
-- GROUP BY        Groups rows based on column values        N/A
-- HAVING         Filters groups after aggregation           Yes

-- -------------------------------------------------------------------------------------

-- GROUP BY  :
-- The GROUP BY clause is used to group rows that have the same values in 
--  specified columns. It is typically used with aggregate functions like COUNT , SUM ,
--  AVG , MIN , or MAX .

-- Eg: Average ,Sum Salary by Gender
SELECT gender AS "Gender" , AVG(salary) AS 'Avg_salary', SUM(salary) AS 'Sum_salary' 
FROM users
GROUP BY gender;
-- This groups users by gender -> M and F.
-- Then calculates the average and sum salary for each group.


-- GROUP BY with COUNT : Find how many users were referred by each user
SELECT reference_by AS 'user' , COUNT(reference_by) AS 'Total_Refered_user' FROM users 
WHERE reference_by IS NOT NULL 
GROUP BY reference_by;
 

-- -------------------------------------------------------------------------------------

-- HAVING :-
-- The HAVING clause is used to filter groups after aggregation — similar to how
--  WHERE filters individual rows.

-- EG : Let’s say we only want to show genders where the average salary is greater than ₹65,000.
SELECT  gender , FLOOR(AVG(salary)) as 'avg_salary' FROM users
GROUP BY gender 
HAVING AVG(salary) > 65000;                                       -- WHERE AVG(SALARY) > 65000;  NOT ALOOWED

-- Why not WHERE ?
--  .  WHERE is used before grouping.
--  .  HAVING is used after groups are formed — it’s the only way to filter
--     aggregated values.


-- -------------------------------------------------------------------------------------

-- Another Example: Groups with More Than 1 Referral

SELECT reference_by AS 'USER who Refering' , COUNT(*) AS 'Refered user counts' FROM users
WHERE reference_by IS NOT NULL
GROUP BY reference_by
HAVING COUNT(*) >1;




-- ===========================================================================

-- ROLLUP  : To get subtotals and grand totals FROM the groups u created by GROUP BY, you can use ROLLUP 

SELECT gender ,AVG(salary) as 'Avg_salary' , SUM(salary) as 'SUM_salary' , COUNT(*) AS 'Total member' FROM users
GROUP BY gender WITH ROLLUP
-- This will give you a count of users by gender, along with a grand total for all users.
-- it calculate the Total avg salary of groups differenly than it does for Total salary , etc