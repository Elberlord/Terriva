# TERRIVA — Inversiones Inmobiliarias

Sitio corporativo estático, adaptable a móviles, hecho en **HTML + CSS + JavaScript**, listo para GitHub Pages.

## Archivos principales

- `index.html` — página corporativa, catálogo de propiedades y sección para inversionistas.
- `style.css` — identidad visual, layout, mobile y accesibilidad.
- `script.js` — menú, filtros, ordenamiento, galería de imágenes, diálogos y formulario.
- `propiedades.js` — configuración comercial, correo de contacto y datos del catálogo.
- `assets/logo-original.png` — imagen completa del logotipo seleccionado por el fundador.
- `assets/logo-terriva.webp` — nombre y subtítulo recortados del diseño original para el encabezado.
- `assets/logo-completo.webp` — logotipo completo optimizado.
- `assets/logo-simbolo.webp` — símbolo aislado de marca.
- `assets/propiedades/` — fotografías reales de propiedades (inicialmente vacío).
- `docs/COMO_PUBLICAR_PROPIEDADES.md` — instrucciones para añadir inmuebles verificados.

## Probar en la computadora

Abre `index.html` en tu navegador. No necesita instalar paquetes, ejecutar Node ni iniciar servidor.

## Publicar en GitHub

1. Crea un repositorio llamado, por ejemplo, `terriva-web`.
2. Sube **todo el contenido de esta carpeta** a la raíz del repositorio (no solo el ZIP).
3. En GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**.
4. Selecciona rama `main` y carpeta `/(root)` → **Save**.
5. Espera la publicación. La URL suele tener el patrón `https://TU_USUARIO.github.io/terriva-web/`.
6. Verifica en móvil y escritorio antes de compartirlo públicamente.

No incluyas material privado de la empresa, contratos internos, datos de inversionistas o expedientes en el repositorio **público**. Un sitio en GitHub Pages es público aunque los enlaces no estén visibles en la navegación.

## Aún por configurar (antes de lanzamiento)

- Registrar/verificar la disponibilidad de **TERRIVA** como marca y nombre comercial.
- Configurar un correo empresarial real en `propiedades.js`.
- Decidir si mostrar la ficha de demostración o deshabilitarla.
- Añadir fotografías **reales y autorizadas** y fichas verificadas.
- Revisar textos jurídicos, condiciones comerciales y políticas de privacidad con profesionales antes de recopilar datos y ofrecer inversiones.
- Configurar un backend de formularios si deseas que lleguen consultas sin pasar por el cliente de correo del visitante.
- Vincular un dominio cuando tengas uno registrado.

## Protección del proyecto

El sitio público **no muestra** la metodología interna de compras, portales de oportunidades, expedientes judiciales, números de finca, domicilios privados ni herramientas de valoración. Las futuras fichas públicas deberán limitarse a información material comprobada y autorizada. Los inversionistas deberán recibir toda la información relevante para evaluar una inversión concreta antes de aportar fondos.

## Nota sobre imágenes

La galería de demostración contiene **ilustraciones** claramente identificadas, no fotografías de casas en venta. Sustitúyelas por fotografías de inmuebles reales cuando estén autorizados y disponibles.

## Tecnología

Sitio sin framework ni dependencias de compilación. Usa Google Fonts de manera opcional (si fallan, se emplean fuentes de reserva). La única función que abre una aplicación externa es el formulario de contacto mediante `mailto:` una vez que configures una dirección. No existe gestión de clientes, autenticación, procesador de pagos ni base de datos en este paquete.
