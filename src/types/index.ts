export interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
}

export interface Section {
    id: string;
    title: string;
    products: Product[];
}