USE practice_db;

-- JOINs : -

--  JOINs are used to combine rows from two or more tables based on related
--  columns — usually a foreign key in one table referencing a primary key in another.

SELECT * FROM users;              -- Left Table
SELECT * FROM users_pincode;      -- Right Table

-- JOIN Type       |        Description
-- ---------------------------------------------------------
-- INNER JOIN      |  Only matching rows from both tables
-- LEFT JOIN       |  All rows from left table + matching from right
-- RIGHT JOIN      |  All rows from right table + matching from left


-- =======================================================================================================

-- 1. INNER JOIN : Returns only the matching rows from both tables.

SELECT users.user_id , users.name , users.city , users_pincode.userRef_id , users_pincode.Pincode  -- which col from tables to show
FROM users INNER JOIN users_pincode                                                                -- type of join & which 2 tables too
ON  users.user_id = users_pincode.userRef_id;                                                      -- matching col ka condition

-- 1st row user & pincode table is not there so its excluded because there is no matching address. 
-- 4 = userRef_id row data in pincode table is not there , hence the 4th user_id in users table not shows in the INNER-JOIN

-- users|pincode
-- |   | |   |   -> 1ST both users/pincode data missing => not shows
-- | 2 | | 2 |
-- | 3 | | 3 |
-- |   | |   |   -> 4th pincode data missing => both user/pincode 4th data not shows
-- | 5 | | 5 |

-- => only matching pairs shown 
-- (and we can give which 2 col to match and give)

-- ===========================================================================================


-- 2. LEFT JOIN :  Returns all rows from the left table ( users ), and matching rows from the right
--                 table ( pincode ). If no match is found, NULLs are returned

SELECT users.user_id , users.name , users_pincode.userRef_id , users_pincode.Pincode
FROM  users  LEFT JOIN  users_pincode
ON  users.user_id = users_pincode.userRef_id;

-- 1st row user & pincode table is not there so its excluded . Hence not shown

-- 4 = userRef_id row data in pincode table is not there ,
-- hence the 4th user_id in users table is still shows in the Left-JOIN
-- But instead of the 4th userRef_id in pincode table  ( NULL is shown )

-- users|pincode
-- |   | |   |
-- | 2 | | 2 |
-- | 3 | | 3 |
-- | 4 | | null |
-- | 5 | | 5 |
-- => all users + if matched pincode (else NULL)

-- ===========================================================================================


-- 3. RIGHT JOIN : Returns all rows from the right table ( pincode ), and matching rows from the
--                 left table ( users ). If no match is found, NULLs are returned.

SELECT users.user_id , users.name , users_pincode.userRef_id , users_pincode.Pincode  -- which col from tables to show
FROM users RIGHT JOIN users_pincode                                                   -- type of join & which 2 tables too
ON users.user_id = users_pincode.userRef_id;                                          -- matching col ka condition

--  1st row user & pincode table is not there so its excluded . Hence not shown
--  BUT all the paremeter in pincode table is shown also all have some matching data in users table


-- users|pincode
-- |   | |   |   -> not shown bcz no 1st index data in both table 
-- | 2 | | 2 |
-- | 3 | | 3 |   -> -- not shown | 4 user | |   |  => hence if the right table dont have that index value only , then it dont show the that index value in left table if still its there
-- | 5 | | 5 |
-- => all pincodes + matched users (or NULL)


-- =======================================================================================