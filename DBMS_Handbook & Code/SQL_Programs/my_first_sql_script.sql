CREATE DATABASE zarhansql;

USE zarhansql;

CREATE TABLE usersInfo(
  Roll_no INT AUTO_INCREMENT PRIMARY KEY,
  Name VARCHAR(100) NOT NULL,
  Password VARCHAR(8) NOT NULL UNIQUE,
  Age INT NOT NULL,
  Gender ENUM('M','F')
);

SELECT * FROM usersInfo;

 


 