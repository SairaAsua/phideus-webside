import { render, screen } from '@testing-library/react';
import App from './App';

describe('App routes', () => {
    const cases = [
        { path: '/', text: /project thesis/i },
        { path: '/thesis', text: /project thesis/i },
        { path: '/roadmap', text: /triplescaloneta roadmap/i },
        { path: '/evidence', text: /gate 5b evidence/i },
        { path: '/evidence/test-12', text: /performance scoreboard/i },
        { path: '/architecture', text: /architecture explorer/i },
    ];

    it.each(cases)('renders $path correctly', ({ path, text }) => {
        window.history.pushState({}, '', path);
        render(<App />);
        expect(screen.getByText(text)).toBeInTheDocument();
    });
});
