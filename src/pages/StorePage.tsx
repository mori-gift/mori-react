import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import axios from 'axios';
import StoreHeader from '../components/store/StoreHeader';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { StoreData } from '../types';

const StorePage = () => {
    const { storeId } = useParams<{ storeId: string }>();
    const [storeData, setStoreData] = useState<StoreData | null>(null);
    const [loading, setLoading] = useState(true);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const thumbnailRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const handleScroll = () => {
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setScrollY(window.scrollY);
            }, 16);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

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

    const thumbnailHeight = 320;
    const parallaxOffset = Math.min(scrollY * 0.5, thumbnailHeight * 0.3);

    const formatLinksDisplay = () => {
        if (storeData.links.length === 0) return '';
        if (storeData.links.length === 1) return storeData.links[0].displayText;
        return `${storeData.links[0].displayText} 외 ${storeData.links.length - 1}개 링크`;
    };

    const truncateDescription = (text: string, maxLines: number = 2) => {
        const charsPerLine = 30;
        const maxChars = maxLines * charsPerLine;

        if (text.length <= maxChars) return text;
        return text.slice(0, maxChars) + '...';
    };

    return (
        <div className="bg-white">
            <StoreHeader />

            {/* 썸네일 섹션 */}
            <div
                ref={thumbnailRef}
                className="relative h-80 overflow-hidden"
            >
                <img
                    src={storeData.thumbnail}
                    alt={storeData.displayName}
                    className="w-full h-full object-cover"
                    style={{
                        transform: `translateY(${parallaxOffset}px)`
                    }}
                />

                {/* 썸네일 위 오버레이 정보 */}
                <div className="absolute bottom-12 left-6 text-white">
                    <p className="text-sm opacity-90 mb-1">{storeData.englishName}</p>
                    <h1 className="text-2xl font-bold mb-6">{storeData.displayName}</h1>
                    <p className="text-sm opacity-90">{storeData.shortAddress} · {storeData.category}</p>
                </div>
            </div>

            {/* 업체 정보 섹션 */}
            <div className="bg-white rounded-tl-3xl rounded-tr-3xl relative -mt-8 z-10">
                <div className="px-6 pt-6 pb-6">
                    {/* 링크 정보 버튼 */}
                    <div className="mb-8">
                        <button className="w-full bg-black text-white py-3 px-4 rounded-full font-medium text-center">
                            {formatLinksDisplay()}
                        </button>
                    </div>

                    {/* 업체 소개 */}
                    <div className="mb-8 pb-8 border-b border-gray-200">
                        <h2 className="text-lg font-semibold mb-3">업체 소개</h2>
                        <div className="text-gray-700 leading-relaxed">
                            {showFullDescription ? (
                                <p>{storeData.description}</p>
                            ) : (
                                <p>{truncateDescription(storeData.description)}</p>
                            )}

                            {storeData.description.length > 60 && (
                                <button
                                    onClick={() => setShowFullDescription(!showFullDescription)}
                                    className="text-blue-600 underline text-sm mt-1 hover:text-blue-800"
                                >
                                    {showFullDescription ? '간략히' : '더보기'}
                                </button>
                            )}
                        </div>
                    </div>

                    {/* 업체 정보 */}
                    <div className="mb-8 pb-8 border-b border-gray-200">
                        <h2 className="text-lg font-semibold mb-3">업체 정보</h2>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <MapPin size={20} className="text-gray-500 mt-0.5" />
                                <span className="text-gray-700">{storeData.address}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone size={20} className="text-gray-500" />
                                <span className="text-gray-700">{storeData.phoneNumber}</span>
                            </div>
                        </div>
                    </div>

                    {/* 전체 사진 */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">전체 사진</h2>
                        <div className="grid grid-cols-2 gap-3">
                            {storeData.images.map((image, index) => (
                                <div key={index} className="aspect-square overflow-hidden rounded-lg">
                                    <img
                                        src={image}
                                        alt={`${storeData.displayName} 사진 ${index + 1}`}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StorePage;