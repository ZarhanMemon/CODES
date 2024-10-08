 
// Write a C-program for employee salary calculation given,Basic ,HRA 20% of basic and DA 150% of basic

#include <stdio.h>
int main() {

int basic;
int hra,da,gross_salary;


printf("Enter your salary:");
scanf("%d",&basic);

hra = 0.2*basic;
da = 1.5*basic;
gross_salary = basic + hra + da;


printf("\nThe gross salary for %d$ basic, %d$ da and %d$ hra is %d$.",basic,da,hra,gross_salary);


 
return 0;
}
