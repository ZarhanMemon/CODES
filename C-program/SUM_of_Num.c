// Online C compiler to run C program online

//Step 1 - Start
#include <stdio.h>
#int main( ) {
  int a , b , c;
  
  //Step 2- Get the variable
  printf("Enter the number for sum :");
  

  // &d is ampalsane and %d is used to substitute variable in string
  scanf("%d %d" , &a , &b );
  
  
  //Step 3 - c = a + b
  //here is the function of c ,a, b
   c = a + b ;


  //Step 3 - show output of c
  //here i print the process of add 
  printf("\n %d + %d = %d \n"  ,  a , b ,c);
  
 //here is the output of answer
  printf("The addition of %d and %d is %d", c , b ,a);
  
//Step 4 = Stop
    return 0;
}