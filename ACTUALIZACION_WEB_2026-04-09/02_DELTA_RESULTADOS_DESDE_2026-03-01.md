# Delta de Resultados desde 2026-03-01

Este documento reune solo lo que aparecio despues del delta anterior y que impacta el contenido publico del sitio.

---

## 1. Escalon 1 cambia de estatuto publico

### 1.1 Cierre canonico training-seed real

**Estado:** cerrado.

| Arm | Media | Desvio | Lectura publica |
|---|---:|---:|---|
| `d4a4` | `84.0%` | `+/- 2.7pp` | mejor referencia cerrada del frente |
| `d4-a4r` | `81.2%` | `+/- 2.5pp` | mejora robusta vs `D0` |
| `a4r` | `80.7%` | `+/- 1.9pp` | mejora robusta vs `D0` |
| `D0` | `75.2%` | `+/- 2.3pp` | baseline training-seed |

**Lectura util para web:**

- el numero publico vigente de Escalon 1 pasa a ser `84.0% +/- 2.7pp`;
- ya no conviene usar `84.1% +/- 2.3pp` como media multi-seed vigente del frente;
- el mensaje correcto es que el brazo flagship ya tiene cierre training-seed homogeneo real;
- la diferencia media de `d4a4` sobre `D0` puede expresarse como `+8.8pp`.

### 1.2 `Test02` ya cerro `4/4`

**Estado:** cerrado y ya consolidado en la capa canonica.

| Condicion | Valor |
|---|---:|
| `real` | `83.0%` |
| `zero` | `75.0%` |
| `random` | `73.6%` |
| `shuffled` | `73.6%*` |

**Lectura util para web:**

- el control de capacidad ya no debe aparecer como pendiente;
- la mejora de los mejores brazos no se explica solo por parametros extra del modelo;
- si el sitio quiere una cifra concreta, ya puede usar la tabla `4/4`.

### 1.3 `Test11` ya tiene ranking completo

**Estado:** cerrado `4/4`.

| Arm | Information retention |
|---|---:|
| `d4a4` | `0.770` |
| `d4-a4r` | `0.748` |
| `a4r` | `0.712` |
| `D0` | `0.597` |

**Lectura util para web:**

- el proyecto ya no solo muestra mejores metricas finales;
- tambien muestra mejor preservacion de estructura al cruzar modalidad;
- el cuello de botella dominante sigue estando en la proyeccion compartida, especialmente del lado MIDI.

### 1.4 `13G-B` ya cerro negativamente

**Estado:** cerrado.

| Arm | Resultado |
|---|---:|
| `D0(pool-188)` | `0.1089` |
| `d4a4` | `0.1037` |
| `a4r` | `0.1024` |
| `d4-a4r` | `0.1021` |

**Lectura util para web:**

- `13G-B` ya no debe presentarse como nueva linea abierta de descubrimiento;
- ahora funciona como resultado negativo util: no aparecio ventaja descriptor-guided en decodificabilidad generativa pre-pooling;
- el sitio puede usarlo para mostrar que Phideus tambien cierra hipotesis en negativo cuando corresponde.

---

## 2. El momento del programa ya no es solo Gate 5B

### 2.1 Escalon 2 ya es frente principal real

**Estado:** activo, con null mecanistico inicial cerrado.

**Lectura publica correcta:**

- `concat`, `attn_bias`, `xattn` y `pca` dieron `12/12` condiciones `≈ D0` o peores;
- `S2-P3` ya fue corrido en primera pasada con `WavLM-Large` frozen;
- la tarea viva ahora es `P2 vs P3`, no "terminar P3".

### 2.2 Escalon 3 ya esta abierto de verdad

**Estado:** activo.

**Lectura publica correcta:**

- banco sintetico ya materializado;
- baseline dual consolidado;
- primera linea geometrica ya corrida;
- `P5-cqtshift` aparece hoy como mejor brazo OOD del frente.

### 2.3 Gate 10 ya cerro como contraste causal retrospectivo

**Estado:** cerrado `9/9`.

**Lectura publica correcta:**

- la rama retrospectiva musical ya no es solo plan;
- el contraste final queda `concat > pca >> attn_bias`;
- en esa rama el mecanismo pesa mas que el descriptor.

### 2.4 El libro HIT ya es pieza publica del programa

**Estado:** publico y consolidado.

**Lectura publica correcta:**

- repo abierto;
- edicion web publica en `hit.altermundi.net`;
- manuscrito estabilizado en `191` paginas.

No hace falta convertir esto en centro del home, pero si conviene dejarlo visible como salida teorica mayor del programa.

---

## 3. Traduccion publica simple

### Lo nuevo que el sitio ya puede decir

1. Escalon 1 ya tiene cierre training-seed real en su brazo flagship.
2. `Test02` y `13G-B` ya estan cerrados.
3. Escalon 2 ya es frente principal activo con null inicial cerrado.
4. Escalon 3 ya no es promesa: ya tiene evidencia inicial propia.
5. El libro HIT ya es una pieza publica consolidada del programa.

### Lo que todavia no conviene decir

1. que Escalon 1 clausura por si solo la tesis fuerte de HIT;
2. que `13G-B` mostro una ventaja descriptor-guided;
3. que Escalon 2 o Escalon 3 ya confirmaron positivamente la tesis fuerte;
4. que el libro HIT equivale a cierre experimental definitivo del programa.
