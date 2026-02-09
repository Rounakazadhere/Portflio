import { content } from '../../data/content';
import { DoodleArrow, ScrollReveal, DoodleZigzag, DoodleRing, ScrollFloat } from '../ui/Illustrations';

const Projects = () => {
    return (
        <section id="projects" className="py-32 px-6 bg-white relative">
            <div className="container mx-auto">
                <div className="flex justify-between items-end mb-20 relative">
                    <div className="relative">
                        <h2 className="font-heading text-6xl md:text-8xl font-bold text-meelo-black tracking-tighter">
                            Selected <br /> Works
                        </h2>
                        <div className="absolute top-0 -right-24 w-24 opacity-60 hidden md:block rotate-12 pointer-events-none">
                            <ScrollReveal delay={0.3}>
                                <DoodleArrow className="w-full text-meelo-accent" />
                            </ScrollReveal>
                        </div>
                        <div className="absolute top-1/2 -left-12 w-16 h-8 opacity-40 hidden md:block -rotate-12 pointer-events-none">
                            <ScrollFloat speed={0.8}>
                                <DoodleZigzag className="w-full h-full text-indigo-400" />
                            </ScrollFloat>
                        </div>
                        <div className="absolute bottom-0 right-[-100px] w-20 h-20 opacity-30 hidden md:block pointer-events-none">
                            <ScrollFloat speed={1.2}>
                                <DoodleRing className="w-full h-full text-pink-500" />
                            </ScrollFloat>
                        </div>
                    </div>
                    <span className="hidden md:block text-xl text-gray-400 font-medium">( {content.projects.items.length} )</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                    {content.projects.items.map((project, index) => (
                        <div key={index} className={`group cursor-pointer ${index % 2 === 1 ? 'md:translate-y-24' : ''}`}>
                            <a href={project.live || project.link} target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden rounded-2xl border border-gray-100 mb-8 bg-gray-50 aspect-[4/3]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                                <div className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </div>
                            </a>

                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                                    <h3 className="font-heading text-3xl font-bold text-meelo-black">
                                        {project.title}
                                    </h3>
                                    <span className="text-sm font-medium uppercase tracking-widest text-gray-400">
                                        {project.category}
                                    </span>
                                </div>
                                <p className="text-gray-500 text-lg mt-2 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex gap-4 mt-4">
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm font-bold underline underline-offset-4 hover:text-black transition-colors">
                                            View Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
