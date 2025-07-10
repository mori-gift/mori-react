// types/index.ts
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

// 카테고리 페이지용 새 타입
export interface CategoryData {
    id: string;
    episodeNumber: string;
    title: string;
    description: string;
    stores: Array<{
        name: string;
        address: string;
        category: string;
        images: string[];
    }>;
}