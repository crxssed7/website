'use client'

import { Header } from "@/components/Header";
import { faChessKnight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

type Item = {
    name: string
    images: {mediumUrl: string}
    siteUrl: string
}

export default function Home() {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        fetch("https://albert.crxssed.dev/api/ktomg/list/crxssed/10")
            .then(res => res.json())
            .then(data => {
                setItems(data.games);
            });
    }, [])

    const mouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const card = event.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = event.nativeEvent.offsetX; // ✅ use offsetX/offsetY (position within the card)
        const y = event.nativeEvent.offsetY;
        const rotateY = ((x / rect.width) - 0.5) * 20;
        const rotateX = ((y / rect.height) - 0.5) * -20;
        card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.05)`;
    }

    const mouseLeave = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const card = event.currentTarget;
        card.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
    }

    return (
        <>
            <Header selectedPage="fun-zone"></Header>
            <div className="max-w-7xl w-full mx-auto px-4 pb-6">
                <div className="card">
                    <div className="card-title card-border flex-col border-primary justify-center p-6">
                        <FontAwesomeIcon icon={faChessKnight} className="text-lg"></FontAwesomeIcon>
                        <h2 className="text-2xl font-bold tracking-wider">RANKING OF KNIGHTS</h2>
                        <p className="text-sm font-normal">A list of games I&apos;ve played and recommend across all platforms, ranked by my personal preferences.</p>
                    </div>
                    <div className="card-body card-border border-t-0 border-primary p-6">
                        <div className="r-grid">
                            {items.map((item, index) => (
                                <a className="r-card" key={index} href={item.siteUrl} onMouseMove={mouseMove} onMouseLeave={mouseLeave}>
                                    <div className="rank">#{index + 1}</div>
                                    <img src={item.images.mediumUrl} alt={`${item.name}`} />
                                    <div className="overlay">
                                      <div className="title">{item.name}</div>
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
