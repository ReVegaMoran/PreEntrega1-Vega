// js/navbar.js
(function () {
  // Si estoy dentro de /pages/ necesito prefijo "../"
  const isInsidePages = location.pathname.includes("/pages/");
  const base = isInsidePages ? "../" : "";

  const navHtml = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <div class="container">
      <a class="navbar-brand fw-bold" href="${base}index.html">PR Chile</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"
              aria-controls="mainNav" aria-expanded="false" aria-label="Alternar navegación">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="${base}index.html">Inicio</a></li>
          <li class="nav-item"><a class="nav-link" href="${base}pages/servicios.html">Servicios</a></li>
          <li class="nav-item"><a class="nav-link" href="${base}pages/nosotros.html">Nosotros</a></li>
          <li class="nav-item"><a class="nav-link" href="${base}pages/contacto.html">Contacto</a></li>
        </ul>
      </div>
    </div>
  </nav>`;

  const header = document.getElementById("site-header");
  if (header) header.innerHTML = navHtml;

  // Resalta el link actual (sin cambiar diseño)
  try {
    const here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    document.querySelectorAll(".nav-link").forEach(a => {
      const href = (a.getAttribute("href") || "").split("/").pop().toLowerCase();
      if (href === here) a.setAttribute("aria-current", "page");
    });
  } catch (_) {}
})();
