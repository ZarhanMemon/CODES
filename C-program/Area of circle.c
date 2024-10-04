#include <stdio.h>
const float pi=3.14;  // at end (;) must
/*or 
#define pi 3.14*/
 int main() {
    // Write C code here
    float r,a;
    
    printf("Enter the radius value: ");
    
    scanf("%f",&r);
    
    a = pi*r*r;
    
    printf("\n The area of circle having radius as %f is %f",r,a);

    return 0;
}

// here the a and r is local var we have code it again in other functions to use it
// but pi is global var we can use it in other 
// function and did not to write it's codeagain