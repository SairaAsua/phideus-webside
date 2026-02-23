import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar', () => {
    it('renders logo and navigation links', () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>,
        );

        expect(screen.getByRole('link', { name: /phi deus/i })).toHaveAttribute('href', '/');
        expect(screen.getByRole('link', { name: /home \/ thesis/i })).toHaveAttribute('href', '/');
        expect(screen.getByRole('link', { name: /roadmap/i })).toHaveAttribute('href', '/roadmap');
        expect(screen.getByRole('link', { name: /evidence/i })).toHaveAttribute('href', '/evidence');
        expect(screen.getByRole('link', { name: /architecture/i })).toHaveAttribute('href', '/architecture');
    });
});
