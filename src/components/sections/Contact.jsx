import { content } from '../../data/content';
import { DoodleArrow, DoodleSpring, DoodlePlanet, ScrollFloat, DoodleBurst, DoodleStar } from '../ui/Illustrations';

const Contact = () => {
    return (
        <section id="contact" className="py-32 px-6 bg-white relative overflow-hidden">
            {/* Background Fun */}
            <div className="absolute top-40 left-10 w-16 h-16 opacity-40 hidden md:block">
                <ScrollFloat speed={1.5}>
                    <DoodleBurst className="w-full h-full text-indigo-400" />
                </ScrollFloat>
            </div>
            <div className="absolute top-20 left-20 w-20 h-40 opacity-20 hidden md:block -rotate-12">
                <ScrollFloat speed={0.8}>
                    <DoodleSpring className="w-full h-full text-pink-400" />
                </ScrollFloat>
            </div>
            <div className="absolute bottom-20 left-10 w-12 h-12 opacity-50 hidden md:block">
                <ScrollFloat speed={1}>
                    <DoodleStar className="w-full h-full text-yellow-500" />
                </ScrollFloat>
            </div>
            <div className="absolute bottom-40 left-32 w-24 h-24 opacity-30 hidden md:block">
                <ScrollFloat speed={1.2}>
                    <DoodlePlanet className="w-full h-full" />
                </ScrollFloat>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-start">
                    <div className="w-full md:w-1/3">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400">
                            {content.contact.title}
                        </h2>
                    </div>
                    <div className="w-full md:w-2/3">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                            Let's build something great.
                        </h2>

                        <form className="space-y-6 max-w-xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
                                        placeholder="Enter Your Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
                                        placeholder="Enter Your Email"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 transition-all resize-none"
                                    placeholder="Write The Message"
                                ></textarea>
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="group relative inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full overflow-hidden hover:bg-gray-900 transition-all active:scale-95"
                                >
                                    <span className="font-medium">Send Message</span>
                                    <DoodleArrow className="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </form>

                        <div className="mt-12 pt-8 border-t border-gray-100">
                            <p className="text-gray-500">
                                Or email me directly at <a href={`mailto:${content.contact.email}`} className="text-black font-medium hover:underline">{content.contact.email}</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
