import { http, HttpResponse } from 'msw';
import { episodeData } from '../data/episodeData';

export const episodeHandlers = [
    // 특정 카테고리 상세 정보
    http.get('/api/episodes/:episodeId', ({ params }) => {
        const { episodeId } = params as { episodeId: string };
        const actualId = episodeId.replace("ep", "");
        const episode = episodeData.find(ep => ep.id === actualId);

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
    })
];