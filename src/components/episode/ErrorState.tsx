import React from 'react';
import { AlertCircle, Home } from 'lucide-react';
import { ErrorStateProps } from '../../types/episodeType';

const ErrorState = ({ onNavigateHome }: ErrorStateProps) => {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="text-center">
                <div className="mb-6">
                    <AlertCircle size={64} className="text-red-400 mx-auto mb-4" />
                    <div className="text-4xl mb-2">😵</div>
                </div>

                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    에피소드를 찾을 수 없어요
                </h3>
                <p className="text-gray-500 mb-6">
                    요청하신 에피소드가 존재하지 않습니다.
                </p>

                <button
                    onClick={onNavigateHome}
                    className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                    <Home size={20} className="mr-2" />
                    홈으로 돌아가기
                </button>
            </div>
        </div>
    );
};

export default ErrorState;