//Experiment No - 6.4
//Roll no - 35
//Div -A

#include<stdio.h>
int main()
{
	int n, i;
	float sum=0.0,average;

	//Input the number of elements in the array
	printf("Enter the number of elements in the array:");
	scanf("%d",&n);

	float arr[n];
	//Input the elements of the array 
	printf("Enter the elements of the array:\n");

	for(i=0;i<n;i++)
	{
	  scanf("%f",&arr[i]);
	  sum+=arr[i];
	}
	
	//Calculate average
	average=sum/n;
	
	//Output the average of the elements
	printf("The average of the elements in the array is:%.2f\n",average);

	return 0;
}

//OUTPUT

//Enter the number of elements in the array:5
//Enter the elements of the array:
//56
//0
//15
//0
//66
//The average of the elements in the array is:27.40
