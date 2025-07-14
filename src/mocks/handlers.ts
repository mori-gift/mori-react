import { mainPageHandlers } from './handlers/mainPageHandlers';
import { episodeHandlers } from './handlers/episodeHandlers';
import { storeHandlers } from "./handlers/storeHandler";

export const handlers = [
    ...mainPageHandlers,
    ...episodeHandlers,
    ...storeHandlers,
];
