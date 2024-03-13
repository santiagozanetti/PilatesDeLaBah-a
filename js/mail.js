document.addEventListener("DOMContentLoaded", function () {
  const emailButton = document.getElementById("emailButton");
  const emailAddress = "pilatesdelabahia@gmail.com";
  const subject = encodeURIComponent("Consulta sobre Pilates");
  const body = encodeURIComponent(
    "Hola,\n\nMe gustaría obtener más información sobre las clases de pilates.\n\nGracias."
  );

  emailButton.addEventListener("click", function () {
    window.open(`mailto:${emailAddress}?subject=${subject}&body=${body}`);
  });
});
