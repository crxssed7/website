'use client'

import { Header } from "@/components/Header";
import Image from "next/image";
import stakkdMono from "@/public/projects/stakkd-mono.svg";
import stakkd from "@/public/projects/stakkd.svg";
import kaboomMono from "@/public/projects/kaboom-mono.svg";
import kaboom from "@/public/projects/kaboom.svg";
import tankobonMono from "@/public/projects/tankobon-mono.svg";
import tankobon from "@/public/projects/tankobon.svg";
import tsukiMono from "@/public/projects/tsuki-mono.svg";
import tsuki from "@/public/projects/tsuki.svg";
import passguardMono from "@/public/projects/passguard-mono.svg";
import passguard from "@/public/projects/passguard.svg";
import comicpeepsMono from "@/public/projects/comicpeeps-mono.svg";
import comicpeeps from "@/public/projects/comicpeeps.svg";

export default function Home() {
    const handleMouseEnter = (event) => {
        event.target.classList.add("colored");
    };

    const handleMouseLeave = (event) => {
        event.target.classList.remove("colored");
    };

    return (
        <>
            <Header selectedPage="software"></Header>
            <div className="max-w-7xl w-full mx-auto px-4 pb-6">
                <div className="flex flex-col gap-8">
                    <div className="card">
                        <div className="card-title card-border border-primary justify-center p-6">
                            <h2 className="text-2xl font-bold tracking-wider">SOFTWARE PROJECTS</h2>
                        </div>
                        <div className="card-body card-border border-t-0 border-primary">
                            <p className="text-md">Below is a list of all the projects I&apos;ve worked on. Projects marked with (WIP) are not yet complete/usable. I use Git (with the repositories hosted on Github) for version control across all of my projects.</p>
                            <p className="text-md">I also do some freelance work sometimes - if you&apos;re interested in a software project check out my <a href="https://stellarworks.dev/" className="underline">freelancing site</a>.</p>
                        </div>
                    </div>

                    <div className="card card-border border-primary grid grid-cols-1 sm:grid-cols-3 group">
                        <div className="col-span-1 flex items-center justify-center outline-2 outline-primary">
                            <Image src={stakkdMono} alt="Stakkd Logo" className="h-full block group-hover:hidden" />
                            <Image src={stakkd} alt="Stakkd Logo" className="h-full hidden group-hover:block" />
                        </div>
                        <div className="col-span-2 flex flex-col items-center justify-center p-8">
                            <h2 className="text-2xl font-bold tracking-wider mb-6">Stakkd (WIP)</h2>
                            <p className="mb-6 text-md">The open platform for movie and TV tracking</p>
                            <p className="mb-2 text-md">Technologies used:</p>
                            <div className="flex flex-wrap gap-4 mx-auto mb-6">
                                <i className="devicon-ruby-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Ruby"></i>
                                <i className="devicon-rails-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Ruby on Rails"></i>
                                <i className="devicon-postgresql-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Postgresql"></i>
                                <i className="devicon-tailwindcss-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="TailwindCSS"></i>
                                <i className="devicon-turbo-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Hotwire Turbo"></i>
                                <i className="devicon-rspec-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="RSpec"></i>
                                <i className="devicon-githubactions-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Github Actions CI"></i>
                            </div>
                            <a href="https://github.com/stakkd-tv/stakkd" className="btn btn-primary">Source</a>
                        </div>
                    </div>

                    <div className="card card-border border-primary grid grid-cols-1 sm:grid-cols-3 group">
                        <div className="col-span-1 sm:order-2 flex items-center justify-center outline-2 outline-primary">
                            <Image src={kaboomMono} alt="Stakkd Logo" className="h-full block group-hover:hidden" />
                            <Image src={kaboom} alt="Stakkd Logo" className="h-full hidden group-hover:block" />
                        </div>
                        <div className="col-span-2 flex flex-col items-center justify-center p-8">
                            <h2 className="text-2xl font-bold tracking-wider mb-6">Kaboom</h2>
                            <p className="mb-6 text-md">A community driven comics tracker</p>
                            <p className="mb-2 text-md">Technologies used:</p>
                            <div className="flex flex-wrap gap-4 mx-auto mb-6">
                                <i className="devicon-ruby-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Ruby"></i>
                                <i className="devicon-rails-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Ruby on Rails"></i>
                                <i className="devicon-postgresql-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Postgresql"></i>
                                <i className="devicon-tailwindcss-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="TailwindCSS"></i>
                                <i className="devicon-turbo-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Hotwire Turbo"></i>
                                <i className="devicon-rspec-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="RSpec"></i>
                                <i className="devicon-githubactions-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Github Actions CI"></i>
                            </div>
                            <div className="flex gap-2">
                                <a href="https://github.com/kaboom-db/kaboom" className="btn btn-primary">Source</a>
                                <a href="https://kaboom.rocks" className="btn btn-primary">Website</a>
                            </div>
                        </div>
                    </div>

                    <div className="card card-border border-primary grid grid-cols-1 sm:grid-cols-3 group">
                        <div className="col-span-1 flex items-center justify-center outline-2 outline-primary">
                            <Image src={tankobonMono} alt="Stakkd Logo" className="h-full block group-hover:hidden" />
                            <Image src={tankobon} alt="Stakkd Logo" className="h-full hidden group-hover:block" />
                        </div>
                        <div className="col-span-2 flex flex-col items-center justify-center p-8">
                            <h2 className="text-2xl font-bold tracking-wider mb-6">Tankobon</h2>
                            <p className="mb-6 text-md">A community driven site to document manga chapters and volumes</p>
                            <p className="mb-2 text-md">Technologies used:</p>
                            <div className="flex flex-wrap gap-4 mx-auto mb-6">
                                <i className="devicon-python-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Python"></i>
                                <i className="devicon-django-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Django"></i>
                                <i className="devicon-postgresql-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Postgresql"></i>
                                <i className="devicon-tailwindcss-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="TailwindCSS"></i>
                                <i className="devicon-circleci-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Circle CI"></i>
                            </div>
                            <div className="flex gap-2">
                                <a href="https://github.com/crxssed7/tankobon" className="btn btn-primary">Source</a>
                                <a href="https://tankobon.fly.dev/" className="btn btn-primary">Website</a>
                            </div>
                        </div>
                    </div>

                    <div className="card card-border border-primary grid grid-cols-1 sm:grid-cols-3 group">
                        <div className="col-span-1 sm:order-2 flex items-center justify-center outline-2 outline-primary">
                            <Image src={tsukiMono} alt="Stakkd Logo" className="h-full block group-hover:hidden" />
                            <Image src={tsuki} alt="Stakkd Logo" className="h-full hidden group-hover:block" />
                        </div>
                        <div className="col-span-2 flex flex-col items-center justify-center p-8">
                            <h2 className="text-2xl font-bold tracking-wider mb-6">Tsuki (WIP)</h2>
                            <p className="mb-6 text-md">Read digital manga and comics from anywhere</p>
                            <p className="mb-2 text-md">Technologies used:</p>
                            <div className="flex flex-wrap gap-4 mx-auto mb-6">
                                <i className="devicon-go-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Go"></i>
                                <i className="devicon-nextjs-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Next.js"></i>
                                <i className="devicon-react-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="React"></i>
                                <i className="devicon-tailwindcss-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="TailwindCSS"></i>
                                <i className="devicon-typescript-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Typescript"></i>
                            </div>
                            <a href="https://github.com/tsuki-reader" className="btn btn-primary">Source</a>
                        </div>
                    </div>

                    <div className="card card-border border-primary grid grid-cols-1 sm:grid-cols-3 group">
                        <div className="col-span-1 flex items-center justify-center outline-2 outline-primary">
                            <Image src={passguardMono} alt="Passguard Logo" className="h-full block group-hover:hidden" />
                            <Image src={passguard} alt="Passguard Logo" className="h-full hidden group-hover:block" />
                        </div>
                        <div className="col-span-2 flex flex-col items-center justify-center p-8">
                            <h2 className="text-2xl font-bold tracking-wider mb-6">PassGuard</h2>
                            <p className="mb-6 text-md">A password manager and generator for Windows</p>
                            <p className="mb-2 text-md">Technologies used:</p>
                            <div className="flex flex-wrap gap-4 mx-auto mb-6">
                                <i className="devicon-csharp-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="C#"></i>
                            </div>
                            <div className="flex gap-2">
                                <a href="https://github.com/kitric/passguard" className="btn btn-primary">Source</a>
                                <a href="https://github.com/kitric/passguard/releases/tag/1.0.0" className="btn btn-primary">Download</a>
                            </div>
                        </div>
                    </div>

                    <div className="card card-border border-primary grid grid-cols-1 sm:grid-cols-3 group">
                        <div className="col-span-1 sm:order-2 flex items-center justify-center outline-2 outline-primary">
                            <Image src={comicpeepsMono} alt="ComicPeeps Logo" className="h-full block group-hover:hidden" />
                            <Image src={comicpeeps} alt="ComicPeeps Logo" className="h-full hidden group-hover:block" />
                        </div>
                        <div className="col-span-2 flex flex-col items-center justify-center p-8">
                            <h2 className="text-2xl font-bold tracking-wider mb-6">ComicPeeps</h2>
                            <p className="mb-6 text-md">A digital comics reader and manager for Windows</p>
                            <p className="mb-2 text-md">Technologies used:</p>
                            <div className="flex flex-wrap gap-4 mx-auto mb-6">
                                <i className="devicon-csharp-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="C#"></i>
                            </div>
                            <div className="flex gap-2">
                                <a href="https://github.com/kitric/comicpeeps" className="btn btn-primary">Source</a>
                                <a href="https://github.com/kitric/comicpeeps/releases/tag/v1.0.0" className="btn btn-primary">Download</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
