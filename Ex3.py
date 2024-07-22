#1]

a1="Good Morning, "
a2 = input("Enter your name:")

print(a1 + a2)

#2]

letter = '''Dear , <name>
        you are selected!
        <date>'''

b1 = input ("Enter your name:")  
b2 = input ("Enter your date:")     
letter = letter.replace("<name>",b1) 
letter = letter.replace("<date>",b2 )
print(letter)


#3]  

A = '''It was so dark that  I couldn't  see anything  at all.'''
A = A.find("  ")
print("There are",A,"duble spaces is string")


# 4]
A = '''It was so dark that  I couldn't  see anything  at all.'''
A = A.replace("  ", " ")
print(A)


#5]

l1="Dear Haryy,\n    This is an Python program.\n Thanks!"
print(l1)