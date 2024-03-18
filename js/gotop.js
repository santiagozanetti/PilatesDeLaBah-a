document.addEventListener("DOMContentLoaded", function () {
  var btnScrollToTop = document.getElementById("btnScrollToTop");

  window.addEventListener("scroll", function () {
    // Muestra u oculta el botón basado en la posición vertical de la página
    if (window.scrollY > 300) {
      // Cambia 300 al número de píxeles a partir del cual deseas mostrar el botón
      btnScrollToTop.style.display = "block";
    } else {
      btnScrollToTop.style.display = "none";
    }
  });

  // Función para desplazarse suavemente hacia arriba
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // Asignar la función scrollToTop al clic del botón
  btnScrollToTop.addEventListener("click", scrollToTop);
});
