import React from 'react';
import { render, screen } from '@testing-library/react';
import TicketCard from './index'
import { MemoryRouter } from 'react-router-dom'


describe('TicketCard', () => {
    test('renders TicketCard', () => {
        render(<TicketCard subject="This is a subject" status="open" index={1} />, { wrapper: MemoryRouter })
        expect(screen.getByText(/This is a subject/i)).toBeInTheDocument()
    })
});