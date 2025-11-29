'use client'

import { useEffect, useState } from "react"

type Episode = {
    season: number,
	number: number,
	title: string,
	ids: {
		trakt: number,
		tvdb: number,
		imdb: string | null,
		tmdb: number
	}
}

type Item = {
	title: string,
	year: number,
	ids: {
		trakt: number,
		tvdb: number,
		imdb: string | null,
		tmdb: number
	}
}

type TraktWatchingData = {
    expires_at: string;
    started_at: string;
    type: string;
    episode?: Episode | undefined;
    show?: Item | undefined;
	movie?: Item | undefined;
}

export function TraktWatching() {
    const [traktData, setTraktData] = useState<TraktWatchingData | undefined>(undefined);
    const [percentage, setPercentage] = useState<number>(0);

    useEffect(() => {
        if (!traktData) return;

        const timeout = setInterval(() => {
            if (!traktData) return;
            const currentTime = Date.now();
            const startTime = Date.parse(traktData?.started_at ?? '');
            const duration = length();
            const elapsed = currentTime - startTime;
            const progress = (elapsed / duration) * 100;
            if (progress > 100) {
                setPercentage(100);
                setTraktData(undefined)
            } else {
                setPercentage(progress);
            }
        }, 1000);

        return () => clearInterval(timeout);
    }, [traktData]);

    useEffect(() => {
        fetch("https://albert.crxssed.dev/api/trakt/watching/crxssed")
            .then(res => res.json())
            .then(data => setTraktData(data))
            .catch(error => console.log(`Catch error: ${error}`));
    }, []);

    const getWatchingName = (): string => {
        if (!traktData) return '';
        if (traktData.type === 'episode') {
            return `${traktData?.show?.title} - ${traktData?.episode?.season}x${traktData?.episode?.number}<br>${traktData?.episode?.title}`;
        } else if (traktData.type === 'movie') {
            return traktData?.movie?.title ?? '';
        }
        return '';
    }

    const length = (): number => {
        if (!traktData) return 0;
        const startTime = Date.parse(traktData?.started_at ?? '');
        const endTime = Date.parse(traktData?.expires_at ?? '');
        return Math.abs(endTime - startTime);
    }


    if (!traktData || percentage <= 0) return null;

    return (
        <div className="relative flex flex-col gap-0 items-center justify-center w-full card-title card-border border-primary mb-8 p-2">
            <p className="text-sm text-center bg-primary text-base-100 px-2 py-1 font-light">I'm currently watching:</p>
            <p className="text-sm text-center bg-primary text-base-100 px-2 py-1" dangerouslySetInnerHTML={{__html: getWatchingName()}}></p>
            <div className="absolute top-0 left-0 h-full bg-primary -z-10" style={{width: `${percentage}%`}}></div>
        </div>
    )
}
