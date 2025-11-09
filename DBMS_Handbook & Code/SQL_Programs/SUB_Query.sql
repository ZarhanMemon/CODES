USE practice_db;


-- SUB QUERY :-

-- A subquery is a query nested inside another query. 
-- Subqueries are useful for breaking down complex problems into smaller parts.

-- They can be used in:
-- • SELECT statements
-- • WHERE clauses
-- • FROM clauses



-- CASE 1 :- Suppose we want to find all users who earn more than the average salary of all users

-- This subquery returns a single value — the average salary — and we compare each user’s salary against it.
SELECT user_id , name , salary FROM users
WHERE salary > (SELECT AVG(salary) FROM users);
 
-- • The inner query: SELECT AVG(salary) FROM users returns the average salary.
-- • The outer query selects all users with a salary greater than that average.

-- ---------------------------------------------------------------------------------

-- Subquery with IN

-- CASE 2 : Now let’s say we want to find users who have been referred by someone who earns more than ₹75,000.
SELECT user_id , name , reference_by FROM users
WHERE reference_by
IN (                                                  -- pick the USER who matches below condotion. like:- (..  salary IN ( 10 , 20);
SELECT reference_by FROM users WHERE salary >75000   -- this give ranges of reference user who is true acc to conditon
);

-- Explanation:
-- • The inner query: SELECT id FROM users WHERE salary > 75000 returns a list of user IDs 
--    (referrers BY USING WHERE+IN) who earn more than ₹75,000.
-- • The outer query selects users whose referred_by_id is in that list


-- -------------------------------------------------------------------------

-- Other Places Subqueries Are Used :-  AS , IF , etc

SELECT user_id , name , (IF(salary>70000, "HA" , "Nahi") ) AS amir FROM users;  
-- in amir col , if salary >70000 ? print HA : print NAHI

SELECT name, salary,
(SELECT AVG(salary) FROM users) AS average_salary
FROM users;
-- This shows each user’s salary along with the overall average.


-- -------------------------------------------------------------

-- Subquery              Type Use Case
-- ---------------------------------------------------------------
-- Scalar Subquery       Returns one value (e.g. AVG, MAX)
-- Subquery with IN      Returns multiple values
-- Subquery in SELECT    Shows related calculated value
-- Subquery in FROM      Acts as a virtual table


-- Subqueries are powerful tools when filtering based on computed or dynamic conditions.