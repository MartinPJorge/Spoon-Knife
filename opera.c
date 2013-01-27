#include <stdlib.h>
#include <stdio.h>


/* Funcion para sumar */
int suma(int a, int b) {

	return a+b;
}


/* Funcion para restar */
int resta(int a, int b) {

	return a-b;
}


int main(int argc, char const **argv) {
	
	int a=1, b=2, sum;

	sum = suma(a,b);

	return 0;
}