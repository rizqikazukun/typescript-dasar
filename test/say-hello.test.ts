import { sayhello } from "../src/say-hello"

describe('sayhello', () => {
    it('should return hello rizqi', () => {
        expect(sayhello('rizqi')).toBe('Hello rizqi')
    })
})