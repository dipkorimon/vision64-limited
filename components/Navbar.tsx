"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState('Home');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 5) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Packages', href: '#packages' },
        { name: 'Amenities', href: '#amenities' },
        { name: 'Dining', href: '#dining' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#location' },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string, name: string) => {
        e.preventDefault();
        setActiveTab(name);

        const targetId = href.replace('#', '');
        const elem = document.getElementById(targetId);

        if (elem) {
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = elem.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        } else if (href === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <header className="fixed w-full z-50 px-4 md:px-8 py-4 transition-all duration-500 ease-in-out">
            <nav
                className={`mx-auto max-w-7xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-2xl border
                ${scrolled
                    ? "bg-white/70 backdrop-blur-md border-white/20 shadow-lg py-2"
                    : "bg-transparent border-transparent py-4"}`}
            >
                <div className="px-6 flex justify-between items-center">

                    {/* --- Simple Clean Logo Section --- */}
                    <Link href="/" className="outline-none">
                        <div className="flex items-center justify-center w-44 h-14">
                            <img
                                src="/vision64-logo.png"
                                alt="Vision 64 Limited"
                                className="w-full h-full object-contain scale-[4.0]"
                            />
                        </div>
                    </Link>
                    {/* ---------------------------------- */}

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-1 bg-slate-50/50 p-1 rounded-2xl border border-slate-100/50">
                        {navLinks.map((item) => {
                            const isActive = activeTab === item.name;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => scrollToSection(e, item.href, item.name)}
                                    className="relative px-6 py-2.5 text-sm font-bold transition-all duration-300 group outline-none"
                                >
                                    <span className={`relative z-10 block transform transition-all duration-300 ease-out 
                                        ${isActive ? "-translate-y-1 text-[#85bc44]" : "text-slate-600 group-hover:-translate-y-1 group-hover:text-[#85bc44]"}`}>
                                        {item.name}
                                    </span>

                                    <span className={`absolute inset-0 z-0 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] rounded-xl transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                                        ${isActive ? "scale-100 opacity-100" : "scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100"}`}>
                                    </span>

                                    <span className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#85bc44] rounded-full transition-all duration-300
                                        ${isActive ? "scale-100" : "scale-0 group-hover:scale-100 delay-100"}`}>
                                    </span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Action Button */}
                    <a
                        href="https://wa.me/8801328960996?text=Hello!%20I%20am%20interested%20in%20booking%20a%20seat.%20Could%20you%20please%20provide%20more%20details?"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                    >
                        <button className="relative group p-[1.5px] overflow-hidden rounded-full transition-all duration-300 active:scale-95 cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1aa5c3] to-transparent animate-[spin_4s_linear_infinite]"></div>
                            <div className="relative px-8 py-3 bg-white rounded-full flex items-center gap-2.5 transition-all duration-500 overflow-hidden">
                                <span className="relative z-10 font-black text-[13px] tracking-tight text-slate-800 group-hover:text-[#1aa5c3] transition-all duration-300 group-hover:-translate-x-0.5">
                                    BOOK A SEAT
                                </span>
                                <div className="relative z-10 w-1.5 h-1.5 bg-[#1aa5c3] rounded-full group-hover:scale-[1.6] group-hover:shadow-[0_0_10px_rgba(26,165,195,0.5)] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"></div>
                                <div className="absolute inset-0 bg-[#1aa5c3]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </button>
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;