# Verificación de la entrega

Fecha: 28 de octubre de 2026.

## Revisión realizada

- Respuesta HTTP 200 de la vista previa local.
- Revisión visual en navegador de escritorio y con ancho móvil de 390 píxeles.
- Sin desbordamiento horizontal de la página en la vista móvil comprobada; también se comprobó el ajuste de texto muy grande.
- Pestañas por rol: cambio de Estudiante a Docente y actualización de la captura y su descripción.
- Ampliación de captura en modal y control de cierre.
- Apertura del menú adaptable.
- Apertura de una pregunta y actualización de `aria-expanded` a `true`.
- Panel de accesibilidad: cambio a texto muy grande, desactivación de animaciones, actualización de atributos del documento y restablecimiento de valores.
- Sin errores de consola registrados durante las interacciones revisadas.
- Comprobación de recursos: ninguna imagen cargada con recurso roto.
- Validación estática de la versión actualizada: 46 identificadores únicos, anclas internas válidas, 39 referencias a recursos locales existentes, 12 etiquetas `img` con atributo `alt`, cuatro videos con controles y etiquetas accesibles, un H1 y cinco declaraciones `@keyframes`.
- JavaScript validado mediante `node --check`.
- Ausencia de enlaces a autenticación, login, registro y administración.
- Logotipo con birrete colocado en la parte superior izquierda y comprobado en navegador.
- Restauración del estilo original: degradados, secciones alternadas amplias y panel azul de ARIA.
- Reproducción del recorrido principal comprobada: estado `paused=false`, avance del tiempo y ausencia de error multimedia. También se comprobó la pausa mediante interacción sobre el video.
- Subtítulos WebVTT en español y transcripción desplegable del recorrido principal.

## Alcance de las comprobaciones

Se revisaron estructura, recursos e interacciones representativas. No constituye una certificación WCAG ni una prueba en todos los navegadores o dispositivos. La revisión de los requisitos se basa en la rúbrica facilitada por el usuario.

## Lista para tu exposición

1. Muestra la página en escritorio y reduce el ancho para enseñar la adaptación de Bootstrap.
2. Abre `index.html` para explicar las etiquetas semánticas y la jerarquía de títulos.
3. Enseña `row`, `col-*`, `navbar`, `accordion`, `modal` y `offcanvas`.
4. Localiza los cinco `@keyframes` comentados al final de `styles.css` y demuestra cada efecto.
5. Usa Tab para mostrar el enlace de salto y los focos visibles. Prueba las flechas en las pestañas y Escape en el modal.
6. Muestra el aumento de texto y la desactivación de animaciones.
7. Explica que las capturas son ejemplos del producto previo y que la entrega actual es un sitio informativo sin autenticación.
