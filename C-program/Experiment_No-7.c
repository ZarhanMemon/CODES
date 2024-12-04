//Experiment No - 6.1
//Roll no - 35
//Div - A

#include<stdio.h>
int string_length(char str[])
{
	int length=0;
	while (str[length]!='\0')
	{
		length++;
	}
	return length;
}
void string_reverse(char str[])
{
	int length=string_length(str);
	for (int i=0;i<length/2;i++)
	{
		char temp=str[i];
		str[i]=str[length-i-1];
		str[length-i-1]=temp;
	}
}
int is_palindrome(char str[])
{
	int length=string_length(str);
	for(int i=0;i<length/2;i++)
	{
		if(str[i]!=str[length-i-1]){
		return 0;
		}
	}
	return 1;
}
int main()
{
	char str[100];
	printf("enter a string:");
        scanf("%s",&str);
	
	int length=string_length(str);
	printf("length of the string:%d/n",length);
	
	if(is_palindrome(str))
	{
	printf("the string is a palindrome.\n");
	} else
	{
	printf("the string is not a palindrome.\n");
	}
	
	string_reverse(str);
	
	printf("reversed string:%s\n",str);
	
	return 0;
}

//OUTPUT

//enter a string:zarhan
//length of the string:6
//the string is not a palindrome.
//reversed string:nahraz

