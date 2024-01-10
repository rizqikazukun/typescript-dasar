export interface HasName {
    name: string
}

export interface hasId {
    id: number
}

export type IntersecPerson = HasName & hasId