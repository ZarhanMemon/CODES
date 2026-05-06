USE practice_db;

-- Project table
CREATE TABLE Project (
    project_id INT PRIMARY KEY,
    proj_name VARCHAR(100) NOT NULL,
    chief_arch VARCHAR(100) NOT NULL
);

-- Employee table
CREATE TABLE Employee_s (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(100) NOT NULL
);

-- Assigned_To table
CREATE TABLE Assigned_To (
    project_id INT NOT NULL,
    emp_id INT NOT NULL,
    PRIMARY KEY (project_id, emp_id),
    FOREIGN KEY (project_id) REFERENCES Project(project_id),
    FOREIGN KEY (emp_id) REFERENCES Employee_s(emp_id)
);



-- Insert sample projects
INSERT INTO Project (project_id, proj_name, chief_arch) VALUES
(1, 'Banking System', 'Alice'),
(2, 'E-Commerce Platform', 'Bob'),
(3, 'Hospital Management', 'Charlie');

-- Insert sample employees
INSERT INTO Employee_s (emp_id, emp_name) VALUES
(101, 'David'),
(102, 'Eva'),
(103, 'Frank'),
(104, 'Grace');

-- Assign employees to projects
INSERT INTO Assigned_To (project_id, emp_id) VALUES
(1, 101),   -- David assigned to Banking System
(1, 102),   -- Eva assigned to Banking System
(2, 103),   -- Frank assigned to E-Commerce Platform
(3, 104);   -- Grace assigned to Hospital Management




-- 1. Get the employee number of employee working on project eCommerce 2: 
--    2. Get details of employees working on project SAME: 

select COUNT(emp_id) from Assigned_To where project_id = 2;
select E.* from Employee_s E , Assigned_To A where A.project_id = 2 and A.emp_id =E.emp_id;


-- 3. Obtain details of employees working on database project 1 
select E.* from Employee_s E , Assigned_To A where A.project_id = 1 and A.emp_id =E.emp_id;


-- 4. Get the employee number of employees who are not on any project. 
select  * from Employee_s  where emp_id  NOT IN ( SELECT  emp_id from Assigned_To);


-- 5. Display Project_id,Proj_name,emp_id and emp_name 
select p.project_id , p.proj_name ,e.emp_id, e.emp_name
 from Employee_s e , Project p , Assigned_To a 
where a.project_id = p.project_id and a.emp_id = e.emp_id;


-- 6 Implement Date and Time functions such as date,time,now,day, etc. on either suitable database or instant values passed directly. 

SELECT sysdate() FROM dual;

SELECT CURRENT_DATE FROM dual;