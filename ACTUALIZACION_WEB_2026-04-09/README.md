# Actualizacion Web 2026-04-09

Este subdirectorio no reemplaza `Para_Sai/` ni `ACTUALIZACION_WEB_2026-03-01/`.

Su funcion es dejar un **segundo paquete incremental**, autocontenido y listo para trabajo web, para actualizar `phideus.net` desde el corte `2026-03-01` hasta el estado canonico actual `2026-04-09`, sin rehacer el sitio ni tocar el pack legacy.

## Alcance

- auditar que parte del pack base y del delta `2026-03-01` sigue vigente;
- concentrar solo la informacion nueva que aparecio despues de ese corte;
- traducir el nuevo momento del programa a cambios concretos de copy para el sitio;
- mantener intacto el inventario visual existente.

## Que NO hace este paquete

- no reescribe `Para_Sai/`;
- no reemplaza `ACTUALIZACION_WEB_2026-03-01/`;
- no agrega assets ni toca visuales;
- no cambia el codigo del sitio;
- no convierte Escalon 2, Escalon 3 ni el libro HIT en "prueba final" de la tesis fuerte.

## Read Order

1. `00_START_HERE_ACTUALIZACION_WEB.md`
2. `01_AUDITORIA_VIGENCIA_DELTAS_ANTERIORES.md`
3. `02_DELTA_RESULTADOS_DESDE_2026-03-01.md`
4. `03_MAPA_DE_CAMBIOS_EN_HOME.md`
5. `04_COPY_LISTA_PARA_PEGAR.md`
6. `05_CLAIMS_NUMERICOS_PUBLICABLES.md`
7. `AGENT_BRIEFING_PROMPT.md`

## Idea central

Desde `2026-03-01`, el cambio importante ya no es solo agregar resultados nuevos de Gate 5B. El sitio necesita reflejar un **momento distinto del programa**:

- Escalon 1 ya no debe contarse con el framing viejo de `84.1% +/- 2.3pp` como referencia `eval-seed`; su cierre canonico real pasa a ser `d4a4=84.0% +/- 2.7pp` sobre `5` training seeds independientes.
- `Test02` ya no es "control pendiente": ya se lee como cierre `4/4` del control de capacidad.
- `Test13G-B` ya no es linea exploratoria abierta: ya cerro negativamente como probing generativo pre-pooling.
- Escalon 2 ya no es fase proyectada ni "factorial corriendo": su null mecanistico inicial ya esta cerrado y `P3` ya tuvo primera pasada completa.
- Escalon 3 ya no es promesa abstracta: ya funciona como banco sintetico activo con baseline dual y primera linea geometrica corrida.
- El libro HIT ya no es solo un repo auxiliar: ahora es una pieza publica consolidada del programa, con repo abierto y edicion web.

## Fuentes canonicas usadas para este delta pack

- `README.md`
- `Documents/00_TRONCAL/Proyecto_Estado_Actual.md`
- `Documents/00_TRONCAL/INDICE_DOCUMENTACION.md`
- `Documents/00_TRONCAL/bitacora_desarrollo.md`
- `Documents/01_FRENTES_ACTIVOS/BIAS_CONTROL/ROADMAP_BIAS_CONTROL.md`
- `Documents/01_FRENTES_ACTIVOS/ESCALON_2/README.md`
- `Documents/01_FRENTES_ACTIVOS/ESCALON_3/README.md`

## Resultado esperado

Con este subdirectorio, una IA o un humano puede actualizar el sitio actual de `phideus.net` sin tocar el pack original, sin tocar assets y sin mezclar el momento publico actual del programa con los cortes viejos de `Para_Sai`.
