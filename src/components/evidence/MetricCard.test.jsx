import { render, screen } from '@testing-library/react';
import MetricCard from './MetricCard';

describe('MetricCard', () => {
    it('renders closed status card', () => {
        render(<MetricCard title="Gate 4.3 Screening (d4a4)" value="69.8%" status="closed" sourceLabel="@5ep" />);

        expect(screen.getByText(/gate 4.3 screening \(d4a4\)/i)).toBeInTheDocument();
        expect(screen.getByText('69.8%')).toBeInTheDocument();
        expect(screen.getByText('CLOSED')).toBeInTheDocument();
        expect(screen.getByText('@5ep')).toBeInTheDocument();
    });

    it('renders pending status card', () => {
        render(<MetricCard title="Cosine-tail batch" value="Pending" status="pending" sourceLabel="D0, d4a4, a4r, d4-a4r" />);

        expect(screen.getByText(/cosine-tail batch/i)).toBeInTheDocument();
        expect(screen.getByText('Pending')).toBeInTheDocument();
        expect(screen.getByText(/pending validation/i)).toBeInTheDocument();
    });
});

