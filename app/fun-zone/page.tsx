'use client'

import { Header } from "@/components/Header";
import { useEffect, useState } from "react";
import { faCrown, faChessQueen, faScroll, faChessKnight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Home() {
    const [quote, setQuote] = useState<string | undefined>(undefined);
    const [author, setAuthor] = useState<string | undefined>(undefined);

    useEffect(() => {
        new HardcoverWidget(
            document.getElementById('my-books'),
            {
                apiUrl: 'https://hardcoverembed.gouthamve.dev',
                username: 'crxssed',
                bookType: 'currently-reading',
                maxWidth: '100%',
                minColumnWidth: 0,
                gap: 0,
                padding: 0,
                columns: 4,
                showPoweredBy: false
            }
        );

        const quotes = [
            "Ooohhhhhhhhh!!!!!^- Regular Show",
            "I'm Pickle Rickkk!!!!^- Rick, Rick and Morty",
            "Bazinga!^- Sheldon Cooper, The Big Bang Theory",
            "I am the danger, I am the one who knocks.^- Walter White, Breaking Bad",
            "You shall not pass!^- The Lord of the Rings",
            "Wubalubadubdub!^- Rick, Rick and Morty",
            "D'oh!^- Homer Simpson, The Simpsons",
            "Cool cool cool cool cool cool cool cool.^- Jake Peralta, Brooklyn Nine-Nine",
            "We're all goofy goobers yeah!^- Spongebob, Spongebob Square Pants",
            "That's what she said.^- Michael Scott, The Office (US)",
            "Oh my God, they killed Kenny!^- South Park",
            "Oh my God, its happening. Everybody stay calm!^- Michael Scott, The Office (US)",
            "Oh hello, Jackie!^- Jim Bell, Friday Night Dinner",
            "I'm gonna wreck it!^- Ralph, Wreck-it Ralph",
            "Jolly good show!^- Pops, Regular Show",
            "Hamboninggggggg!^- Rigby, Regular Show",
            "You were the chosen one!^- Obi-Wan Kenobi, Star Wars",
            "ARE YOU WILLING TO FIGHT?!^- Parzival, Ready Player One",
            "Going outside is highly overrated^- Anorak, Ready Player One",
            "Dude, am I in the frame?^- Soos, Gravity Falls",
            "Bacon Pancakes, making Bacon Pancakes!^- Jake, Adventure Time",
            "This is the way.^- Din Djarin, The Mandalorian",
            "YUMYAN OWNS YOU ALL!^- Yumyan, Kipo and the age of Wonderbeasts",
            "Here's to another lousy millennium 🍻^- Phillip J Fry, Futurama",
            "You were my brother Anakin!^- Obi-Wan Kenobi, Star Wars",
            "It's over Anakin, I have the high ground!^- Obi-Wan Kenobi, Star Wars",
            "General Kenobi!!!!^- General Grievous, Star Wars",
            "Be careful what you wish for, Parker^- Dr. Strange, Spider-Man: No Way Home",
            "I am inevitable^- Thanos, Avengers: Endgame",
            "I, am Iron Man^- Tony Stark, Avengers: Endgame",
            "Things used to be awesome, but now they're kinda terrifying^- Wade Watts, Ready Player One"
        ];

        const rnd = Math.floor(Math.random() * quotes.length);
        const [newQuote, newAuthor] = quotes[rnd].split('^');
        setQuote(newQuote);
        setAuthor(newAuthor);
    }, [])

    return (
        <>
            <Header selectedPage="fun-zone"></Header>
            <div className="max-w-7xl w-full mx-auto px-4 pb-6">
                <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
                    <div className="col-span-1 flex flex-col gap-8">
                        <div className="card">
                            <div className="card-title card-border border-primary justify-center p-6">
                                <h2 className="text-2xl font-bold tracking-wider">I LAST WATCHED</h2>
                            </div>
                            <div className="card-body card-border border-t-0 border-primary p-0">
                                <a target="_blank" href="https://trakt.tv/users/crxssed">
                                    <img alt="crxssed" src="https://trakt-widgets.vercel.app/crxssed/watched/card-overlay" className="grayscale hover:grayscale-0" />
                                </a>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-title card-border border-primary justify-center p-6">
                                <h2 className="text-2xl font-bold tracking-wider">MY BOOKSHELF</h2>
                            </div>
                            <div className="card-body card-border border-t-0 border-primary p-0">
                                <div id="my-books" className="p-0! m-0!"></div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-title card-border border-primary justify-center p-6">
                                <h2 className="text-2xl font-bold tracking-wider">GAMES</h2>
                            </div>
                            <div className="card-body card-border border-t-0 border-primary p-0">
                                <a target="_blank" href="https://www.exophase.com/user/crxssed/">
                                    <img alt="Game card" src="https://card.exophase.com/2/0/226335.png?1763303425" className="grayscale hover:grayscale-0" />
                                </a>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-title card-border border-primary justify-center p-6">
                                <h2 className="text-2xl font-bold tracking-wider">MANGA REVIEWS</h2>
                            </div>
                            <div className="card-body card-border border-t-0 border-primary p-6">
                                <p>I sometimes ramble about the manga I read.</p>
                                <a href="https://reviews.crxssed.dev/" className="btn btn-primary">Check it out</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 sm:col-span-2 flex flex-col gap-8">
                        <div className="card">
                            <div className="card-title card-border border-primary justify-center p-6 flex-col">
                                <h2 className="text-2xl font-bold tracking-wider uppercase text-center">&quot;{quote || '...'}&quot;</h2>
                                <small className="font-light tracking-wider">{author || '...'}</small>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-8">
                            <div className="card">
                                <div className="card-title card-border border-primary justify-center w-full h-0 pb-[100%] group">
                                    <a target="_blank" href="https://trakt.tv/users/crxssed" className="absolute top-0 flex items-center justify-center h-full w-full">
                                        <img className="my-auto max-h-20 grayscale group-hover:grayscale-0" src="https://trakt.tv/assets/logos/logomark.square.gradient-b644b16c38ff775861b4b1f58c1230f6a097a2466ab33ae00445a505c33fcb91.svg" alt="Trakt" />
                                    </a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-title card-border border-primary justify-center w-full h-0 pb-[100%] group">
                                    <a target="_blank" href="https://anilist.co/user/crxssed" className="absolute top-0 flex items-center justify-center h-full w-full">
                                        <img className="my-auto max-h-20 grayscale group-hover:grayscale-0" src="https://anilist.co/img/icons/icon.svg" alt="Anilist" />
                                    </a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-title card-border border-primary justify-center w-full h-0 pb-[100%] group">
                                    <a target="_blank" href="https://www.exophase.com/user/crxssed/" className="absolute top-0 flex items-center justify-center h-full w-full">
                                        <img className="my-auto max-h-20 grayscale group-hover:grayscale-0" src="https://d4.alternativeto.net/ldyWcYEWxk9uDNm0ZFQ_IGYAwLFPCd2uK4gHr1fsaNw/rs:fit:140:140:0/g:ce:0:0/exar:1/YWJzOi8vZGlzdC9pY29ucy9leG9waGFzZV8yMDYzNDAucG5n.png" alt="Exophase" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="card">
                                <Link href="/fun-zone/rankings/tv">
                                    <div className="relative card-title card-border border-primary justify-center min-h-80 flex-col bg-cover bg-center bg-no-repeat grayscale-100 hover:grayscale-0" style={{backgroundImage: "url('/fun-zone/avatar.jpg')"}}>
                                        <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-10"></div>
                                        <FontAwesomeIcon icon={faCrown} className="text-lg"></FontAwesomeIcon>
                                        <h2 className="text-2xl font-bold tracking-wider uppercase text-center">RANKING OF KINGS</h2>
                                        <small className="tracking-wider text-center">TV shows that I recommend ranked by my personal prefences.</small>
                                    </div>
                                </Link>
                            </div>

                            <div className="card">
                                <Link href="/fun-zone/rankings/movies">
                                    <div className="relative card-title card-border border-primary justify-center min-h-80 flex-col bg-cover bg-center bg-no-repeat grayscale-100 hover:grayscale-0" style={{backgroundImage: "url('/fun-zone/across-the-spider-verse.jpg')"}}>
                                        <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-10"></div>
                                        <FontAwesomeIcon icon={faChessQueen} className="text-lg"></FontAwesomeIcon>
                                        <h2 className="text-2xl font-bold tracking-wider uppercase text-center">RANKING OF QUEENS</h2>
                                        <small className="tracking-wider text-center">Movies that I recommend ranked by my personal prefences.</small>
                                    </div>
                                </Link>
                            </div>

                            <div className="card">
                                <Link href="/fun-zone/rankings/manga">
                                    <div className="relative card-title card-border border-primary justify-center min-h-80 flex-col bg-cover bg-center bg-no-repeat grayscale-100 hover:grayscale-0" style={{backgroundImage: "url('/fun-zone/spy-x-family.jpg')"}}>
                                        <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-10"></div>
                                        <FontAwesomeIcon icon={faScroll} className="text-lg"></FontAwesomeIcon>
                                        <h2 className="text-2xl font-bold tracking-wider uppercase text-center">RANKING OF SCRIBES</h2>
                                        <small className="tracking-wider text-center">Manga that I recommend ranked by my personal prefences.</small>
                                    </div>
                                </Link>
                            </div>

                            <div className="card">
                                <Link href="/fun-zone/rankings/games">
                                    <div className="relative card-title card-border border-primary justify-center min-h-80 flex-col bg-cover bg-center bg-no-repeat grayscale-100 hover:grayscale-0" style={{backgroundImage: "url('/fun-zone/minecraft.jpg')"}}>
                                        <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-10"></div>
                                        <FontAwesomeIcon icon={faChessKnight} className="text-lg"></FontAwesomeIcon>
                                        <h2 className="text-2xl font-bold tracking-wider uppercase text-center">RANKING OF KNIGHTS</h2>
                                        <small className="tracking-wider text-center">Games that I recommend ranked by my personal prefences.</small>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
