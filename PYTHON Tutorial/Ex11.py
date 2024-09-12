#Q1]
class C2dvector:
      def __init__(self,i,j):
        self.i=i
        self.j=j

      def __str__(self):    
        return f"\n{self.i}i {self.j}j"
    
    
class C3dvector(C2dvector):
    def __init__(self,i,j,k):
      super().__init__(i,j)
      self.k=k
        
    def __str__(self):    
        return f"\n{self.i}i {self.j}j {self.k}k"
       
    
a=C2dvector(2,6)
b= C3dvector(2,6,4)
print(a)
print(b)
print("======================================")

# Q2]

class Animal:
    animal_type="Mamal"

class Pets(Animal):
    pet_name="Tommy"
    pet_age="2 years"
    pet_color="Brown"
    pass

class Dogs(Pets):
    @staticmethod
    def barking():
        print( f"\nI am a barking dog")
        print("======================================")
    
tommy = Dogs()
tommy.barking()


# Q3]

class Worker():
 
    @classmethod
    def __init__(cls,salary,increment):
        cls.salary=salary
        cls.increment=increment

    @property
    def total_salary(self): 
        return f"{self.salary * self.increment}"
        
    @total_salary.setter  
    def total_salary(self,new_ts):
        if self.salary != 0:
            self.increment = new_ts / self.salary
        else:
            raise ValueError("Salary cannot be zero when setting total_salary")
    
    
ramesh = Worker(1200,2)

print(f"\nSalary= {ramesh.salary}")
print(f"Increment= {ramesh.increment}\n")
print(f"Total Salary= {ramesh.total_salary}\n")

ramesh.total_salary= int(input("Enter the new total prize:"))

print(f"\nNew Total Salary= {(ramesh.total_salary)}")
print(f"Salary= {ramesh.salary}\n")
print(f"New Increment= {round(ramesh.increment,2)}\n")               #to approximate any num --> round(number, 2)

print("======================================")


# Q4]  I dont use actual formula of complex no but code is correct

class Complex:
    
    def __init__(self,a,b):
        self.a =a
        self.b =b
    
    def __str__(self):
        if self.b<0 :
         return( f"z1 = {self.a} - {self.b*(-1)}i") 
        else:
            return( f"z1 = {self.a} + {self.b}i")  
    
    
    def __add__(self,z2):
      if z2.b<0 or self.b<0:
        return( f"\nz3 = {self.a + z2.a} - {(-1)*(self.b + z2.b)}i\n") 
      else:
        return( f"\nz3 = {self.a + z2.a} + {self.b + z2.b}i\n") 
          
    def __mul__(self,z2):
      if z2.b<0 or self.b<0:
        return( f"\nz4 = {self.a * z2.a} - {(self.b * z2.b)*(-1)}i\n") 
      else:
        return( f"\nz4 = {self.a * z2.a} + {self.b * z2.b}i\n") 
        
        
z1=Complex(2,-3)
print(z1)

z2=Complex(2,3)
print(z2,"\n")

z3=z1+z2
print("z3= z1 + z2",z3)

z4= z1 * z2
print("z4= z1 * z2",z4)

print("===================================")

# Q5] for 3-dimensional

class Vector:
    
    def __init__(self,i,j,k):
        self.i=i
        self.j=j
        self.k=k
        
    def __str__(self):
        return f"v1 = {self.i}i {self.j}j {self.k}k"
    
    def __add__(self,v2):
        return f"\nv3 = {self.i + v2.i}i + {self.j + v2.j}j + {self.k + v2.k}k\n "
    def __mul__(self,v2):
        return f"\nv4 = {(self.i * v2.i)+ (self.j * v2.j)+(self.k * v2.k)} "
    
v1=Vector(2,4,5)
print(v1)

v2=Vector(2,1,3)
print(v2,"\n")

v3=v1+v2
print("v3=v1+v2",v3)

v4=v1*v2
print("v4= v1 . v2",v4)

print("===================================")


# Q5] for nth dimension

class Vectors():
    def __init__(self,v,name):
        self.v = v
        self.name = name
        
    def __str__(self):
        str1=""                                   # here i take a blank string in which ican add my vector 
        index=0
        for i in range(len(self.v)):            # here i write for loop to add n-dimension of vector in str so 
          
          if i!= len(self.v[:-1]):
            str1 += f"{self.v[i]}a{index} + "     # so i write (self.v5[i]) which mean if i=0 then add the num which contains in 0 index number for v5 it was [1] 
           
            index+=1 
             
          elif i == len(self.v[:-1]) :
            str1 += f"{self.v[i]}a{index}"     # i used this to neglet (+) at end
            
            index+=1                            #and i have witten it {index} no too identify  and by using for loop its continue printing untill i == lenght of v4
       
        return f"{self.name} = "+str1                              # dont to return the modified str1[:-1] i used to neglet (+) at end
    
    def __add__(self,v6):
        new_v = []
        for i in range(len(self.v)):
            new_v.append(self.v[i] + v6.v[i])
            
        return Vectors(new_v,"Z")
        
    def __mul__(self,v6):
      
      dot_product =0
      for i in range(len(self.v)):
           dot_product +=self.v[i] * v6.v[i]
           
      return f"|V| = {dot_product}"

        
        
v5 = Vectors([1,2,3,4],"v5")        
print(v5)

v6=Vectors([0,2,4,5],"v6")
print(v6)


Z= v5 + v6                    #or # Z = v5.__add__(v6)
print("\nZ = v5 + v6\n",Z)

V = v5 * v6                   #or V = v5.__mull__(v6)
print("\nV = v5 * v6\n",V)


print("===================================")


# Q6]


class Display_vector():
    def __init__(self,i,j,k,name):
      self.i=i
      self.j=j
      self.k=k
      self.name=name
        
    def __str__(self):
          return f"v1 = {self.i}i +{self.j}j +{self.k}k"

a = Display_vector(7,8,10,"a")
print("\n",a)


print("======================================")



# Q6]

class Vectors0:
    
    def __init__(self,a,name):
        self.a = a
        self.n=name
        
    def __str__(self):
        str1=""                                  
        index=0
        for i in range(len(self.a)):              
          
          if i!= len(self.a[:-1]):
            str1 += f"{self.a[i]}a{index} + " 
            index +=1   
             
          elif i == len(self.a[:-1]) :
            str1 += f"{self.a[i]}a{index}"       
            index+=1         
                                
        return f"{self.n} = {str1}"                               
    
    def __add__(self,v8):
        new_a = []
        if len(self.a)==len(v8.a):
            
         for i in range(len(self.a)):
            new_a.append(self.a[i] + v8.a[i])
            
         return (f"{Vectors0(new_a,self.n)}")
     
        else:
          return f"The dimension of both vector is not same!!;so we cant add"
        
    def __mul__(self,v8):
      dot_product =0
      if len(self.a)==len(v8.a):
        
       for i in range(len(self.a)):
           dot_product +=self.a[i] * v8.a[i]
           
       return f"|V| = {dot_product}"
   
      else:
        return f"The dimension of both vector is not same!!;so we cant multiply"
          
    def __len__(self):
      print( f"{len(self.a)} is the lenght of {self.n} \n")           # here is the len def
    
        
v7 = Vectors0([1,2,3],"v7")        
print(v7)
v7.__len__()

v8 =Vectors0([0,2,4,5],"v8")
print(v8)
v8.__len__()

A = v7 + v8                  
print("A = v7 + v8"+"\n"+A)

B = v7 * v8                  
print("\nB = v7 * v8 "+"\n"+B)

