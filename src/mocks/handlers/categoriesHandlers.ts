import { http, HttpResponse } from 'msw';
import { episodesData } from '../data/episodesData';

export const categoriesHandlers = [
    // 특정 카테고리 상세 정보
    http.get('/api/categories/:categoryId', ({ params }) => {
        const { categoryId } = params;

        const episodeMap: Record<string, string> = {
            'ep1': 'ep1',
            'ep2': 'ep2',
            'ep3': 'ep3',
            'ep4': 'ep4'
        };

        const actualId = episodeMap[categoryId as string];
        const episode = episodesData.find(ep => ep.id === actualId);

        if (!episode) {
            return new HttpResponse(null, { status: 404 });
        }

        // 카테고리 페이지용 새 구조로 반환
        return HttpResponse.json({
            id: episode.id,
            episodeNumber: episode.episodeNumber,
            title: episode.title,
            description: episode.description,
            stores: episode.stores
        });
    }),

    // 카테고리 목록 (필요시)
    http.get('/api/categories', () => {
        return HttpResponse.json([
            { id: 'ep1', title: 'EP1. 너를 담은 케이크 한 조각', storeCount: 5 }
        ]);
    }),
];