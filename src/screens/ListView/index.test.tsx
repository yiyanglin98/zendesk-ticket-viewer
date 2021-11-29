import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import ListPlaceHolder from './placeholder'
import ListView from './index'

describe('ListView', () => {
    test('renders ListView loading', () => {
        render(<ListPlaceHolder />, { wrapper: MemoryRouter })
        expect(screen.getByRole('list')).toBeInTheDocument()
    })
    test('renders ListView', async () => {
        render(<ListView />, { wrapper: MemoryRouter })
        expect(screen.getByRole('list')).toBeInTheDocument()
    })
});