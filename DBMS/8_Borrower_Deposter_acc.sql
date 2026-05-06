USE practice_db;

-- Branch table
CREATE TABLE Branch (
    branch_name VARCHAR(100) PRIMARY KEY,
    branch_city VARCHAR(100) NOT NULL,
    assets DECIMAL(15,2)
);

-- Borrower table
CREATE TABLE Borrower (
    cust_name VARCHAR(100) NOT NULL,
    loan_num INT PRIMARY KEY,
    branch_name VARCHAR(100) NOT NULL,
    FOREIGN KEY (branch_name) REFERENCES Branch(branch_name)
);

-- Depositor table
CREATE TABLE Depositor (
    cust_name VARCHAR(100) NOT NULL,
    acc_num INT PRIMARY KEY
);



-- Insert sample branches
INSERT INTO Branch (branch_name, branch_city, assets) VALUES
('Central', 'Pune', 50000000.00),
('South', 'Mumbai', 30000000.00),
('North', 'Delhi', 45000000.00);

-- Insert sample borrowers
INSERT INTO Borrower (cust_name, loan_num, branch_name) VALUES
('Alice', 2001, 'Central'),
('Bob', 2002, 'South'),
('Charlie', 2003, 'Central'),
('David', 2004, 'North');

-- Insert sample depositors
INSERT INTO Depositor (cust_name, acc_num) VALUES
('Alice', 3001),
('Bob', 3002),
('Eva', 3003),
('Frank', 3004);




-- 1. •	Display the name of the customer those are depositor as well as saving account (nested query as a depositor) 
select cust_name from Depositor WHERE  cust_name IN ( SELECT cust_name  FROM Borrower );


-- 2. •	Display the name of the customer those are not depositor but having saving account(nested query as a depositor) 
select cust_name from Borrower WHERE cust_name NOT IN ( select cust_name from Depositor );


-- 3. •	Select branch_name where assets are less than assets of pune. 
SELECT branch_name from Branch where assets < ( SELECT assets from Branch where branch_city = 'Pune');


-- 4. •	Display distinct branch name 
select distinct branch_name from Borrower;