
-- Employee table
CREATE TABLE Employee (
    employee_name VARCHAR(100) NOT NULL,
    street VARCHAR(100),
    city VARCHAR(100),
    PRIMARY KEY (employee_name)
);

-- Company table
CREATE TABLE Company (
    company_name VARCHAR(100) NOT NULL,
    city VARCHAR(100),
    PRIMARY KEY (company_name)
);

-- Works table
CREATE TABLE Works (
    employee_name VARCHAR(100) NOT NULL,
    company_name VARCHAR(100) NOT NULL,
    salary DECIMAL(10,2),
    PRIMARY KEY (employee_name, company_name),
    FOREIGN KEY (employee_name) REFERENCES Employee(employee_name),
    FOREIGN KEY (company_name) REFERENCES Company(company_name)
);


INSERT INTO Employee (employee_name, street, city) VALUES
('Alice', 'MG Road', 'Pune'),
('Bob', 'FC Road', 'Mumbai'),
('Charlie', 'Baner Road', 'Pune'),
('David', 'Linking Road', 'Delhi');

-- Insert sample companies
INSERT INTO Company (company_name, city) VALUES
('FYC', 'Pune'),
('BizSolutions', 'Mumbai'),
('DataWorks', 'Delhi'),
('SmallBank', 'Chennai');

-- Insert sample works data
INSERT INTO Works (employee_name, company_name, salary) VALUES
('Alice', 'FYC', 60000.00),
('Bob', 'BizSolutions', 55000.00),
('Charlie', 'FYC', 6500.00),
('David', 'DataWorks', 70000.00),
('Bob', 'SmallBank', 58000.00);




-- 1. •	Find the names of all employees who work for FBC. 
SELECT employee_name FROM Works where company_name = 'FYC';


-- 2 •	Find the names, street address, and cities of residence of all employees who work FBC and earn more than Rs. 10,000. 

select e.* from Works w ,  Employee e where e.employee_name = w.employee_name and 
w.company_name = 'FYC' and w.salary >10000;


-- 3 •	Find all employees in the database who earn more than all employee of small bank corporation. 
SELECT * FROM Works where salary > ALL ( select salary from Works where company_name='SmallBank');

-- 4 •	Find the company that has the smallest payroll. 
select company_name from Works 
group by company_name
order by sum(salary) LIMIT 1;


-- 5 •	Update the company_name where city is pune 
UPDATE Company set company_name = 'ABC' where city ='Pune';


-- 6 •	Find out name of the company starting with a 
--  •	Find out name of the company ending with a 
--  •	Find out name of the company containing a substring 

select company_name from Company where company_name LIKE 'a%' OR company_name LIKE '%a' OR company_name LIKE '%sun%';