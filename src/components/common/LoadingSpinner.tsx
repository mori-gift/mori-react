import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="text-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500 mx-auto"></div>
                <p className="mt-4 text-gray-600">데이터를 불러오는 중...</p>
            </div>
        </div>
    );
}

export default LoadingSpinner;