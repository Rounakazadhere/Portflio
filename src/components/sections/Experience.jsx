
import { content } from '../../data/content';
import { BlobGreen, DoodleStar, Squiggle, ScrollFloat, DoodleSpring, DoodleCube } from '../ui/Illustrations';

const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 -left-64 w-[500px] h-[500px] opacity-10 rotate-90">
                    <BlobGreen className="w-full h-full" />
                </div>
                <div className="absolute top-20 right-20 w-12 h-12 opacity-40 pointer-events-none">
                    <ScrollFloat speed={1.5}>
                        <DoodleStar className="w-full h-full text-green-400" />
                    </ScrollFloat>
                </div>
                <div className="absolute top-1/2 right-10 w-16 h-32 opacity-30 hidden md:block pointer-events-none">
                    <ScrollFloat speed={0.9}>
                        <DoodleSpring className="w-full h-full text-orange-400" />
                    </ScrollFloat>
                </div>
                <div className="absolute bottom-10 left-10 w-24 opacity-30 rotate-45 pointer-events-none">
                    <ScrollFloat speed={0.5}>
                        <Squiggle className="w-full text-blue-300" />
                    </ScrollFloat>
                </div>
                <div className="absolute bottom-1/3 left-1/4 w-14 h-14 opacity-25 hidden md:block pointer-events-none">
                    <ScrollFloat speed={1.2}>
                        <DoodleCube className="w-full h-full text-purple-400" />
                    </ScrollFloat>
                </div>
            </div>
            <div className="container mx-auto relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-start">
                    <div className="w-full md:w-1/3">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 sticky top-24">
                            {content.experience.title}
                        </h2>
                    </div>
                    <div className="w-full md:w-2/3">
                        <div className="space-y-12">
                            {content.experience.items.map((job, index) => (
                                <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-12 border-l border-gray-200 pl-8 relative">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-[6.5px] top-2"></div>
                                    <div className="md:w-1/4">
                                        <span className="text-sm text-gray-400 font-mono">{job.period}</span>
                                    </div>
                                    <div className="md:w-3/4">
                                        <h3 className="text-xl font-medium mb-1">{job.role}</h3>
                                        <p className="text-lg text-gray-600 mb-4 font-normal">{job.company}</p>
                                        <p className="text-gray-500 leading-relaxed">
                                            {job.description}
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

export default Experience;
