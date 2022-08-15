let parrafo = document.querySelector("#texto");
let boton = document.querySelector("#boton");

let mostrarParrafo = () => {
  parrafo.classList.toggle("mostrar");
};

boton?.addEventListener("click", mostrarParrafo);
