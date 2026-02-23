import { useState, useEffect } from 'react';
import classes from './LazyImage.module.css';

export default function LazyImage({ src, alt, className = '', ...props }) {
    const [isLoaded, setIsLoaded] = useState(false);

    // Automatically resolve public assets path regardless of Vite base URL
    const resolvedSrc = src.startsWith('/') && !src.startsWith('http')
        ? `${import.meta.env.BASE_URL}${src.slice(1)}`
        : src;

    useEffect(() => {
        const img = new Image();
        img.src = resolvedSrc;
        img.onload = () => setIsLoaded(true);
    }, [resolvedSrc]);

    return (
        <div className={`${classes.imageContainer} ${className} ${!isLoaded ? 'skeleton' : ''}`}>
            {isLoaded && <img src={resolvedSrc} alt={alt} className={classes.image} {...props} />}

        </div>
    );
}
