"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState('Home');
    const [isOpen, setIsOpen] = useState(false);

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
        { name: 'Virtual Tour', href: '#video-gallery' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#location' },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string, name: string) => {
        e.preventDefault();
        setActiveTab(name);
        setIsOpen(false);

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
        <header className="fixed w-full z-50 px-3 md:px-8 py-4 transition-all duration-500 ease-in-out">
            <nav
                className={`mx-auto max-w-7xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-2xl border
                ${scrolled || isOpen
                    ? "bg-white/90 backdrop-blur-md border-white/20 shadow-lg py-2"
                    : "bg-transparent border-transparent py-4"}`}
            >
                <div className="px-4 md:px-6 flex justify-between items-center">

                    {/* --- Logo --- */}
                    <Link href="/" className="outline-none shrink-0">
                        <div className="flex items-center justify-center w-32 md:w-44 h-12 md:h-14">
                            <img
                                src="/vision64-logo.png"
                                alt="Vision 64 Limited"
                                className="w-full h-full object-contain scale-[2.2] md:scale-[4.0]"
                            />
                        </div>
                    </Link>

                    {/* --- Desktop Navigation ---
                        Changed 'lg:flex' to 'xl:flex' because links are many
                    */}
                    <div className="hidden xl:flex items-center gap-1 bg-slate-50/50 p-1 rounded-2xl border border-slate-100/50">
                        {navLinks.map((item) => {
                            const isActive = activeTab === item.name;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => scrollToSection(e, item.href, item.name)}
                                    className="relative px-3 xxl:px-5 py-2.5 text-[13px] xxl:text-sm font-bold transition-all duration-300 group outline-none"
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

                    {/* --- Right Actions (CTA + Toggle) --- */}
                    <div className="flex items-center gap-2">
                        {/* Visible on Small Tablet and Up (SM: 640px+) */}
                        <div className="hidden sm:block">
                            <a
                                href="https://wa.me/8801328960996?text=Hello!%20I%20am%20interested..."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="relative group p-[1.5px] overflow-hidden rounded-full transition-all duration-300 active:scale-95 cursor-pointer">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1aa5c3] to-transparent animate-[spin_4s_linear_infinite]"></div>
                                    <div className="relative px-4 md:px-8 py-2 md:py-3 bg-white rounded-full flex items-center gap-2.5 transition-all duration-500 overflow-hidden">
                                        <span className="relative z-10 font-black text-[11px] md:text-[13px] tracking-tight text-slate-800 group-hover:text-[#1aa5c3] transition-all duration-300">
                                            BOOK A SEAT
                                        </span>
                                        <div className="relative z-10 w-1.5 h-1.5 bg-[#1aa5c3] rounded-full group-hover:scale-[1.6] transition-all duration-500"></div>
                                    </div>
                                </button>
                            </a>
                        </div>

                        {/* Mobile Toggle Button - Visible up to 1280px (XL) */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="xl:hidden p-2 text-slate-600 outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* --- Mobile/Tablet Menu Panel --- */}
                <div className={`xl:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="px-6 pb-8 pt-2 flex flex-col gap-1">
                        {navLinks.map((item) => {
                            const isActive = activeTab === item.name;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => scrollToSection(e, item.href, item.name)}
                                    className={`px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-3
                                    ${isActive ? "bg-white text-[#85bc44] shadow-sm translate-x-2" : "text-slate-600"}`}
                                >
                                    <span className={`w-1 h-1 rounded-full bg-[#85bc44] transition-all duration-300 ${isActive ? "scale-150" : "scale-0"}`}></span>
                                    {item.name}
                                </Link>
                            );
                        })}

                        {/* --- Mobile Only Action Button --- */}
                        <div className="sm:hidden mt-4 pt-4 border-t border-slate-100 flex justify-center">
                            <a
                                href="https://wa.me/8801328960996"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full"
                            >
                                <button className="relative group p-[1.5px] overflow-hidden rounded-full transition-all duration-300 active:scale-95 cursor-pointer w-full">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1aa5c3] to-transparent animate-[spin_4s_linear_infinite]"></div>
                                    <div className="relative px-8 py-4 bg-white rounded-full flex items-center justify-center gap-2.5 transition-all duration-500">
                                        <span className="font-black text-[13px] tracking-tight text-slate-800">
                                            BOOK A SEAT
                                        </span>
                                        <div className="w-1.5 h-1.5 bg-[#1aa5c3] rounded-full"></div>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;