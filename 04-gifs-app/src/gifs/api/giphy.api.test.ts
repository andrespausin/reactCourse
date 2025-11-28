import { describe, expect, test } from "vitest";
import { giphyApi } from "./giphy.api";

describe('giphyApi', () => {
    test('should be configured correctly', () => {
        const params = giphyApi.defaults.params;
        const baseURL = 'https://api.giphy.com/v1/gifs'

        expect(giphyApi.defaults.baseURL).toBe(baseURL)
        expect(params.lang).toBe('es');
        expect(params.api_key).toBe(import.meta.env.VITE_GIPHY_API_KEY)


    })
})