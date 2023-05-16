const lista = document.getElementById('lista');

//Creando un array 
const arrayElement = ['python','Java', 'C#', 'C++'];

//Forma 1
//------------------------------------------------------------------------
//Creamos el fragment para evitar el Reflow
/*const fragment = document.createDocumentFragment()

arrayElement.forEach( item =>{

    //Primero creamo el li
    const li = document.createElement('li');
    li.classList.add('list');

    //Creamoe el b
    const b = document.createElement('b');
    b.textContent = 'Nombre:';
    
    //Agregamos elementods 
    li.appendChild(b);

    //Creamos la const para el span 
    const span = document.createElement('span');
    span.classList.add('text-danger');
    span.textContent = 'descripcion...';
    li.appendChild(span);

    //Agregamos los elementos al frgment 
    fragment.appendChild(li)
});

//Agregamos los elementos del fragment a la lista 
lista.appendChild(fragment)*/
//------------------------------------------------------------------------

//Forma 2
//------------------------------------------------------------------------
//Empleando la solucion con el innerHTML

//Remplazamos el fragment que no se puede usar cuando se emplea el inner de la suiguiente manera
/*let fragment1 = ''  //Esto es una alternativa

//Creamos un forEach
arrayElement.forEach(item =>{
    fragment1 += `
    <li class="list">
        <b>nombre: </b> <span class="text-danger">${item}</span>
    </li>
    `;

});

lista.innerHTML = fragment1;*/
//------------------------------------------------------------------------
//USO DEL TEMPLATE

const template = document.getElementById('templade-li').content;
const fragment = document.createDocumentFragment()

arrayElement.forEach( item => {
    template.querySelector("span").textContent = item;
    const clone = template.cloneNode(true);
    // const clone = document.importNode(template, true);
    fragment.appendChild(clone);
  });
  
  lista.appendChild(fragment);
