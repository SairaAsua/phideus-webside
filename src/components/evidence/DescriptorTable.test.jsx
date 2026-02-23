import { render, screen, within } from '@testing-library/react';
import DescriptorTable from './DescriptorTable';

describe('DescriptorTable', () => {
    it('renders full 24-arm table and baseline row values', () => {
        render(<DescriptorTable />);

        expect(screen.getByText(/full 5-epoch descriptor comparison \(24 arms\)/i)).toBeInTheDocument();
        expect(screen.getByText('CLOSED')).toBeInTheDocument();

        const table = screen.getByRole('table');
        const rows = within(table).getAllByRole('row');
        expect(rows).toHaveLength(25);

        expect(screen.getByText('d4a4')).toBeInTheDocument();
        expect(screen.getByText('D0')).toBeInTheDocument();
        expect(screen.getByText('+9.6pp')).toBeInTheDocument();
        expect(screen.getByText('0.0pp')).toBeInTheDocument();
    });
});

