import { mainPageHandlers } from './mainPageHandlers';
import { categoriesHandlers } from './categoriesHandlers';
import { storeHandlers } from "./storeHandler";

export const handlers = [
    ...mainPageHandlers,
    ...categoriesHandlers,
    ...storeHandlers,
];
