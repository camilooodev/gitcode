#include <stdio.h>
#include <math.h>
#include <string.h>
#include <stdlib.h>
/* Funcion main inicia programa C*/
int main()
{
    int a, b, promedio;
    int promedio(int a, int b);
    printf("\n Bienvenido al calculador de promedio");
    printf("\n Ingrese el primer numero");
    scanf("%i", &a);
    printf("\n Ingrese segundo numero");
    scanf("%i", &b);
    printf("El promedio es %i", promedio(a, b));

    int promedio(int a, int b)
    {
        int suma;
        suma = a + b;

        return suma;
    }

    return 0;
}
/*Fin de la funciòn C */