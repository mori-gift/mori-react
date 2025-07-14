import React from 'react';
import {useNavigate} from 'react-router-dom';
import {ProductSectionProps} from '../../types/mainType';
import ProductCard from "./ProductCard";

const ProductSection = ({ section, index }: ProductSectionProps) => {
    const navigate = useNavigate();

    // 홀수 번째 에피소드 (ep.1, ep.3, ...) 인지 확인
    const isOdd = index % 2 === 0; // 0-based index이므로 첫 번째(ep.1)는 짝수 인덱스

    const handleMoreClick = () => {
        const categoryId = section.id.toLowerCase().replace(/\s+/g, '-');
        navigate(`/category/${categoryId}`);
    };

    return (
        <section className="min-h-screen flex flex-col justify-center py-8">
            <div className="max-w-[393px] mx-auto w-full">
                {/* ep 원형 테두리 */}
                <div className="flex justify-center mb-1">
                    <div className={`px-2 py-0.5 rounded-full border font-medium text-sm ${
                        isOdd
                            ? 'bg-[#303030] text-white border-black'
                            : 'bg-[#E4E4E4] text-black border-black'
                    }`}>
                        {section.id}
                    </div>
                </div>

                {/* 제목 */}
                <h2 className="text-lg font-medium text-center mb-4 text-gray-800">
                    {section.title}
                </h2>

                {/* 상품 그리드 */}
                <div className="grid grid-cols-2 gap-2 mb-6 px-2">
                    {section.products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* 더보기 버튼 */}
                <div className="w-full px-3">
                    <button
                        onClick={handleMoreClick}
                        className="w-full h-[43px] bg-white text-black border-[0.5px] border-[#3C3C3C] rounded-full hover:bg-gray-200 transition-colors font-medium"
                    >
                        더보기
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductSection;