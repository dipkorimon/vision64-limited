'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Wifi, ShieldCheck, Utensils, WashingMachine, Zap,
    BookOpen, Fan, Laptop, Tv, Cctv, Flower2, ThermometerSun,
    X, CheckCircle2, Layers, Wind, Trash2, DoorOpen, Bed,
    Lamp, Lock, Phone, Droplets
} from 'lucide-react';

const mainFacilities = [
    { icon: <Utensils className="w-6 h-6" />, title: "3 Times Food", desc: "Healthy & delicious meals" },
    { icon: <Wifi className="w-6 h-6" />, title: "High Speed WiFi", desc: "Buffer-free 5G internet" },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "24/7 Security", desc: "Professional guard & CCTV" },
    { icon: <WashingMachine className="w-6 h-6" />, title: "Laundry Service", desc: "Fresh clothes everyday" },
    { icon: <ThermometerSun className="w-6 h-6" />, title: "Full AC Rooms", desc: "Climate controlled living" },
    { icon: <Zap className="w-6 h-6" />, title: "Power Backup", desc: "24/7 Generator support" },
    { icon: <BookOpen className="w-6 h-6" />, title: "Study Space", desc: "Quiet study space for focus" },
    { icon: <Flower2 className="w-6 h-6" />, title: "Roof Facility", desc: "Relaxing green space" },
];

const all30Facilities = [
    "Ac/Non-Ac Room", "Three Meals a day", "24/7 CCTV Controlled", "Lift", "Security",
    "Beds", "Bed Sheets", "Pillows", "Shoe Rack", "Personal Locker",
    "Personal USB Port", "Generator", "Personal Lamp", "Cloth Stand", "Windows Cover",
    "Fan Facility", "Free Wi-Fi", "House Cleaning", "Washing Machine", "Pure Water",
    "Study Space", "Smart TV", "Dining Room", "Room & Washroom Cleaning", "Door Locker",
    "Every Floor Telephone Service", "30 Days Change Mattress", "Live Kitchen", "Roof Facility", "And many more..."
];

const Amenities = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <section className="py-24 bg-white relative overflow-hidden" id="amenities">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-blue-600 font-black text-sm uppercase tracking-[0.3em] mb-4">World Class Facilities</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
                            Everything You Need for a <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Premium Lifestyle</span>
                        </h3>
                    </div>
                    <p className="text-slate-500 font-bold text-lg max-w-xs leading-tight border-l-4 border-blue-600 pl-4">
                        30+ premium facilities designed for your comfort.
                    </p>
                </div>

                {/* Main 8 Amenities Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {mainFacilities.map((item, index) => (
                        <div key={index} className="group p-8 rounded-[2rem] bg-slate-50 border-2 border-slate-100 transition-all duration-500 hover:bg-white hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-100 hover:-translate-y-2">
                            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-blue-600 mb-6 shadow-sm border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                                {item.icon}
                            </div>
                            <h4 className="text-xl font-black text-slate-900 mb-2">{item.title}</h4>
                            <p className="text-slate-500 text-sm font-bold leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* View All Button Section */}
                <div className="mt-16 p-8 rounded-[2.5rem] bg-slate-900 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 opacity-20 blur-[80px] -mr-20 -mt-20"></div>
                    <div className="relative z-10 text-center md:text-left">
                        <h4 className="text-white text-2xl font-black mb-2 tracking-tight">And many more surprises!</h4>
                        <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.2em]">CCTV • Filtered Water • Daily Cleaning • Personal Locker • Dining Room</p>
                    </div>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="relative z-10 px-8 py-3 bg-blue-600 text-white font-black rounded-2xl hover:bg-white hover:text-black transition-all duration-300 shadow-xl shadow-blue-900/40 active:scale-95 cursor-pointer"
                    >
                        VIEW ALL 30+ FACILITIES
                    </button>
                </div>

                {/* MODAL POPUP WINDOW */}
                <AnimatePresence>
                    {isOpen && (
                        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
                            {/* Backdrop - High Opacity to hide underlying text */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsOpen(false)}
                                className="absolute inset-0 bg-slate-950/95 backdrop-blur-md"
                            />

                            {/* Modal Content */}
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                                className="relative bg-white w-full max-w-4xl max-h-[85vh] overflow-hidden rounded-[2.5rem] shadow-2xl"
                            >
                                {/* Header */}
                                <div className="sticky top-0 bg-white border-b border-slate-100 p-8 flex justify-between items-center z-10">
                                    <div>
                                        <h3 className="text-2xl font-black text-slate-900">All Premium Facilities</h3>
                                        <p className="text-blue-600 font-bold text-sm uppercase tracking-widest">Vision 64 Limited • Uttara Branch</p>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-500 hover:bg-red-500 hover:text-white transition-all shadow-sm cursor-pointer"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                {/* Scrollable List of 30 items */}
                                <div className="p-8 overflow-y-auto max-h-[60vh] custom-scrollbar cursor-pointer">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {all30Facilities.map((facility, idx) => (
                                            <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                <span className="text-slate-700 font-bold text-sm">{facility}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="p-6 bg-slate-50 text-center border-t border-slate-100">
                                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
                                        Included in every premium package
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Amenities;