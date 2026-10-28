# Vanty

Sitio informativo de **Vanty School** para la evaluación final de Desarrollo Web. Desarrollado con HTML5, CSS3, JavaScript y Bootstrap 5.3.8, adaptable a distintos tamaños de pantalla y sin inicio de sesión.

**Sitio publicado:** https://vanty-school-evaluacion-web.elatedcurry19.chatgpt.site

## Abrir el proyecto

Abre `index.html` en un navegador o utiliza Live Server desde Visual Studio Code. También puedes ejecutar `python -m http.server 8080` en esta carpeta y visitar `http://localhost:8080`.

Los recursos están incluidos localmente. No se requiere instalar dependencias, configurar variables de entorno ni compilar el sitio.

## Estructura

```text
index.html
assets/
  css/
    styles.css
    original.css
    fonts.css
  js/main.js
  images/
  videos/
  fonts/
  vendor/
VERIFICACION.md
ENLACE-PUBLICADO.txt
```

- `index.html`: contenido y estructura semántica.
- `styles.css`: estilos base, adaptación y cinco animaciones CSS comentadas.
- `original.css`: composición visual de la portada original y ajuste del logotipo con birrete.
- `main.js`: preferencias de lectura, navegación, ampliación de capturas y reproducción del video principal.
- `assets/vendor/`: Bootstrap oficial con su licencia.
- `assets/videos/`: los cuatro videos originales y subtítulos en español del recorrido principal.

## Correspondencia con la rúbrica

| Requisito | Implementación |
| --- | --- |
| Estructura HTML | Etiquetas semánticas, idioma español, metadatos, un H1 y jerarquía de títulos. |
| Navegación y usabilidad | Menú adaptable, pestañas por rol, capturas ampliables, preguntas desplegables y controles de video. |
| Accesibilidad | Texto alternativo, enlace de salto, foco visible, ajustes de tamaño de texto y movimiento reducido, subtítulos y transcripción. |
| CSS personalizado | Variables, tipografías locales, media queries, transiciones y cinco animaciones. |
| Bootstrap | Rejilla, utilidades adaptables, Navbar, Collapse, Tabs, Accordion, Modal y Offcanvas. |
| Entrega | Código fuente y enlace al sitio publicado. |

Las cinco animaciones son `hero-enter`, `content-reveal`, `panel-change`, `aria-float` y `arrow-nudge`. Se respetan las preferencias de movimiento reducido del dispositivo y del visitante.

Consulta `VERIFICACION.md` para ver las comprobaciones realizadas y una guía para la exposición. La implementación no constituye una certificación WCAG ni garantiza una calificación.

## Alcance

Esta versión conserva la marca, los degradados, las secciones de ARIA y los videos del proyecto original. Las vistas por rol son capturas con datos ficticios; no son paneles interactivos. La web no incluye cuentas, APIs, bases de datos ni consultas de inteligencia artificial.

Las preferencias de accesibilidad se guardan únicamente en el navegador mediante `localStorage`.

## Publicación estática

El repositorio contiene `index.html` en la raíz para facilitar su publicación en un alojamiento estático. Para GitHub Pages, selecciona la rama `main` y la carpeta `/ (root)` en la configuración del repositorio. La activación de Pages se realiza por separado.

## Recursos y licencias

- Marca, imágenes y videos: proyecto Vanty School suministrado por el usuario. Logotipo de cabecera con birrete proporcionado por el usuario.
- Bootstrap 5.3.8: licencia MIT incluida en `assets/vendor/`.
- Poppins y Plus Jakarta Sans: licencias SIL Open Font License incluidas en `assets/fonts/`.
