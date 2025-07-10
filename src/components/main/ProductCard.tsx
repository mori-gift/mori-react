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
                <h3 className="font-semibold text-sm lg:text-lg mb-2">{product.name}</h3>
                <p className="text-green-600 font-bold text-lg lg:text-xl">{product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;