import React from 'react';

const MainFooter = () => {
    return (
        <footer className="bg-[#ECECEC] text-gray-600 h-[182.5px] flex flex-col justify-center">
            <div className="max-w-[393px] mx-auto px-4 w-full">
                {/* mori 로고 */}
                <div className="text-left mb-1">
                    <h3 className="text-2xl font-bold text-[#929292]">mori</h3>
                </div>

                {/* 저작권 정보 */}
                <div className="text-left text-sm mb-1">
                    <p className="text-[#929292] font-bold mb-1">© 2025 mori. all rights reserved.</p>
                    <p className="text-[#A6A6A6] leading-tight">contact: adcde123@gmail.com</p>
                    <p className="text-[#A6A6A6] leading-tight">follow us @mori_magazine</p>
                </div>

                {/* 수평선 */}
                <div className="mb-1">
                    <div className="w-full bg-gray-400" style={{ height: '0.5px' }}></div>
                </div>

                {/* 하단 링크 */}
                <div className="text-left text-sm">
                    <span className="text-[#A6A6A6]">이용약관</span>
                    <span className="text-[#A6A6A6] mx-1">•</span>
                    <span className="text-[#A6A6A6]">개인정보처리방침</span>
                </div>
            </div>
        </footer>
    );
};

export default MainFooter;