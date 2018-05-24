```
Ejercicio de geometr�a

Hacer un funci�n que permita calcular el �rea o el per�metro de un rect�ngulo o una circunferencia.
las funciones deben estar separadas en m�dulos y ser exportadas en el index.js principal.
Pasos:
1.- Crear un proyecto con npm init para ejecutarlo con node.js, crear el endpoint (index.js)
2.- Crear dos m�dulos:
	2.1- m�dulo rectangle.js el cual debe tener dos funciones:
		-calculatePerimeterRectangle: calcula el per�metro de un rect�ngulo, recibe dos argumentos (L1 y L2) (lados del rect�ngulo)
		retorna el calculo del perimetro
		formula de perimetro de un rect�ngulo: P = 2 * (L1 + L2) 
		L1= lado 1, L2= lado 2
		-CalculateAreaRectangle: calcula el �rea de un rect�ngulo recibe dos argumentos (L1 y L2) (lados del rect�ngulo)
		retorna el c�lculo del �rea
		formula de area de un rect�ngulo: P = L1 * L2
		L1= lado 1, L2= lado 2
	el m�dulo debe exportar ambas funciones.
	2.2- m�dulo circle.js contiene dos funciones
		-calculatePerimeterCircle: calcula el per�metro de una circunferencia, recibe un argumento (r) (radio de la circunferencia)
		retorna el calculo del perimetro
		formula de perimetro de una circunferencia: P = 2 * PI * r 
		r = radio, PI = 3.1416
		-CalculateAreaCircle: calcula el �rea de una circunferencia recibe 1 argumento (r) (radio de la circunferencia)
		retorna el c�lculo del �rea
		formula de area de una circunferencia: P = PI * r'2
		r = radio, PI = 3.1416
	el m�dulo debe exportar ambas funciones.
3.- En el index.js importar los m�dulos
4.- Crear una funci�n que reciba tres o cuatro argumentos:
	- primer argumento: c�lculo se desea hacer (per�metro o �rea) este argumento es un string
	- segundo argumento: a que figura geom�trica se har� el c�lculo (rect�ngulo o c�rculo) este argumento es un string
	- tercer y cuarto argumento: valores necesarios para realizar el c�lculo ejemplo lados del rect�ngulo o radio del c�rculo
	en el caso del c�rculo s�lo recibe tres argumentos y el rect�ngulo 4 argumentos, estos argumentos son de tipo number
5.- La funci�n debe evaluar seg�n los argumento ingresados cual de las funciones requeridas ejecutar y retornar el valor de la funci�n
6.- test: ejecutar las funciones con los siguientes argumentos:
	calculo('area', 'rectangle', 5, 8)
	hacer un console.log del resultado y verificar que el resultado sea 40
	ejecutar los siguientes test: 
	c�lculo('perimeter', 'circle', 2) // return 12.56
	c�lculo('perimeter', 'rectangle', 40, 15) // return 110
	c�lculo('area', 'circle', 6) // return 113.0976
```