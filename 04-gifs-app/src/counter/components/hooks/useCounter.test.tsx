import { act, renderHook } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import { useCounter } from './useCounter'
describe('useCounter', () => {
    test('should intialize with the default value of 10', () => {
        const { result } = renderHook(() => useCounter())
        expect(result.current.counter).toBe(20)
    })

    test('should initialize with 10', () => {
        const initialValue = 10
        const { result } = renderHook(() => useCounter(initialValue))

        expect(result.current.counter).toBe(initialValue)
    })

    test('should increment counter when handleAdd is called', () => {
        const { result } = renderHook(() => useCounter())

        act(() => {
            result.current.handleAdd()
        })

        expect(result.current.counter).toBe(21)
    })

    test('should dicrease counter when handleSubstract is called', () => {
        const { result } = renderHook(() => useCounter())

        act(() => {
            result.current.handleSubstract()
        })

        expect(result.current.counter).toBe(19)
    })

    test('should reset counter when handleReset is called', () => {
        const { result } = renderHook(() => useCounter())

        act(() => {
            result.current.handleSubstract()
        })

        expect(result.current.counter).toBe(19)

        act(() => {
            result.current.handleReset()
        })

        expect(result.current.counter).toBe(20)
    })
})