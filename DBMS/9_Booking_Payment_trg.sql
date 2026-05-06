USE practice_db;


-- Booking table
CREATE TABLE Booking (
    booking_id INT PRIMARY KEY,
    booking_name VARCHAR(100) NOT NULL,
    amount DECIMAL(10,2) NOT NULL
);

-- Payment table
CREATE TABLE Payment (
    payment_id INT PRIMARY KEY,
    booking_id INT,
    amount DECIMAL(10,2) NOT NULL,
    foreign key ( booking_id) references Booking( booking_id)
);




-- 1. •	Implement trigger on database insert into payment after inserting into booking. 
DELIMITER //

CREATE TRIGGER trg_insert 
AFTER INSERT on Booking
FOR EACH ROW
BEGIN
 insert into payment (payment_id ,booking_id , amount ) VALUES 
 ( NEW.booking_id  , NEW.booking_id , NEW.amount);

END //

DELIMITER ;



-- 2. •	Update payment after updating booking. 
DELIMITER //

CREATE TRIGGER trg_update
AFTER UPDATE on Booking
FOR EACH ROW
BEGIN
 
 UPDATE Payment set amount = NEW.amount where booking_id = OLD.booking_id;

END //

DELIMITER ;



-- 3. •	Delete payment record after deleting the corresponding booking record. 
DELIMITER //

CREATE TRIGGER trg_delete
AFTER DELETE on Booking
FOR EACH ROW
BEGIN
 
 delete from Payment where booking_id = OLD.booking_id;
 
 END //
 
 DELIMITER ;





-- Insert sample bookings
INSERT INTO Booking (booking_id, booking_name, amount) VALUES
(1, 'Hotel Reservation', 5000.00),
(2, 'Flight Ticket', 12000.00),
(3, 'Concert Pass', 3000.00);

-- Payment (payment_id, booking_id, amount) 
-- (101, 1, 5000.00),   -- Payment for Hotel Reservation
-- (102, 2, 12000.00),  -- Payment for Flight Ticket
-- (103, 3, 3000.00);   -- Payment for Concert Pass


select * FROM Payment;
