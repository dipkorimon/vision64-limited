"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState('Home'); // Active state tracker

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
        { name: 'Home', href: '/' },
        { name: 'Packages', href: '#packages' },
        { name: 'Amenities', href: '#amenities' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="fixed w-full z-50 px-4 md:px-8 py-4 transition-all duration-500 ease-in-out">
            <nav
                className={`mx-auto max-w-7xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-2xl border
                ${scrolled
                    ? "bg-white/40 backdrop-blur-md border-white/20 shadow-lg py-2"
                    : "bg-transparent border-transparent py-4"}`}
            >
                <div className="px-6 flex justify-between items-center">

                    {/* Brand Logo */}
                    <Link href="/" className="group flex items-center gap-3 outline-none">
                        <div className="relative flex items-center justify-center w-12 h-12">
                            <div className="absolute inset-0 bg-blue-600/10 rounded-2xl rotate-6 group-hover:rotate-12 group-hover:bg-blue-600/20 transition-all duration-500"></div>
                            <div className="absolute inset-0 bg-blue-600/10 rounded-2xl -rotate-6 group-hover:-rotate-12 transition-all duration-500"></div>
                            <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white shadow-[0_8px_16px_rgba(37,99,235,0.3)] group-hover:shadow-blue-400/40 group-hover:-translate-y-1 transition-all duration-300">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 transform group-hover:scale-110 transition-transform">
                                    <path d="M6 3L12 18L18 3"/>
                                </svg>
                            </div>
                        </div>

                        <div className="flex flex-col -space-y-1">
                            <span className="text-xl font-extrabold tracking-tighter text-slate-900 flex items-center gap-1">
                                VISION
                                <span className="relative inline-block text-blue-600 italic">
                                    64
                                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-100 -z-10 group-hover:h-2 transition-all"></span>
                                </span>
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-blue-500 transition-colors">
                                Limited
                            </span>
                        </div>
                    </Link>

                    {/* Navigation Links with Active Logic */}
                    <div className="hidden md:flex items-center gap-1 bg-slate-50/50 p-1 rounded-2xl border border-slate-100/50">
                        {navLinks.map((item) => {
                            const isActive = activeTab === item.name;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setActiveTab(item.name)}
                                    className="relative px-6 py-2.5 text-sm font-bold transition-all duration-300 group outline-none"
                                >
                                    {/* Text Animation */}
                                    <span className={`relative z-10 block transform transition-all duration-300 ease-out 
                                        ${isActive ? "-translate-y-1 text-blue-600" : "text-slate-600 group-hover:-translate-y-1 group-hover:text-blue-600"}`}>
                                        {item.name}
                                    </span>

                                    {/* Magnetic Background (Active/Hover) */}
                                    <span className={`absolute inset-0 z-0 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] rounded-xl transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                                        ${isActive ? "scale-100 opacity-100" : "scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100"}`}>
                                    </span>

                                    {/* Bottom Dot Indicator (Active/Hover) */}
                                    <span className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full transition-all duration-300
                                        ${isActive ? "scale-100" : "scale-0 group-hover:scale-100 delay-100"}`}>
                                    </span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Gradient Glass Button */}
                    <button className="relative group p-[1.5px] overflow-hidden rounded-full transition-all duration-300 active:scale-95 cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-[spin_4s_linear_infinite]"></div>
                        <div className="relative px-8 py-3 bg-white rounded-full flex items-center gap-2.5 transition-all duration-500 overflow-hidden">
                            <span className="relative z-10 font-black text-[13px] tracking-tight text-slate-800 group-hover:text-blue-600 transition-all duration-300 group-hover:-translate-x-0.5">
                                BOOK A SEAT
                            </span>
                            <div className="relative z-10 w-1.5 h-1.5 bg-blue-600 rounded-full group-hover:scale-[1.6] group-hover:shadow-[0_0_10px_rgba(37,99,235,0.5)] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"></div>
                            <div className="absolute inset-0 bg-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;