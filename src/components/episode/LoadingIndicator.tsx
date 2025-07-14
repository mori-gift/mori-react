import React from 'react';

const LoadingIndicator = () => {
    return (
        <div className="text-center mt-6">
            <div className="inline-flex items-center px-3 py-2 text-sm text-gray-600">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-500 mr-2"></div>
                더 많은 가게를 불러오는 중...
            </div>
        </div>
    );
};

export default LoadingIndicator;