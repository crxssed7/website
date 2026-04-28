'use client'

import { useEffect, useState } from "react"

export function ShowFinishDate() {
    const CURRENT_SHOW = "Beelzebub"
    const EPISODE_COUNT = 60
    const NUM_EPS_PER_DAY = 2

    const [finishDate, setFinishDate] = useState<Date | null>(null)
    const [episodesLeft, setEpisodesLeft] = useState<number>(0)
    const [amountOfDays, setAmountOfDays] = useState<number>(0)

    function addWeekdays(start: Date, days: number): Date {
        const date = new Date(start)
        let remainingDays = Math.ceil(days)

        while (remainingDays > 0) {
            date.setDate(date.getDate() + 1)

            const day = date.getDay()
            if (day !== 0 && day !== 6) {
                remainingDays--
            }
        }

        return date
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const headers = {
                    "Content-Type": "application/json",
                    "trakt-api-version": "2",
                    "trakt-api-key": "80385a95267fd85c22d380c508ee1aa687fc0aba899e3433a7df977ce0062e56",
                };

                const watchedRes = await fetch(
                    `https://api.trakt.tv/users/crxssed/history/shows/beelzebub?limit=400`,
                    { headers }
                );

                if (!watchedRes.ok) {
                    throw new Error("Failed to fetch watched data");
                }

                const watchedHistoryItems = await watchedRes.json();

                const watchedEpisodes = watchedHistoryItems.length
                const amountLeft = EPISODE_COUNT - watchedEpisodes

                const rawDays = amountLeft / NUM_EPS_PER_DAY
                const finish = addWeekdays(new Date(), rawDays)

                setFinishDate(finish)
                setEpisodesLeft(amountLeft)
                setAmountOfDays(rawDays)
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
                    })} ({amountOfDays.toFixed(1)} days, ~{(amountOfDays / 30).toFixed(2)} months)
                </strong>
            </p>
        </div>
    );
}
