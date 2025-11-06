// Ejercicio 06 - Clasificación de valor en múltiples categorías
// Autor: Claudia (2025)
// Descripción: Clasifica un número aleatorio según su posición respecto a los rangos 100–300 y 500–800.
// Usa una cadena de if - else if - else y aplica estilos dinámicos con classList.

document.getElementById("btn-ejecutar").addEventListener("click", ejecutarEjercicio);

function ejecutarEjercicio() {
  const resultado = document.getElementById("resultado");

  // Limpiar clases previas antes de aplicar una nueva
  resultado.className = "resultado";

  // Generar un número aleatorio entre 1 y 1000
  const valor = Math.floor(Math.random() * 1000) + 1;
  console.log("Valor generado:", valor);

  resultado.style.display = "block";

  // Cadena de if - else if - else ordenada correctamente
  if (valor < 100) {
    resultado.textContent = ` El valor ${valor} está antes de los rangos.`;
    resultado.classList.add("antes");
  } 
  else if (valor >= 100 && valor <= 300) {
    resultado.textContent = `✅ El valor ${valor} pertenece al primer rango (100–300).`;
    resultado.classList.add("rango1");
  } 
  else if (valor > 300 && valor < 500) {
    resultado.textContent = ` El valor ${valor} está entre los rangos (no válido).`;
    resultado.classList.add("entre");
  } 
  else if (valor >= 500 && valor <= 800) {
    resultado.textContent = ` El valor ${valor} pertenece al segundo rango (500–800).`;
    resultado.classList.add("rango2");
  } 
  else {
    resultado.textContent = ` El valor ${valor} supera los rangos establecidos.`;
    resultado.classList.add("supera");
  }
}
