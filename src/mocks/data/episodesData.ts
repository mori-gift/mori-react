// mocks/data/episodesData.ts
export const episodesData = [
    {
        id: 'ep1',
        episodeNumber: 'EP1',
        title: '너를 담은 케이크 한 조각',
        description: '소중한 기억을 남기기 위한 작은 기념품처럼,\n너의 나의 이야기를, 이 케이크 한 조각에 담았어요.',
        stores: [
            {
                id: 'store_1',
                name: '미소바케가케',
                address: '서울 마포구 홍대입구역 2번 출구',
                category: '케이크/디저트',
                images: [
                    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=300&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1578662015879-d7c8b997c9f9?w=300&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=300&h=300&fit=crop'
                ]
            },
            {
                id: 'store_2',
                name: '우이펀드',
                address: '서울 용산구 이태원역 1번 출구',
                category: '케이크/디저트',
                images: [
                    'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=300&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=300&fit=crop'
                ]
            },
            {
                id: 'store_3',
                name: '본바렌도',
                address: '서울 용산구 한남동 블루스퀘어',
                category: '케이크/디저트',
                images: [
                    'https://images.unsplash.com/photo-1560008581-09826d1de69e?w=300&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1557925923-cd4648e211e0?w=300&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1586040140378-b5d3c6d7fb30?w=300&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1559157155-8ba2ee6ad62e?w=300&h=300&fit=crop'
                ]
            },
            {
                id: 'store_4',
                name: '달콤한하루',
                address: '서울 강남구 신사역 8번 출구',
                category: '베이커리/카페',
                images: [
                    'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=300&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1607478900766-efe13248b125?w=300&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=300&h=300&fit=crop'
                ]
            },
            {
                id: 'store_5',
                name: '스위트모먼트',
                address: '서울 서초구 강남역 12번 출구',
                category: '케이크/디저트',
                images: [
                    'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=300&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=300&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=300&fit=crop'
                ]
            },
            {
                id: 'store_6',
                name: '케이크아트',
                address: '서울 종로구 인사동길 12',
                category: '커스텀케이크/디저트',
                images: [
                    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1560008581-09826d1de69e?w=300&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1557925923-cd4648e211e0?w=300&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop',
                    'https://images.unsplash.com/photo-1586040140378-b5d3c6d7fb30?w=300&h=300&fit=crop'
                ]
            }
        ],
        // 메인페이지에서만 사용 (ProductCard 컴포넌트용)
        products: [
            { id: 1, name: '장미 부케', price: '35,000원', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop' },
            { id: 2, name: '튤립 화분', price: '25,000원', image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=200&h=200&fit=crop' },
            { id: 3, name: '해바라기 세트', price: '18,000원', image: 'https://images.unsplash.com/photo-1578662015879-d7c8b997c9f9?w=200&h=200&fit=crop' },
            { id: 4, name: '카네이션', price: '12,000원', image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=200&h=200&fit=crop' }
        ]
    }
];