USE practice_db;

-- WINDOW FUNCTION:


 
-- AGREGATED function

-- SELECT user_id , name , salary,
--  SUM(user_id) OVER( PARTITION BY salary ORDER BY user_id ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) as "Total"
--  , SUM(user_id) OVER( ORDER BY user_id ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) as "Total"
-- ,  SUM(user_id) OVER( ORDER BY user_id ) as "Total"
-- FROM users;

-- ---------------------------------------------------------

-- RANK function 

-- SELECT user_id , name , salary,
--  ROW_NUMBER() OVER( ORDER BY name ) as "ROW_NO - normal" ,
--  RANK() OVER( ORDER BY salary ) as "RANK - skip" ,
--  DENSE_RANK() OVER( ORDER BY salary  ) as "DENSE RANK - no skips",
--  PERCENT_RANK() OVER( ORDER BY user_id ) as "Percent rank == DR"
--  FROM users;


-- --------------------------------------------------------------------------------

--    VALUE/ANALYTIC function

-- SELECT user_id , name , age ,
--    FIRST_VALUE(age) OVER(ORDER BY user_id) as "first_val",
--    LAST_VALUE(age) OVER(ORDER BY user_id) as "LAST_val - no partition/rows then as it is copy i/n to o/p",
--    LAST_VALUE(AGE) OVER(ORDER BY  user_id ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) as "TRUE_LAST_VAL",
--    
--    LEAD(age) OVER( ORDER BY user_id) AS "LEADING - next val of curr",
--    LAG(age) OVER( ORDER BY user_id) AS "LAGGING - PREV val of curr"

-- FROM users;


-- Assignment:-  skip the next and prev , lead and lag value and give its next and prevs values

--  LEAD ( column_name , no of skip next rows )        |      LAG ( column_name , no of skip prevs rows )

SELECT user_id ,

LEAD(user_id ,  2) OVER(ORDER BY user_id ) as "lead - next 1 row skip and its next is lead_val",

LAG(user_id ,  2) OVER(ORDER BY user_id ) as "lag - prev 1 row skip and its prevs is lag_val"

FROM users
;