USE practice_db;



-- MySQL Views :- 

-- ~ A view in MySQL is a virtual table based on the result of a SELECT query. 
-- ~ It does not store data itself — it always reflects the current data in the base tables


-- Views are useful when:
-- 1. You want to simplify complex queries
-- 2. You want to reuse logic
-- 3. You want to hide certain columns from users
-- 4. You want a “live snapshot” of filtered data - updated data u get in view as from live Table


-- Summary:-
 -- Views act like saved SELECT queries
 -- Views are not duplicated data
 -- Changes to base tables are reflected automatically
 -- Great for simplifying complex queries or creating filtered access


-- Creating a View:-
CREATE VIEW rich_users AS
SELECT * FROM users WHERE salary > 70000;


-- Using VIEW:-
SELECT user_id , name , salary FROM rich_users;      -- now if u want to use rich user query u can just use the rich_users VIEW in place of its select qry


-- Droping View :-
DROP VIEW rich_users;

-- ==================================================================

-- LIVE UPDATE of VIEW virtual data :

SELECT COUNT(user_id) FROM rich_users;  -- rich_user = 3

UPDATE users SET salary = 65000 WHERE user_id = 2;   -- Bob Smith -> salary = 75,000 => 65,000 < 70,000;  
-- and now he is not rich users 

-- now user table updated  -> HOW MUCH rich_user NOW? in view of rich user
SELECT COUNT(user_id) FROM rich_users;                                      -- rich_user = 2


-- THAT means as i changed the user table => rich_users view ALSO updated





DROP VIEW rich_users;