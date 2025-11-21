'use client'

import Image from "next/image"
import Link from "next/link"

interface Props {
  selectedPage: string
}

export function Header({ selectedPage }: Props) {
  return (
    <div className="hero bg-base-200 mt-8 mb-8">
        <div className="flex items-center justify-center flex-col gap-6">
            <Image
                className="w-auto max-h-[75px] md:max-h-[170px] transition-all duration-300 ease-in-out"
                src="/crxlogo-nobg.png"
                alt="crxssed logo"
                width={100}
                height={100}
            />
            <h1 className="text-3xl font-bold text-center">Tanveer Najib</h1>
            <p className="text-sm">i make computers do stuff :)</p>
            <div className="flex flex-wrap sm:flex-nowrap gap-6 justify-center items-center w-screen">
                <hr className="hidden sm:block border-primary border w-full"></hr>
                <Link href="/" className={`btn ${selectedPage === 'home' ? 'btn-primary' : 'btn-secondary'}`}>Home</Link>
                <Link href="/software" className={`btn ${selectedPage === 'software' ? 'btn-primary' : 'btn-secondary'}`}>Software</Link>
                <Link href="/graphic-design" className={`btn ${selectedPage === 'graphic-design' ? 'btn-primary' : 'btn-secondary'}`}>Graphic Design</Link>
                <Link href="/fun-zone" className={`btn ${selectedPage === 'fun-zone' ? 'btn-primary' : 'btn-secondary'}`}>Fun Zone</Link>
                <hr className="hidden sm:block border-primary border w-full"></hr>
            </div>
        </div>
    </div>
  )
}
