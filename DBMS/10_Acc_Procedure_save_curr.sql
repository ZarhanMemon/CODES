

SET SERVEROUTPUT ON;


create table Account (
  acc_no INT PRIMARY KEY ,
  cust_name varchar(60),
  balance DECIMAL(10,2),
  acc_type ENUM('Saving','Current')
);

insert into Account values ( 1001 , 'abc chand' , 1203444,'Saving');
insert into Account values ( 1002 , 'chandan' , 13444,'Current');


CREATE OR REPLACE PROCEDURE update_balance
AS
BEGIN

 -- Add 8% into balance if acc = "Saving"
  UPDATE Account SET balance = balance + (balance* 0.08)
  where acc_type = 'Saving';

 -- Add 5% into balance if acc = "Current"
  UPDATE Account SET balance = balance + (balance* 0.05)
  where acc_type = 'Current';

  DBMS_OUPTPUT.PUT_LINE('balance updated');

END;
/
