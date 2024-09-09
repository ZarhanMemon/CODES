class Anime:               #--> Main Class
    type="shonen"
    
    def show_type(self):
        print(self.type)
        
class Naruto(Anime):        #--> Child Class
    hero = "naruto"
    type ="manga"
 
    def show_hero(self):
        print(f"the hero is {self.hero}")
        
    # def show_type(self):            if u use this then in output is type as manga not shonen 
    #     print(self.type) 
     
      
zarhan= Anime() 
zarhan.show_type()
#zarhan.show_hero()      -> see the main class - Anime cannot use atr of ot child class - Naruto 

rehan=Naruto()
rehan.show_hero()  
zarhan.show_type()  
        
        
        
# TYPES of Inheritance

#1] SINGLE - contain only one as main parent class and child class

#eg-- 

class School:
    school="Rosary"
    
    def name_show(self):                 # 2] MULTIPLE Inheritance - 2 or more parent class properties in single class
        print(self.school)
                                              #NOTE- Also called Multiple inht --> A & C are Parent of B class
class Student(School):                              # if we want to use another class[A],[C],...etc atr in our class[B] then add name of A-class in B-class 
    name="Zarhan"                                   # like-- class B ( A,C ..etc):   
    age = 15
                                             #NOTE= if  A-class  & C-class has common info but value different then,-
    def detail_show(self):                   #    eg- 
        print(self.school ,    #                             class A:                 class C:
              self.name ,      #                                 group="Alpha"            group="Beta" 
              self.age )       #

zarhan=Student()               #                                          class B (A ,C):      -> A = 1st & C= 2nd
zarhan.name_show()             #                                              group=" Alpha "   --> bcz A is writtten first in order C so                                                                                                    so condition like in eg
zarhan.detail_show()           #                                                                    so B prioritize A value than C
                                                                                                      



   

# 2] MULTIPLE Inheritance - 2 or more parent class properties in single class

#NOTE: bcz A is writtten first in order C so B prioritize A-values first than C .                                                                                                so condition like in eg
                                             
#eg-  

class Father():
    stream="Commerce"
    hair ="Straight"
    
class Mother():
    stream="Arts"
    hair="Curvy"
    
class Child_1( Father , Mother):        # Father -- 1st > Child_!.stream = Commerce
    
    def detail(self):
        print(self.stream)

class Child_2( Mother,Father):           # Mother -- 1st > Child_2.stream = Arts
    
    def detail(self):
        print(self.stream)


zarhan=Child_1()
zarhan.detail()

iqra=Child_2()
iqra.detail()




#3] MULTILEVEL Inheritance - Dada -> Papa -> Bacha 
# eg-

class Dada():
    country="India"
    exp = "100+"
    knowledge= 99
    
    def intro(self):
        print("I am Dadaji")
    
class Papa(Dada):
    company="Vodafone"
    exp="50+"
    
    def intro(self):
        print("I am Papaji")
    
class Bacha(Papa):
    company="Google"
    
    # def intro(self): 
        # print("I am Bachaji")
        
A = Dada()
print(A.country, A.exp  )  #A.company - error throw
A.intro()

B = Papa()
print(B.country, B.exp , B.company ) 
B.intro()

C = Bacha()
print(C.country, C.exp , C.company ) 
C.intro()                                  # --> uses Papajis def intro [ I am Papajis] if Bacha DONOT have def intro[I am Bacha]; same goes for if Papa donot have that def 


# -----------------------------------------------------------------


# SUPER Method - it used to acess the main class inside child class
# Syntx--> 
        #    super().parent_class_function()  also can be used with constructor super().__init__
#eg-
    
class Parent_class():
    
    def __init__(self):                                  # --> Constructer
        print("Study harder .. sayed by Parent \n")
    
    def intro(self):
        print("I am Parent class")
    
class Child_class(Parent_class):
    
    def intro(self): 
        
        super().intro()               # output --  print("I am Main class")  
        super().__init__()            # print("Study harder .. sayed by Parent \n")
        
        print("I am Child class")
        

p = Parent_class()
p.intro()
p.__init__()

b = Child_class()
b.intro()   
b.__init__()      


# -----------------------------------------------------------


# CLASS Method - it is method that connected with the class atr not with object atr
            #  - also used to change the class atr by using a method
            
# SYNTX --> @classmethod
#           def ...(cls,roll_no01):


class Employee():
     roll_no01 = 15 
     
     def change_rollno(self,roll_no01):
         self.roll_no01 = roll_no01
         print(roll_no01,"is class atr also changed liked obj atr not")
         
     
zarhan = Employee()

print(zarhan.roll_no01,"object atr here")     #-> instance atr = 15

zarhan.change_rollno(16)    # here i change inst atr to 15 --> 16 

# But i want to change 
# Employee atr = 15 --> 16 

print(Employee.roll_no01,"not changed")   #-> class atr = 15

# ---

#HERE IS CLASS Method used 


class Employe():
     roll_no01 = 15 

# 1] @classmethod
    
     @classmethod
     def change_rollno(cls,roll_no01):
         cls.roll_no01 = roll_no01
         print(roll_no01,"Here it change to 15-->16")
         
# 2] __class__ 

#     def change_rollno(self,roll_no02):
#          self.__class__roll_no01 = roll_no01    --> here easily we change class atr 
#          print(roll_no01)
         
     
zarhan = Employe()

print(zarhan.roll_no01,"inst atr is 15")    #-> inst atr = 15

zarhan.change_rollno(16)   #-> Employe ka class atr = 15 --> 16 

print(Employe.roll_no01,"Here i use class method to change roll no parmanently to 16")   #-> class atr = 16
 

# ------------------------------------------

# Property Decorator/Getters Method -

# -> it is used to making a atr[ which is actually function] without writing it on atr
# -> also called Getters method
# Syntx --> @property

class Products():
    prize = 100
    tax = 10
    #total_prize = 110 ;not to write here do something to manlena its here by class product
    
    @property
    def total_prize(self):
        return self.prize + self.tax
        
parleG = Products() 

print(parleG.total_prize, " is total price")

print("Prize + Tax = Tolat Prize")  
print(parleG.prize ,"+", parleG.tax ,"=",parleG.total_prize,"\n" )  


# -------

# NOTE - IT ex of Abstract BELOW

# Setters Method - its used with property decorator
                #- used getter/property_dec method as help 

# Syntx --> @total_prize.setter             ->where total_prize is a property class atr/ getter method
#            def total_prize (self,tp1): 
#                self._total_prize = tp1   -> use [ self._abc ] this will not show error
#              
                

class Product():
    prize = 100
    tax = 10
    # total_prize = 110
    
    @property
    def total_prize(self):
         return  self.prize + self.tax
    
    @total_prize.setter                               #Alternative- 
    def total_prize(self,tp1):                          # same
        self._total_prize = tp1                         # not to code this 
        self.prize = self._total_prize - self.tax       # self.prize = tp1 - self.tax
        
        
oreo = Product() 

print(oreo.total_prize, " is total price")
print(oreo.prize , "is price of oreo")
print(oreo.tax,"is tax on oreo\n")

oreo.total_prize = int(input("Enter the new total prize:"))

print("\n",oreo.total_prize, " is new total price")
print(oreo.prize , "is new price of oreo")
print(oreo.tax,"is new tax on oreo\n")




































































