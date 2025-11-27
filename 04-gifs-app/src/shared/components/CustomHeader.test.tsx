import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { CustomHeader } from './CustomHeader';

describe('CustomHeader', () => {
    test('Should render with default values', () => {
        const title = 'Test item'
        render(<CustomHeader title={title} description={title} />)

        screen.debug()

        expect(screen.findByTestId(title))
    })
})