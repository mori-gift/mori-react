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

export interface ProductCardProps {
    product: Product;
}

export interface ProductSectionProps {
    section: Section;
    index: number;
}

export interface MainHeaderProps {
    sliderImages: string[];
    currentSlide: number;
}

export interface ImageSliderProps {
    images: string[];
    onSlideChange: (index: number) => void;
}