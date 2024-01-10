describe('Function', () => { 
    it('should support in typescript', ()=>{
        const sayHello = (name: string): string => {
            return `Hello ${name}`
        }

        expect(sayHello('Rizqi')).toBe('Hello Rizqi')

        const sayHello2 = (name: string): void => {
            console.log(`Hello ${name}`) 
        }

        sayHello2('Rizqi')


    })

    it('should support default value', ()=>{
        const sayHello = (name: string = "Guest"): string =>{
            return `Hello ${name}`
        }

        expect(sayHello()).toBe("Hello Guest")
        expect(sayHello('Rizqi')).toBe("Hello Rizqi")

    }) 

    it('should support rest parameter', ()=>{
        const sum = (...value: number[]): number => {
            let total: number = 0
            for (const num of value) {
                total += num
            }

            return total
        }

        expect(sum(1,2,3,4,5)).toBe(15)
    }) 

    it('should support function overloading', ()=> {

        interface callMe {
            (value: string): string
            (value: number): number
        }

        const callMe: callMe = (value: any): any => {
            if (typeof value === "string") {
                return value.toUpperCase()
            } else if (typeof value === 'number') {
                return value * 100
            }
        }

        expect(callMe('Rizqi')).toBe('RIZQI')
        expect(callMe(100)).toBe(10000)
    })

    it('should function as parameter', ()=> {

        const sayHello = (name: string, filter: (name: string) => string): string => {
            return `Hello ${filter(name)}`
        }
        
        const toUppercase = (name: string): string => {
            return name.toUpperCase()
        } 

        expect(sayHello('Rizqi', toUppercase)).toBe('Hello RIZQI')
        expect(sayHello('Pratama', (name: string): string => {
            return name.toUpperCase()
        })).toBe('Hello PRATAMA')

    })
})