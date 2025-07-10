import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

function App() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // 슬라이더 이미지 데이터
    const sliderImages = [
        'https://picsum.photos/800/400?random=1',
        'https://picsum.photos/800/400?random=2',
        'https://picsum.photos/800/400?random=3'
    ];

    // 각 섹션별 데이터 (ep1~ep4)
    const sections = [
        {
            id: 'ep1',
            title: '신상품',
            products: [
                { id: 1, name: '장미 부케', price: '35,000원', image: 'https://picsum.photos/200/200?random=11' },
                { id: 2, name: '튤립 화분', price: '25,000원', image: 'https://picsum.photos/200/200?random=12' },
                { id: 3, name: '해바라기 세트', price: '18,000원', image: 'https://picsum.photos/200/200?random=13' },
                { id: 4, name: '카네이션', price: '12,000원', image: 'https://picsum.photos/200/200?random=14' }
            ]
        },
        {
            id: 'ep2',
            title: '베스트셀러',
            products: [
                { id: 5, name: '프리미엄 장미', price: '45,000원', image: 'https://picsum.photos/200/200?random=21' },
                { id: 6, name: '사랑의 부케', price: '38,000원', image: 'https://picsum.photos/200/200?random=22' },
                { id: 7, name: '계절 믹스', price: '28,000원', image: 'https://picsum.photos/200/200?random=23' },
                { id: 8, name: '미니 화분', price: '15,000원', image: 'https://picsum.photos/200/200?random=24' }
            ]
        },
        {
            id: 'ep3',
            title: '추천상품',
            products: [
                { id: 9, name: '웨딩 부케', price: '65,000원', image: 'https://picsum.photos/200/200?random=31' },
                { id: 10, name: '생일 선물', price: '32,000원', image: 'https://picsum.photos/200/200?random=32' },
                { id: 11, name: '감사 인사', price: '22,000원', image: 'https://picsum.photos/200/200?random=33' },
                { id: 12, name: '축하화환', price: '55,000원', image: 'https://picsum.photos/200/200?random=34' }
            ]
        },
        {
            id: 'ep4',
            title: '할인상품',
            products: [
                { id: 13, name: '특가 장미', price: '19,000원', image: 'https://picsum.photos/200/200?random=41' },
                { id: 14, name: '세일 부케', price: '24,000원', image: 'https://picsum.photos/200/200?random=42' },
                { id: 15, name: '마감 세일', price: '16,000원', image: 'https://picsum.photos/200/200?random=43' },
                { id: 16, name: '클리어런스', price: '11,000원', image: 'https://picsum.photos/200/200?random=44' }
            ]
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* 1단계: 헤더 */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-6xl">
                    <div className="text-2xl font-bold text-green-600">
                       Mori
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                        <MoreHorizontal size={24} />
                    </button>
                </div>
            </header>

            {/* 2단계: 이미지 슬라이더 */}
            <div className="relative h-80 bg-gray-200 overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {sliderImages.map((image, index) => (
                        <div key={index} className="w-full h-full flex-shrink-0">
                            <img
                                src={image}
                                alt={`슬라이드 ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* 슬라이더 컨트롤 */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
                >
                    <ChevronRight size={20} />
                </button>

                {/* 슬라이더 인디케이터 */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {sliderImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full ${
                                index === currentSlide ? 'bg-white' : 'bg-white/50'
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* 3단계: 메인 콘텐츠 */}
            <main className="container mx-auto px-4 py-8 max-w-6xl">
                {sections.map((section) => (
                    <section key={section.id} className="mb-16">
                        {/* 3-1: ep 원형 테두리 */}
                        <div className="flex justify-center mb-6">
                            <div className="px-6 py-2 rounded-full border-2 border-green-500 bg-green-50 text-green-600 font-semibold">
                                {section.id}
                            </div>
                        </div>

                        {/* 3-2: 제목 */}
                        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                            {section.title}
                        </h2>

                        {/* 3-3: 상품 그리드 */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
                            {section.products.map((product) => (
                                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-40 lg:h-48 object-cover"
                                    />
                                    <div className="p-3 lg:p-4">
                                        <h3 className="font-semibold text-sm lg:text-lg mb-2">{product.name}</h3>
                                        <p className="text-green-600 font-bold text-lg lg:text-xl">{product.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* 3-4: 더보기 버튼 */}
                        <div className="text-center">
                            <button className="px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
                                더보기
                            </button>
                        </div>
                    </section>
                ))}
            </main>

            {/* 4단계: 푸터 */}
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
        </div>
    );
}

export default App;