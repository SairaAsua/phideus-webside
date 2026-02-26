import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';
import { LanguageProvider } from '../../context/LanguageContext';

describe('Navbar', () => {
    it('renders logo and navigation links', () => {
        localStorage.setItem('phideus_language', 'en');

        render(
            <LanguageProvider>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </LanguageProvider>,
        );

        expect(screen.getByRole('link', { name: /phi deus/i })).toHaveAttribute('href', '/');
        expect(screen.getByRole('link', { name: /home \/ thesis/i })).toHaveAttribute('href', '/');
        expect(screen.getByRole('link', { name: /roadmap/i })).toHaveAttribute('href', '/roadmap');
        expect(screen.getByRole('link', { name: /evidence/i })).toHaveAttribute('href', '/evidence');
        expect(screen.getByRole('link', { name: /architecture/i })).toHaveAttribute('href', '/architecture');
    });

    it('toggles labels between english and spanish', async () => {
        const user = userEvent.setup();
        localStorage.setItem('phideus_language', 'en');

        render(
            <LanguageProvider>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </LanguageProvider>,
        );

        expect(screen.getByRole('link', { name: /home \/ thesis/i })).toBeInTheDocument();
        await user.click(screen.getByRole('button', { name: /cambiar idioma/i }));
        expect(screen.getByRole('link', { name: /inicio \/ tesis/i })).toBeInTheDocument();
    });
});
