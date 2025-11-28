import { describe, test, expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { MyCounterApp } from './MyCounterApp'

describe('MyCounterApp', () => {
    test('should render the component', () => {
        render(<MyCounterApp />)

        screen.debug()

        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
            `Counter: 5`
        );

        expect(screen.getByRole('button', { name: '+1' })).toBeDefined()
        expect(screen.getByRole('button', { name: '-1' })).toBeDefined()
        expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined()
    })

    test('should increment the counter', () => {
        render(<MyCounterApp />)

        const labelH1 = screen.getByRole('heading', { level: 1 });
        const button = screen.getByRole('button', { name: '+1' })

        fireEvent.click(button)

        expect(labelH1.innerHTML).toContain(`Counter: 6`)
    })

    test('should dicrease the counter', () => {
        render(<MyCounterApp />)

        const labelH1 = screen.getByRole('heading', {
            level: 1
        })

        const button = screen.getByRole('button', { name: '-1' })

        fireEvent.click(button)

        expect(labelH1.innerHTML).toContain('Counter: 4')
    })

    test('should reset to default value', () => {
        render(<MyCounterApp />)

        const labelH1 = screen.getByRole('heading', { level: 1 })

        const dicrementButton = screen.getByRole('button', { name: '-1' })

        const resetButton = screen.getByRole('button', { name: 'Reset' })

        fireEvent.click(dicrementButton)
        expect(labelH1.innerHTML).toContain('Counter: 4')

        fireEvent.click(resetButton)
        expect(labelH1.innerHTML).toContain('Counter: 5')

    })
})