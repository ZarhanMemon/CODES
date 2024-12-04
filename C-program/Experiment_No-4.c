//Experiment No - 4
//Roll no - 35
//Div - A

#include <stdio.h>

int main() {
    float marks[5];
    float total = 0.0, aggregate;
    int i;
    int pass = 1;
    
    printf("Enter the marks of five subjects out of 100:\n");
    
 
    for (i = 1; i < 6; i++) {
        printf("Subject %d: ", i);
        scanf("%f", &marks[i]);
        
      
        if (marks[i] <= 40) {
            pass = 0;
        }
        
        total += marks[i];
    }
    
    
    aggregate = (total / 5);
    printf("\n");
  
    if (!pass) {
        printf("\n Result: Fail\n\n");
    } 
    else {
        printf("Result: Pass\n\n");
        printf("Aggregate Percentage:  %.1f%% \n\n", aggregate);  
        
 
        if (aggregate >= 75) {
            printf("Grade: Distingtion\n");
        } else if (aggregate >= 60) {
            printf("Grade: First Division\n");
        } else if (aggregate >= 50) {
            printf("Grade: Second Division\n");
        } else if (aggregate >= 40) {
            printf("Grade: Third Division\n");
        }
    }

    return 0;
}


// OUTPUT :- 

//     Enter the marks of five subjects out of 100:

// Subject 1: 99
// Subject 2: 99
// Subject 3: 99
// Subject 4: 99
// Subject 5: 99

// Result: Pass

// Aggregate Percentage:  99.0% 

// Grade: Distingtion


// === Code Execution Successful ===
