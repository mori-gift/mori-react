import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Section } from '../types';
import MainFooter from '../components/main/MainFooter';
import ImageSlider from '../components/main/ImageSlider';
import ProductSection from '../components/main/ProductSection';
import MainHeader from '../components/main/MainHeader';

const MainPage = () => {
    const [sliderImages, setSliderImages] = useState<string[]>([]);
    const [sections, setSections] = useState<Section[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);

    // API 데이터 가져오기
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                // 슬라이더 이미지 가져오기
                const sliderResponse = await axios.get('/api/sliders');
                setSliderImages(sliderResponse.data);

                // 에피소드 데이터 가져오기
                const episodesResponse = await axios.get('/api/episodes');
                setSections(episodesResponse.data);

            } catch (error) {
                console.error('API 데이터 가져오기 실패:', error);
                // 에러 시 기본 데이터 설정
                setSliderImages([
                    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop',
                    'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&h=400&fit=crop',
                    'https://images.unsplash.com/photo-1578662015879-d7c8b997c9f9?w=800&h=400&fit=crop'
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // 슬라이드 변경 핸들러
    const handleSlideChange = (index: number) => {
        setCurrentSlide(index);
    };

    // 로딩 상태
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

    return (
        <div className="min-h-screen bg-white">
            {/* 메인 전용 헤더 */}
            <MainHeader sliderImages={sliderImages} currentSlide={currentSlide} />

            {/* 이미지 슬라이더 */}
            <ImageSlider images={sliderImages} onSlideChange={handleSlideChange} />

            {/* 에피소드 섹션들 */}
            {sections.map((section, index) => (
                <ProductSection key={section.id} section={section} index={index} />
            ))}

            {/* 푸터 */}
            <MainFooter />
        </div>
    );
}

export default MainPage;