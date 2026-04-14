# Auditoria de Vigencia de `Para_Sai` y del delta `2026-03-01`

**Objetivo:** determinar que parte del material web previo sigue vigente y que parte quedo desfasada respecto del corte `2026-04-09`.

## Resultado general

`Para_Sai` y `ACTUALIZACION_WEB_2026-03-01` siguen siendo utiles.

Lo que quedo viejo no es el marco general del sitio, sino el **momento publico del programa**:

- la lectura actual de Escalon 1;
- el estado de `Test02` y `13G-B`;
- la posicion de Escalon 2 y Escalon 3;
- la existencia publica del libro HIT.

---

## Matriz de vigencia

| Archivo o pack | Estado | Diagnostico | Accion recomendada |
|---|---|---|---|
| `Para_Sai/00_START_HERE_PHIDEUS_WEB_BRIEF.md` | Desactualizado parcial | Sigue sirviendo como brief base, pero congela Escalon 2/3 como futuros y deja Escalon 1 en framing pre-cierre homogeno. | No editar; complementar con este delta. |
| `Para_Sai/01_PROJECT_THESIS_AND_FRAMEWORK.md` | Vigente | La tesis HIT, la dualidad teoria/ingenieria y la estructura conceptual siguen alineadas. | Mantener. |
| `Para_Sai/02_TRIPLESCALONETA_ROADMAP_PUBLIC.md` | Desactualizado parcial | TripleScaloneta sigue bien, pero los estados publicos cambiaron: Escalon 2 y Escalon 3 ya no son "planned". | Mantener como base y complementar. |
| `Para_Sai/03_ESCALON1_AND_BIAS_CONTROL_EVIDENCE.md` | Desactualizado parcial | Resume bien el corte original, pero no incorpora el cierre training-seed real ni el cierre de `Test02` / `13G-B`. | Mantener como corte historico y complementar. |
| `Para_Sai/04_DESCRIPTOR_TABLE_5EP_COMPLETE.md` | Vigente | Tabla historica de 5 epocas; no necesita reescritura para el update actual. | Mantener. |
| `Para_Sai/05_ARCHITECTURE_LINKS_AND_SYSTEM_OVERVIEW.md` | Vigente | Links y framing arquitectural general siguen sirviendo. | Mantener. |
| `Para_Sai/06_VISUAL_ASSETS_INDEX.md` | Vigente | El usuario pidio no tocar assets. El inventario visual sigue siendo valido. | Mantener. |
| `Para_Sai/07_GATE5B_VISUAL_INSERTION_MAP.md` | Vigente con complemento | Sirve para visuales, pero no traduce el momento nuevo del programa. | Complementar solo con cambios de copy. |
| `Para_Sai/08_HOME_PUBLIC_TEST.html` | Desactualizado parcial | Sigue siendo buena referencia de estructura y tono, pero no refleja el nuevo corte cientifico ni el nuevo estado del programa. | No reemplazar; usar como base para parches textuales. |
| `ACTUALIZACION_WEB_2026-03-01/` | Desactualizado parcial | Sigue bien como primer delta, pero usa `84.1% +/- 2.3pp` como media multi-seed vigente, trata `13G-B` como linea activa y no reubica Escalon 2/3 ni el libro HIT. | Mantener como delta historico y complementar con este segundo delta. |

---

## Sintesis operativa

### Lo que sigue vigente sin esfuerzo

- tesis HIT;
- tono narrativo del home;
- estructura visual del sitio;
- politica de no tocar assets;
- la logica de delta pack incremental;
- la idea de un home humano y no tabular.

### Lo que ya no alcanza solo con los packs anteriores

- `84.1% +/- 2.3pp` como framing publico vigente de Escalon 1;
- `13G-B` como linea abierta;
- Escalon 2 como fase futura;
- Escalon 3 como frente apenas planificado;
- el libro HIT como recurso lateral invisible.

---

## Regla de uso entre packs

Si hay conflicto entre `Para_Sai`, `ACTUALIZACION_WEB_2026-03-01` y este subdirectorio:

1. gana este delta `2026-04-09`;
2. luego gana el delta `2026-03-01`;
3. luego gana el pack base `Para_Sai`.

Eso permite actualizar el sitio sin reescribir nada viejo y sin romper la continuidad del material ya armado.
