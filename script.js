const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

/* form.addEventListener('submit', sumarInputValues);

//btn.addEventListener('click', btnOnClick);//addEventListener es un metodo; es algo asi como un escuchador de eventos, escucha cada vez que sucede un evento y cada vez que pase ejecuta el codigo JS que yo indique

function sumarInputValues(event){
    event.preventDefault(); //Evita que recargue por defecto la pagina
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + "  " + sumaInputs;
} */

btn.addEventListener('click', sumarInputValues);//addEventListener es un metodo; es algo asi como un escuchador de eventos, escucha cada vez que sucede un evento y cada vez que pase ejecuta el codigo JS que yo indique

function sumarInputValues(event){
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + "  " + sumaInputs;
}


