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


/* Funcion de multiplicacion */
int multiplica(int a, int b) {


	return a*b;
}


/* Funcion para sumar una lista de numeros. */
int sumaLista(int *lista, int lenLista) {

	int i,res=0;

	for(i=0; i < lenLista; i++)
		res += lista[i];

	return res;
}


int main(int argc, char const **argv) {
	
	int a=1, b=2, sum;

	sum = suma(a,b);

	return 0;
}