export enum CustomerType {
    Regular = "regular",
    Gold =  "gold",
    Platinum = "platinum"
}

export type Customer = {
    id: number,
    name: string,
    type: CustomerType
}