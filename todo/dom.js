//Creamos las conts a emplear mas adelante
const ul = document.querySelector('[data-pendientes]');
const input = document.querySelector('.form-control ');
const btnIngresa = document.querySelector('.btn-outline-success');
const card = document.querySelector('.card-body');
const mensaje = document.createElement('mensaje')

//Mensaje de inicio
mensaje.innerHTML = '<p>Todavia no se agrego nada</p>';
mensaje.style.textAlign = 'center';
mensaje.style.color = 'tomato';
mensaje.style.fontSize = '18px'
card.appendChild(mensaje);


//definimos lo que nos permitira ingresar texto
//Para ello creamos un evento
btnIngresa.addEventListener('click', (e) =>{
    //----------------------------------------------------
    //const de la lista de tareas 
    const li = document.createElement('li');
    const p = document.createElement('p')
    //----------------------------------------------------
    //Nos ayuda que no se este recargando la pagina cada ves que se de click
    e.preventDefault();
    //----------------------------------------------------
    //Ingresamos los elementos
    p.textContent =input.value;
    //----------------------------------------------------
    //Le pasamos los elementos de p a li
    li.appendChild(p)
    //Agregamos el button al li por medio de la funcion
    li.appendChild(addDeleteBtn())
    //----------------------------------------------------
    //Le pasamos a ul lo que hay en li
    ul.appendChild(li);
    //Para limpiar el input
    input.value = "";
    //----------------------------------------------------
    //Para que desaparesca el mensaje de inico
     mensaje.style.display = 'none';
     //----------------------------------------------------
     
     li.classList.add('llist-item')
    
});

//Creamos una funcion para crear un button que nos permita eliminar tareas
function addDeleteBtn(){
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'X'
    //Agregamos una clase 
    deleteBtn.className = 'btn-delete';

    //Añadiendo el evento
    deleteBtn.addEventListener('click', (e) =>{
        //Creamos una variable
        const item = e.target.parentElement; // target se refiere al btn y para agarrarlo usamos el parentElement
        //Para eliminar un elemento agarramos el ul
        ul.removeChild(item);

        //Esto nos sirve para que cuando eliminemos las tareas se vuelva a mostrar el mensaje de
        //Todavia no se agrego nada
        const items = document.querySelectorAll('.list-item');
        if(items.length === 0){
            mensaje.style.display = 'block';
        
            return
        }

    });

    return deleteBtn;
}

//-----------------------------------------------------------------------
//Intento para hacer que funcione el modo oscuro y el modo claro
const btnCambio = document.querySelector('.btn-noche');
const btnCambio2 = document.querySelector('.btn-dia');
const noche = document.getElementsByTagName('body');
//-----------------------------------------------------------------------

//Creamos los eventos
btnCambio.addEventListener('click', (e) =>{
noche[0].style.backgroundColor = 'darkslategrey';
});

btnCambio2.addEventListener('click', (e) =>{
      noche[0].style.backgroundColor = 'white';
    });

//-----------------------------------------------------------------------

//============================================================================================
//No se usa pero se deja  a modo de idea 

/*
//Funcion que nos permite listar 
const listar = () => {
    const items = document.querySelector('.list-item');
    if(items.length === 0){
        document.querySelector('[data-pendientes]').innerHTML = '<p>Todavia no se agrego nada</p>';
        return
    }

    items.forEach((item) =>{
        document.querySelector('[data-pendientes]').appendChild(item)
    
    });
}
*/

//============================================================================================