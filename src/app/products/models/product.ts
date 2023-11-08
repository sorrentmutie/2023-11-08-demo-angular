export interface Product {
    id: number,
    name: string,
    price: number,
    releaseDate: Date,
    isAvailable: boolean,
    supplier?: Supplier,
    image: string,
}


export interface Supplier {
    id: number,
    name: string
}
