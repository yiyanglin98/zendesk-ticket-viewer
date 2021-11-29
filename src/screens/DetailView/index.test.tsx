import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import DetailView from './index'

describe('DetailView', () => {
    test('renders DetailView loading', () => {
        render(<DetailView />, { wrapper: MemoryRouter })
        expect(screen.getByText(/loop/i)).toBeInTheDocument()
    })
});