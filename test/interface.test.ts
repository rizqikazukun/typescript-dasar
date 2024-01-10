import { Seller } from "../src/seller"
import { IntersecPerson } from "../src/Intersection-types"

describe('Interface', () => {
    it('should be support in typescript', () => {
        const seller: Seller = {
            id: 1,
            name: 'toko abc',
            nib: '12312312',
            npwp: "213123123"
        }

        seller.address = "zzzzz"
    })

    it('should support function interface', ()=>{
        interface AddFunction {
            (number1: number, number2: number): number
        }

        const add: AddFunction = (number1: number, number2: number): number => {
            return number1 + number2
        }

        expect(add(2,2)).toBe(4)
    })

    it('should support function interface', ()=> {
        interface Person {
            name: string
            sayHello(name: string): string
        }

        const person: Person = {
            name: "rizqi",
            sayHello: function (name): string {
                return `hello ${name}`
            },
        }

        expect(person.sayHello('rizqi')).toBe('hello rizqi')
    })

    it('should support intersection types', ()=> {
        const person: IntersecPerson = {
            id: 1,
            name: "rizqi"
        }

        console.log(person)
    })

    it('should support type assersion', ()=>{
        const person: any = {
            id: 1,
            name: "rizqi"
        }

        const person2: IntersecPerson = person as IntersecPerson

        console.log(person2.id)

    })

    
})