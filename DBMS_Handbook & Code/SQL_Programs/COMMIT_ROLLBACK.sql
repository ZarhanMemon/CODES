USE practice_db;
-- Transactions(multiple sql command => work as single unit )


-- Transactions and AutoCommit:

-- 1. Disabling AutoCommit : Turn off autocommit (changes won’t be saved automatically)
SET autocommit = 0;

-- ==========================================================================================
-- Show all users before making changes
SELECT * FROM users;

-- Delete the user with user_id = 10 (not permanent yet)
DELETE FROM users WHERE user_id = 10;
-- ==========================================================================================

-- 2. COMMIT — Save changes to the Database permanently 
--             (you’re confident that everything is correct THEN)
COMMIT;

-- Now if u print this after deleting the u have only 9 user (10th user deleted permanent)

-- ==========================================================================================

-- 3. ROLLBACK — Undo the changes u still not save/commit yet,
--               Which will make table to where it was LIKE after LAST COMMITED
ROLLBACK;

-- If u use this before COMMIT then u can see 10 users (since the 10th delete user was not COMMITED/saved so)


-- ==========================================================================================

-- 4. Enabling AutoCommit Again (Optional) To turn autocommit back on
SET autocommit = 1;





-- Best Practices :-
-- Use COMMIT when you want to make changes permanent.
-- Use ROLLBACK to discard changes if something goes wrong.
-- Consider disabling AutoCommit when performing complex updates to avoid
-- saving partial or incorrect data.