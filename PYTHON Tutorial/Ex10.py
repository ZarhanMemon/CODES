#Q1]
 
class Programmers:
     company="Microsoft"
    
     def __init__(self, name, age,language):
      self.name = name
      self.age = age 
      self.lang = language
      
    #   def info(self):
      print(f"The name,age & language of {self.company} programmer is {self.name}, {self.age} & {self.lang}.")
          
zarhan = Programmers("Zarhan",21,"Python")  
rehan =  Programmers("Rehan", 23,"C#") 

#Q2]

num = int(input("Enter the num :"))
op = input("Enter operation Square(s) , Cube(c) or Square root(r) :")

class Calci:
    def __init__(self,num,op):

        self.num = num
        self.op = op
       
        if self.op == "s":
            print(f"The square value for {self.num} is {self.num**(2)}")
        elif self.op == "c":
            print(f"The cubic value for {self.num} is {self.num**(3)}")
        elif self.op == "r":
         print(f"The cubic value for {self.num} is {self.num**(1/2)}")
        else:
            print("Error")


zarhan = Calci(num , op)         
         
         
#Q3]
class Attribute:
    a = 0  
     
naruto = Attribute()
naruto.a = 1            #--> a= 1 for naruto

sasuke = Attribute()    # here a=0 acc to class attribute which means until we dont do changes in class atr it wil nat change for all abject of that class by doing changes for 1 obj only
 
print(naruto.a,"chaned by class atr to object atr for naruto obj only not for whole CLASS atribute like",Attribute.a,"or for other new obj sasuke with no class atr change",sasuke.a)       
         
         
#Q4]         

num1 = int(input("Enter the num1 :"))
op1 = input("Enter operation Square(s) , Cube(c) or Square root(r) :")

class Calci1:
    
    @staticmethod
    def greet():
        print("Hello, Master")
        
    def __init__(self,num1,op1):

        self.num1 = num1
        self.op1 = op1
       
        if self.op1 == "s":
            print(f"The square value for {self.num1} is {self.num1**(2)}")
        elif self.op1 == "c":
            print(f"The cubic value for {self.num1} is {self.num1**(3)}")
        elif self.op1 == "r":
         print(f"The cubic value for {self.num1} is {self.num1**(1/2)}")
        else:
            print("Error")


rehan = Calci1(num1 , op1)  
rehan.greet()


# Q5]

class Train:
    
    def __init__(self , name , fare , seats):
        self.name = name
        self.fare = fare
        self.seats = seats
    
    def get_status(self):
        print("---------------------------------")  
        print(f"The name of the train is {self.name}")
        print(f"The total number of seats are: {self.seats}")
   
    def get_fare(self):
        print("---------------------------------")  
        print(f"Amount of fare: Rs{self.fare}")
    
    def book_ticket(self):
     print("---------------------------------")
     a = input("Do you want to book ticket? (y/n) :") 
     print("---------------------------------")
     
     if self.seats >0 and a != "n":
         print(f"Your seat has been booked, Your seat no: {self.seats}")
         
         self.seats = self.seats-1                              # here it can reduce the seat which is booked from total seat for new person
         print(f"The current no of seats : {self.seats}")
     
     elif self.seats==0:
         print("Sorry All seat has been booked...")
        
    def cancel_ticket(self):
        print("---------------------------------")
        b = input("Do you want to cancel booking ? (y/n):")
        print("---------------------------------")
       
        if b == "y":
         print(f"Your seat no:{self.seats} has been canceled..")
         self.seats = self.seats+1                              
         print(f"The current no of seats : {self.seats}")       
        else:
            print("Please contact to customer care ... error in canceling ticket!!")
   
      
rajdhani = Train("Indian Express : 300",200,500) 
rajdhani.get_status()
rajdhani.get_fare()
rajdhani.book_ticket()
rajdhani.cancel_ticket()

      
#Q6] self --> is just a word used not a syntx word u can use any word

class Footballer:
  def __init__(zarhan,name):      # type: ignore #--> see here i -> self = zarhan ; self.name = zarhan.name
    zarhan.name = name
    print(zarhan.name)
    
zarhan = Footballer("Messi")
   
class Footballer1:
  def __init__(slf,name):      # type: ignore #--> see here i -> self = slf ; self.name = slf.name
    slf.name = name
    print(slf.name)
    
zarhan = Footballer1("Messi")