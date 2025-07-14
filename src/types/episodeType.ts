export interface EpisodeStore {
    id: string;
    name: string;
    address: string;
    episode: string;
    images: string[];
}

export interface EpisodeData {
    id: string;
    episodeNumber: string;
    title: string;
    description: string;
    stores: EpisodeStore[];
}

export interface StoreCardProps {
    store: EpisodeStore;
    storeIndex: number;
}
