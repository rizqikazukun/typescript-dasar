describe('Union', () => {
    it('union can be change type data', () => {
        let sample: string | number | boolean = 'rizqi'
    })

    it('should support typeof', () => {
        const proccess = (value: string | number | boolean) => {

            if (typeof value === 'string') {
                return value.toUpperCase()
            } else if (typeof value === 'number') {
                return value + 2
            } else {
                return !value
            }
        }

        expect(proccess('rizqi')).toBe("RIZQI")
        expect(proccess(100)).toBe(102)
        expect(proccess(true)).toBe(false)
    })
})