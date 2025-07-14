import { http, HttpResponse } from 'msw';
import { episodeListData } from '../data/episodeListData';
import { episodeStoreData } from '../data/episodeStoreData';

export const episodeHandlers = [
    // 에피소드 목록 조회
    http.get('/api/episodes', () => {
        return HttpResponse.json(episodeListData);
    }),

    // 특정 에피소드 기본 정보 조회
    http.get('/api/episodes/:episodeId', ({ params }) => {
        const { episodeId } = params as { episodeId: string };

        // URL에서 "ep" 제거하고 실제 ID 추출 (예: "ep1" -> "1")
        const actualId = episodeId.replace(/^ep/, '');

        const episode = episodeListData.find(ep => ep.id === actualId);

        if (!episode) {
            return new HttpResponse(null, { status: 404 });
        }

        // 에피소드 기본 정보와 스토어 데이터 합쳐서 반환
        const stores = episodeStoreData[actualId] || [];

        return HttpResponse.json({
            id: episode.id,
            episodeNumber: episode.episodeNumber,
            title: episode.title,
            description: episode.description,
            stores: stores
        });
    }),

    // 에피소드별 스토어 목록 조회 (무한스크롤용)
    http.get('/api/episodes/:episodeId/stores', ({ params, request }) => {
        const { episodeId } = params as { episodeId: string };
        const url = new URL(request.url);
        const page = parseInt(url.searchParams.get('page') || '1');
        const limit = parseInt(url.searchParams.get('limit') || '3');

        const actualId = episodeId.replace(/^ep/, '');
        const stores = episodeStoreData[actualId] || [];

        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedStores = stores.slice(startIndex, endIndex);

        return HttpResponse.json({
            stores: paginatedStores,
            totalCount: stores.length,
            currentPage: page,
            hasMore: endIndex < stores.length
        });
    })
];