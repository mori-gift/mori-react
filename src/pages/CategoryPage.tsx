import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/common/Header';
import {CategoryData} from "../types";

// CSS를 별도로 정의
const scrollbarHideStyles = `
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
`;

const CategoryPage = () => {
    const { categoryId } = useParams<{ categoryId: string }>();
    const navigate = useNavigate();
    const [categoryData, setCategoryData] = useState<CategoryData | null>(null);
    const [loading, setLoading] = useState(true);
    const [loadedStores, setLoadedStores] = useState(3); // 초기 3개 가게 로드
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchCategoryData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`/api/categories/${categoryId}`);
                setCategoryData(response.data);
            } catch (error) {
                console.error('카테고리 데이터 가져오기 실패:', error);
            } finally {
                setLoading(false);
            }
        };

        if (categoryId) {
            fetchCategoryData();
        }
    }, [categoryId]);

    // 무한 스크롤 처리 (가게 단위)
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
                if (categoryData && loadedStores < categoryData.stores.length) {
                    setLoadedStores(prev => Math.min(prev + 2, categoryData.stores.length));
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [categoryData, loadedStores]);

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500 mx-auto"></div>
                    <p className="mt-4 text-gray-600">데이터를 불러오는 중...</p>
                </div>
            </div>
        );
    }

    if (!categoryData) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <p className="text-gray-600 mb-4">카테고리를 찾을 수 없습니다.</p>
                    <button
                        onClick={() => navigate('/')}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                        홈으로 돌아가기
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* CSS 스타일 추가 */}
            <style dangerouslySetInnerHTML={{ __html: scrollbarHideStyles }} />

            <Header />

            <main className="container mx-auto px-4 py-8 max-w-6xl">
                {/* 상단 섹션 */}
                <div className="mb-8">
                    <div className="text-center mb-6">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                            {categoryData.episodeNumber}. {categoryData.title}
                        </h1>
                        <p className="text-sm md:text-base text-gray-600 whitespace-pre-line">
                            {categoryData.description}
                        </p>
                    </div>
                </div>

                {/* 가게별 섹션들 - 무한 스크롤 */}
                <div className="space-y-6">
                    {categoryData.stores.slice(0, loadedStores).map((store, storeIndex) => (
                        <div key={storeIndex} className="bg-gray-50 rounded-2xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h2 className="text-lg md:text-xl font-bold text-gray-800">{store.name}</h2>
                                    <p className="text-sm text-gray-600">{store.address} · {store.category}</p>
                                </div>
                                <p>→</p>
                            </div>

                            {/* 가게별 이미지 슬라이더 */}
                            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-4">
                                {store.images.map((image, index) => (
                                    <div
                                        key={index}
                                        className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 relative"
                                    >
                                        <div className={`w-full h-full bg-white shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden ${
                                            index === 0
                                                ? 'rounded-tl-2xl rounded-bl-2xl' // 첫 번째만 왼쪽 둥글게
                                                : '' // 나머지는 완전 사각형
                                        }`}>
                                            <img
                                                src={image}
                                                alt={`${store.name} 케이크 ${index + 1}`}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* 로딩 인디케이터 */}
                {loadedStores < categoryData.stores.length && (
                    <div className="text-center mt-6">
                        <div className="inline-flex items-center px-3 py-2 text-sm text-gray-600">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-500 mr-2"></div>
                            더 많은 가게를 불러오는 중...
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default CategoryPage;