import { useRef } from 'react';
import { content } from '../../data/content';
import { BlobGreen, BlobPink, Squiggle, DoodleArrow, ScrollFloat, DoodleStar, DoodlePlanet, DoodleCube, DoodleZigzag, DoodleSpring } from '../ui/Illustrations';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Hero = () => {
    const circleRef = useRef(null);

    useGSAP(() => {
        gsap.to(circleRef.current, {
            scale: 1.2,
            opacity: 0.6,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });

        gsap.to(circleRef.current, {
            rotation: 360,
            duration: 20,
            repeat: -1,
            ease: "linear"
        });
    });



    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center px-6 relative overflow-hidden bg-white">
            {/* MindMarket-style Illustrations with Scroll Float */}
            <div className="absolute top-20 right-[-50px] w-96 h-96 opacity-20 -z-10 pointer-events-none">
                <ScrollFloat speed={1.5}>
                    <BlobGreen className="w-full h-full" />
                </ScrollFloat>
            </div>
            <div className="absolute bottom-20 left-[-50px] w-80 h-80 opacity-20 -z-10 pointer-events-none">
                <ScrollFloat speed={2}>
                    <BlobPink className="w-full h-full" />
                </ScrollFloat>
            </div>

            {/* Decorative Blur */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-meelo-accent/30 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto mt-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex flex-col gap-8 md:w-1/2">
                        {/* Spinning Badge & Role */}
                        <div className="flex items-center gap-6 mb-4">
                            <div className="relative w-24 h-24 flex items-center justify-center">
                                <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                                    <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
                                    <text className="text-[10px] uppercase font-bold tracking-widest">
                                        <textPath href="#curve" startOffset="0%">
                                            •• Open to Work •• Open to Work
                                        </textPath>
                                    </text>
                                </svg>
                                <div className="absolute  w-2 h-2 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="h-px w-20 bg-gray-200"></div>
                            <span className="uppercase tracking-widest text-xs font-bold text-gray-500 border border-gray-200 px-3 py-1 rounded-full">
                                {content.hero.role}
                            </span>
                        </div>

                        {/* Massive Heading */}
                        <h1 className="font-heading font-bold text-[10vw] md:text-[6vw] leading-[0.9] tracking-tighter text-meelo-black">
                            {content.hero.name.split(" ")[0]} <br />
                            <span className="text-gray-300 ">Azad</span>
                        </h1>

                        {/* Bottom Area */}
                        <div className="flex flex-col gap-8">
                            <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-600 max-w-lg">
                                {content.hero.intro}
                            </p>

                            <div className="flex items-center gap-8">
                                <a href="#projects" className="group flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-meelo-black group-hover:border-meelo-black transition-all">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:text-white transition-colors" stroke="currentColor" strokeWidth="2">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-bold uppercase tracking-widest text-gray-400 group-hover:text-meelo-black transition-colors">View Work</span>
                                </a>

                                <a href={content.hero.resume} download="Rounak_Azad_CV.pdf" className="group flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-meelo-black group-hover:border-meelo-black transition-all">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:text-white transition-colors" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-bold uppercase tracking-widest text-gray-400 group-hover:text-meelo-black transition-colors">Download CV</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* 3D Avatar Image */}
                    <div className="md:w-1/2 flex justify-center md:justify-end relative pr-16">
                        {/* GSAP Animated Circle */}
                        <div
                            ref={circleRef}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border-2 border-indigo-200 rounded-full -z-10 opacity-70 bg-gradient-to-tr from-indigo-100 to-purple-100 blur-xl"
                        ></div>

                        {/* Floating Illustrations */}
                        <div className="absolute top-0 right-10 w-12 h-12 z-20 pointer-events-none">
                            <ScrollFloat speed={1.2}>
                                <DoodleStar className="w-full h-full text-yellow-400" />
                            </ScrollFloat>
                        </div>
                        <div className="absolute bottom-10 left-0 w-16 h-16 z-20 pointer-events-none">
                            <ScrollFloat speed={1.5}>
                                <DoodlePlanet className="w-full h-full text-purple-400" />
                            </ScrollFloat>
                        </div>
                        <div className="absolute top-20 left-10 w-10 h-10 z-20 pointer-events-none">
                            <ScrollFloat speed={1.1}>
                                <DoodleCube className="w-full h-full text-blue-400" />
                            </ScrollFloat>
                        </div>
                        <div className="absolute bottom-20 right-0 w-14 h-6 z-20 pointer-events-none rotate-12">
                            <ScrollFloat speed={0.8}>
                                <DoodleZigzag className="w-full h-full text-orange-400" />
                            </ScrollFloat>
                        </div>
                        <div className="absolute top-1/2 -right-12 w-8 h-20 z-20 pointer-events-none rotate-45 opacity-60">
                            <ScrollFloat speed={1.3}>
                                <DoodleSpring className="w-full h-full text-pink-400" />
                            </ScrollFloat>
                        </div>

                        <div className="relative w-full max-w-md aspect-square md:scale-125 z-10 pointer-events-none select-none">
                            <img
                                src={content.about.image}
                                alt="3D Avatar"
                                className="w-full h-full object-contain drop-shadow-2xl animate-float-slow"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
