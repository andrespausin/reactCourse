import { describe, test, expect, vi } from "vitest";
import { act, render, renderHook } from '@testing-library/react'
import { useGifs } from "./useGifs";
import * as gifAction from "../actions/get-gifs-by-query.action";

describe('useGifs', () => {

    test('should return default values and methods', () => {
        const { result } = renderHook(() => useGifs())

        console.log(result)

        expect(result.current.gifs).toBeDefined()
        expect(result.current.previousTerms).toBeDefined()
        expect(result.current.handleTermClicked).toBeDefined()
        expect(result.current.handleSearch).toBeDefined()
    })

    test('should return a list of gifs', async () => {
        const { result } = renderHook(() => useGifs())

        await act(async () => {
            await result.current.handleSearch('goku')
        })

        expect(result.current.gifs.length).toBe(10)
    })

    test('should return a list of gifs when handleTermClicked is called', async () => {
        const { result } = renderHook(() => useGifs())

        await act(async () => {
            await result.current.handleTermClicked('goku')
        })

        expect(result.current.gifs.length).toBe(10)
    })

    test('should return a list of gifs by cache', async () => {
        const { result } = renderHook(() => useGifs())

        await act(async () => {
            await result.current.handleTermClicked('goku')
        })

        expect(result.current.gifs.length).toBe(10)

        vi.spyOn(gifAction, 'getGifsByQuery').mockRejectedValue(new Error('This is my custom error'))

        await act(async () => {
            await result.current.handleTermClicked('goku')
        })

        expect(result.current.gifs.length).toBe(10)
    })

    test('should return no more than 8 previous terms', async () => {
        const { result } = renderHook(() => useGifs())

        vi.spyOn(gifAction, 'getGifsByQuery').mockResolvedValue([])

        await act(async () => {
            await result.current.handleSearch('term1')
            await result.current.handleSearch('term2')
            await result.current.handleSearch('term3')
            await result.current.handleSearch('term4')
            await result.current.handleSearch('term5')
            await result.current.handleSearch('term6')
            await result.current.handleSearch('term7')
            await result.current.handleSearch('term8')
            await result.current.handleSearch('term9')
        })

        console.log(result.current.previousTerms)
        expect(result.current.previousTerms.length).toBe(8)

        expect(result.current.previousTerms).toStrictEqual(['term9', 'term8',
            'term7', 'term6',
            'term5', 'term4',
            'term3', 'term2'])
    })
})