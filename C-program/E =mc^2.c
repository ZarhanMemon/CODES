
#include <stdio.h>

#define c 299792458


int main() {

int E,mass;

printf("Enter the mass of body :");
scanf("%d",&mass);

E = mass*c*c;

printf("\nThe energy of %dkg of body with speed of light %dm/s is %dJ",mass,c,E);

 

    return 0;
}
