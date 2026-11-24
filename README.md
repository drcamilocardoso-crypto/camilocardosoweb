# Camilo Cardoso — Abogado | Landing Page

Landing page oscura y moderna, totalmente parametrizada. Toda la información editable vive en un único archivo, sin tocar HTML/CSS/JS.

## Estructura

```
index.html            → Estructura de la página (no requiere edición para cambiar contenido)
css/styles.css         → CSS compilado, listo para usar
scss/styles.scss       → Fuente Sass (variables de diseño, tipografías, espaciados)
js/data.js              → ÚNICO archivo a editar para cambiar textos, imágenes, colores y contacto
js/main.js             → Lógica de renderizado y animaciones (no requiere edición)
assets/img/            → Logo, favicon y fotos
```

## Cómo personalizar el contenido

Abrí **`js/data.js`** y editá los valores. Ejemplos:

- **Nombre y marca**: `SITE_DATA.marca.nombre`, `tituloProfesional`, `logo`, `fotoPerfil`
- **WhatsApp**: `SITE_DATA.contacto.whatsappNumero` (formato internacional sin `+`, ej. `59897301476`) y el mensaje predeterminado en `whatsappMensajeDefault`
- **Colores**: `SITE_DATA.colores` — cambiá `acentoPrimario` para el color dorado principal, o cualquier otro valor para re-tematizar todo el sitio al instante
- **Textos del hero, sobre mí, trayectoria (experiencia, educación, cursos, reconocimientos, idiomas), áreas de práctica, etc.**: cada sección tiene su propio objeto en `SITE_DATA`, con arreglos fáciles de agregar/quitar (por ejemplo, agregar una nueva área de práctica es agregar un objeto más al arreglo `areas`, o un nuevo cargo es agregar un objeto al arreglo `trayectoria.experiencia`)

## Cómo reemplazar imágenes

Colocá tus archivos en `assets/img/` con estos nombres (o cambiá las rutas en `data.js`):

- `logo.svg` — logo del estudio/abogado (se usa en el header)
- `favicon.png` — ícono de pestaña del navegador
- `perfil.jpg` — foto principal (sección hero)
- `perfil-secundaria.jpg` — foto secundaria (sección "Sobre mí")

Si una imagen no existe todavía, la página muestra automáticamente un placeholder elegante indicando qué archivo falta, sin romper el diseño.

## Íconos de áreas de práctica / características

Los íconos disponibles (definidos como sprite SVG al final de `index.html`) son:
`balance-scale`, `briefcase`, `users`, `shield`, `home`, `file-text`, `message-circle`, `target`, `lock`, `trending-up`, `mail`, `map-pin`, `whatsapp`, `linkedin`, `star`.

Usá cualquiera de estos nombres en el campo `icono` de cada ítem en `data.js`. Para agregar un ícono nuevo, sumá un `<symbol>` más en el sprite SVG de `index.html`.

## Editar estilos (opcional)

El diseño usa variables CSS inyectadas desde `data.js` (`SITE_DATA.colores`), por lo que normalmente **no hace falta tocar CSS/SCSS**. Si querés ajustar tipografías, espaciados o radios de borde, editá `scss/styles.scss` y recompilá:

```bash
npx sass scss/styles.scss css/styles.css --no-source-map
```

(o instalá `sass` globalmente: `npm install -g sass`)

## Cómo ver el sitio

Simplemente abrí `index.html` en el navegador (no requiere servidor ni build). También podés usar una extensión tipo "Live Server" para recarga automática mientras editás.

## Nota sobre el contenido

Los textos de "Sobre mí" y la sección "Trayectoria" (experiencia, educación, cursos, reconocimientos e idiomas) se completaron con tu información real de LinkedIn. Las áreas de práctica se infirieron de tu experiencia — revisalas en `js/data.js` y ajustalas si querés priorizar otras especialidades. No se incluye una sección de testimonios: agregala en `data.js` e `index.html` sólo cuando tengas reseñas reales de clientes, evitando publicar contenido de ejemplo que parezca genuino.
