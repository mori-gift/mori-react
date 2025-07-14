import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MoreHorizontal } from 'lucide-react';

interface MainHeaderProps {
    sliderImages: string[];
}

const MainHeader = ({ sliderImages }: MainHeaderProps) => {
    const navigate = useNavigate();
    const [scrollY, setScrollY] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);

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

                {/* 슬라이더 영역일 때만 인디케이터 표시 */}
                {isInSlider && (
                    <div className="flex space-x-2">
                        {sliderImages.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full ${
                                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                                }`}
                            />
                        ))}
                    </div>
                )}

                <button className={`p-2 rounded-full transition-colors ${
                    isInSlider ? 'text-white hover:bg-white/20' : 'text-black hover:bg-gray-100'
                }`}>
                    <MoreHorizontal size={24} />
                </button>
            </div>
        </header>
    );
};

export default MainHeader;