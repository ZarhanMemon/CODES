

-- Write down the commands for Create Table,View,Index,Alter,drop,Sequence 

-- Consider the following database: 

-- Employee (emp_no, name, skill, pay_rate) 
-- Position (posting_no, skill) 
-- Duty_allocation (posting_no, emp_no, day, shift) 



-- 1. Create Index on table Employee with emp_no 
CREATE INDEX index_emp on Employees(emp_no);


-- 2. Perform alter table operation 
ALTER TABLE employee_s add age INT;


-- 3. Create View on columns emp_no and pay_rate with Employee table. 
CREATE VIEW show_details AS
select emp_no , pay_rate from Employees;

select * from show_details;


-- 4. Create sequence on table Employee with emp_no 

-- CREATE SEQUENCE emp_seq START WITH 1 INCREMENT BY 1;



-- 5. . Perform drop & truncate operation on table 
drop table employee;
truncate table employee;