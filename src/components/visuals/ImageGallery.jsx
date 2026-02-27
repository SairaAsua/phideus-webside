import { useState } from 'react';
import FigureCard from './FigureCard';
import classes from './ImageGallery.module.css';

export default function ImageGallery({ images }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const activeImage = images[activeIndex];

    return (
        <div className={classes.gallery}>
            <div className={`${classes.mainView} ${activeImage.scaled ? classes.scaledView : ''}`}>
                <FigureCard
                    src={activeImage.src}
                    alt={activeImage.alt}
                    caption={activeImage.caption}
                    unmasked={activeImage.unmasked}
                />
            </div>

            <div className={classes.thumbnailStrip}>
                {images.map((img, index) => (
                    <button
                        key={index}
                        className={`${classes.thumbBtn} ${index === activeIndex ? classes.active : ''}`}
                        onClick={() => setActiveIndex(index)}
                        aria-label={`View ${img.alt}`}
                        title={img.alt}
                    >
                        <img
                            src={img.src.startsWith('/') && !img.src.startsWith('http') ? `${import.meta.env.BASE_URL}${img.src.slice(1)}` : img.src}
                            alt={`Thumbnail for ${img.alt}`}
                            className={classes.thumbImg}
                        />
                    </button>
                ))}
            </div>

            <div className={classes.galleryNav}>
                <button
                    disabled={activeIndex === 0}
                    onClick={() => setActiveIndex(prev => prev - 1)}
                    className={classes.navBtn}
                >
                    &larr; Prev
                </button>
                <span className={classes.counter}>
                    {activeIndex + 1} / {images.length}
                </span>
                <button
                    disabled={activeIndex === images.length - 1}
                    onClick={() => setActiveIndex(prev => prev + 1)}
                    className={classes.navBtn}
                >
                    Next &rarr;
                </button>
            </div>
        </div>
    );
}
