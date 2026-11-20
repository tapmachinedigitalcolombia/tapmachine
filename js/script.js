/* CONFIGURACIÓN: reemplaza estos datos por los definitivos antes de publicar. */
const TAPMACHINE_CONFIG = {
  whatsappNumber: "573003668796", // Código de país + número, solo dígitos. Ejemplo Colombia: 57 + celular.
  sellerName: "Julian Mantinez",
  message: "Hola Julian, quiero conocer las soluciones NFC de TapMachine.digital."
};

document.addEventListener("DOMContentLoaded", () => {
  const waUrl = `https://wa.me/${TAPMACHINE_CONFIG.whatsappNumber}?text=${encodeURIComponent(TAPMACHINE_CONFIG.message)}`;
  document.getElementById("whatsappFloat").href = waUrl;
  document.getElementById("contactButton").href = waUrl;
  document.getElementById("year").textContent = new Date().getFullYear();

  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  menuToggle.addEventListener("click", () => {
    const opened = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(opened));
    menuToggle.setAttribute("aria-label", opened ? "Cerrar menú" : "Abrir menú");
    menuToggle.textContent = opened ? "×" : "☰";
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  }));

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("visible"));
  }
});