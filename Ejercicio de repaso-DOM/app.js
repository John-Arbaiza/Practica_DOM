//Const a emplear
const contenedor = document.querySelector('.container');
contenedor.classList.add('container');

//Elementos a crear
const header = document.createElement('div');
const aside = document.createElement('div');
const article = document.createElement('div');
const footer = document.createElement('div');
//-------------------------------------------
const title = document.createElement('h2');
const title2 = document.createElement('h2');
const title3 = document.createElement('h2');
const title4 = document.createElement('h2');

//Agregando texto
title.textContent = 'Header';
title2.textContent = 'Aside';
title3.textContent = 'Article';
title4.textContent = 'Footer';
//-------------------------------------------
header.appendChild(title);
aside.appendChild(title2);
article.appendChild(title3);
footer.appendChild(title4);

//Agregando los estilos a los elementos creados
header.classList.add('header');
aside.classList.add('aside');
article.classList.add('article');
footer.classList.add('footer');

//Agregando los elementos al contenedor
contenedor.appendChild(header);
contenedor.appendChild(aside);
contenedor.appendChild(article);
contenedor.appendChild(footer);
