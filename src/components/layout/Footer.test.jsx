import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { LanguageProvider } from '../../context/LanguageContext';

describe('Footer', () => {
    it('shows freshness stamp and program label', () => {
        localStorage.setItem('phideus_language', 'en');

        render(
            <LanguageProvider>
                <Footer />
            </LanguageProvider>,
        );

        expect(screen.getByText(/data freshness:/i)).toBeInTheDocument();
        expect(screen.getByText(/2026-02-25/i)).toBeInTheDocument();
        expect(screen.getByText(/harmonic information theory research program/i)).toBeInTheDocument();
    });
});
