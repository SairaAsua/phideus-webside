# Phideus Dataset Catalog — HIT Dataset-of-Datasets

## Overview
El proyecto HIT (Harmonic Information Theory) requiere datos que permitan la extracción de ratios frecuenciales estables. Hemos curado una selección de datasets multimodales que cubren espectros desde la mecánica pura (CWRU) hasta la respuesta biológica compleja (DEAP), permitiendo validar nuestra hipótesis de portabilidad de ratios entre dominios heterogéneos.

## TOP 5 Datasets Recomendados
| Dataset | Dominio | Estrellas | Justificación HIT |
| :--- | :--- | :--- | :--- |
| **CWRU Bearing** | Mecánica | ⭐⭐⭐⭐⭐ | Referencia absoluta de armónicos. |
| **DEAP** | Biosignal | ⭐⭐⭐⭐⭐ | Riqueza en isomorfismos bio-rítmicos. |
| **UCI HAR** | Cinemática | ⭐⭐⭐⭐ | Invariancia de escala en movimiento. |
| **nuScenes** | Entorno | ⭐⭐⭐ | Complejidad geométrica-temporal. |
| **AudioSet** | Sonido | ⭐⭐⭐ | Escalabilidad en entornos ruidosos. |

## Catálogo Completo
| Nombre | Dominio | Modalidades | Estrellas | URL |
| :--- | :--- | :--- | :--- | :--- |
| CWRU Bearing | Mecánica | Acel. (x2) | ⭐⭐⭐⭐⭐ | [Link](https://engineering.case.edu/bearingdatacenter) |
| DEAP | Bio | EEG, ECG, Video | ⭐⭐⭐⭐⭐ | [Link](https://www.eecs.qmul.ac.uk/mmv/datasets/deap/) |
| UCI HAR | IMU | Accel, Gyro | ⭐⭐⭐⭐ | [Link](https://archive.ics.uci.edu/ml/datasets/human+activity+recognition+using+smartphones) |
| nuScenes | LiDAR | LiDAR, Cam, IMU | ⭐⭐⭐ | [Link](https://www.nuscenes.org/) |
| AudioSet | Audio | Audio, Video | ⭐⭐⭐ | [Link](https://research.google.com/audioset/) |

## Gaps Identificados
- **Falta de Ground Truth Armónico:** Necesitamos datasets donde se controle la fase entre sensores de distintas modalidades.
- **Data-Pairs de fatiga:** Faltan registros que conecten estrés (bio) con degradación de señal (mecánica/imu).

## Combinaciones Recomendadas
- **CWRU + UCI HAR:** Para probar la portabilidad de los ratios de "desgaste/fatiga".
- **DEAP + AudioSet:** Para mapear la resonancia emocional auditiva vs. respuesta neuro-cardíaca.

## Plan de Experimentos Prioritarios
1. **Calibración:** Extracción de vectores $\Phi$ en CWRU Bearing.
2. **Transferencia:** Aplicar el modelo de CWRU a UCI HAR para detectar patrones de marcha.
3. **Validación Biológica:** Comparar ratios de ECG de DEAP con envolventes de AudioSet.
```

---

### ENTREGABLE 2: meta_dataset.json

```json
{
  "version": "1.0",
  "fecha": "2024-05-23",
  "proyecto": "Phideus HIT Dataset-of-Datasets",
  "total_datasets": 5,
  "datasets": [
    {"nombre": "CWRU Bearing", "dominio": "Mecánica", "viabilidad_hit": "Muy Alta"},
    {"nombre": "DEAP", "dominio": "Biosignal", "viabilidad_hit": "Alta"},
    {"nombre": "UCI HAR", "dominio": "IMU", "viabilidad_hit": "Alta"},
    {"nombre": "nuScenes", "dominio": "LiDAR", "viabilidad_hit": "Media"},
    {"nombre": "AudioSet", "dominio": "Audio", "viabilidad_hit": "Media"}
  ],
  "top5": ["CWRU Bearing", "DEAP", "UCI HAR", "nuScenes", "AudioSet"],
  "gaps": ["Falta de control de fase inter-modal", "Necesidad de datasets de fatiga controlada"],
  "combinaciones_recomendadas": ["CWRU+UCI HAR", "DEAP+AudioSet"]
}
```

---

### ENTREGABLE 3: README para /data-assets/

```markdown
# /data-assets/ Phideus
Este directorio contiene los metadatos y scripts de preprocesamiento para los datasets seleccionados para el entrenamiento de la arquitectura Phideus.

## Uso
1. Descargar los datasets de sus URLs oficiales listadas en `phideus_data_catalog.md`.
2. Utilizar `extract_ratios.py` (en `/scripts/`) para convertir señales crudas a vectores $\Phi$ normalizados.
3. Los vectores resultantes son compatibles con el módulo de `Harmonic Gates` de la arquitectura.

## Estructura de Datos
- `/raw`: Espacio para los archivos .mat, .csv, .wav.
- `/processed`: Vectores $\Phi$ (ratios espectrales) listos para inferencia.
```

---

### ENTREGABLE 4: Resumen ejecutivo

Hemos consolidado una base de 5 datasets multimodales de alto impacto, seleccionados por su capacidad para ofrecer señales temporales ricas en armónicos, esenciales para el desarrollo de la *Harmonic Information Theory* (HIT). Los hallazgos destacan a **CWRU Bearing** y **DEAP** como los pilares más prometedores para la validación de isomorfismos armónicos entre sistemas mecánicos y biológicos. Hemos diseñado un pipeline experimental que utiliza el "Ratio Espectral" como unidad fundamental de información, permitiendo la portabilidad de modelos entre sensores heterogéneos. Las combinaciones propuestas, como la de *CWRU* y *UCI HAR*, nos permitirán testear si las leyes de desgaste y fatiga son transferibles en el dominio armónico. Como paso siguiente, procederemos a la ejecución del pipeline sobre los datos de calibración mecánica para alimentar los *Harmonic Gates* de la arquitectura Phideus.