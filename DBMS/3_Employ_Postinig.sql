
USE practice_db;


-- Employee table
CREATE TABLE Employees (
    emp_no INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    skill VARCHAR(100),
    pay_rate DECIMAL(10,2)
);

-- Position table
CREATE TABLE Positions (
    posting_no INT PRIMARY KEY,
    skill VARCHAR(100) NOT NULL
);

-- Duty Allocation table
CREATE TABLE Duty_allocation (
    posting_no INT NOT NULL,
    emp_no INT NOT NULL,
    day DATE NOT NULL,
    shift ENUM('day','night') NOT NULL,
    PRIMARY KEY (posting_no, emp_no, day, shift),
    FOREIGN KEY (posting_no) REFERENCES Positions(posting_no),
    FOREIGN KEY (emp_no) REFERENCES Employees(emp_no)
);




-- Insert sample employees
INSERT INTO Employees (emp_no, name, skill, pay_rate) VALUES
(1, 'Alice', 'Carpentry', 500.00),
(2, 'Bob', 'Plumbing', 450.00),
(3, 'Charlie', 'Electrical', 550.00),
(4, 'David', 'Carpentry', 520.00);

-- Insert sample positions
INSERT INTO Positions (posting_no, skill) VALUES
(101, 'Carpentry'),
(102, 'Plumbing'),
(103, 'Electrical');

-- Insert sample duty allocations
INSERT INTO Duty_allocation (posting_no, emp_no, day, shift) VALUES
(101, 1, '2026-05-06', 'day'),     -- Alice assigned to Carpentry, day shift
(102, 2, '2026-05-06', 'night'),   -- Bob assigned to Plumbing, night shift
(103, 3, '2026-05-07', 'day'),     -- Charlie assigned to Electrical, day shift
(101, 4, '2026-05-07', 'night');   -- David assigned to Carpentry, night shift




-- 1. •	Find the shift for the employee ’XYZ’ 
select d.shift from Employees e , Duty_allocation d where e.name = 'Bob' and e.emp_no = d.emp_no;


-- 2. •	Get count of different employee of each shift 
select shift , count(*) from Duty_allocation
group by shift;


-- 3. •	Find the employee eligible to fill a position 
select e.name from Employees e , Positions p where p.skill = e.skill;


-- 4. •	Find employee with the lowest pay rate 
select * from Employees 
order by pay_rate limit 1;


-- 5 •	Find the name and rate of pay of all employee who are allocated to duty 
select e.name  , e.pay_rate from Employees e , Duty_allocation d where d.emp_no = e.emp_no;


-- 6 •	Count the number of employees 
--    •	Calculate the total payrate of the emloyee 
--    •	Calculate the average payrate of the company for each employee. 
--      Find out the minimum payrate and maximum payrate of a company using aggregation. 

select count(*) , sum(pay_rate) , avg(pay_rate) , max(pay_rate) , min(pay_rate) from Employees;

 
