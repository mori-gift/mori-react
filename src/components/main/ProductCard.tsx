import React from 'react';
import { Product } from '../../types';

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 lg:h-48 object-cover"
            />
            <div className="p-3 lg:p-4">
                <h3 className="font-medium text-sm lg:text-base mb-1">{product.name}</h3>
                <p className="text-gray-600 text-xs lg:text-sm">서울 용산구 • 케이크/디저트</p>
            </div>
        </div>
    );
};

export default ProductCard;