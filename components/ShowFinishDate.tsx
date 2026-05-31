'use client'

import { useEffect, useState } from "react"

export function ShowFinishDate() {
    const CURRENT_SHOW = "The Boondocks"
    const EPISODE_COUNT = 55
    const NUM_EPS_PER_DAY = 2

    const [finishDate, setFinishDate] = useState<Date | null>(null)
    const [episodesLeft, setEpisodesLeft] = useState<number>(0)
    const [amountOfDays, setAmountOfDays] = useState<number>(0)

    useEffect(() => {
        async function fetchData() {
            try {
                const headers = {
                    "Content-Type": "application/json",
                    "trakt-api-version": "2",
                    "trakt-api-key": "80385a95267fd85c22d380c508ee1aa687fc0aba899e3433a7df977ce0062e56",
                };

                const watchedRes = await fetch(
                    `https://api.trakt.tv/users/crxssed/history/shows/the-boondocks?limit=400`,
                    { headers }
                );

                if (!watchedRes.ok) {
                    throw new Error("Failed to fetch watched data");
                }
                const watchedHistoryItems = await watchedRes.json();
                // TODO: This assumes that I watch each episode only once
                const watchedEpisodes = watchedHistoryItems.length
                const amountLeft = EPISODE_COUNT - watchedEpisodes
                const amountOfDays = amountLeft / NUM_EPS_PER_DAY
                const finishDate = new Date(Date.now() + amountOfDays * 24 * 60 * 60 * 1000)
                setFinishDate(finishDate)
                setEpisodesLeft(amountLeft)
                setAmountOfDays(amountOfDays)
            } catch (err) {
                console.log(err);
            }
        }

        fetchData();
    }, []);

    if (finishDate === null) return <p>Loading…</p>;

    return (
        <div>
            <p><b>{CURRENT_SHOW}</b>: episodes left: {episodesLeft}</p>
            <p>
                Finish date ({NUM_EPS_PER_DAY} / day):{" "}
                <strong>
                    {finishDate.toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })} ({amountOfDays} days, ~{(amountOfDays / 30).toFixed(2)} months)
                </strong>
            </p>
        </div>
    );
}
