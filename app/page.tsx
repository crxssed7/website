'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons/faFilePdf";
import { Header } from "@/components/Header";

export default function Home() {
    const handleMouseEnter = (event) => {
        event.target.classList.add("colored");
    };

    const handleMouseLeave = (event) => {
        event.target.classList.remove("colored");
    };

    return (
        <>
            <Header selectedPage="home"></Header>
            <div className="max-w-7xl w-full mx-auto px-4 pb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 transition-all duration-300 ease-in-out">
                    <div className="card">
                        <div className="card-title card-border border-primary justify-center p-6">
                            <h2 className="text-2xl font-bold tracking-wider">HELLO THERE</h2>
                        </div>
                        <div className="card-body card-border border-t-0 border-primary">
                            <p className="text-md grow-0"><i><b>Welcome to my corner of the world wide web!</b></i></p>
                            <p className="text-md grow-0">I&apos;m Tanveer, a software developer from the UK. I mainly work within the realm of bespoke websites and mobile apps, however I enjoy working in other branches of software development such as custom desktop applications and game development.</p>
                            <p className="text-md grow-0">
                                I started my software development journey at the age of 12, developing games on the Scratch educational platform
                                (you can even see my decade old accounts <a className="underline" href="https://scratch.mit.edu/users/D_OrangeGAMING/">here</a> and <a className="underline" href="https://scratch.mit.edu/users/HelloHiByeBye1/">here</a>).
                                I transitioned to <a href="https://extra-life.itch.io/" className="underline">developing games with Unity and C#</a> before branching out to more general software development.
                            </p>
                            <p className="text-md grow-0">In my spare time, I like to watch tv shows, read manga, and tinker with my Linux setup :)</p>
                            <p className="text-md grow-0"><i><b>What is this site built with?</b></i></p>
                            <p className="text-md grow-0">This site is built using Next.js, TypeScript, and Tailwind CSS (daisyUI). It wasn&apos;t always like this though - my first site was built with Weebly (crxssed7.weebly.com), and was then rewritten using vanilla HTML and Javascript with a bit of Bootstrap sprinkled in between. You can see the old site <a href="https://old.crxssed.dev" className="underline">here</a>.</p>
                            <p className="text-md grow-0">Deploys are automated using Github Actions whenever I push changes to the main branch, and is hosted on Github pages.</p>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="card">
                            <div className="card-title card-border border-primary justify-center p-6">
                                <h2 className="text-2xl font-bold tracking-wider">IMPORTANT LINKS</h2>
                            </div>
                            <div className="card-body card-border border-t-0 border-primary">
                                <div className="flex flex-col gap-4">
                                    <a href="https://github.com/crxssed7" className="text-md flex gap-2 items-center group">
                                        <div className="h-6 w-6">
                                            <FontAwesomeIcon icon={faGithub} className="h-6! group-hover:text-[#BFFFD1]"></FontAwesomeIcon>
                                        </div>
                                        Github
                                    </a>

                                    <a href="https://www.linkedin.com/in/tanveer-najib/" className="text-md flex gap-2 items- group">
                                        <div className="h-6 w-6">
                                            <FontAwesomeIcon icon={faLinkedin} className="h-6! group-hover:text-[#0a66c2]"></FontAwesomeIcon>
                                        </div>
                                        LinkedIn
                                    </a>

                                    <a href="/Tanveer CV.pdf" className="text-md flex gap-2 items-center group">
                                        <div className="h-6 w-6">
                                            <FontAwesomeIcon icon={faFilePdf} className="h-6! group-hover:text-gray-400"></FontAwesomeIcon>
                                        </div>
                                        Resume
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="card mt-8">
                            <div className="card-title card-border border-primary justify-center p-6">
                                <h2 className="text-2xl font-bold tracking-wider">TECH I&apos;VE USED</h2>
                            </div>
                            <div className="card-body card-border border-t-0 border-primary">
                                <div className="flex flex-wrap gap-4 mx-auto">
                                    <i className="devicon-ruby-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Ruby"></i>
                                    <i className="devicon-python-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Python"></i>
                                    <i className="devicon-javascript-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Javascript"></i>
                                    <i className="devicon-typescript-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Typescript"></i>
                                    <i className="devicon-go-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Go"></i>
                                    <i className="devicon-csharp-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="C#"></i>
                                    <i className="devicon-kotlin-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Kotlin"></i>
                                    <i className="devicon-swift-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Swift"></i>
                                    <i className="devicon-rails-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Ruby on Rails"></i>
                                    <i className="devicon-django-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Django"></i>
                                    <i className="devicon-laravel-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Laravel"></i>
                                    <i className="devicon-flask-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Flask"></i>
                                    <i className="devicon-turbo-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Hotwire Turbo"></i>
                                    <i className="devicon-tailwindcss-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="TailwindCSS"></i>
                                    <i className="devicon-react-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="React"></i>
                                    <i className="devicon-nextjs-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Next.js"></i>
                                    <i className="devicon-expo-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Expo"></i>
                                    <i className="devicon-postgresql-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Postgresql"></i>
                                    <i className="devicon-mysql-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="MySQL"></i>
                                    <i className="devicon-sqlite-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="SQLite"></i>
                                    <i className="devicon-rspec-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="RSpec"></i>
                                    <i className="devicon-docker-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Docker"></i>
                                    <i className="devicon-githubactions-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Github Actions CI"></i>
                                    <i className="devicon-jenkins-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Jenkins"></i>
                                    <i className="devicon-circleci-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="CirclCI"></i>
                                    <i className="devicon-unity-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Unity"></i>
                                    <i className="devicon-nginx-plain text-3xl p-2 hover:bg-base-300 hover:text-base-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title="Nginx"></i>
                                </div>
                                <p>+ plus more, this list is ever-growing...</p>
                            </div>
                        </div>
                    </div>

                    <div className="card col-span-full">
                        <div className="card-title card-border border-primary justify-center p-6">
                            <Image src="/stakkd.svg" alt="Stakkd" width={200} height={200} className="h-20" />
                        </div>
                        <div className="card-body card-border border-t-0 border-primary text-center">
                            <h2 className="text-2xl font-bold tracking-wider mb-6">FEATURED PROJECT - STAKKD</h2>
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
                            <a href="https://github.com/stakkd-tv/stakkd" className="btn btn-primary">Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
