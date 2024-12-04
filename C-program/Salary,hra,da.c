 
//Salary of employee
//Roll no - 35
//Div - A

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

// Output

//Enter your salary:30000

// The gross salary for 30000$ basic, 45000$ da and 6000$ hra is 81000$.

