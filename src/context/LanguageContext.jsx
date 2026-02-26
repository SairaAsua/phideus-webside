import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'phideus_language';
const SUPPORTED_LANGUAGES = ['es', 'en'];

function resolveInitialLanguage() {
    const storedLanguage = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED_LANGUAGES.includes(storedLanguage)) {
        return storedLanguage;
    }

    const browserLanguage = navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
    return browserLanguage;
}

const LanguageContext = createContext({
    language: 'en',
    setLanguage: () => {},
    toggleLanguage: () => {}
});

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(resolveInitialLanguage);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, language);
        document.documentElement.lang = language;
    }, [language]);

    const contextValue = useMemo(
        () => ({
            language,
            setLanguage,
            toggleLanguage: () => {
                setLanguage((currentLanguage) => (currentLanguage === 'es' ? 'en' : 'es'));
            }
        }),
        [language]
    );

    return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    return useContext(LanguageContext);
}
