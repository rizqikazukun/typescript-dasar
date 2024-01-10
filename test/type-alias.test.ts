import { Category } from "../src/type-alias.ts";

describe('Type Alias', () => {
    it('should support in typescript', () => {
        const category: Category = {
            id: "1",
            name: "Handphone"
        }

        const category2: Category = {
            id: 1,
            name: "Handphone"
        }
    })
}) 