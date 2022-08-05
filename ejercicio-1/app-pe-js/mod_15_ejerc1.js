const boton = document.querySelector('#btn-calcular');
const resultado = document.querySelector('#punto-equilibrio');

boton.addEventListener('click',calcular);

function calcular() {
    //Selecciono los elementos del DOM
    let cFijos = parseFloat(document.querySelector('#costos-fijos').value);
    let pVenta = parseFloat(document.querySelector('#precio-venta').value);
    let cVariables = parseFloat(document.querySelector('#costos-variables').value);
    //Realizo el calculo de punto de equilibrio
    let calculo = cFijos / (pVenta - cVariables); 
    //Muestro el resultado
   resultado.textContent = `El punto de equilibrio es $${calculo}`
}
