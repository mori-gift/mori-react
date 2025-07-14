import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from '../components/common/LoadingSpinner';
import EpisodeHeader from '../components/episode/EpisodeHeader';
import StoreList from '../components/episode/StoreList';
import EmptyStores from '../components/episode/EmptyStores';
import ErrorState from '../components/episode/ErrorState';
import LoadingIndicator from '../components/episode/LoadingIndicator';
import {EpisodeData} from "../types/episodeType";
import NavigationHeader from "../components/common/NavigationHeader";

const EpisodePage = () => {
    const { episodeId } = useParams<{ episodeId: string }>();
    const navigate = useNavigate();
    const [episodeData, setEpisodeData] = useState<EpisodeData | null>(null);
    const [loading, setLoading] = useState(true);
    const [loadedStores, setLoadedStores] = useState(3);

    useEffect(() => {
        const fetchCategoryData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`/api/episodes/${episodeId}`);
                setEpisodeData(response.data);
            } catch (error) {
                console.error('에피소드 데이터 가져오기 실패:', error);
            } finally {
                setLoading(false);
            }
        };

        if (episodeId) {
            fetchCategoryData();
        }
    }, [episodeId]);

    // 무한 스크롤 처리
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
                if (episodeData && loadedStores < episodeData.stores.length) {
                    setLoadedStores(prev => Math.min(prev + 2, episodeData.stores.length));
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [episodeData, loadedStores]);

    const handleNavigateHome = () => navigate('/');

    // 로딩 상태
    if (loading) {
        return <LoadingSpinner />;
    }

    // 에피소드 데이터가 없는 경우
    if (!episodeData) {
        return <ErrorState onNavigateHome={handleNavigateHome} />;
    }

    return (
        <div className="min-h-screen bg-white">
            <NavigationHeader
                variant="dark"
                backgroundColor="rgba(255, 255, 255, 0.95)"
            />

            <main className="container mx-auto px-4 py-8 max-w-6xl">
                <EpisodeHeader
                    episodeNumber={episodeData.episodeNumber}
                    title={episodeData.title}
                    description={episodeData.description}
                />

                {/* 상점이 없는 경우 */}
                {episodeData.stores.length === 0 ? (
                    <EmptyStores />
                ) : (
                    <>
                        <StoreList
                            stores={episodeData.stores}
                            loadedStores={loadedStores}
                        />

                        {/* 더 불러올 상점이 있는 경우 로딩 인디케이터 */}
                        {loadedStores < episodeData.stores.length && (
                            <LoadingIndicator />
                        )}
                    </>
                )}
            </main>
        </div>
    );
};

export default EpisodePage;