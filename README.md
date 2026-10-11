# TERRIVA — Inversiones Inmobiliarias

Sitio corporativo estático, adaptable a móviles, hecho en **HTML + CSS + JavaScript**, listo para GitHub Pages.

## Archivos principales

- `index.html` — página corporativa, catálogo de propiedades y sección para inversionistas.
- `style.css` — identidad visual, layout, mobile y accesibilidad.
- `script.js` — menú, filtros, ordenamiento, galería de imágenes, diálogos y formulario.
- `propiedades.js` — configuración comercial, correo de contacto y datos del catálogo.
- `gracias.html` — confirmación visual del formulario de contacto.
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
- El correo receptor provisional es `anakinjd1985@gmail.com` (personal; conviene migrar a uno empresarial).
- Decidir si mostrar la ficha de demostración o deshabilitarla.
- Añadir fotografías **reales y autorizadas** y fichas verificadas.
- Revisar textos jurídicos, condiciones comerciales y políticas de privacidad con profesionales antes de recopilar datos y ofrecer inversiones.
- **Activar recepción de formularios en FormSubmit**: enviar una consulta de prueba desde el sitio publicado y confirmar el enlace que llegará a `anakinjd1985@gmail.com`. Hasta confirmar, el sitio no tiene entrega de correo verificada. Comprueba Spam.
- No almacenar información privada de visitantes en el repositorio GitHub. El formulario usa un procesador externo (FormSubmit), no una base de datos propia.
- Vincular un dominio cuando tengas uno registrado.

## Protección del proyecto

El sitio público **no muestra** la metodología interna de compras, portales de oportunidades, expedientes judiciales, números de finca, domicilios privados ni herramientas de valoración. Las futuras fichas públicas deberán limitarse a información material comprobada y autorizada. Los inversionistas deberán recibir toda la información relevante para evaluar una inversión concreta antes de aportar fondos.

## Nota sobre imágenes

La galería de demostración contiene **ilustraciones** claramente identificadas, no fotografías de casas en venta. Sustitúyelas por fotografías de inmuebles reales cuando estén autorizados y disponibles.

## Tecnología

Sitio sin framework ni dependencias de compilación. Usa Google Fonts de manera opcional (si fallan, se emplean fuentes de reserva). El formulario de contacto utiliza `POST` hacia FormSubmit y requiere activación por correo del titular. No existe CRM, autenticación, procesador de pagos ni base de datos propia en este paquete.

## Etapa 2 — Recepción real de consultas

1. Subir `index.html`, `script.js`, `propiedades.js`, `style.css` y `gracias.html` al repositorio.
2. Esperar a que GitHub Pages publique los cambios.
3. Abrir `https://elberlord.github.io/Terriva/#contacto` y enviar **una prueba** con datos ficticios.
4. Revisar `anakinjd1985@gmail.com`, incluida la carpeta Spam, y abrir el enlace de activación enviado por FormSubmit.
5. Volver a enviar otra prueba y comprobar su recepción. **No afirmar que funciona hasta realizar esta verificación.**

El formulario tiene CAPTCHA (gestionado por FormSubmit), campo trampa antispam y consentimiento previo. Los datos se envían a un servicio externo bajo su política de privacidad: https://formsubmit.co/privacy.pdf.

**Privacidad:** el email aparecerá en el HTML público. FormSubmit ofrece sustituirlo por un token opaco después de activar el formulario (ver su apartado *Invisible emails*). El aviso de privacidad incluido es preliminar y debe revisarse con asesoría legal antes de un uso comercial amplio.
