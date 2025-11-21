'use client'

import { Header } from "@/components/Header";
import stellarworks from "@/public/graphic-design/stellarworks.png";
import kaboomBig from "@/public/graphic-design/kaboom-big.png";
import kaboom1 from "@/public/graphic-design/kaboom1.png";
import kaboom2 from "@/public/graphic-design/kaboom2.png";
import kaboom3 from "@/public/graphic-design/kaboom3.png";
import spin1 from "@/public/graphic-design/spin1.jpg";
import spin2 from "@/public/graphic-design/spin2.jpg";
import dino1 from "@/public/graphic-design/dino1.jpg";
import dino2 from "@/public/graphic-design/dino2.jpg";
import kitric from "@/public/graphic-design/kitric.png";
import Image from "next/image";
import spyXFamily from "@/public/graphic-design/posters/spy-x-family.png";
import onePiece from "@/public/graphic-design/posters/one-piece.png";
import hinamatsuri from "@/public/graphic-design/posters/hinamatsuri.png";
import berserk from "@/public/graphic-design/posters/berserk.png";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Header selectedPage="graphic-design"></Header>
            <div className="max-w-7xl w-full mx-auto px-4 pb-6">
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
                    <div className="card col-span-1">
                        <div className="card-title card-border border-primary justify-center p-6">
                            <h2 className="text-2xl font-bold tracking-wider">GRAPHIC DESIGN</h2>
                        </div>
                        <div className="card-body card-border border-t-0 border-primary">
                            <p className="text-md grow-0">In the past I have done some freelance/hobbyist graphic design (specifically logos). As well as the logos for my personal project, I have designed logos for clients and have participated in logo design challenges. Below is a small selection of my work.</p>
                            <p className="text-md grow-0">Typically I would design the logos on paper first before tracing them into SVG format using an open-source application called Inkscape. Very early on in my graphic design life I would design mascot logos on my small Android phone without vector software. This was before I even knew apps like Inkscape existed. If I can find those old logos, I&apos;ll post them on here.</p>
                        </div>
                    </div>

                    <div className="card col-span-1">
                        <div className="card-title card-border border-primary justify-center p-6">
                            <h2 className="text-2xl font-bold tracking-wider">MANGA POSTERS</h2>
                        </div>
                        <div className="card-body card-border border-t-0 border-primary">
                            <p className="text-md">I designed some manga posters for some of the series that I like. Unfortunately I seem to have lost the original SVG files, otherwise I&apos;d have made more...</p>
                            <div className="grid grid-cols-4">
                                <Image src={spyXFamily} alt="SPY x FAMILY Poster" className="w-full h-auto" />
                                <Image src={onePiece} alt="One Piece Poster" className="w-full h-auto" />
                                <Image src={hinamatsuri} alt="Hinamatsuri Poster" className="w-full h-auto" />
                                <Image src={berserk} alt="Berserk Poster" className="w-full h-auto" />
                            </div>
                            <Link href="/graphic-design/posters" className="btn btn-primary">View more</Link>
                        </div>
                    </div>

                    <div className="card col-span-full">
                        <div className="card-title card-border border-primary justify-center p-6">
                            <h2 className="text-2xl font-bold tracking-wider">STELLARWORKS</h2>
                        </div>
                        <div className="card-body card-border p-0 border-t-0 border-primary">
                            <Image src={stellarworks} alt="Stellarworks Logo" />
                        </div>
                    </div>

                    <div className="card col-span-full">
                        <div className="card-title card-border border-primary justify-center p-6">
                            <h2 className="text-2xl font-bold tracking-wider">KABOOM</h2>
                        </div>
                        <div className="card-body card-border p-0 border-t-0 border-primary">
                            <div className="grid grid-cols-3">
                                <Image src={kaboomBig} alt="Kaboom Logo" className="col-span-full" />
                                <Image src={kaboom1} alt="Kaboom Logo" />
                                <Image src={kaboom2} alt="Kaboom Logo" />
                                <Image src={kaboom3} alt="Kaboom Logo" />
                            </div>
                        </div>
                    </div>

                    <div className="card col-span-1">
                        <div className="card-title card-border border-primary justify-center p-6">
                            <h2 className="text-2xl font-bold tracking-wider">SPIN RECORDS</h2>
                        </div>
                        <div className="card-body card-border p-0 border-t-0 border-primary">
                            <div>
                                <Image src={spin1} alt="Spin Logo" />
                                <Image src={spin2} alt="Spin Logo" />
                            </div>
                        </div>
                    </div>

                    <div className="card col-span-1">
                        <div className="card-title card-border border-primary justify-center p-6">
                            <h2 className="text-2xl font-bold tracking-wider">DINO PARK</h2>
                        </div>
                        <div className="card-body card-border p-0 border-t-0 border-primary">
                            <div>
                                <Image src={dino1} alt="Dino Logo" />
                                <Image src={dino2} alt="Dino Logo" />
                            </div>
                        </div>
                    </div>

                    <div className="card col-span-full">
                        <div className="card-title card-border border-primary justify-center p-6">
                            <h2 className="text-2xl font-bold tracking-wider">KITRIC</h2>
                        </div>
                        <div className="card-body card-border p-0 border-t-0 border-primary">
                            <Image src={kitric} alt="Kitric Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
