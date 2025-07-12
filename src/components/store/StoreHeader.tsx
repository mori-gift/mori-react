import React from 'react';
import { ChevronLeft, Home, Share } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StoreHeader = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    const handleHome = () => {
        navigate('/');
    };

    const handleShare = () => {
        // 공유 기능 구현
        if (navigator.share) {
            navigator.share({
                title: document.title,
                url: window.location.href,
            });
        } else {
            // 브라우저가 Web Share API를 지원하지 않는 경우
            navigator.clipboard.writeText(window.location.href);
            alert('링크가 클립보드에 복사되었습니다.');
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-6xl">
                <div className="flex items-center space-x-4">
                    <button
                        onClick={handleBack}
                        className="p-2 hover:bg-white/20 rounded-full transition-colors"
                    >
                        <ChevronLeft size={24} className="text-white" />
                    </button>
                    <button
                        onClick={handleHome}
                        className="p-2 hover:bg-white/20 rounded-full transition-colors"
                    >
                        <Home size={24} className="text-white" />
                    </button>
                </div>
                <button
                    onClick={handleShare}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                    <Share size={24} className="text-white" />
                </button>
            </div>
        </header>
    );
};

export default StoreHeader;