import React from 'react';
import {EpisodeHeaderProps} from "../../types/episodeType";

const EpisodeHeader = ({ episodeNumber, title, description }: EpisodeHeaderProps) => {
    return (
        <div className="mb-8">
            <div className="text-left mb-6">
                <h1 className="text-2xl md:text-3xl font-black text-gray-800 mb-3">
                    ep. {episodeNumber}
                    <br />
                    {title}
                </h1>
                <p className="text-sm md:text-base text-gray-600 whitespace-pre-line">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default EpisodeHeader;