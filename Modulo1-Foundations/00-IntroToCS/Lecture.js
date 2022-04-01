
//$     ****   TABLAS DE LA VERDAD   ****
/*
?               1 = True, 0 = False
$                      AND
?                  A   B  = AND
                   1   0  =  0    
                   0   0  =  0
                   0   1  =  0
                   1   1  =  1

$                      OR
?                  A   B  =  OR
                   1   0  =  1
                   0   1  =  1
                   1   1  =  1
                   0   0  =  0

$                      XOR - exclusive OR ( una salida verdadera resulta si una, y solo una de las entradas a la puerta es verdadera. Si ambas entradas son falsas o ambas son verdaderas, resulta en una salida falsa)
?                  A   B  =  OR
                   1   1  =  0
                   0   1  =  1         Martina ó Belen-----> Martina y Belen (NO = false)--->[Este es exclusivo]
                   1   0  =  1         Martina y/o Belen---> Martina y Belen (SI = true)
                   0   0  =  0

$                    NOT (es la negacion de lo que tengo)
?                  A   NOT
                   1    0
                   0    1

$   Half Adder

Si quisiéramos sumar 19+24 sabemos que la suma de 9+4 = 13, por lo tanto en el resultado final en la unidad nos queda un 3 y debemos “llevarnos” la decena. Luego, para la decena debemos sumar 1 + 2 + 1 = 4. Obteniendo como resultado final 43.

En el Half Adder, ese rol de acarreo lo hace la puerta lógica AND (dice si hay acarreo) mientras que el XOR efectúa la suma.
?                                         <<<<<= se suma de Derecha a Izquierda
                                 19 ---> 110011         
                                 24 --->  11000
                                 ---------------
                                 43 ---> 101011
                                         ||||||__ 1 AND 0 = 1(no hay acarreo); 1 XOR 0 = 1
                                         |||||___ 1 AND 0 = 1(no hay acarreo); 1 XOR 0 = 1
                                         ||||____ 0 AND 0 = 0(no hay acarreo); 0 XOR 0 = 0
                                         |||_____ 0 AND 1 = 0(no hay acarreo); 0 XOR 1 = 1
                                         ||______ 1 AND 1 = 1(hay acarreo); 1 XOR 1 = 0
                                         |_______ Se agrega 0 y 1 AND 0 = 1
                                                      
                                                         




*/