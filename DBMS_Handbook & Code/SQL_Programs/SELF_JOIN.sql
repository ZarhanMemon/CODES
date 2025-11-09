USE practice_db;


ALTER TABLE users ADD COLUMN reference_by INT;

UPDATE users SET reference_by = 2 WHERE user_id IN(3,5,7);
UPDATE users SET reference_by = 3 WHERE user_id=4;

-- ====================================================================================

-- Self JOIN in MySQL

-- • Use Self JOIN when you need to join a table with itself.
-- • Use to compare rows of same table
-- • Use aliases like a and b to differentiate the two instances of the same table.

SELECT * FROM users;

SELECT copy1.user_id , copy1.name , copy1.reference_by , copy2.name  FROM 
users AS copy1                                                                        -- nicknaming the same table 
INNER JOIN                                                     -- left / right
users AS copy2                                                                         -- nicknaming the same table 
ON copy1.reference_by = copy2.user_id;                                                 -- condition of join


-- copy1 refers to the user being queried.
-- copy2 refers to the user who referred them.
-- INNER JOIN is used so that users withOUY ANY NULL in referred_by_id 
 
