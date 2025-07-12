import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import axios from 'axios';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { StoreData } from '../types';

const PhotoGalleryPage = () => {
    const { storeId, imageIndex } = useParams<{ storeId: string; imageIndex: string }>();
    const navigate = useNavigate();
    const [storeData, setStoreData] = useState<StoreData | null>(null);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(parseInt(imageIndex || '0'));
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]); // 썸네일 ref 배열

    useEffect(() => {
        const fetchStoreData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`/api/stores/${storeId}`);
                setStoreData(response.data);
            } catch (error) {
                console.error('업체 데이터 가져오기 실패:', error);
            } finally {
                setLoading(false);
            }
        };

        if (storeId) {
            fetchStoreData();
        }
    }, [storeId]);

    // URL 파라미터 변경 시 currentIndex 업데이트
    useEffect(() => {
        if (imageIndex) {
            setCurrentIndex(parseInt(imageIndex));
        }
    }, [imageIndex]);

    // currentIndex 변경 시 썸네일 스크롤
    useEffect(() => {
        if (thumbnailRefs.current[currentIndex]) {
            thumbnailRefs.current[currentIndex]?.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }
    }, [currentIndex]);

    // 스와이프 처리
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd || !storeData) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe && currentIndex < storeData.images.length - 1) {
            const newIndex = currentIndex + 1;
            setCurrentIndex(newIndex);
            navigate(`/store/${storeId}/gallery/${newIndex}`, { replace: true });
        }
        if (isRightSwipe && currentIndex > 0) {
            const newIndex = currentIndex - 1;
            setCurrentIndex(newIndex);
            navigate(`/store/${storeId}/gallery/${newIndex}`, { replace: true });
        }
    };

    // 키보드 이벤트 처리
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (!storeData) return;

            if (e.key === 'ArrowLeft' && currentIndex > 0) {
                const newIndex = currentIndex - 1;
                setCurrentIndex(newIndex);
                navigate(`/store/${storeId}/gallery/${newIndex}`, { replace: true });
            }
            if (e.key === 'ArrowRight' && currentIndex < storeData.images.length - 1) {
                const newIndex = currentIndex + 1;
                setCurrentIndex(newIndex);
                navigate(`/store/${storeId}/gallery/${newIndex}`, { replace: true });
            }
            if (e.key === 'Escape') {
                navigate(`/store/${storeId}`);
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [currentIndex, storeData, navigate, storeId]);

    const handleThumbnailClick = (index: number) => {
        setCurrentIndex(index);
        navigate(`/store/${storeId}/gallery/${index}`, { replace: true });
    };

    const handleClose = () => {
        navigate(`/store/${storeId}`);
    };

    const goToPrevious = () => {
        if (currentIndex > 0) {
            const newIndex = currentIndex - 1;
            setCurrentIndex(newIndex);
            navigate(`/store/${storeId}/gallery/${newIndex}`, { replace: true });
        }
    };

    const goToNext = () => {
        if (storeData && currentIndex < storeData.images.length - 1) {
            const newIndex = currentIndex + 1;
            setCurrentIndex(newIndex);
            navigate(`/store/${storeId}/gallery/${newIndex}`, { replace: true });
        }
    };

    if (loading) {
        return <LoadingSpinner />;
    }

    if (!storeData) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <p className="text-gray-600">업체 정보를 찾을 수 없습니다.</p>
            </div>
        );
    }

    const images = storeData.images;

    return (
        <div className="bg-white min-h-screen flex flex-col">
            {/* 헤더 */}
            <div className="flex items-center justify-between p-4 bg-white text-black relative z-10">
                <button
                    onClick={handleClose}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <ChevronLeft size={24} />
                </button>

                <div className="text-center">
                    <p className="text-sm text-gray-600">{currentIndex + 1} / {images.length}</p>
                </div>

                {/* 빈 공간으로 중앙 정렬 유지 */}
                <div className="w-10 h-10"></div>
            </div>

            {/* 메인 이미지 영역 */}
            <div
                className="flex-1 flex items-center justify-center bg-white px-4"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div className="relative max-w-full max-h-full">
                    <img
                        src={images[currentIndex]}
                        alt={`${storeData.displayName} 사진 ${currentIndex + 1}`}
                        className="max-w-full max-h-[70vh] object-contain"
                        style={{ userSelect: 'none' }}
                    />

                    {/* 좌우 네비게이션 버튼 (데스크톱) */}
                    {currentIndex > 0 && (
                        <button
                            onClick={goToPrevious}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all hidden md:block"
                        >
                            <ChevronLeft size={24} />
                        </button>
                    )}

                    {currentIndex < images.length - 1 && (
                        <button
                            onClick={goToNext}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all hidden md:block"
                        >
                            <ChevronLeft size={24} className="rotate-180" />
                        </button>
                    )}
                </div>
            </div>

            {/* 하단 썸네일 영역 */}
            <div className="bg-white p-4">
                {/* 진행 바 */}
                <div className="w-full bg-gray-300 h-1 rounded-full mb-4">
                    <div
                        className="h-1 rounded-full transition-all duration-300"
                        style={{
                            width: `${((currentIndex + 1) / images.length) * 100}%`,
                            backgroundColor: '#A7A7A7'
                        }}
                    />
                </div>

                {/* 썸네일 목록 */}
                <div
                    className="flex space-x-1 overflow-x-auto pb-2 px-1 pt-1"
                    style={{
                        msOverflowStyle: 'none',
                        scrollbarWidth: 'none'
                    }}
                >
                    {images.map((image, index) => (
                        <button
                            key={index}
                            ref={(el) => { thumbnailRefs.current[index] = el; }} // ref 할당 (반환값 없음)
                            onClick={() => handleThumbnailClick(index)}
                            className={`flex-shrink-0 overflow-hidden border-3 transition-all ${
                                index === currentIndex
                                    ? 'scale-105'
                                    : 'border-gray-300 opacity-70 hover:opacity-100 hover:border-gray-400'
                            }`}
                            style={{
                                borderRadius: '4px',
                                borderWidth: '3px',
                                borderColor: index === currentIndex ? '#3183FF' : '#d1d5db',
                                margin: '2px' // 확대될 공간 확보
                            }}
                        >
                            <img
                                src={image}
                                alt={`썸네일 ${index + 1}`}
                                className="w-20 h-20 object-cover"
                            />
                        </button>
                    ))}
                </div>
            </div>

            <style>
                {`
                    .overflow-x-auto::-webkit-scrollbar {
                        display: none;
                    }
                `}
            </style>
        </div>
    );
};

export default PhotoGalleryPage;