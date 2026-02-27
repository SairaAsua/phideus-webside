import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
    it('shows program label', () => {
        render(
            <Footer />
        );

        expect(screen.getByText(/harmonic information theory research program/i)).toBeInTheDocument();
    });
});
