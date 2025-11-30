import { beforeEach, describe, expect, test, vi } from "vitest";
import AxiosMockAdapter from 'axios-mock-adapter'

import { getGifsByQuery } from "./get-gifs-by-query.action";
import { giphyApi } from "../api/giphy.api";
import { giphyResponseMock } from '../../../test/mocks/giphy.response.data'

describe('get-gifs-by-query.action', () => {
    let mock = new AxiosMockAdapter(giphyApi)

    beforeEach(() => {
        mock = new AxiosMockAdapter(giphyApi)
    })

    test('should return a list of gifs', async () => {
        mock.onGet('/search').reply(200, giphyResponseMock)

        const gifs = await getGifsByQuery('goku')

        expect(gifs.length).toBe(10);
        gifs.forEach((gif) => {
            expect(typeof gif.id).toBe('string');
            expect(typeof gif.title).toBe('string');
            expect(typeof gif.url).toBe('string')
            expect(typeof gif.width).toBe('number')
            expect(typeof gif.height).toBe('number')

        })
    })

    test('should return aen emptu list of gifs', async () => {
        mock.restore()

        const gifs = await getGifsByQuery('')

        expect(gifs.length).toBe(0);
    })

    test('should handle error when API returns an error', async () => {

        const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => { })

        mock.onGet('/search').reply(400, {
            data: {
                message: 'Bad request'
            }
        });

        const gifs = await getGifsByQuery('goku')
        console.log(gifs)

        expect(gifs.length).toBe(0)
        expect(consoleErrorSpy).toHaveBeenCalled()
        expect(consoleErrorSpy).toHaveBeenCalledWith(expect.anything())
    })
})