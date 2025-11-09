

--  PRIMARY KEY &  AUTO_INCREMENT in MySQL
-- ==========================================


-- A PRIMARY KEY is used to uniquely identify each row in a table.
-- AUTO_INCREMENT is used to automatically generate unique numbers for each row.

-- ✅ PRIMARY KEY Basics:
-- -----------------------
-- 1. Must be UNIQUE
-- 2. Cannot be NULL
-- 3. Only ONE PRIMARY KEY per table
-- 4. Can be a single column or a combination of columns

-- ✅ AUTO_INCREMENT Basics:
-- --------------------------
-- 1. Used with INTEGER columns or PRIMARY KEY col mostly
-- 2. Automatically increases the value for each new row
-- 3. Commonly used with PRIMARY KEY to auto-generate IDs for newly added row-data

-- 📌 Example: Using PRIMARY KEY with AUTO_INCREMENT
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- 'id' is the unique identifier
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE           -- 'email' must be unique, but it's not the primary key
);

-- ✅ Inserting data:
-- INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');
-- INSERT INTO users (name, email) VALUES ('Bob', 'bob@example.com');
-- MySQL automatically assigns id = 1, 2, 3, ...

-- 🧮 Change the starting value of AUTO_INCREMENT
ALTER TABLE users AUTO_INCREMENT = 100;  -- Next ID will be 100
-- 1,2,3,4, 100 (here u use above) , 101 ,102 ,..

-- 📌 Composite PRIMARY KEY (more than one column)
CREATE TABLE enrollments (
    student_id INT,
    course_id INT,
    grade CHAR(1),
    PRIMARY KEY (student_id, course_id)  -- Together, these make a unique key
);

-- =====================================================================================

-- 🆚 PRIMARY KEY vs UNIQUE:-

-- Both prevent duplicates, but have key differences:

-- Feature              | PRIMARY KEY       | UNIQUE
-- ---------------------|-------------------|----------------------------
-- Must be unique       | ✅ Yes             | ✅ Yes
-- Allows NULLs         | ❌ No              | ✅ Yes (can be NULL)
-- One per table        | ✅ Only one        | ✅ Many allowed
-- Required?            | 🔸 Recommended     | 🔸 Optional
-- Can be dropped       | ❗ More restricted | ✅ Easier


-- ❌ Drop UNIQUE constraint
ALTER TABLE users DROP INDEX email;  -- INDEX == UNIQUE in mysql

-- ❌ Drop PRIMARY KEY (if needed)
-- ALTER TABLE users DROP PRIMARY KEY;


-- =====================================================================================

-- 🧠 KEY TAKEAWAYS:

-- ✅ Use PRIMARY KEY for the main unique ID of each row
-- ✅ Use AUTO_INCREMENT to auto-generate values (like ID)
-- ✅ Use UNIQUE to avoid duplicate values in other columns (like email or phone)
-- ✅ Only one PRIMARY KEY per table, but multiple UNIQUE constraints are allowed


