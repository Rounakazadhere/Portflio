import { content } from '../../data/content';
import { Squiggle, DoodleBurst, DoodleStar, ScrollFloat } from '../ui/Illustrations';

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 bg-white relative overflow-hidden">
            {/* Floating Decorations */}
            <div className="absolute top-10 left-10 w-16 h-16 opacity-40 hidden md:block">
                <ScrollFloat speed={1.5}>
                    <DoodleBurst className="w-full h-full text-indigo-400" />
                </ScrollFloat>
            </div>
            <div className="absolute bottom-20 right-20 w-12 h-12 opacity-50 hidden md:block">
                <ScrollFloat speed={1}>
                    <DoodleStar className="w-full h-full text-yellow-500" />
                </ScrollFloat>
            </div>

            <div className="container mx-auto flex flex-col md:flex-row gap-16 relative z-10">
                <div className="w-full md:w-1/3 relative">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 sticky top-24">
                        {content.skills.title}
                    </h2>
                    <div className="absolute top-0 -right-8 w-16 opacity-70 hidden md:block">
                        <Squiggle className="w-full text-indigo-400" />
                    </div>
                </div>
                <div className="w-full md:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        {content.skills.list.map((skill, index) => (
                            <div key={index} className="border-b border-gray-200 pb-4 flex justify-between items-end">
                                <span className="text-2xl md:text-3xl font-medium">{skill.name}</span>
                                <span className="text-sm text-gray-400">{skill.level}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;

