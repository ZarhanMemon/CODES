#include <stdio.h>
int main(){

int n,count=0;

unsigned long first=0,second=1,next;

printf("Enter the number (positive num) of fibonacci no to be generated: ");
scanf("%d",&n);

printf("\n Fibonacci series :");

	while (count<n){

 	next = first + second;
 	printf("%lu\t ",first);
 	first=second;
 	second = next ;
 	count++;
	}

  return 0;
}
