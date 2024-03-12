document.addEventListener("DOMContentLoaded", function () {
  const scrollTopButton = document.querySelector(".scroll-top");

  // Función para desplazarse al principio de la página
  function scrollToTop() {
    window.scrollTo({
      behavior: "smooth",
    });
  }

  // Mostrar u ocultar el botón según la posición de desplazamiento
  function toggleScrollTopButton() {
    if (window.scrollY > 100) {
      // Cambia este valor según tu preferencia
      scrollTopButton.classList.add("show");
    } else {
      scrollTopButton.classList.remove("show");
    }
  }

  // Agregar evento click al botón
  scrollTopButton.addEventListener("click", scrollToTop);

  // Agregar evento scroll para mostrar u ocultar el botón
  window.addEventListener("scroll", toggleScrollTopButton);
});
