//Experiment No - 6.1
//Roll no - 35
//Div - A

#include <stdio.h>
#include <string.h>
#define MAX_LEN 100
int main()
{
	char str1[MAX_LEN],str2[MAX_LEN];
	
  //input two strings from the user
	printf("enter the first string:");
	
  fgets(str1,MAX_LEN,stdin);
	str1[strcspn(str1,"\n")]='\0';
	
  printf("enter the second string:");
	fgets(str2,MAX_LEN,stdin);
	
  str2[strcspn(str2,"\n")]='\0';
	
  //equality check
	if(strcmp(str1,str2)==0)
	{
		printf("the strings are equal.\n");
	}else
	{
		printf("the strings are not equal.\n");
	}
	
  //substring check
	if(strstr(str1,str2)!=NULL)
	{
		printf("the second string is not a substring of of the first string.\n");
	}
	return 0;
}

//OUTPUT

//enter the first string:zarhan
//enter the second string:zishan
//the strings are not equal.
