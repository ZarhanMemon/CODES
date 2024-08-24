
class DBZ:              #-->syntx -> class PascalCase :   - Is a empty templete/form with filling in it
                              #          method&var       - it contains info for creating a VALID OBJECT
  hero = "Goku" 
  aura_level = 200      # - Class Attribute
  
  
  
object = DBZ() 
object.Date = "2006"   # type: ignore --> do if it shows error but still it works - Object Attributes
                         
print(object.hero,object.aura_level,object.Date)       # type: ignore


#NOTE - Pillars of OOPs

#1]  Abstraction:-
  #  Abstraction is like driving a car. You don’t need to understand the intricate details of how the engine works; you only need to know how to use the steering wheel, gas pedal, and brakes to drive.same for the function of codes dont need to know for user.

#2] Encapsulation:-
 #  Encapsulation is like putting your valuables in a safe.     You keep your items secure inside the safe and only use the    combination to access them when needed. assume remote as class & button as method,variables.

#3] Inheritance
#4] Polymorphisms



#---------------------------------------------------------------

# SELF method --> used in function like below


class Anime:
  name = "Naruto"
  hero = "Uzumaki Naruto"          # class atr can be alterby object atr
  side_hero = "Uchiha Sasuke"
  
  def naruto(self):
     print(f"The name of anime is {self.name}. The name of hero is {self.hero} ")
     
minato = Anime()
minato.hero = "Uzumaki Minato"       # here i change class atr(naruto) to obj atr(minato)
minato.naruto()     


#NOTE:- Object atr >>> Class atr bcz of object atr uniquiness info to identify perticular      object