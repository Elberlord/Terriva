# TERRIVA — Cómo publicar una propiedad

> Documento interno. **Nunca publiques la información estratégica de adquisición** en las fichas abiertas.

## 1. Preparar fotografías

1. Toma o consigue fotografías autorizadas de la vivienda real. Confirma que tienes derecho a publicarlas.
2. Guarda los archivos en `assets/propiedades/`. Se recomienda `.webp`, calidad aproximada 75–85 y entre 1400 y 1800 píxeles de ancho.
3. Pon nombres claros y sin espacios, por ejemplo `casa-cartago-01.webp`, `casa-cartago-02.webp`, `casa-alajuela-03.webp`.
4. Evita publicar matrículas, números de casa, personas sin consentimiento, direcciones exactas sensibles o documentos privados en las imágenes.

## 2. Editar los datos

Abre `propiedades.js`. Cada elemento de `window.TERRIVA_PROPERTIES` es una ficha.

Ejemplo de entrada **solo cuando los datos sean reales y verificados**:

```js
{
  id: "ref-001",
  demo: false,
  titulo: "Casa residencial en Cartago",
  provincia: "Cartago",
  ubicacion: "Cartago, Costa Rica", // ubicación pública general, NO dirección privada
  tipo: "Residencial",
  estado: "disponible", // disponible | revision | reservada | vendida
  precio: 0,            // precio real publicado en colones (sin separadores)
  moneda: "CRC",
  terreno: null,        // m² comprobados o null
  construccion: null,   // m² comprobados o null
  habitaciones: null,   // número real o null
  banos: null,          // número real o null
  referencia: "T-001", // referencia COMERCIAL, no expediente judicial
  descripcion: "Descripción verificable y autorizada.",
  caracteristicas: ["Agua y electricidad verificadas"],
  fotos: [
    "assets/propiedades/casa-cartago-01.webp",
    "assets/propiedades/casa-cartago-02.webp"
  ],
  fecha: "2026-10-11"
}
```

**No anuncies un precio `0`:** cámbialo por un precio real antes de publicar. Si falta, usa `null` para mostrar "Precio por definir".

## 3. Ocultar la ficha de demostración

En `propiedades.js`, establece:

```js
mostrarDemostracion: false
```

El catálogo mostrará un estado vacío elegante hasta que se añadan propiedades reales.

## 4. Configurar el correo de contacto

En `propiedades.js`, cambia `contactEmail: ""` por tu dirección empresarial verificada.

El formulario es estático: **abre un borrador en el cliente de correo del visitante y NO lo envía automáticamente**. Para recepción directa de formularios será necesario un backend o un proveedor de formularios y su política de privacidad correspondiente.

## 5. Antes de anunciar una propiedad

Verifica: identidad registral, titularidad o autorización comercial, precio, estado, ocupación, servicios de agua y electricidad, fotografía actual, superficie y limitaciones legales. No anuncies una propiedad solo por estar publicada en un portal de remates.
