const boton = document.querySelector('#btn-calcular');
const resultado = document.querySelector('#presupuesto');

boton.addEventListener('click', calcular);

function calcular() {
    // Selecciono los elementos del DOM
    let presInicial = parseFloat(document.querySelector('#pres-inicial').value);
        gNecesarios = parseFloat(document.querySelector('#g-necesarios').value);
        gOPcionales = parseFloat(document.querySelector('#g-opcionales').value);
        ahorroInv = parseFloat(document.querySelector('#ahorro-inversion').value);
        // Multiplico presInicial por cada categoria 
        calculo1 = (presInicial * gNecesarios) / 100;
        calculo2 = (presInicial * gOPcionales) / 100;
        calculo3 = (presInicial * ahorroInv) / 100;

    // Muestro el resultado 
   resultado.textContent = `$${calculo1} para Gastos Necesarios - $${calculo2} para Gastos Opcionales -
    $${calculo3} para Ahorro e Inversión`
}