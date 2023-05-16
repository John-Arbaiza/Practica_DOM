//Accediendo al document 

//querySelector selecciona un selector 
//Accediendo al h1 
const h1 = document.querySelector('h1');
h1.textContent = 'Cambiando lo que dice el h1 desde el document';
h1.style.color='aqua';
console.log(h1);

//Accediendo al h3 por medio de su clase 
const title2 =document.querySelector('.title2');
title2.textContent = 'Este es el segundo titulo de la practica';
title2.style.color = 'tomato';
console.log(title2);

//Accediendo por medio de un id 
const Texto = document.querySelector('#Texto');
Texto.textContent = 'Bienvenido a la practica relizada en JS haciendo uso del DOM';
console.log(Texto);

//Tambien podemos acceder atraves del metodo alternativo para los id
const text2 = document.getElementById('text2');
text2.textContent = 'Usando el metodo getElementById';
console.log(text2);

// Metodo para acceder a un elemeto cuando  existen varias etiquetas con la misma clase
const prueba = document.querySelectorAll('.prueba');
console.log(prueba);

//Haciendo uso del innerHTML
text2.innerHTML = '<b>Esto es un  texto modificado usando el innerHTML</b>';

//Haciendo uso de classList la cual nos permite agregar clases especificas
Texto.classList.add('h2-danger', 'color-2');