import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const Header = () => {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-6xl">
                <div className="text-2xl font-bold text-green-600">
                    FlowerShop
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                    <MoreHorizontal size={24} />
                </button>
            </div>
        </header>
    );
};

export default Header;