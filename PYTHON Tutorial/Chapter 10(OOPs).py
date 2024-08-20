
# class Employee:              # --> class Variable (with 1st letter capital only = PASCAL)                
# #    name =""
#    year = 17                      # year & Dob --> Class Attributes (any)
#    Dob = "21-Nov"
    
# a = Employee()                     # a --is object made from class[Employee]
# # a.name = "Zaro"                    # this is an Object Attribute or Instance atr
# print('''a.name''' , a.year , a.Dob)     
   

# b = Employee()                     # b --is object made from class[Employee]
# # b.name = "Sakura"                   # this is an Object Attribute or Instance atr
# print(b.Dob , b.year , '''b.name''')

# # -------------------------------------------------------------------------------------

# ## Instance atr V/S Class atr :

# #Note : Instance atr is given priority over Class atr.

# class Cartoon:
#    audio = "Hindi - class atr"               # C.A
   
# Doreamon = Cartoon()
# Doreamon.audio = "English - object atr"       # I.A - here Ia will print not Ca
# print(Doreamon.audio)   
   
# Shinchan = Cartoon()
# print(Shinchan.audio)            # - here C.a will print obviously

# # ----------------------------------------------------------------------------

# ## SELF parameter -

# class Employe:
#  name = "Zarhan"
#  lang = "Pyhton"
  
#  def info(self):          # here its mandetory to use self or any word in ()
    
#       print(f"The name of employee is {self.name} and the language is {self.lang}")

      
# Zarhan = Employe() 

# Zarhan.info()         # u can do this or which means same
# #Employe.info(Zarhan)   

# # ----------------------------------------------------------------------------------------

# ## Static Method -

# # Note - its an decoratore its used on a function
# # which doesnt use any prop of object and hence prevent any use of self parameter
# # also error


# class Worker:
#  name = "Zarhan"
#  lang = "Pyhton"
  
#  def info(self):         
#    print(f"The name of Worker is {self.name}")
 
#  @staticmethod
#  def greet():                 
#     print("Good Morning - use of @staticmethod bcz it is in notes")
 
      
# Zarhan = Worker() 

# Zarhan.info()
# Zarhan.greet()   #or      
# #Worker.info(Zarhan)  
# #Worker.greet(Zarhan) 



## 

class Worker1:
   # lang = "Python"
   # salary = 12000


  def init(self, name, lang , salary):
    self.name = name
    self.lang = lang
    self.salary = salary
    
    print(f"I m {self.name} and my language is {self.lang} and {self.salary} ")
    

zarhan = Worker1()
