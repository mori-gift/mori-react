import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface MainHeaderProps {
    sliderImages: string[];
    currentSlide: number;
}

const MainHeader = ({ sliderImages, currentSlide }: MainHeaderProps) => {
    const navigate = useNavigate();
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 스크롤 위치에 따라 헤더 색상 결정
    const isInSlider = scrollY < window.innerHeight * 0.8;

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
            <div className="flex justify-between items-center max-w-md mx-auto">
                <div
                    className={`text-2xl font-bold cursor-pointer transition-colors ${
                        isInSlider ? 'text-white' : 'text-black'
                    }`}
                    onClick={() => navigate('/')}
                >
                    {/* mori */}
                    mori
                </div>

                {/* 항상 인디케이터 표시 (슬라이더일 때는 흰색, 아닐 때는 검은색) */}
                <div className="flex space-x-2">
                    {sliderImages.map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-colors ${
                                isInSlider
                                    ? (index === currentSlide ? 'bg-white' : 'bg-white/50')
                                    : (index === currentSlide ? 'bg-black' : 'bg-black/50')
                            }`}
                        />
                    ))}
                </div>
            </div>
        </header>
    );
};

export default MainHeader;