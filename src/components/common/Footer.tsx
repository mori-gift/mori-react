import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">mori</h3>
                        <p className="text-gray-400">꽃으로 전하는 마음</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <p className="text-gray-400">전화: 02-1234-5678</p>
                        <p className="text-gray-400">이메일: hello@flowershop.com</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">정보</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">회사소개</a></li>
                            <li><a href="#" className="hover:text-white">채용정보</a></li>
                            <li><a href="#" className="hover:text-white">제휴문의</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">고객센터</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">FAQ</a></li>
                            <li><a href="#" className="hover:text-white">1:1 문의</a></li>
                            <li><a href="#" className="hover:text-white">배송안내</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
                    <div className="flex justify-center space-x-6 mb-4">
                        <a href="#" className="hover:text-white">이용약관</a>
                        <a href="#" className="hover:text-white">개인정보처리방침</a>
                    </div>
                    <p>&copy; 2024 FlowerShop. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;