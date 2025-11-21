'use client'

import { Header } from "@/components/Header";
import { faChessQueen } from "@fortawesome/free-solid-svg-icons/faChessQueen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function Home() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://albert.crxssed.dev/api/trakt/list/crxssed/ranking-of-queens")
            .then(res => res.json())
            .then(data => {
                const newItems = data.filter((item: {movie: object | undefined}) => item.movie !== undefined);
                setItems(newItems);
            });
    }, [])

    const mouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const card = event.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = event.nativeEvent.offsetX; // ✅ use offsetX/offsetY (position within the card)
        const y = event.nativeEvent.offsetY;
        const rotateY = ((x / rect.width) - 0.5) * 20;
        const rotateX = ((y / rect.height) - 0.5) * -20;
        card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.05)`;
    }

    const mouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
        const card = event.currentTarget;
        card.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
    }

    return (
        <>
            <Header selectedPage="fun-zone"></Header>
            <div className="max-w-7xl w-full mx-auto px-4 pb-6">
                <div className="card">
                    <div className="card-title card-border flex-col border-primary justify-center p-6">
                        <FontAwesomeIcon icon={faChessQueen} className="text-lg"></FontAwesomeIcon>
                        <h2 className="text-2xl font-bold tracking-wider">RANKING OF QUEENS</h2>
                        <p className="text-sm font-normal">A list of movies I&apos;ve watched and recommend, ranked based on my personal preferences. I&apos;ve watched many movies in my life time so this is definitely not a full list, some may be missing/misranked. I&apos;m in the process of rewatching forgotten favourites.</p>
                    </div>
                    <div className="card-body card-border border-t-0 border-primary p-6">
                        <div className="r-grid">
                            {items.map((item, index) => (
                                <a className="r-card" key={index} href={`https://www.imdb.com/title/${item.movie.ids.imdb}`} onMouseMove={mouseMove} onMouseLeave={mouseLeave}>
                                    <div className="rank">#{index + 1}</div>
                                    <img src={`https://${item.movie.images.poster[0]}`} alt={`${item.movie.title}`} />
                                    <div className="overlay">
                                      <div className="title">{item.movie.title}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
