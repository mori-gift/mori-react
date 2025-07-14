import React from 'react';
import { ChevronLeft, Home, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NavigationHeaderProps {
    variant?: 'light' | 'dark';
    showHome?: boolean;
    showShare?: boolean;
    backgroundColor?: string;
    onShare?: () => void;
}

const NavigationHeader = ({
                              variant = 'dark',
                              showHome = true,
                              showShare = true,
                              backgroundColor = 'transparent',
                              onShare
                          }: NavigationHeaderProps) => {

    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };

    const handleHome = () => {
        navigate('/');
    };

    const handleShare = () => {
        if (onShare) {
            onShare();
            return;
        }

        if (navigator.share) {
            navigator.share({
                title: document.title,
                url: window.location.href,
            }).catch(() => {
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('링크가 클립보드에 복사되었습니다.');
        }
    };

    // 테마에 따른 스타일
    const iconColor = variant === 'light' ? 'text-white' : 'text-gray-800';
    const hoverBg = variant === 'light'
        ? 'hover:bg-white/20'
        : 'hover:bg-gray-100';

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 ${
                variant === 'dark' ? 'border-b' : ''
            }`}
            style={{
                backgroundColor,
                borderBottomColor: variant === 'dark' ? '#E1E1E1' : 'transparent',
                borderBottomWidth: variant === 'dark' ? '1px' : '0'
            }}
        >
            <div className="container mx-auto px-4 py-2 flex justify-between items-center max-w-6xl">
                <div className="flex items-center space-x-4">
                    <button
                        onClick={handleBack}
                        className={`p-2 ${hoverBg} rounded-full transition-colors`}
                    >
                        <ChevronLeft size={24} className={iconColor} />
                    </button>
                    {showHome && (
                        <button
                            onClick={handleHome}
                            className={`p-2 ${hoverBg} rounded-full transition-colors`}
                        >
                            <Home size={24} className={iconColor} />
                        </button>
                    )}
                </div>
                {showShare && (
                    <button
                        onClick={handleShare}
                        className={`p-2 ${hoverBg} rounded-full transition-colors`}
                    >
                        <Share2 size={24} className={iconColor} />
                    </button>
                )}
            </div>
        </header>
    );
};

export default NavigationHeader;