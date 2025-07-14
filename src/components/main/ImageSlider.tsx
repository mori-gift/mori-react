import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSliderProps {
    images: string[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative h-screen bg-gray-900 overflow-hidden">
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

            {/* 슬라이더 컨트롤 */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
            >
                <ChevronLeft size={20} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
            >
                <ChevronRight size={20} />
            </button>

            {/* 하단 인디케이터 */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                            index === currentSlide ? 'bg-white' : 'bg-white/50'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;