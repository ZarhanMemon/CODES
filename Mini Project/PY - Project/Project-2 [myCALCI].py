while True:
 print("\n     ====myCALCI==== ")
 
 print("\b")
 
 print("1. ADDITION")
 print("2. SUBSTRACT")
 print("3. MULTIPLY")
 print("4. DIVISION")

 operation = (input("\nEnter the operation: "))
 print("\b")
 num1 = (input("Enter number 1 : "))
 num2 = (input("Enter number 2 : "))


 if operation == "1":
        print("\nThe addition number is",str((int(num1)+int(num2))))
 elif operation == "2":
        print("\nThe addition number is",str((int(num1)-int(num2))))
 elif operation == "3":
        print("\nThe addition number is",str(int(num1)*int(num2)))
 elif operation == "4" and num2 > "0":
        print("\nThe addition number is",str(int(num1)/int(num2)))
 else:
     print("Cant divide by 0")
         
 cal_again= input("\nDo you want to calci it again? (yes/no):").strip().lower()  
     
 if cal_again != "yes":
  break


print("  Thanks for using myCalci! ")