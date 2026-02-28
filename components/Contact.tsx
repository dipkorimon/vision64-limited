'use client';
import { motion } from 'framer-motion';
import { MapPin, Phone, Send, Clock } from 'lucide-react';

const Contact = () => {
    const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.337032128828!2d90.3845946761066!3d23.87764958434729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755f5c917838e0b%3A0x6a2ab5b29dd5c3ac!2sVision64%20Limited!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd";

    return (
        <section className="py-24 bg-white" id="location">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#85bc44] text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-blue-100">
                        <MapPin className="w-3 h-3" /> Exact Location
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
                        Find Us on <span className="text-[#85bc44] italic">Google Map</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Information Sidebar */}
                    <div className="lg:col-span-4 space-y-6">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 shadow-sm"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-[#85bc44] flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-200">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-black text-slate-900 mb-2">Hostel Address</h4>
                            <p className="text-slate-600 font-bold leading-relaxed">
                                House-23, Road-11, Sector-10,<br />
                                Uttara, Dhaka-1230, Bangladesh
                            </p>
                        </motion.div>

                        <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white overflow-hidden relative group">
                            <div className="relative z-10">
                                <h4 className="text-xl font-black mb-2 italic">Need Directions?</h4>
                                <p className="text-slate-400 text-sm font-medium mb-6">Call us if you're having trouble finding the location.</p>
                                <a href="tel:+8801328960996" className="inline-flex items-center gap-2 text-[#1aa5c3] font-black hover:text-white transition-colors">
                                    <Phone className="w-4 h-4" /> +880 1328 960996
                                </a>
                                <a href="tel:+8801985698402" className="inline-flex items-center gap-2 text-[#1aa5c3] font-black hover:text-white transition-colors">
                                    <Phone className="w-4 h-4" /> +880 1985 698402
                                </a>
                            </div>
                            <MapPin className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5 rotate-12" />
                        </div>
                    </div>

                    {/* Fixed Google Map with Marker */}
                    <div className="lg:col-span-8 h-[500px]">
                        <div className="w-full h-full rounded-[3rem] overflow-hidden border-8 border-slate-50 shadow-2xl relative group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.2345!2d90.3869!3d23.8843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c51917838e0b%3A0x9a2ab5b29dd1c3ac!2sVision64%20Limited!5e0!3m2!1sen!2sbd!4v1715000000000!5m2!1sen!2sbd"
                                width="100%"
                                height="550"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>

                            {/* Overlay Badge */}
                            <div
                                className="absolute top-6 left-6 right-6 flex justify-between items-center pointer-events-none">
                                <div
                                    className="bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-white/50">
                                    <p className="text-[10px] font-black text-[#85bc44] uppercase tracking-widest">Marked Location</p>
                                    <p className="text-sm font-black text-slate-900">Vision64 Limited (House-23)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;