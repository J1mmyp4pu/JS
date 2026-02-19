// Referencias a los elementos del DOM
const inputU1 = document.getElementById('pesos');
const btnCalcular = document.getElementById('btnCalcular');
const btnLimpiar = document.getElementById('btnLimpiar');

const txtPromedio = document.getElementById('txtPromedio');
const txtEstatus = document.getElementById('txtEstatus');

// Función principal
btnCalcular.addEventListener('click', () => {
    // 1. Obtener valores y convertirlos a número (float)
    const u1 = parseFloat(inputU1.value) || 0;


    // 2. Calcular promedio
    const promedio = u1 / 17.17;

    // 3. Mostrar promedio (con 1 decimal)
    txtPromedio.value = `${promedio.toFixed(2)} USD`;

    
    // Limpiar clases previas
    txtEstatus.className = ''; 
});

// Función para limpiar
btnLimpiar.addEventListener('click', () => {
    inputU1.value = '';
    txtPromedio.value = '';
    txtEstatus.value = '';
    txtEstatus.className = '';
});