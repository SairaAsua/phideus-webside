import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import FigureCard from '../../components/visuals/FigureCard';
import ScientificFindings from '../../components/visuals/ScientificFindings';
import classes from './Home.module.css';

export default function Home() {
    useEffect(() => {
        document.title = 'Phideus | Inteligencia Nativa de Proporciones';
    }, []);

    return (
        <Layout>

            {/* ── 1. HERO ── */}
            <section className={classes.hero}>
                <div className={`container ${classes.heroContent}`}>
                    <div className={classes.titleWrapper}>
                        <img
                            src="/assets/evidence/gate5b/animations/anim4_rotation_3d.gif"
                            alt=""
                            className={classes.titleAnim}
                            aria-hidden="true"
                        />
                        <h1 className={classes.title}>PHIDEUS</h1>
                    </div>
                    <p className={classes.subtitle}>
                        Inteligencia nativa de proporciones.
                    </p>
                    <p className={classes.subtitleSecondary}>
                        PHIDEUS se inscribe en Harmonic Information Theory: la explora, la desarrolla y la convierte en arquitectura experimental. En Escalón 1, esa hipótesis ya cerró un resultado canónico sobre cinco training seeds independientes. Hoy el programa avanza desde ese cierre hacia un frente vocal activo y un banco sintético donde la geometría de ratios puede ponerse a prueba con más control.
                    </p>
                    <a href="https://github.com/altermundi/Phideus" target="_blank" rel="noopener noreferrer" className={classes.ctaPrimary}>Ver repositorio</a>
                    <Link to="/" className={classes.ctaGhost}>Índice principal</Link>
                    <a href="mailto:info@altermundi.net" className={classes.ctaGhost}>Saber más</a>
                </div>
            </section>

            {/* ── 2. EL PROBLEMA ── */}
            <section className={classes.challengeSection}>
                <div className="container">
                    <div className={classes.challengeGrid}>
                        <div className={classes.challengeText}>
                            <span className={classes.challengeLabel}>por qué existe esto</span>
                            <h2>El Problema</h2>
                            <p>
                                La mayoría de las IA aprenden de las superficies: tokens, etiquetas, valores de píxeles. Son excelentes cuando hay datos etiquetados abundantes de un solo dominio. Pero tienen dificultades cuando se les pide transferir conocimiento entre tipos de sensores, o cuando los datos etiquetados son escasos.
                            </p>
                            <p>
                                PHIDEUS prueba un camino distinto: <strong>aprender por relaciones</strong>.
                                Si la estructura que importa en sistemas oscilatorios está codificada en ratios (proporciones entre componentes), no en valores absolutos, entonces construir una IA que lea ratios de forma nativa podría producir una transferencia más fuerte y mejor eficiencia.
                            </p>
                            <p className={classes.challengeNote}>
                                Benchmark actual: formas de onda de audio ↔ secuencias de notas MIDI en MAESTRO.
                                Mismo contenido musical, espacios matemáticos completamente distintos.
                            </p>
                        </div>
                        <div>
                            <FigureCard
                                isAnim
                                src="/assets/evidence/gate5b/animations/anim1_morphing_evolution.gif"
                                alt="Animación de evolución de morphing entre dominios"
                                caption="Estructura de ratios emergiendo a través de dominios de audio y MIDI."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 3. LA TESIS ── */}
            <section id="the-thesis" className={classes.hitSection}>
                <div className="container">
                    <div className={classes.hitContainer}>
                        <span className={classes.hypothesisBadge}>Hipótesis de investigación</span>
                        <h2>La Tesis: Ratios como Lenguaje Común</h2>
                        <p>
                            Un ratio de frecuencias es invariante a la escala. La relación 3:2 es la misma ya sea que ocurra entre 300 Hz y 200 Hz, o entre 1.500 Hz y 1.000 Hz: la proporción es idéntica, sólo difieren los valores absolutos. Los sistemas oscilatorios a través de la música, el habla y las bioseñales comparten esta propiedad: su estructura significativa está codificada en relaciones entre componentes, no en valores absolutos.
                        </p>
                        <p>
                            <strong>Harmonic Information Theory (HIT)</strong> propone que parte de la estructura en sistemas oscilatorios puede expresarse como distribuciones de ratios, y que esta estructura basada en proporciones puede ser transferible a través de los dominios que la comparten.
                        </p>
                        <p className={classes.hitNote}>
                            Esta es una hipótesis de investigación bajo estudio activo, no un resultado establecido. El deep learning cross-modal es el campo experimental donde la ponemos a prueba.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── 4. LA DOBLE EXPLORACIÓN ── */}
            <section className={classes.explorationSection}>
                <div className="container">
                    <h2>Dos Exploraciones Simultáneas</h2>
                    <p className={classes.explorationIntro}>
                        PHIDEUS funciona como un bucle de retroalimentación entre dos líneas de trabajo. Cada una nutre a la otra.
                    </p>
                    <div className={classes.explorationGrid}>
                        <div className={`glass-panel ${classes.explorationCard}`}>
                            <span className={classes.explorationTag}>Bucle A — Ciencia</span>
                            <h3>Harmonic Information Theory como hipótesis operativa</h3>
                            <p>
                                Usamos el comportamiento de los modelos de IA como una sonda científica. Si la inyección de descriptores de ratios mejora consistentemente la alineación entre dominios en condiciones controladas, es evidencia empírica de que la estructura de ratios transporta información transferible.
                            </p>
                            <p className={classes.explorationNote}>
                                La invarianza a la escala como principio general y la generalización más allá del benchmark actual siguen siendo preguntas de investigación abiertas.
                            </p>
                        </div>
                        <div className={`glass-panel ${classes.explorationCard}`}>
                            <span className={classes.explorationTag}>Bucle B — Ingeniería</span>
                            <h3>Construcción de atención guiada por proporciones</h3>
                            <p>
                                Construimos modelos donde los descriptores de ratios no decoran la arquitectura como una característica adicional. En lugar de eso, guían la lógica de atención, definiendo cómo el modelo organiza las relaciones. Luego medimos la eficiencia, calidad de recuperación y alineación.
                            </p>
                            <p className={classes.explorationNote}>
                                Los resultados se miden sobre el benchmark actual y brazos experimentales cerrados.
                            </p>
                        </div>
                    </div>
                    <blockquote className={classes.bridgeSentence}>
                        No estamos agregando los ratios como "una métrica más". Estamos probando los ratios como principio organizador de atención y representación.
                    </blockquote>
                    <p className={classes.explorationNote} style={{ textAlign: 'center', marginTop: '1.5rem', maxWidth: '680px', marginLeft: 'auto', marginRight: 'auto' }}>
                        Ese doble loop ya produjo tres salidas visibles: un cierre canónico en Escalón 1, un frente vocal donde el primer null mecanístico ya está cerrado y una extensión sintética donde la geometría puede ponerse a prueba con mucho más control.
                    </p>
                </div>
            </section>

            {/* ── 5. EL MECANISMO CLAVE ── */}
            <section className={classes.mechanismSection}>
                <div className="container">
                    <div className={classes.mechanismGrid}>
                        <div className={classes.mechanismContent}>
                            <span className={classes.challengeLabel}>mecanismo clave</span>
                            <h2>Cross-Attention Inverso</h2>
                            <p className={classes.mechanismText}>
                                En el cross-attention estándar de los Transformers, cada característica extraída busca relacionarse con todas las demás: O(n²) operaciones cruzando dominios. En Reverse Cross-Attention, los tokens descriptores de ratios actúan como el <em>query</em>: ellos definen qué relaciones inter-dominio se exploran, reduciendo drásticamente el espacio de búsqueda.
                            </p>
                            <p className={classes.mechanismText}>
                                Detalles de implementación, perfiles de longitud de secuencia y resultados en las pruebas están disponibles en la documentación técnica.
                            </p>
                        </div>
                        <div className={classes.mechanismMediaFull}>
                            <FigureCard
                                src="/assets/grafico1.png"
                                alt="Diagrama de Cross-Attention Inverso"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 6. RESULTADOS MEDIDOS ── */}
            <section id="measured-results" className={classes.claimsSection}>
                <div className="container">
                    <span className={classes.measuredBadge}>Observaciones medidas</span>
                    <h2>Lo que Hemos Medido</h2>
                    <p className={classes.claimsIntro}>
                        Cuatro puntos clave del benchmark actual (MAESTRO Audio↔MIDI, Gate 5B).
                        Cada métrica incluye la fecha de corte y la ruta de evidencia.
                        El alcance se limita a la configuración actual y los brazos experimentales cerrados.
                    </p>

                    <div className={classes.claimsGrid}>

                        {/* Tarjeta 1 — 163x */}
                        <div className={`glass-panel ${classes.claimCard}`}>
                            <div className={classes.claimValue}>163×</div>
                            <div className={classes.claimMeaning}>
                                menos operaciones de atención en el núcleo Transformer.
                            </div>
                            <div className={classes.claimFootnote}>
                                <span className={classes.claimScope}>
                                    Medido/derivado del largo de las secuencias de tokens. No es una ley universal.
                                </span>
                                <span>Artefacto: audio 2400 frames vs descriptores</span>
                                <span>Corte: 2026-02-25</span>
                            </div>
                            <a href="https://github.com/altermundi/Phideus" target="_blank" rel="noopener noreferrer" className={classes.claimLink}>
                                Ver metodología →
                            </a>
                        </div>

                        {/* Tarjeta 2 — Compute savings */}
                        <div className={`glass-panel ${classes.claimCard}`}>
                            <div className={classes.claimValue}>2.6×</div>
                            <div className={classes.claimMeaning}>
                                más velocidad de entrenamiento e inferencia en el setup actual.
                            </div>
                            <div className={classes.claimFootnote}>
                                <span className={classes.claimScope}>
                                    Observado en la configuración actual. Perfil verificado disponible en los documentos.
                                </span>
                                <span>Corte: 2026-02-25</span>
                            </div>
                            <a href="https://github.com/altermundi/Phideus" target="_blank" rel="noopener noreferrer" className={classes.claimLink}>
                                Ver documentos →
                            </a>
                        </div>

                        {/* Tarjeta 3 — +8.8pp */}
                        <div className={`glass-panel ${classes.claimCard}`}>
                            <div className={classes.claimValue}>+8.8 pp</div>
                            <div className={classes.claimMeaning}>
                                de mejora media training-seed de d4a4 sobre D0 en recuperación bidireccional.
                            </div>
                            <div className={classes.claimFootnote}>
                                <span className={classes.claimScope}>
                                    Medido en el benchmark actual y ramas de experimentales cerradas.
                                </span>
                                <span>5 training seeds · Corte: 2026-04-09</span>
                                <span>Benchmark: MAESTRO Audio↔MIDI.</span>
                            </div>
                            <a href="https://github.com/altermundi/Phideus" target="_blank" rel="noopener noreferrer" className={classes.claimLink}>
                                Ver evidencia →
                            </a>
                        </div>

                        {/* Tarjeta 4 — 4/4 */}
                        <div className={`glass-panel ${classes.claimCard}`}>
                            <div className={classes.claimValue}>4/4</div>
                            <div className={classes.claimMeaning}>
                                control de capacidad ya cerrado en Test02, sin explicar la mejora solo por parámetros extra.
                            </div>
                            <div className={classes.claimFootnote}>
                                <span className={classes.claimScope}>
                                    Resultados medidos en rama consolidad de la capa canónica.
                                </span>
                                <span>Corte: 2026-04-09</span>
                                <span>Artefacto Test02 Capacity Verification</span>
                            </div>
                            <a href="https://github.com/altermundi/Phideus" target="_blank" rel="noopener noreferrer" className={classes.claimLink}>
                                Ver evidencia →
                            </a>
                        </div>

                    </div>

                </div>
            </section>

            {/* ── 7. DÓNDE ESTÁ HOY PHIDEUS ── */}
            <section className={classes.currentMomentSection}>
                <div className="container">
                    <span className={classes.measuredBadge}>Momento actual del programa</span>
                    <h2>Dónde está hoy PHIDEUS</h2>
                    <p className={classes.currentMomentIntro}>
                        PHIDEUS ya no está solo en la etapa de demostrar que la idea funciona una vez.
                        Hoy combina un cierre canónico en Escalón 1, un frente vocal activo donde el null
                        mecanístico inicial ya quedó cerrado, y un banco sintético donde la geometría
                        de ratios puede testearse con mucho más control.
                    </p>
                    <div className={classes.currentMomentGrid}>
                        <div className={`glass-panel ${classes.momentCard}`}>
                            <div className={classes.momentValue}>84.0% ±2.7pp</div>
                            <div className={classes.momentLabel}>
                                cierre canónico de d4a4 sobre cinco training seeds independientes.
                            </div>
                        </div>
                        <div className={`glass-panel ${classes.momentCard}`}>
                            <div className={classes.momentValue}>4/4</div>
                            <div className={classes.momentLabel}>
                                Test02 ya cerró el control de capacidad del bloque principal.
                            </div>
                        </div>
                        <div className={`glass-panel ${classes.momentCard}`}>
                            <div className={classes.momentValue}>Escalón 2</div>
                            <div className={classes.momentLabel}>
                                frente principal activo; la tarea viva ahora es el diagnóstico P2 vs P3.
                            </div>
                        </div>
                        <div className={`glass-panel ${classes.momentCard}`}>
                            <div className={classes.momentValue}>Escalón 3</div>
                            <div className={classes.momentLabel}>
                                banco sintético ya activo, con baseline dual y primera línea geométrica corrida.
                            </div>
                        </div>
                    </div>
                    <p className={classes.momentStamp}>Datos actualizados al 2026-04-09</p>
                </div>
            </section>

            {/* ── 8. LEER PAPER ACTUALIZADO ── */}
            <section className={classes.paperSection}>
                <div className={`container ${classes.paperContainer}`}>
                    <h2>Leer el Paper Actualizado</h2>
                    <p className={classes.paperDescription}>
                        Acá contamos la visión con claridad narrativa. La evidencia expandida ya incluye el cierre training-seed de Escalón 1, el control de capacidad ya completado, el cierre negativo de la fase generativa 13G-B, el frente vocal P2 vs P3, el banco sintético de Escalón 3 y la formulación larga pública del programa en el libro HIT.
                    </p>
                    <div className={classes.paperLinks}>
                        <a
                            href="/assets/docs/papper.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.ctaPrimary}
                        >
                            Descargar paper (PDF)
                        </a>
                        <a
                            href="https://github.com/altermundi/Phideus"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.ctaGhost}
                        >
                            Ver repositorio
                        </a>
                    </div>
                    <p className={classes.paperHitRef}>
                        El desarrollo teórico más largo del programa ya está disponible públicamente
                        en el libro HIT: repositorio abierto y edición web en{' '}
                        <a href="https://hit.altermundi.net" target="_blank" rel="noopener noreferrer">
                            hit.altermundi.net
                        </a>.
                    </p>
                </div>
            </section>

            {/* ── 9. RESULTADOS CIENTÍFICOS ── */}
            <ScientificFindings />

        </Layout>
    );
}
