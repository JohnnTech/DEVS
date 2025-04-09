// Converter um tipo de dado em outro tipo de dado
let numero = 123;
console.log(typeof(numero));
// String
let texto = String(numero);
console.log(typeof(texto));
// toString
let texto2 = numero.toString();
console.log(typeof(texto2));
// Number
let texto3 = '123';
let numero3 = Number(texto3);
console.log(typeof(numero3));
// Usando o parseInt e o parseFloat
let texto4 = '123.45';
let inteiro = parseInt(texto4);
console.log(inteiro);
let flutuante = parseFloat(texto4);
console.log(flutuante);
// Usando o operador +
let texto5 = '123';
let numero5 = +texto5;
console.log(numero5);
// Boolean()
let texto6 = 'true';
let booleano = Boolean(texto6);
console.log(booleano);