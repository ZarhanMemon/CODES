USE practice_db;
-- MySQL Constraints 

-- it is an ATTRIBUTE to an COL
-- it make the COL -> integrated , definite, to structurize ,atc



SELECT * FROM users;



-- 1.  UNIQUE : Ensures that all values in a column are different.
ALTER TABLE users ADD CONSTRAINT UNIQUE (city);  -- making an col unique 


-- 2.  NOT NULL : Ensures that a column c annot contain NULL values.
ALTER TABLE users MODIFY COLUMN city VARCHAR(15)  NOT NULL;  -- making an col NOT NULL 
ALTER TABLE users MODIFY COLUMN city VARCHAR(15) NULL;  -- making AGAIN  col  NULL 


-- 3.  CHECk : Ensures that values in a column satisfy a specific condition BEFORE ADD IN col. - like security guard 
 -- Example: Allow only age is greator than 18
 ALTER TABLE users ADD CONSTRAINT ANY_NAME_U_WANT_TO_give CHECK (age > 18); 
 
 -- Naming the constraint ( ANY_NAME_U_WANT_TO_give ) helps if you want to drop it later.
 ALTER TABLE users DROP CONSTRAINT ANY_NAME_U_WANT_TO_give;


-- 4 DEFAULT : give default value at the start when row added 
ALTER TABLE users MODIFY COLUMN name varchar(100) DEFAULT "HELLO JAAN";
INSERT INTO users (email,gender,age,city) values 
("dwd@gmail.com" , "F" , 21 , "pune");                -- name = "HELLO JAAN"


-- 5]  PRIMARY KEY : Uniquely identifies each row. Must be NOT NULL and UNIQUE.
ALTER TABLE users
ADD PRIMARY KEY (user_id);



-- 6]  AUTO_INCREMENT : Used with PRIMARY KEY to automatically assign the next number.
--                      Each new row gets the next available integer value in id .
-- CREATE TABLE users (
--  id INT AUTO_INCREMENT PRIMARY KEY,       1,2,3,...
--  name VARCHAR(100)
-- );
