```
Ejercicio de geometría

Hacer un función que permita calcular el área o el perímetro de un rectángulo o una circunferencia.
las funciones deben estar separadas en módulos y ser exportadas en el index.js principal.
Pasos:
1.- Crear un proyecto con npm init para ejecutarlo con node.js, crear el endpoint (index.js)
2.- Crear dos módulos:
	2.1- módulo rectangle.js el cual debe tener dos funciones:
		-calculatePerimeterRectangle: calcula el perímetro de un rectángulo, recibe dos argumentos (L1 y L2) (lados del rectángulo)
		retorna el calculo del perimetro
		formula de perimetro de un rectángulo: P = 2 * (L1 + L2) 
		L1= lado 1, L2= lado 2
		-CalculateAreaRectangle: calcula el área de un rectángulo recibe dos argumentos (L1 y L2) (lados del rectángulo)
		retorna el cálculo del área
		formula de area de un rectángulo: P = L1 * L2
		L1= lado 1, L2= lado 2
	el módulo debe exportar ambas funciones.
	2.2- módulo circle.js contiene dos funciones
		-calculatePerimeterCircle: calcula el perímetro de una circunferencia, recibe un argumento (r) (radio de la circunferencia)
		retorna el calculo del perimetro
		formula de perimetro de una circunferencia: P = 2 * PI * r 
		r = radio, PI = 3.1416
		-CalculateAreaCircle: calcula el área de una circunferencia recibe 1 argumento (r) (radio de la circunferencia)
		retorna el cálculo del área
		formula de area de una circunferencia: P = PI * r'2
		r = radio, PI = 3.1416
	el módulo debe exportar ambas funciones.
3.- En el index.js importar los módulos
4.- Crear una función que reciba tres o cuatro argumentos:
	- primer argumento: cálculo se desea hacer (perímetro o área) este argumento es un string
	- segundo argumento: a que figura geométrica se hará el cálculo (rectángulo o círculo) este argumento es un string
	- tercer y cuarto argumento: valores necesarios para realizar el cálculo ejemplo lados del rectángulo o radio del círculo
	en el caso del círculo sólo recibe tres argumentos y el rectángulo 4 argumentos, estos argumentos son de tipo number
5.- La función debe evaluar según los argumento ingresados cual de las funciones requeridas ejecutar y retornar el valor de la función
6.- test: ejecutar las funciones con los siguientes argumentos:
	calculo('area', 'rectangle', 5, 8)
	hacer un console.log del resultado y verificar que el resultado sea 40
	ejecutar los siguientes test: 
	cálculo('perimeter', 'circle', 2) // return 12.56
	cálculo('perimeter', 'rectangle', 40, 15) // return 110
	cálculo('area', 'circle', 6) // return 113.0976
```