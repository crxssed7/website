'use client'

import { Header } from "@/components/Header";
import Image from "next/image";
import spyXFamily from "@/public/graphic-design/posters/spy-x-family.png";
import onePiece from "@/public/graphic-design/posters/one-piece.png";
import hinamatsuri from "@/public/graphic-design/posters/hinamatsuri.png";
import berserk from "@/public/graphic-design/posters/berserk.png";
import uzumaki from "@/public/graphic-design/posters/uzumaki.png";
import fma from "@/public/graphic-design/posters/fma.png";
import assClass from "@/public/graphic-design/posters/assassination-classroom.png";
import saiki from "@/public/graphic-design/posters/saiki-k.png";

import spyXFamilyCol from "@/public/graphic-design/posters/spy-x-family-col.png";
import onePieceCol from "@/public/graphic-design/posters/one-piece-col.png";
import hinamatsuriCol from "@/public/graphic-design/posters/hinamatsuri-col.png";
import berserkCol from "@/public/graphic-design/posters/berserk-col.png";
import uzumakiCol from "@/public/graphic-design/posters/uzumaki-col.png";
import fmaCol from "@/public/graphic-design/posters/fma-col.png";
import assClassCol from "@/public/graphic-design/posters/assassination-classroom-col.png";
import saikiCol from "@/public/graphic-design/posters/saiki-k-col.png";

export default function Home() {
    return (
        <>
            <Header selectedPage="graphic-design"></Header>
            <div className="max-w-7xl w-full mx-auto px-4 pb-6">
                <div className="flex flex-col gap-8">
                    <div className="card">
                        <div className="card-title card-border border-primary justify-center p-6">
                            <h2 className="text-2xl font-bold tracking-wider">MONOCHROME POSTERS</h2>
                        </div>
                        <div className="card-body card-border border-t-0 border-primary">
                            <div className="grid grid-cols-2 md:grid-cols-4">
                                <Image src={spyXFamily} alt="SPY x FAMILY Poster" className="w-full h-auto" />
                                <Image src={onePiece} alt="One Piece Poster" className="w-full h-auto" />
                                <Image src={hinamatsuri} alt="Hinamatsuri Poster" className="w-full h-auto" />
                                <Image src={berserk} alt="Berserk Poster" className="w-full h-auto" />
                                <Image src={uzumaki} alt="Uzumaki Poster" className="w-full h-auto" />
                                <Image src={fma} alt="FMA Poster" className="w-full h-auto" />
                                <Image src={assClass} alt="Assassination Classroom Poster" className="w-full h-auto" />
                                <Image src={saiki} alt="Saiki K Poster" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-title card-border border-primary justify-center p-6">
                            <h2 className="text-2xl font-bold tracking-wider">COLOUR POSTERS</h2>
                        </div>
                        <div className="card-body card-border border-t-0 border-primary">
                            <div className="grid grid-cols-2 md:grid-cols-4">
                                <Image src={spyXFamilyCol} alt="SPY x FAMILY Poster" className="w-full h-auto" />
                                <Image src={onePieceCol} alt="One Piece Poster" className="w-full h-auto" />
                                <Image src={hinamatsuriCol} alt="Hinamatsuri Poster" className="w-full h-auto" />
                                <Image src={berserkCol} alt="Berserk Poster" className="w-full h-auto" />
                                <Image src={uzumakiCol} alt="Uzumaki Poster" className="w-full h-auto" />
                                <Image src={fmaCol} alt="FMA Poster" className="w-full h-auto" />
                                <Image src={assClassCol} alt="Assassination Classroom Poster" className="w-full h-auto" />
                                <Image src={saikiCol} alt="Saiki K Poster" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
