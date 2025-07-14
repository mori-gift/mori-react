import React from 'react';
import {EpisodeHeaderProps} from "../../types/episodeType";

const EpisodeHeader = ({ episodeNumber, title, description }: EpisodeHeaderProps) => {
    return (
        <div className="mb-8">
            <div className="text-center mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                    {episodeNumber}. {title}
                </h1>
                <p className="text-sm md:text-base text-gray-600 whitespace-pre-line">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default EpisodeHeader;