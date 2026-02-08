"use client";
import Image from 'next/image';
import { Search, MapPin, Home } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white" id="home">
            {/* Background Decorative Elements - Replaced with teal tints */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-[#1aa5c3]/10 rounded-full blur-[100px] opacity-60"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#1aa5c3]/5 rounded-full blur-[120px] opacity-70"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Content */}
                <div className="space-y-8 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1aa5c3]/10 border border-[#1aa5c3]/20 text-[#186f86] animate-fade-in">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#186f86] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#186f86]"></span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest">Premium Living in Uttara</span>
                    </div>

                    <h1 className="text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
                        Find Your <span className="text-[#1aa5c3] italic">Vision</span> <br />
                        of a Perfect Stay
                    </h1>

                    <p className="text-lg text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        Experience luxury, security, and comfort all in one place. Specifically designed for students and professionals in the heart of Dhaka.
                    </p>

                    {/* Modern Search Bar */}
                    <div className="relative max-w-2xl bg-white p-2 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col md:flex-row items-center gap-2">
                        <div className="flex-1 flex items-center gap-3 px-4 py-2 border-r border-slate-100 last:border-0 w-full">
                            <MapPin className="text-[#1aa5c3]" size={20} />
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase font-bold text-slate-400">Location</span>
                                <input type="text" placeholder="Uttara Sector 10" className="text-sm font-semibold text-slate-800 outline-none w-full bg-transparent" />
                            </div>
                        </div>
                        <div className="flex-1 flex items-center gap-3 px-4 py-2 w-full">
                            <Home className="text-[#1aa5c3]" size={20} />
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase font-bold text-slate-400">Room Type</span>
                                <select className="text-sm font-semibold text-slate-800 outline-none w-full bg-transparent appearance-none">
                                    <option>Single Deluxe</option>
                                    <option>Shared Suite</option>
                                </select>
                            </div>
                        </div>
                        {/* Search button matches your theme now */}
                        <button className="bg-[#186f86] hover:bg-[#186f86] text-white p-4 rounded-2xl transition-all shadow-lg shadow-[#186f86]/20 group w-full md:w-auto flex justify-center cursor-pointer">
                            <Search size={22} className="group-hover:scale-110 transition-transform" />
                        </button>
                    </div>

                    <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
                        <div>
                            <p className="text-2xl font-black text-slate-900">100+</p>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Happy Residents</p>
                        </div>
                        <div className="w-px h-10 bg-slate-200"></div>
                        <div>
                            <p className="text-2xl font-black text-slate-900">4.5/5</p>
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