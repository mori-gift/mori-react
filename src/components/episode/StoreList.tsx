import React from 'react';
import StoreCard from './StoreCard';
import {StoreListProps} from '../../types/episodeType';

const StoreList = ({ stores, loadedStores }: StoreListProps) => {
    return (
        <div className="space-y-6">
            {stores.slice(0, loadedStores).map((store, storeIndex) => (
                <StoreCard key={store.id} store={store} storeIndex={storeIndex} />
            ))}
        </div>
    );
};

export default StoreList;