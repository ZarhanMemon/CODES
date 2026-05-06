



-- 7 .  Write a PL/SQL block to calculate the grade of minimum 10 students. 

SET SERVEROUTPUT ON;

DECLARE
   marks NUMBER;
   grade CHAR(1);
BEGIN
   -- Example: loop through 10 test values
   FOR i IN 1..10 LOOP
      marks := i * 10;  -- simulate marks (10,20,...100)

      IF marks >= 90 THEN
         grade := 'A';
      ELSIF marks >= 70 THEN
         grade := 'B';
      ELSE
         grade := 'C';
      END IF;

      DBMS_OUTPUT.PUT_LINE('Marks: ' || marks || ' -> Grade: ' || grade);
   END LOOP;
END;
/

