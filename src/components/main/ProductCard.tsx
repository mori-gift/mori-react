import React from 'react';
import { Product } from '../../types';

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className="bg-white">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-44 object-cover"
            />
            <div className="pt-1">
                <h3 className="font-medium text-sm mb-0.5">{product.name}</h3>
                <p className="text-gray-600 text-xs">서울 용산구 • 케이크/디저트</p>
            </div>
        </div>
    );
};

export default ProductCard;