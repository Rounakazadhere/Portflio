import { content } from '../../data/content';
import Avatar3D from '../../assets/photos/self_3d_final.png';
import { DoodlePlanet, DoodleStar, ScrollFloat, DoodleSpring, Squiggle, DoodleBurst, DoodleCube, DoodleZigzag, DoodleRing, BlobPink } from '../ui/Illustrations';

const Certificates = () => {
    return (
        <section id="certificates" className="py-24 px-6 bg-gray-50 relative overflow-hidden">
            {/* Floating Background Illustrations */}
            <div className="absolute top-20 left-10 w-24 h-24 opacity-60 hidden md:block pointer-events-none">
                <ScrollFloat speed={1.2}>
                    <DoodlePlanet className="w-full h-full" />
                </ScrollFloat>
            </div>
            <div className="absolute top-1/3 right-20 w-16 h-40 opacity-30 hidden md:block -rotate-12 pointer-events-none">
                <ScrollFloat speed={0.9}>
                    <DoodleSpring className="w-full h-full text-indigo-300" />
                </ScrollFloat>
            </div>
            <div className="absolute bottom-1/3 left-16 w-20 opacity-40 hidden md:block rotate-45 pointer-events-none">
                <ScrollFloat speed={0.6}>
                    <Squiggle className="w-full text-pink-400" />
                </ScrollFloat>
            </div>
            <div className="absolute top-1/2 left-20 w-16 h-16 opacity-40 hidden md:block pointer-events-none">
                <ScrollFloat speed={1.1}>
                    <DoodleCube className="w-full h-full text-blue-400" />
                </ScrollFloat>
            </div>
            <div className="absolute bottom-1/4 right-32 w-24 h-12 opacity-30 hidden md:block rotate-12 pointer-events-none">
                <ScrollFloat speed={0.7}>
                    <DoodleZigzag className="w-full h-full text-orange-400" />
                </ScrollFloat>
            </div>
            <div className="absolute top-1/4 left-1/2 w-14 h-14 opacity-25 hidden md:block pointer-events-none">
                <ScrollFloat speed={1.3}>
                    <DoodleRing className="w-full h-full text-purple-400" />
                </ScrollFloat>
            </div>
            <div className="absolute bottom-20 left-10 w-16 h-16 opacity-30 hidden md:block pointer-events-none">
                <ScrollFloat speed={1.5}>
                    <DoodleBurst className="w-full h-full text-green-400" />
                </ScrollFloat>
            </div>
            <div className="absolute bottom-40 right-10 w-16 h-16 opacity-80 hidden md:block pointer-events-none">
                <ScrollFloat speed={0.8}>
                    <DoodleStar className="w-full h-full" />
                </ScrollFloat>
            </div>
            {/* New set to fill the gaps */}
            <div className="absolute top-[45%] right-16 w-12 h-12 opacity-40 hidden md:block pointer-events-none">
                <ScrollFloat speed={1.1}>
                    <DoodleCube className="w-full h-full text-pink-500" />
                </ScrollFloat>
            </div>
            <div className="absolute top-[60%] left-10 w-20 h-20 opacity-30 hidden md:block -rotate-45 pointer-events-none">
                <ScrollFloat speed={0.9}>
                    <DoodleSpring className="w-full h-full text-yellow-400" />
                </ScrollFloat>
            </div>
            <div className="absolute top-[75%] right-20 w-14 h-14 opacity-50 hidden md:block pointer-events-none">
                <ScrollFloat speed={1.3}>
                    <DoodleRing className="w-full h-full text-indigo-400" />
                </ScrollFloat>
            </div>
            <div className="absolute top-[85%] left-24 w-12 h-24 opacity-30 hidden md:block rotate-12 pointer-events-none">
                <ScrollFloat speed={0.7}>
                    <DoodleZigzag className="w-full h-full text-green-500" />
                </ScrollFloat>
            </div>
            <div className="absolute top-[92%] right-10 w-16 h-16 opacity-40 hidden md:block pointer-events-none">
                <ScrollFloat speed={1.0}>
                    <DoodlePlanet className="w-full h-full" />
                </ScrollFloat>
            </div>
            {/* New Massive Background Element */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 opacity-10 hidden md:block pointer-events-none">
                <ScrollFloat speed={0.5}>
                    <BlobPink className="w-full h-full" />
                </ScrollFloat>
            </div>

            {/* Extra Density Pack */}
            <div className="absolute top-[25%] right-[25%] w-8 h-8 opacity-40 hidden md:block pointer-events-none">
                <ScrollFloat speed={1.6}>
                    <DoodleStar className="w-full h-full text-yellow-300" />
                </ScrollFloat>
            </div>
            <div className="absolute bottom-[20%] left-[30%] w-10 h-20 opacity-20 hidden md:block rotate-90 pointer-events-none">
                <ScrollFloat speed={0.8}>
                    <DoodleSpring className="w-full h-full text-indigo-300" />
                </ScrollFloat>
            </div>
            <div className="absolute top-[65%] right-[5%] w-12 h-12 opacity-30 hidden md:block pointer-events-none">
                <ScrollFloat speed={1.2}>
                    <DoodleCube className="w-full h-full text-green-300" />
                </ScrollFloat>
            </div>
            <div className="absolute top-[35%] left-[15%] w-6 h-6 opacity-50 hidden md:block pointer-events-none">
                <ScrollFloat speed={0.9}>
                    <DoodlePlanet className="w-full h-full text-pink-300" />
                </ScrollFloat>
            </div>
            <div className="absolute bottom-[20%] left-[40%] w-14 h-4 opacity-30 hidden md:block -rotate-12 pointer-events-none">
                <ScrollFloat speed={1.1}>
                    <DoodleZigzag className="w-full h-full text-orange-300" />
                </ScrollFloat>
            </div>

            {/* Maximum Density Pack (Wave 3) */}
            <div className="absolute top-[5%] left-[45%] w-6 h-6 opacity-30 hidden md:block pointer-events-none">
                <ScrollFloat speed={1.8}>
                    <DoodleRing className="w-full h-full text-purple-300" />
                </ScrollFloat>
            </div>
            <div className="absolute top-[55%] right-[30%] w-10 h-10 opacity-25 hidden md:block rotate-45 pointer-events-none">
                <ScrollFloat speed={1.0}>
                    <DoodleCube className="w-full h-full text-blue-300" />
                </ScrollFloat>
            </div>
            <div className="absolute bottom-[5%] left-[10%] w-12 h-12 opacity-40 hidden md:block pointer-events-none">
                <ScrollFloat speed={1.4}>
                    <DoodleBurst className="w-full h-full text-pink-400" />
                </ScrollFloat>
            </div>
            <div className="absolute top-[25%] left-[85%] w-8 h-8 opacity-35 hidden md:block -rotate-12 pointer-events-none">
                <ScrollFloat speed={1.3}>
                    <DoodleStar className="w-full h-full text-green-300" />
                </ScrollFloat>
            </div>
            <div className="absolute top-[88%] left-[50%] w-16 h-4 opacity-20 hidden md:block pointer-events-none">
                <ScrollFloat speed={0.7}>
                    <DoodleZigzag className="w-full h-full text-gray-400" />
                </ScrollFloat>
            </div>

            {/* 3D Character Illustration (Floating) */}
            <div className="absolute top-80 left-20 w-48 h-48 opacity-90 hidden md:block pointer-events-none z-0">
                <ScrollFloat speed={1.4}>
                    <img src={Avatar3D} alt="3D Character" className="w-full h-full object-contain drop-shadow-xl" />
                </ScrollFloat>
            </div>

            <div className="container mx-auto relative z-20">
                <div className="flex flex-col md:flex-row gap-16 items-start">
                    <div className="w-full md:w-1/3">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 sticky top-24">
                            {content.certificates.title}
                        </h2>
                    </div>
                    <div className="w-full md:w-2/3">
                        <div className="space-y-12">
                            {content.certificates.items.map((cert, index) => (
                                <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-12 border-l border-gray-200 pl-8 relative">
                                    <div className="absolute w-3 h-3 bg-meelo-accent rounded-full -left-[6.5px] top-2 border border-white"></div>
                                    <div className="md:w-1/4">
                                        <span className="text-sm text-gray-400 font-mono">{cert.period}</span>
                                    </div>
                                    <div className="md:w-3/4">
                                        <div className="flex justify-between items-start mb-1">
                                            <div>
                                                <h3 className="text-xl font-medium">{cert.title}</h3>
                                                <p className="text-lg text-gray-600 mb-2 font-normal">{cert.issuer}</p>
                                            </div>
                                            {cert.link && (
                                                <a
                                                    href={cert.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 text-sm font-medium hover:text-meelo-black transition-colors shrink-0"
                                                >
                                                    View
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                                    </svg>
                                                </a>
                                            )}
                                        </div>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            {cert.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certificates;
