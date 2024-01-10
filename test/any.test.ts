describe('Any', () => {
    it('it support any', () => {
        const person: any = {
            id: 1,
            name: 'rizqi pratama',
            age: 30
        }

        person.age = 21
        person.address = "Indonesia"


    })
})