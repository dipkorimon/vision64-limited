"use client";
import Image from 'next/image';
import { Search, MapPin, Home, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white" id="home">
            {/* Background Decorative Elements - Replaced with teal tints */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-[#1aa5c3]/10 rounded-full blur-[100px] opacity-60"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#1aa5c3]/5 rounded-full blur-[120px] opacity-70"></div>

            <div className="max-w-8xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Content */}
                <div className="space-y-8 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1aa5c3]/10 border border-[#1aa5c3]/20 text-[#85bc44] animate-fade-in">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#85bc44] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#85bc44]"></span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest">Premium Living in Uttara</span>
                    </div>

                    <h1 className="text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
                        Find Your <span className="text-[#85bc44] italic">Vision</span> <br />
                        of a Perfect Stay
                    </h1>

                    <p className="text-lg text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        Environment friendly, security, and comfort all in one place. Specifically designed for students and professionals in the heart of Dhaka.
                    </p>

                    {/* --- Interactive Action Bar (Replaced Search) --- */}
                    <div className="relative max-w-2xl bg-white p-2 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col md:flex-row items-center gap-2">

                        {/* Location Info */}
                        <div className="flex-1 flex items-center gap-4 px-3 py-3 md:border-r border-slate-100 w-full group cursor-default">
                            <div className="p-2.5 bg-slate-50 rounded-2xl group-hover:bg-[#85bc44]/10 transition-colors duration-300">
                                <MapPin className="text-[#85bc44]" size={22} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Our Location</span>
                                <span className="text-[15px] font-bold text-slate-800">Uttara Sector 10</span>
                            </div>
                        </div>

                        {/* Quick Info / Availability */}
                        <div className="flex-1 flex items-center gap-4 px-3 py-3 w-full group cursor-default">
                            <div className="p-2.5 bg-slate-50 rounded-2xl group-hover:bg-[#1aa5c3]/10 transition-colors duration-300">
                                <div className="relative">
                                    <Home className="text-[#1aa5c3]" size={22} />
                                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-600 border-2 border-white rounded-full animate-pulse"></span>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Status</span>
                                <span className="text-[15px] font-bold text-slate-800">Seats Available</span>
                            </div>
                        </div>

                        {/* Scroll to Packages Button */}
                        <button
                            onClick={() => {
                                const elem = document.getElementById('packages');
                                if (elem) {
                                    const offset = 100;
                                    const elementPosition = elem.getBoundingClientRect().top + window.pageYOffset;
                                    window.scrollTo({
                                        top: elementPosition - offset,
                                        behavior: 'smooth'
                                    });
                                }
                            }}
                            className="relative py-3 px-3 bg-[#1aa5c3] text-white rounded-2xl flex items-center justify-center gap-3 overflow-hidden group transition-all duration-300 shadow-[0_10px_20px_rgba(26,165,195,0.2)] hover:shadow-[0_15px_30px_rgba(26,165,195,0.4)] hover:-translate-y-0.5 active:scale-95 w-full md:w-auto cursor-pointer"
                        >
                            {/* Background Hover Slide Effect */}
                            <div className="absolute inset-0 bg-[#85bc44] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>

                            <div className="relative z-10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                                <ArrowRight size={20} />
                            </div>

                            {/* Subtle Glow Overlay */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-white/0 via-white/10 to-white/0"></div>
                        </button>
                    </div>

                    <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
                        <div>
                            <p className="text-2xl font-black text-slate-900">100+</p>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Happy Residents</p>
                        </div>
                        <div className="w-px h-10 bg-slate-200"></div>
                        <div>
                            <p className="text-2xl font-black text-slate-900">4.6/5</p>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Google Reviews</p>
                        </div>
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="relative">
                    <div className="relative z-10 w-full h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                        <Image
                            src="/home.png"
                            alt="Luxury Hostel Room"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 border border-slate-50 animate-bounce-slow">
                        <div className="group relative w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-green-200 hover:scale-110 shadow-sm hover:shadow-green-200/50">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-6 h-6 text-green-600 transition-transform duration-300 group-hover:rotate-6"
                            >
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-black text-slate-900">Verified Listing</p>
                            <p className="text-xs text-slate-500">100% Secure Housing</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;