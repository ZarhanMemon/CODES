

CREATE TABLE Publisher(
  pub_id INT PRIMARY KEY auto_increment,
  pub_name VARCHAR(20),
  city VARCHAR(40)
  );
  
  
  CREATE TABLE Books(
  bk_id INT PRIMARY KEY auto_increment,
  title VARCHAR(20),
  author VARCHAR(40),
  pub_id INT,
  foreign key (pub_id) references Publisher(pub_id)
  );
  
  CREATE TABLE Student(
   st_id INT primary key auto_increment,
   name varchar(30),
   course varchar(30)
   );
   
   INSERT INTO Publisher value (1 , 'abc','pune');
      INSERT INTO Student value (001 , 'aaa','CG');
         INSERT INTO Books value (101 , 'CG Ki book','ango',1);
         
         
	UPDATE Student set name='zzz' where name = 'aaa';
    DELETE FROM Books where bk_id =101;