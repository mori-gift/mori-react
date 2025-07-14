import React from 'react';
import { Store, Heart } from 'lucide-react';

const EmptyStores = () => {
    return (
        <div className="text-center py-16">
            <div className="mb-6">
                <div className="relative mx-auto w-24 h-24 mb-4">
                    <Store size={48} className="text-gray-300 mx-auto" />
                    <Heart size={20} className="text-pink-400 absolute -top-1 -right-1 animate-pulse" />
                </div>
                <div className="text-4xl mb-2">🏪</div>
            </div>

            <h3 className="text-xl font-semibold text-gray-700 mb-2">
                등록된 상점이 없어요 😭
            </h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
                아직 이 에피소드에 등록된 상점이 없습니다.<br />
                <span className="font-medium text-green-600">널리 알려주세요!</span> 💫
            </p>

            <div className="flex justify-center space-x-2 text-2xl">
                <span className="animate-bounce">🎂</span>
                <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>☕</span>
                <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🍰</span>
                <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>🧁</span>
            </div>
        </div>
    );
};

export default EmptyStores;