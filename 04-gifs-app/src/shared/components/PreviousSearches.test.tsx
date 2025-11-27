import { describe, expect, test } from "vitest";
import { PreviousSearches } from "./PreviousSearches";
import { fireEvent, render, screen } from "@testing-library/react";


describe('PreviousSearches', () => {
    test('should increase count when clicking the button', () => {
        render(<PreviousSearches />)

        const [buttonAdd] = screen.getAllByRole('button');

        fireEvent.click(buttonAdd)

        expect(screen.getByTestId('contador')).toBeDefined()
    })
})