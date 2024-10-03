#include <stdio.h>

 int main() {
    
    int a,b;   // a --> input no and b            b is output of a²
    
    printf("Enter the number to square:");
   
        
    scanf("%d",&a); //substitute a as              %d used in string 
    
      b = a*a;    //maths
      
    printf("\n %d = %d²",b,a);
    
    printf("\n The result of square %d is %d",a,b);   //output and                    substitution 
                    // of a,b in string

    return 0;
}