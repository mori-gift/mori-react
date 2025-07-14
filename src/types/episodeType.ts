export interface EpisodeStore {
    id: string;
    name: string;
    address: string;
    episode: string;
    images: string[];
}

// 에피소드 기본 정보 (목록용)
export interface EpisodeBasicInfo {
    id: string;
    episodeNumber: string;
    title: string;
    description: string;
}

// 에피소드 상세 정보 (상세 페이지용)
export interface EpisodeData extends EpisodeBasicInfo {
    stores: EpisodeStore[];
}

export interface StoreCardProps {
    store: EpisodeStore;
    storeIndex: number;
}

export interface EpisodeHeaderProps {
    episodeNumber: string;
    title: string;
    description: string;
}

export interface ErrorStateProps {
    onNavigateHome: () => void;
}

export interface StoreListProps {
    stores: EpisodeStore[];
    loadedStores: number;
}