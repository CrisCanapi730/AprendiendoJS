
// Data types

let name = 'Cristian'; // string

let number = 6; // son tipo number y puede ser entero como decimal

console.log(1/0);
console.log(Infinity);

console.log('a'/4); // devuelve NaN que es un error matematico computacional

console.log(9007199254740991 + 1); // big int

let isTrue = true; // booleanos
let isFalse = false;

let age = null; // significa nada, vacio o valor desconocido

let age2 = undefined; // significa que el valor no fue asignado a la variable

console.log(typeof 4);
console.log(typeof('Hola'));

// alert
alert('Este es un alert');


// prompt
let age3 = prompt('Cuantos años tienes?', 100);
alert(`Tienes ${age3} años!`); 

// let age4 = prompt('Cuantos años tienes?');
// alert(`Tienes ${age4} años!`); 

// let age5 = prompt('Cuantos años tienes?', null);
// alert(`Tienes ${age5} años!`); 

// confirm
let isBoss = confirm("Eres el jefe?")
alert(isBoss); // retorna true si pones ok y false si pones cancelar es booleano

let mayorDeEdad = prompt('Cuantos años tienes?');
if(mayorDeEdad>17){
    alert('Eres mayor de edad');
}
else{
    alert('Eres menor de edad');
}

// Conversion de tipos
// booleano a string
let isOlder = true;
isOlder = String(isOlder);
console.log(typeof isOlder, isOlder)

// Conversion a numero
let n1 = "6";
let n2 = "3";
let result = n1/n2; // lo convierte automaticamente en numero
console.log(typeof(result), result);
let palabra = "123";
console.log(typeof palabra)
palabra = Number(palabra);
console.log(typeof palabra)
console.log(Number(true));
console.log(Number(false));
// Converts non-numbers
console.log( +true ); // 1
console.log( +"" );   // 0
// otro ejemplo
let apples = "2";
let oranges = "3";
// both values converted to numbers before the binary plus
console.log( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

// Conversion a booleano
console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false

console.log( Boolean("hello") ); // true
console.log( Boolean("") ); // false

// Operadores aritmeticos

let x = 1;
x = -x; // operador unario porque solo hay un operando
console.log(5-4);// resta y este operador es binario ya que tiene dos operandos
console.log(5+4);
console.log(15/4);
console.log(2**4);
console.log(5%4);
console.log(5*4);

// concatenacion:
let s = "my" + "string";
console.log(s); // mystring

console.log( '1' + 2 ); // "12"
console.log( 2 + 2 + '1' ); // "41"

// otros operadores

let a = 1;
console.log(a++); // 2
console.log(a--); // 1
console.log(a*=4); // 4

// diferencias entre ++i o i++
let contador = 5;
let y = ++contador;
console.log(contador);
console.log(y);

let contador2 = 5;
let y2 = contador2++;
console.log(contador2);
console.log(y2);

// Operador tenario

// condicion ? valor_si_es_verdadero : valor_si_es_falso

let numero = prompt('Ingresa un numero para saber si es mayor o menor a 10');

let resultado = numero>10 ? 'Es mayor a 10' : 'Es menor a 10';

alert(resultado);

let nota = prompt("Ingresa la nota que obtuviste");

let calificacion = nota>80 ? 'Excelente!' :
                   nota > 60 ? 'Buena' : 'mala';

alert(`Tu nota es: ${calificacion}`);

// or || , and &&

// Operador ??

let edad = 0;
let edadConNullish = edad ?? 18;
console.log(edadConNullish); // 0 

// loops
console.log('Loops');

console.log('for of');
const frutas = ['Platano', 'Manzana', 'Uva'];
for(fruta of frutas){
    console.log(fruta);
}

console.log('for normal');
for(let i =0; i<5;i++){
    console.log(i);
}

console.log('for in');
const persona = {Nombre: 'Cristian', edad: 23};
for(clave in persona){
    console.log(clave);
    console.log(persona[clave]);
}

// while
console.log('while');
let indice = 0;
while(indice<5){
    console.log(indice);
    indice++;
}
// do while
console.log('do while');
do{
    console.log(indice);
    indice--;
}while(indice>0);
// for each
console.log('for each');
['a','b','c'].forEach(function(letra){
    console.log(letra);
})

// break
for(let i=0; i<=5; i++){
    if(i===3) break; // 0 1 2
    console.log(i);
}
// continue
for(let i=0; i<=5; i++){
    if(i===3) continue;
    console.log(i); // 0 1 2 4 5
}