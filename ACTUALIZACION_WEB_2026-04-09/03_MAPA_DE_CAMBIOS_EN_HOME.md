# Mapa de Cambios en el Home

Este mapa toma como referencia la estructura visible en `Para_Sai/08_HOME_PUBLIC_TEST.html`.

## Estructura actual detectada

- `hero`
- `vision`
- `teoria`
- `impacto`
- `camino`
- `next`

## Criterio general

No conviene rehacer el home.

Conviene:

- mantener `vision` y `teoria` casi intactos;
- retocar `hero` para que refleje el momento actual del programa;
- actualizar una parte de `impacto` con la nueva cifra canonicamente correcta;
- agregar una seccion textual breve sobre el **momento actual de PHIDEUS**;
- ajustar `camino` y `next` para que ya no suenen congelados en un corte anterior.

---

## Cambio 1 - Hero

### Mantener

- `eyebrow`: `Harmonic Information Theory`
- `h1`: la idea de pensar en proporciones (ratios)

### Cambiar

- actualizar el subtitulo para que ya no quede solo como promesa conceptual;
- hacer visible que Escalon 1 ya cerro un bloque canonico fuerte y que el programa ahora avanza con Escalon 2 y Escalon 3 ya activos.

**Objetivo:** que el visitante entienda que PHIDEUS ya no esta solo demostrando una intuicion en musica, sino transitando una etapa nueva del programa.

---

## Cambio 2 - Impacto

### Mantener

- `163x` menos operaciones de atencion;
- `2.6x` mas velocidad;
- `+82%` de alineamiento representacional, si se quiere conservar una tarjeta de geometria interna.

### Cambiar

- reemplazar `+10.4 pp` por `+8.8 pp`, que es la diferencia media training-seed real entre `d4a4` y `D0`.

**Motivo:** el viejo `+10.4pp` sigue siendo util como scoreboard historico single-seed, pero el sitio ya deberia priorizar la cifra canonicamente vigente.

### Opcion alternativa

Si se prefiere un home menos tecnico, la cuarta tarjeta puede pasar de `+82%` a:

- `4/4`
- `control de capacidad ya cerrado en Test02`

---

## Cambio 3 - Nueva seccion breve despues de Impacto

### Recomendacion fuerte

Agregar una seccion nueva, corta, entre `impacto` y `camino`.

### Titulo sugerido

- `Donde esta hoy PHIDEUS`
- o `El momento actual del programa`

### Contenido sugerido

Cuatro tarjetas breves:

1. `84.0% +/- 2.7pp`
   cierre canonico de `d4a4` sobre `5` training seeds.
2. `4/4`
   `Test02` ya cerro el control de capacidad.
3. `Escalon 2`
   foco principal activo; sigue el diagnostico `P2 vs P3`.
4. `Escalon 3`
   banco sintetico ya activo con primera linea geometrica corrida.

**Motivo:** esta seccion hace visible el momento actual de PHIDEUS sin convertir el home en tablero tecnico.

---

## Cambio 4 - Camino PHIDEUS

### Mantener

- la dualidad ciencia + ingenieria;
- la idea de dos loops que se corrigen entre si.

### Ajustar

Agregar una frase final que diga que ese doble loop ya produjo:

- un cierre canonico en Escalon 1;
- un frente vocal activo con null inicial cerrado;
- y una extension sintetica ya abierta en Escalon 3.

**Motivo:** el home actual explica bien la forma del programa, pero todavia no deja ver en que momento esta parado.

---

## Cambio 5 - Next

### Problema actual

El bloque final todavia dice, en sustancia, que el detalle tecnico vive en otras secciones, pero no muestra que el programa ya tiene una formulacion teorica publica consolidada ni que los frentes activos cambiaron de escala.

### Ajuste recomendado

Actualizar el parrafo para decir que:

- el home resume una etapa ya fuerte y mas madura del programa;
- la evidencia expandida incluye hoy el cierre training-seed de Escalon 1, el control de capacidad, la lectura negativa de `13G-B`, el frente vocal `P2 vs P3`, el banco sintetico de Escalon 3 y la formulacion larga publica del libro HIT.

### CTA opcional

Si el sitio ya tiene un bloque de recursos o salida externa, agregar una referencia visible al libro HIT:

- repo publico;
- `hit.altermundi.net`.

---

## Recomendacion de prioridad

### Patch minimo

1. actualizar subtitulo del `hero`;
2. cambiar `+10.4 pp` por `+8.8 pp` en `impacto`;
3. actualizar `next`.

### Patch recomendado

1. actualizar `hero`;
2. actualizar `impacto`;
3. agregar nueva seccion `Donde esta hoy PHIDEUS`;
4. actualizar `camino`;
5. actualizar `next` con referencia al libro HIT.

Esa segunda opcion es la que mejor traduce el delta real sin obligar a rehacer el sitio ni tocar assets.
