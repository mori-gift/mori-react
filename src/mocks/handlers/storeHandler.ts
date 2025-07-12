import { http, HttpResponse } from 'msw';
import { storeData } from '../data/storeData';

export const storeHandlers = [
    // 특정 업체 상세 정보
    http.get('/api/stores/:storeId', ({ params }) => {
        const { storeId } = params;

        const store = storeData.find(s => s.id === storeId);

        if (!store) {
            return new HttpResponse(null, { status: 404 });
        }

        return HttpResponse.json(store);
    }),

    // 업체 목록 (필요시)
    http.get('/api/stores', () => {
        return HttpResponse.json(storeData);
    }),
];