'use client'

import { Header } from "@/components/Header";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function Home() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://albert.crxssed.dev/api/trakt/list/crxssed/ranking-of-kings")
            .then(res => res.json())
            .then(data => {
                const newItems = data.filter((item: {show: object | undefined}) => item.show !== undefined);
                setItems(newItems);
            });
    }, [])

    const mouseMove = (event) => {
        const card = event.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = event.nativeEvent.offsetX; // ✅ use offsetX/offsetY (position within the card)
        const y = event.nativeEvent.offsetY;
        const rotateY = ((x / rect.width) - 0.5) * 20;
        const rotateX = ((y / rect.height) - 0.5) * -20;
        card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.05)`;
    }

    const mouseLeave = (event) => {
        const card = event.currentTarget;
        card.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
    }

    return (
        <>
            <Header selectedPage="fun-zone"></Header>
            <div className="max-w-7xl w-full mx-auto px-4 pb-6">
                <div className="card">
                    <div className="card-title card-border flex-col border-primary justify-center p-6">
                        <FontAwesomeIcon icon={faCrown} className="text-lg"></FontAwesomeIcon>
                        <h2 className="text-2xl font-bold tracking-wider">RANKING OF KINGS</h2>
                        <p className="text-sm font-normal">A list of shows I&apos;ve watched and recommend. I&apos;ve tried my best to rank them based on my personal preferences but it&apos;s all very close.</p>
                    </div>
                    <div className="card-body card-border border-t-0 border-primary p-6">
                        <div className="r-grid">
                            {items.map((item, index) => (
                                <a className="r-card" key={index} href={`https://www.imdb.com/title/${item.show.ids.imdb}`} onMouseMove={mouseMove} onMouseLeave={mouseLeave}>
                                    <div className="rank">#{index + 1}</div>
                                    <img src={`https://${item.show.images.poster[0]}`} alt={`${item.show.title}`} />
                                    <div className="overlay">
                                      <div className="title">{item.show.title}</div>
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
