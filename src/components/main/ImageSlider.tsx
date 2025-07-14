import React, { useState, useEffect } from 'react';

interface ImageSliderProps {
    images: string[];
    onSlideChange: (index: number) => void;
}

const ImageSlider = ({ images, onSlideChange }: ImageSliderProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    // 슬라이드 변경 시 부모 컴포넌트에 알림
    useEffect(() => {
        onSlideChange(currentSlide);
    }, [currentSlide, onSlideChange]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    // 터치 이벤트 핸들러
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            nextSlide();
        }
        if (isRightSwipe) {
            prevSlide();
        }
    };

    return (
        <div
            className="relative h-screen bg-gray-900 overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* 블러된 배경 이미지 */}
            <div
                className="absolute inset-0 bg-cover bg-center transform scale-110 filter blur-md"
                style={{
                    backgroundImage: `url(${images[currentSlide]})`,
                }}
            />

            {/* 어두운 오버레이 */}
            <div className="absolute inset-0 bg-black/30" />

            {/* 실제 이미지 */}
            <div className="relative h-full flex items-center justify-center px-4">
                <div className="w-80 h-80 rounded-[45px] overflow-hidden shadow-2xl mt-16">
                    <img
                        src={images[currentSlide]}
                        alt={`슬라이드 ${currentSlide + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;