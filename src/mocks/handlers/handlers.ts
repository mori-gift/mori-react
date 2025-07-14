import { mainPageHandlers } from './mainPageHandlers';
import { episodesHandlers } from './episodesHandlers';
import { storeHandlers } from "./storeHandler";

export const handlers = [
    ...mainPageHandlers,
    ...episodesHandlers,
    ...storeHandlers,
];
