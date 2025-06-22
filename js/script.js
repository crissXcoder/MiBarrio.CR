const negocios = [
  {
    nombre: "Panadería El Buen Pan",
    categoria: "Alimentos",
    descripcion: "Deliciosos panes artesanales y repostería fresca.",
    imagen: "img/panaderia.webp",
    contacto: "https://wa.me/50688888888",
    destacado: true
  },
  {
    nombre: "Soluciones Eléctricas Mario",
    categoria: "Servicios",
    descripcion: "Instalaciones y reparaciones eléctricas a domicilio.",
    imagen: "img/electrica.webp",
    contacto: "tel:+50687777777",
    destacado: false
  },
  {
    nombre: "Diseños Anita",
    categoria: "Moda",
    descripcion: "Ropa artesanal y costura personalizada.",
    imagen: "img/diseño.webp",
    contacto: "https://wa.me/50689999999",
    destacado: true
  },
  {
    nombre: "Tecnología AlexTech",
    categoria: "Electrónica",
    descripcion: "Venta de accesorios y reparación de computadoras y celulares.",
    imagen: "img/tecnologia.webp",
    contacto: "https://wa.me/50688776655",
    destacado: true
  },
  {
    nombre: "Soda La Esquina",
    categoria: "Comida Rápida",
    descripcion: "Hamburguesas, batidos y comidas caseras a excelente precio.",
    imagen: "img/soda.webp",
    contacto: "tel:+50685664433",
    destacado: false
  },
  {
    nombre: "Estética y Spa Liz",
    categoria: "Belleza",
    descripcion: "Servicios de uñas, maquillaje y tratamientos relajantes.",
    imagen: "img/estetica.webp",
    contacto: "https://wa.me/50689443322",
    destacado: true
  }
];


function renderNegocios(filtro = "") {
  const container = document.getElementById("negocios-container");
  container.innerHTML = "";

  const filtrados = negocios
    .filter(n =>
      n.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
      n.categoria.toLowerCase().includes(filtro.toLowerCase()) ||
      n.descripcion.toLowerCase().includes(filtro.toLowerCase())
    )
    .sort((a, b) => (b.destacado === true) - (a.destacado === true)); 

  filtrados.forEach(negocio => {
    const card = document.createElement("div");
    card.className = "negocio";

    const estrella = negocio.destacado ? "⭐" : "";

    card.innerHTML = `
      <img src="${negocio.imagen}" alt="${negocio.nombre}" />
      <div class="info">
        <h3>${estrella} ${negocio.nombre}</h3>
        <p><strong>Categoría:</strong> ${negocio.categoria}</p>
        <p>${negocio.descripcion}</p>
        <a href="${negocio.contacto}" target="_blank">
          <button>Contactar</button>
        </a>
      </div>
    `;

    container.appendChild(card);
  });
}


function buscarNegocios() {
  const input = document.getElementById("inputBuscar").value;
  renderNegocios(input);
}

// Render inicial
document.addEventListener("DOMContentLoaded", () => {
  const guardados = JSON.parse(localStorage.getItem("negocios") || "[]");
  if (guardados.length > 0) {
    guardados.forEach(n => negocios.push(n));
  }
  renderNegocios();
});


function mostrarLogin() {
  document.getElementById("loginModal").style.display = "flex";
}

function ocultarLogin() {
  document.getElementById("loginModal").style.display = "none";
}

function cerrarModal(e) {
  if (e.target.id === "loginModal") {
    ocultarLogin();
  }
}

function validarLogin() {
  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;
  const error = document.getElementById("loginError");

  if (usuario === "admin" && contrasena === "1234") {
    window.location.href = "admin.html";
  } else {
    error.textContent = "Usuario o contraseña incorrectos";
  }
}
