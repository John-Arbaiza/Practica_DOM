const Titulo = document.querySelector('#Titulo');
Titulo.style.color = 'aqua';
Titulo.style.textAlign = 'center';


//Const de la lista 
const lista = document.getElementById('lista');

//array con los elementos
arrayElements2 = ['Matematica', 'Lenguaje', 'Sociales', 'Ciencia'];

//Fragment Se utiliza como una versión ligera de Document que almacena un segmento
// de una estructura de documento compuesta de nodos como un documento estándar.

//Para usar fragment debemos crearlo
//Forma 1
const fragment = document.createDocumentFragment('fragment');

//Forma 2
//const fragment = new DocumentFragment()

//Creando el ciclo foreach
arrayElements2.forEach(element => {
    //Usamos createElement
    const li = document.createElement('li')
    li.textContent = element;

    //Empleamos el fragment para que se agreguen los elementos 
    //fragment.appendChild(li);

    //firstChild propiedad de Node, interfaz devuelve el primer hijo del nodo en el
    // árbol, o null si el nodo no tiene hijos.
    const chilNode = fragment.firstChild
    console.log(element, chilNode)

    //before recive el nuevo nodo y la referencia d de este 
    fragment.insertBefore(li, chilNode);
});

//Agregamos los elementos almacenados en el fragment a la lista 
lista.appendChild(fragment);




