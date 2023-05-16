const h1 = document.querySelector('h1');
h1.style.color = 'tomato';
h1.style.textAlign = 'center';
console.log(h1);

//Creando la constante para la lista
const lista = document.getElementById('lista');
console.log(lista);

//Creando los elementos de la lista 
//const li = document.createElement('li');
//li.textContent = 'Python';

//Incorporando el li a la lista que ya tenemos definida en html por medio del id
//Dicho de otra manera estamos agregando un elemento hijo a ul
//lista.appendChild(li);

//Creando un array 
const arrayElement = ['python','Java', 'C#', 'C++'];

//Formma 1 en que se pueden añadir varios elementos a la lista
//--------------------------------------------------------------------
//Recorriendo el array
/*arrayElement.forEach(item =>{

     console.log(item)
    //Creamos los li por cada vuelta 
    const li = document.createElement('li');
    //Añadimos el contenido del array 
    li.textContent = item;

    //se agregan los elementos a la lista
    lista.appendChild(li);
});*/
//--------------------------------------------------------------------
//Forma 2 para añadir varios elementos a la lista

//Agregamos un foreach
arrayElement.forEach(item => {
    //Haciendo uso del innerHtml
    lista.innerHTML += `<li>${item}</li>`

});

//--------------------------------------------------------------------
//Estas dos formas pueden generar Reflow : Ocurre cuando un navegador debe procesar y dibujar parte o 
//la totalidad de una página web nuevamente, como después de una actualización en un sitio interactivo.
//--------------------------------------------------------------------