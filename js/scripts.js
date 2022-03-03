const btnFlotante = document.querySelector(".btn-flotante");

btnFlotante.addEventListener("click", (e) => {
  e.preventDefault();

  const footer = document.querySelector(".footer");
  if (footer.classList.contains("activo")) {
    footer.classList.remove("activo");
    btnFlotante.innerHTML = "Idioma y Moneda";
    btnFlotante.classList.remove("activo");
  } else {
    footer.classList.add("activo");
    btnFlotante.innerHTML = "X cerrar";
    btnFlotante.classList.add("activo");
  }
});
