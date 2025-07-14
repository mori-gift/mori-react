import { http, HttpResponse } from 'msw';
import { mainData } from '../data/mainData';
import { sliderData } from '../data/sliderData';

export const mainPageHandlers = [
    // 메인페이지 에피소드 데이터
    http.get('/api/episodes', () => {
        // 메인페이지 전용 데이터 반환
        return HttpResponse.json(mainData);
    }),

    // 메인페이지 슬라이더 이미지
    http.get('/api/sliders', () => {
        return HttpResponse.json(sliderData);
    }),
];