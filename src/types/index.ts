export interface StoreLink {
    id: string;
    platform: string; // 'instagram', 'website', 'kakao' etc.
    url: string;
    displayText: string; // @username 형태
}

export interface StoreData {
    id: string;
    episode: string; // 업체 분야
    thumbnail: string; // 썸네일 이미지
    displayName: string; // 한글 이름
    englishName: string; // 영어 이름
    links: StoreLink[]; // 연관 링크들
    description: string; // 업체 소개
    phoneNumber: string; // 전화번호
    address: string; // 전체 주소
    shortAddress: string; // 간략 주소 (서울 마포구)
    images: string[]; // 업체 관련 사진들
}