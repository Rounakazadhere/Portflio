import { useState, useEffect } from 'react';
import { content } from '../../data/content';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-heading font-bold tracking-tighter cursor-pointer " onClick={() => scrollToSection('hero')}>
                    {content.hero.name.split(" ")}
                </div>

                {/* Center Navigation */}
                <ul className="hidden md:flex items-center space-x-1 bg-white/50 backdrop-blur-sm px-2 py-1 rounded-full border border-black">
                    {['About', 'Skills', 'Projects', 'Certificates', 'Experience', 'Contact'].map((item) => (
                        <li key={item}>
                            <button
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="px-5 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-black hover:bg-white transition-all hover:shadow-lg border border-black/5"
                            >
                                {item}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Right Socials & Contact */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="hidden md:block bg-meelo-black text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-gray-800 transition-colors"
                    >
                        Let's Talk
                    </button>
                    <div className="flex gap-2">
                        {content.contact.socials.slice(0, 2).map((social, idx) => (
                            <a
                                key={idx}
                                href={social.link}
                                className="w-20 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:border-black hover:text-black transition-colors"
                            >
                                <span className="text-xs font-bold">{social.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
