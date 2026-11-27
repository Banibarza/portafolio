# Sonidos

Pon aquí tus sonidos. Se aceptan **.ogg**, **.mp3** o **.wav** (se prueba en ese orden).

Si un archivo **no existe**, el portafolio usa el sonido sintetizado que ya trae, así que
puedes agregarlos poco a poco.

| Nombre (sin extensión) | Cuándo suena                                         |
|------------------------|------------------------------------------------------|
| `click`                | Al presionar cualquier botón                         |
| `logro`                | Al conseguir un logro                                |
| `pagina`               | Al cambiar de pestaña en Habilidades / Experiencias  |
| `mundo`                | Al abrir un proyecto ("Jugar mundo seleccionado")    |
| `musica`               | Música de fondo del menú, en bucle y a volumen bajo  |

Ejemplo: `click.ogg`, `logro.mp3`, `musica.ogg`.

Notas:
- La música empieza con el primer clic (los navegadores no permiten reproducir audio antes).
- El botón de sonido del menú y "Opciones > Sonido" silencian todo, música incluida.
- Los volúmenes se ajustan en `js/main.js`, en el bloque `SOUNDS`.
