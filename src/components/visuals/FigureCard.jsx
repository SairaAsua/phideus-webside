import { useState } from 'react';
import classes from './FigureCard.module.css';

export default function FigureCard({ src, alt, caption, isAnim = false }) {
    const [loaded, setLoaded] = useState(false);
    const [open, setOpen] = useState(false);

    const resolvedSrc = src.startsWith('/') && !src.startsWith('http')
        ? `${import.meta.env.BASE_URL}${src.slice(1)}`
        : src;

    function handleOpen() {
        if (loaded) setOpen(true);
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter' || e.key === ' ') handleOpen();
    }

    return (
        <>
            <div
                className={`${classes.card} ${isAnim ? classes.animCard : ''} ${!loaded ? 'skeleton' : ''}`}
                onClick={handleOpen}
                onKeyDown={handleKeyDown}
                role="button"
                tabIndex={0}
                aria-label={`Expand: ${alt}`}
            >
                <div className={classes.imgWrap}>
                    <img
                        src={resolvedSrc}
                        alt={alt}
                        className={classes.img}
                        loading="lazy"
                        onLoad={() => setLoaded(true)}
                    />
                </div>
                {loaded && caption && (
                    <p className={classes.caption}>{caption}</p>
                )}
                {loaded && (
                    <span className={classes.hint}>{'-> expand'}</span>
                )}
            </div>

            {open && (
                <div className={classes.overlay} onClick={() => setOpen(false)}>
                    <div className={classes.lightbox} onClick={e => e.stopPropagation()}>
                        <button
                            className={classes.closeBtn}
                            onClick={() => setOpen(false)}
                            aria-label="Close"
                        >
                            x
                        </button>
                        <img src={resolvedSrc} alt={alt} className={classes.fullImg} />
                        {caption && (
                            <p className={classes.lightboxCaption}>{caption}</p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
