import React from 'react';
import {StoreCardProps} from "../../types";

const StoreCard = ({ store, storeIndex }: StoreCardProps) => {
    return (
        <div key={storeIndex} className="bg-gray-50 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-lg md:text-xl font-bold text-gray-800">{store.name}</h2>
                    <p className="text-sm text-gray-600">{store.address} · {store.category}</p>
                </div>
                <p>→</p>
            </div>

            {/* 가게별 이미지 슬라이더 */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-4">
                {store.images.map((image, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 relative"
                    >
                        <div className={`w-full h-full bg-white shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden ${
                            index === 0
                                ? 'rounded-tl-2xl rounded-bl-2xl'
                                : ''
                        }`}>
                            <img
                                src={image}
                                alt={`${store.name} 케이크 ${index + 1}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StoreCard;