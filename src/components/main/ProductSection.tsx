import React from 'react';
import {Section} from '../../types';
import {useNavigate} from 'react-router-dom';
import ProductCard from './ProductCard';

interface ProductSectionProps {
    section: Section;
}

const ProductSection = ({ section }: ProductSectionProps) => {

    const navigate = useNavigate();

    const handleMoreClick = () => {
        // section.id를 URL 친화적으로 변환
        const categoryId = section.id.toLowerCase().replace(/\s+/g, '-');
        navigate(`/category/${categoryId}`);
    };

    return (
        <section className="mb-16">
            {/* ep 원형 테두리 */}
            <div className="flex justify-center mb-6">
                <div className="px-6 py-2 rounded-full border-2 border-green-500 bg-green-50 text-green-600 font-semibold">
                    {section.id}
                </div>
            </div>

            {/* 제목 */}
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                {section.title}
            </h2>

            {/* 상품 그리드 */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
                {section.products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* 더보기 버튼 */}
            <div className="text-center">
                <button
                    onClick={handleMoreClick}
                    className="px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                >
                    더보기
                </button>
            </div>
        </section>
    );
};

export default ProductSection;