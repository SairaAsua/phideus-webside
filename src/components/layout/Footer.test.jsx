import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
    it('shows freshness stamp and program label', () => {
        render(<Footer />);

        expect(screen.getByText(/data freshness:/i)).toBeInTheDocument();
        expect(screen.getByText(/as of 2026-02-22/i)).toBeInTheDocument();
        expect(screen.getByText(/harmonic information theory research program/i)).toBeInTheDocument();
    });
});

