```
Ejercicio Timer

En una competencia de quien bebe primero un numero N de cervezas, gana quien se tomo primero todas las cervezas antes de finalizar el tiempo limite.

nivel 1 :
- hay dos competidores
- cada competidor tiene una velocidad promedio en la que toma cerveza (tiempo en milisegundos que transcurre al tomar una cerveza)
- cada competencia tiene un numero total de cervezas a tomar.
- hay un tiempo maximo para tomar cervezas.

resultados:
	1. que participante gana, cuanto tiempo sobra del tiempo limite, cuanto cervezas tomo al participante que perdio.
	2. Si no hay ganado, cuantas cervezas bebio cada participante.

ejemplo: Gana quien tome 10 cervezas en menos de 3 minutos
competidor 1: bebe 1 cerveza cada 20 segundos.
competidor 2:  bebe 1 cerveza cada 25 segundos.

hay un ganador?
- si hay un ganado, en cuanto tiempo se tomo las 10 cervezas, cuantas cervezas se tomo el competidor que perdio
- si no hay ganador, cuantas cervezas se tomo cada uno de los competidores

no realizar los calculos, el ejercicio consiste en simular en tiempo real la competencia.

Usar setInterval, clearInterval.

```