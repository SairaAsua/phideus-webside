import { useState, useEffect } from 'react';
import classes from './LazyImage.module.css';

export default function LazyImage({ src, alt, className = '', ...props }) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setIsLoaded(true);
    }, [src]);

    return (
        <div className={`${classes.imageContainer} ${className} ${!isLoaded ? 'skeleton' : ''}`}>
            {isLoaded && <img src={src} alt={alt} className={classes.image} {...props} />}
        </div>
    );
}
