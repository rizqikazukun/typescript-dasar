describe('Array', ()=>{
    it('should same with javascript', ()=>{
        const name: string[] = ['rizqi','pratama']
        const values: number[] = [2,3]
    })

    it('it should be readonly array', ()=>{
        const hobbies: ReadonlyArray<string> = ["membaca", "menulis"]
    })

    it('should support tuple', ()=>{
        const person : readonly[string, string, number] = ['2', 'pratama', 2]
    })


})