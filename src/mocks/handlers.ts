import { http, HttpResponse } from 'msw';

export const handlers = [
    // GET /api/episodes
    http.get('/api/episodes', () => {
        return HttpResponse.json([
            {
                id: 'ep1',
                title: '신상품',
                products: [
                    { id: 1, name: '장미 부케', price: '35,000원', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop' },
                    { id: 2, name: '튤립 화분', price: '25,000원', image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=200&h=200&fit=crop' },
                    { id: 3, name: '해바라기 세트', price: '18,000원', image: 'https://images.unsplash.com/photo-1578662015879-d7c8b997c9f9?w=200&h=200&fit=crop' },
                    { id: 4, name: '카네이션', price: '12,000원', image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=200&h=200&fit=crop' }
                ]
            },
            {
                id: 'ep2',
                title: '베스트셀러',
                products: [
                    { id: 5, name: '프리미엄 장미', price: '45,000원', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop' },
                    { id: 6, name: '사랑의 부케', price: '38,000원', image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=200&h=200&fit=crop' },
                    { id: 7, name: '계절 믹스', price: '28,000원', image: 'https://images.unsplash.com/photo-1578662015879-d7c8b997c9f9?w=200&h=200&fit=crop' },
                    { id: 8, name: '미니 화분', price: '15,000원', image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=200&h=200&fit=crop' }
                ]
            },
            {
                id: 'ep3',
                title: '추천상품',
                products: [
                    { id: 9, name: '웨딩 부케', price: '65,000원', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop' },
                    { id: 10, name: '생일 선물', price: '32,000원', image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=200&h=200&fit=crop' },
                    { id: 11, name: '감사 인사', price: '22,000원', image: 'https://images.unsplash.com/photo-1578662015879-d7c8b997c9f9?w=200&h=200&fit=crop' },
                    { id: 12, name: '축하화환', price: '55,000원', image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=200&h=200&fit=crop' }
                ]
            },
            {
                id: 'ep4',
                title: '할인상품',
                products: [
                    { id: 13, name: '특가 장미', price: '19,000원', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop' },
                    { id: 14, name: '세일 부케', price: '24,000원', image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=200&h=200&fit=crop' },
                    { id: 15, name: '마감 세일', price: '16,000원', image: 'https://images.unsplash.com/photo-1578662015879-d7c8b997c9f9?w=200&h=200&fit=crop' },
                    { id: 16, name: '클리어런스', price: '11,000원', image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=200&h=200&fit=crop' }
                ]
            }
        ]);
    }),

    // GET /api/sliders
    http.get('/api/sliders', () => {
        return HttpResponse.json([
            'https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?w=800&h=400',
            'https://images.pexels.com/photos/931158/pexels-photo-931158.jpeg?w=800&h=400',
            'https://images.pexels.com/photos/931154/pexels-photo-931154.jpeg?w=800&h=400',
            'https://images.pexels.com/photos/212925/pexels-photo-212925.jpeg?w=800&h=400' // 추가 4번째 이미지
        ]);
    })
];
