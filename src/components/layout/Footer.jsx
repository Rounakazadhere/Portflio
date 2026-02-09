import { content } from '../../data/content';
import { DoodleSpring, DoodleBurst, ScrollReveal, TimelineSVG } from '../ui/Illustrations';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-meelo-black text-white py-20 px-6 relative overflow-hidden">
            {/* Playful Footer Decorations */}
            <div className="absolute top-10 left-10 w-12 h-32 opacity-30">
                <DoodleSpring className="w-full h-full" />
            </div>
            <div className="absolute bottom-10 right-20 w-24 h-24 opacity-20">
                <ScrollReveal>
                    <DoodleBurst className="w-full h-full" />
                </ScrollReveal>
            </div>



            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center relative z-10">
                <div className="mb-4 md:mb-0">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} {content.hero.name}. All rights reserved.
                    </p>
                </div>
                <div className="flex space-x-6">
                    {content.contact.socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-black transition-colors"
                        >
                            {social.name}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
