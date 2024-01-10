import { CustomerType, Customer } from "../src/enum"

describe('Enum', () => { 
    it('should support in typescript', ()=> {
        const customer: Customer = {
            id: 1,
            name: "Rizqi",
            type: CustomerType.Platinum
        }

        console.log(customer)
    })
 })