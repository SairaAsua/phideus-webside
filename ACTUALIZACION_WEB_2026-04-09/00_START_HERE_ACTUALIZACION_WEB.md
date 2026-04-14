# Start Here - Actualizacion Web PHIDEUS

**Corte base del sitio:** `2026-02-25`  
**Delta previo:** `2026-03-01`  
**Corte de esta actualizacion:** `2026-04-09`  
**Objetivo:** actualizar contenido del sitio ya construido con `Para_Sai`, sin tocar assets ni rearmar toda la pagina.

---

## Diagnostico rapido

El problema ya no es solo que falten algunos resultados de Gate 5B.

El problema ahora es que el sitio puede quedar contando un **momento viejo de Phideus**:

- Escalon 1 como paquete fuerte pero todavia con refuerzo metodologico pendiente;
- Escalon 2 y Escalon 3 como frentes futuros;
- el libro HIT como recurso lateral y no como pieza publica ya consolidada.

Ese ya no es el estado real del programa.

---

## Que cambio desde el corte anterior

### 1. Escalon 1 ya tiene cierre training-seed real

El numero canonico vigente ya no es `84.1% +/- 2.3pp` como referencia `eval-seed` sobre un checkpoint.

El mensaje correcto ahora es:

- `d4a4 = 84.0% +/- 2.7pp`
- `D0 = 75.2% +/- 2.3pp`
- `a4r = 80.7% +/- 1.9pp`
- `d4-a4r = 81.2% +/- 2.5pp`
- cierre sobre `5` training seeds independientes

Eso cambia el estatuto publico del frente: Escalon 1 ya puede contarse como cierre metodologicamente homogeno del brazo flagship.

### 2. `Test02` y `13G-B` ya no son lineas pendientes

El sitio ya puede decir, con precision:

- `Test02` ya cerro `4/4` como control de capacidad;
- `13G-B` ya cerro negativamente como probing generativo pre-pooling, sin ventaja descriptor-guided;
- `Test11` ya no es un hallazgo parcial: hoy tiene ranking completo `4/4`.

### 3. Escalon 2 ya es frente principal en curso real

Ya no corresponde describirlo como "planned" ni como simple apertura.

La lectura publica correcta es:

- null mecanistico inicial cerrado;
- `P3` ya corrido en primera pasada;
- tarea viva = diagnostico `P2 vs P3`.

### 4. Escalon 3 ya esta abierto de verdad

Ya no corresponde presentarlo como promesa fisiologica o futura.

La lectura publica correcta es:

- banco sintetico activo;
- baseline dual consolidado;
- primera linea geometrica ya corrida;
- `P5-cqtshift` como mejor brazo OOD actual.

### 5. El libro HIT ya es pieza publica del programa

El sitio ya puede mencionar:

- repositorio publico del libro;
- edicion web en `hit.altermundi.net`;
- cierre editorial de `191` paginas.

No hace falta convertir eso en centro del home, pero ya no deberia quedar invisible.

---

## Que conviene hacer con el sitio actual

### Conservar

- `hero`, `vision` y `teoria` casi intactos;
- tono humano y narrativo;
- inventario visual actual;
- idea de TripleScaloneta y doble loop ciencia + ingenieria.

### Actualizar

- el estado publico de Escalon 1;
- la lectura de `Test02`, `Test11` y `13G-B`;
- la posicion de Escalon 2 y Escalon 3 dentro del programa;
- la visibilidad publica del libro HIT.

### No hacer

- no rehacer el home;
- no sumar tablas tecnicas pesadas;
- no tocar assets;
- no usar el viejo `84.1%` como cierre multi-seed vigente;
- no presentar `13G-B` como hallazgo positivo.

---

## Traduccion publica simple del nuevo momento

Si hubiese que resumir el cambio en una sola frase para el sitio, seria esta:

> PHIDEUS ya no esta solo en el momento de validar una intuicion fuerte en musica: hoy tiene un cierre canonico real en Escalon 1, un frente vocal activo con null mecanistico inicial cerrado, un banco sintetico geometrico ya corrido y una formulacion larga publica en el libro HIT.

---

## Siguiente lectura

1. `01_AUDITORIA_VIGENCIA_DELTAS_ANTERIORES.md`
2. `02_DELTA_RESULTADOS_DESDE_2026-03-01.md`
3. `03_MAPA_DE_CAMBIOS_EN_HOME.md`
4. `04_COPY_LISTA_PARA_PEGAR.md`
