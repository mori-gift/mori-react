
import { http, HttpResponse } from 'msw';
import { episodesData } from '../data/episodesData';
import { sliderData } from '../data/sliderData';

export const mainPageHandlers = [
    // 메인페이지 에피소드 데이터
    http.get('/api/episodes', () => {
        // 메인페이지용으로 products만 반환 (기존 구조 유지)
        const mainPageSections = episodesData.map(episode => ({
            id: episode.id,
            title: episode.title,
            products: episode.products
        }));

        return HttpResponse.json(mainPageSections);
    }),

    // 메인페이지 슬라이더 이미지
    http.get('/api/sliders', () => {
        return HttpResponse.json(sliderData);
    }),
];
