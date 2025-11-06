// Ejercicio 06 - Clasificación de valor en múltiples categorías
// Autor: Claudia

// Esperar a que el HTML esté cargado
document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("btn-ejecutar");
  const resultado = document.getElementById("resultado");

  // Verificación: mostrar en consola si el script se cargó correctamente
  console.log(" script.js cargado correctamente");

  boton.addEventListener("click", () => {
    resultado.className = "resultado"; // limpiar estilos anteriores
    const valor = Math.floor(Math.random() * 1000) + 1; // genera entre 1 y 1000
    console.log(" Valor generado:", valor);
    resultado.style.display = "block";

    if (valor < 100) {
      resultado.textContent = ` El valor ${valor} está antes de los rangos.`;
      resultado.classList.add("antes");
    } else if (valor >= 100 && valor <= 300) {
      resultado.textContent = ` El valor ${valor} pertenece al primer rango (100–300).`;
      resultado.classList.add("rango1");
    } else if (valor > 300 && valor < 500) {
      resultado.textContent = ` El valor ${valor} está entre los rangos (no válido).`;
      resultado.classList.add("entre");
    } else if (valor >= 500 && valor <= 800) {
      resultado.textContent = ` El valor ${valor} pertenece al segundo rango (500–800).`;
      resultado.classList.add("rango2");
    } else {
      resultado.textContent = ` El valor ${valor} supera los rangos establecidos.`;
      resultado.classList.add("supera");
    }
  });
});


