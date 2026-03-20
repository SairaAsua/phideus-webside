# /data-assets — Phideus HIT Dataset Catalog

Datasets curados para experimentos de **Harmonic Information Theory (HIT)**.

## Archivos

| Archivo | Descripción |
|---------|-------------|
| `phideus_data_catalog.md` | Catálogo completo con estrellas, TOP 5, gaps y plan de experimentos |
| `meta_dataset.json` | Datos estructurados en JSON — todos los datasets con metadata HIT |

## TOP 5 Datasets (por relevancia HIT)

| ⭐ | Dataset | Dominio | Por qué es clave |
|----|---------|---------|------------------|
| ⭐⭐⭐⭐⭐ | **CWRU Bearing** | Mecánica | Referencia absoluta de armónicos — señales periódicas controladas |
| ⭐⭐⭐⭐⭐ | **DEAP** | Biosignal | EEG + ECG + video sincronizados — isomorfismos bio-rítmicos |
| ⭐⭐⭐⭐ | **UCI HAR** | IMU | Acelerómetro + giroscopio — invariancia de escala en movimiento |
| ⭐⭐⭐ | **nuScenes** | LiDAR | LiDAR + cámara + IMU — complejidad geométrica-temporal |
| ⭐⭐⭐ | **AudioSet** | Audio | Escalabilidad en entornos ruidosos |

## Generado con

Pipeline ADK (Google Agent Development Kit) — 5 agentes en secuencia:
`Searcher → Analyzer → Auditor → CrossModality → PhideusIntegrator`

Código fuente: [`amapola/phideus-datasets`](https://github.com/SairaAsua/phideus-webside)
