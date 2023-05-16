const principal = document.querySelector('.principal');
principal.style.textAlign = 'center';

//Creamos la constante para el button
/*const btnAumenta = document.querySelector('.btn-info');

//Creamos una const para el span
const span = document.getElementById('resultado');

//Creamos un contador
let contador = 0;

btnAumenta.addEventListener('click', () =>{
console.log("Me diste click aumentar ;)")

//aumentamos el contador
contador++;

span.textContent = contador;
});

//--------------------------------------------------

//Para el boton de disminuir 
const btnDisminuye = document.querySelector('.btn-danger')

btnDisminuye.addEventListener('click', () =>{
    if (contador != 0){
        contador--;
    }
    else{
        console.log("No entran negativos")
    }
span.textContent = contador;
});*/
//--------------------------------------------------

//Seunda forma Event Delegation 

//Creamos una const para el container 
const container = document.querySelector('.container');

//Creamos una const para el span
const span = document.getElementById('resultado');

//Creamos un contador
let contador = 0;

container.addEventListener('click', (e) =>{
   //console.log(e.target)
   console.log(e.target.classList.contains('btn-info'));

   //Hacemos un if 
   if(e.target.classList.contains('btn-info')){
    contador++;
    span.textContent = contador
   }

   if(e.target.classList.contains('btn-danger')){
    contador--;
    span.textContent = contador
   }
   
   e.stopPropagation();
   e.preventDefault();
});

//stopPropagation
document.body.addEventListener('click', () =>{
    console.log("Diste un click")
});