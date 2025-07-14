import React from 'react';
import { Section } from '../../types';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';

interface ProductSectionProps {
    section: Section;
    index: number;
}

const ProductSection = ({ section, index }: ProductSectionProps) => {
    const navigate = useNavigate();

    // 홀수 번째 에피소드 (ep.1, ep.3, ...) 인지 확인
    const isOdd = index % 2 === 0; // 0-based index이므로 첫 번째(ep.1)는 짝수 인덱스

    const handleMoreClick = () => {
        const categoryId = section.id.toLowerCase().replace(/\s+/g, '-');
        navigate(`/category/${categoryId}`);
    };

    return (
        <section className="min-h-screen flex flex-col justify-center py-16 px-4">
            <div className="max-w-md mx-auto">
                {/* ep 원형 테두리 */}
                <div className="flex justify-center mb-6">
                    <div className={`px-6 py-2 rounded-full border-2 border-black font-semibold ${
                        isOdd
                            ? 'bg-black text-white'
                            : 'bg-[#E4E4E4] text-black'
                    }`}>
                        {section.id}
                    </div>
                </div>

                {/* 제목 */}
                <h2 className="text-lg font-medium text-center mb-8 text-gray-800">
                    {section.title}
                </h2>

                {/* 상품 그리드 */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                    {section.products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* 더보기 버튼 */}
                <div className="text-center">
                    <button
                        onClick={handleMoreClick}
                        className="px-12 py-3 bg-white text-black border-2 border-black rounded-full hover:bg-gray-100 transition-colors font-medium"
                    >
                        더보기
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductSection;