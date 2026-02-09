import { content } from '../../data/content';
import { BlobPink, BlobGreen, ScrollReveal, ScrollFloat, DoodleSpring, DoodleStar } from '../ui/Illustrations';

const About = () => {
    return (
        <section id="about" className="py-24 px-6 bg-white">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row gap-16 items-start">
                    <div className="w-full md:w-1/3 relative">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 sticky top-24 z-10">
                            {content.about.title}
                        </h2>
                        <div className="absolute top-32 left-0 w-48 h-48 opacity-20 hidden md:block pointer-events-none">
                            <ScrollFloat speed={0.5}>
                                <BlobGreen className="w-full h-full" />
                            </ScrollFloat>
                        </div>
                        <div className="absolute top-96 left-10 w-16 h-32 opacity-30 hidden md:block pointer-events-none">
                            <ScrollFloat speed={0.8}>
                                <DoodleSpring className="w-full h-full text-pink-400" />
                            </ScrollFloat>
                        </div>
                        <div className="absolute bottom-10 left-24 w-10 h-10 opacity-60 hidden md:block pointer-events-none">
                            <ScrollFloat speed={1.2}>
                                <DoodleStar className="w-full h-full text-yellow-400" />
                            </ScrollFloat>
                        </div>
                    </div>
                    <div className="w-full md:w-2/3">
                        <p className="text-xl md:text-2xl leading-relaxed text-gray-800 mb-12">
                            {content.about.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Education</h3>
                                <div className="space-y-6">
                                    {content.about.education.map((edu, idx) => (
                                        <div key={idx}>
                                            <h4 className="font-bold text-lg">{edu.degree}</h4>
                                            <p className="text-gray-600">{edu.school}</p>
                                            <span className="text-sm text-gray-400">{edu.period}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Achievements</h3>
                                <ul className="space-y-4">
                                    {content.about.achievements.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <span className="w-1.5 h-1.5 bg-meelo-black rounded-full mt-2.5 shrink-0"></span>
                                            <span className="text-gray-700 leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
