/*
  TERRIVA · CATÁLOGO EDITABLE
  Reemplaza las fichas DEMO por propiedades reales SOLO después de verificarlas.
  Para lanzar sin ejemplos: cambia mostrarDemostracion a false.
  Para agregar una finca real: añade objetos en propiedades (guía en docs/COMO_PUBLICAR_PROPIEDADES.md).
  Las imágenes van en assets/propiedades/ y se indican con rutas relativas.
  Importante: jamás publiques datos judiciales o ubicaciones privadas sensibles.
*/
window.TERRIVA_CONFIG = {
  contactEmail: "anakinjd1985@gmail.com", // Destino de consultas; en formularios estáticos también queda público en index.html
  mostrarDemostracion: true
};

window.TERRIVA_PROPERTIES = [
  {
    id: "demo-ficha",
    demo: true,
    titulo: "Vista previa de una ficha inmobiliaria",
    provincia: "",
    ubicacion: "Ubicación por confirmar",
    tipo: "Residencial",
    estado: "demo",
    precio: null,
    moneda: "CRC",
    terreno: null,
    construccion: null,
    habitaciones: null,
    banos: null,
    referencia: "",
    descripcion: "Esta ficha solo enseña cómo se presentará una propiedad cuando su ubicación, estado físico, disponibilidad y demás características hayan sido verificadas. No corresponde a un inmueble en venta.",
    caracteristicas: ["Galería con varias fotografías", "Ficha técnica verificable", "Solicitud de información"],
    fotos: [
      "assets/demo-exterior.svg",
      "assets/demo-interior.svg",
      "assets/demo-jardin.svg"
    ],
    fecha: "2026-10-11"
  }
];
