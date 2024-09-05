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
        #    super().parent_class_function()
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


# CLASS Method -











































































