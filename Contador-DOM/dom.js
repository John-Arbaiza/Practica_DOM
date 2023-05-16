//Creamos la constante para el button
const btnAumenta = document.querySelector('.btn-info');

//Creamos una const para el span
const span = document.getElementById('resultado');

//Creamos un contador
let contador = 0;

//Creamos los eventos a emplear
 //--------------------------------------------------
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
});
 //--------------------------------------------------