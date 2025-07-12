import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/common/Header';
import StoreCard from '../components/episode/StoreCard';
import LoadingSpinner from '../components/common/LoadingSpinner';
import {CategoryData} from "../types";

const CategoryPage = () => {
    const { categoryId } = useParams<{ categoryId: string }>();
    const navigate = useNavigate();
    const [categoryData, setCategoryData] = useState<CategoryData | null>(null);
    const [loading, setLoading] = useState(true);
    const [loadedStores, setLoadedStores] = useState(3);

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

    // 무한 스크롤 처리
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
        return <LoadingSpinner />;
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

                {/* 가게별 섹션들 */}
                <div className="space-y-6">
                    {categoryData.stores.slice(0, loadedStores).map((store, storeIndex) => (
                        <StoreCard key={store.id} store={store} storeIndex={storeIndex} />
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