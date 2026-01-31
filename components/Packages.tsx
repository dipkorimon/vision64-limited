'use client';
import { useState } from 'react';
import { Check, Zap, Star, Shield, Snowflake } from 'lucide-react';

const packages = [
    { id: 1, category: 'Economic', name: 'Economic Single', room: 'Single Room & Attach Washroom', price: '10,490', originalPrice: '10,990', deposit: '7000', refundable: '5500', icon: <Star className="w-5 h-5" /> },
    { id: 2, category: 'Elegant', name: 'Elegant Shared-2', room: '2 Seat Single bed & Common Washroom', price: '10,000', originalPrice: '10,490', deposit: '7000', refundable: '5500', icon: <Zap className="w-5 h-5" /> },
    { id: 3, category: 'Elegant', name: 'Elegant Shared-3', room: '3 Seat Single bed & Common Washroom', price: '9,490', originalPrice: '9,990', deposit: '7000', refundable: '5500', icon: <Zap className="w-5 h-5" /> },
    { id: 4, category: 'Elegant', name: 'Elegant Balcony', room: '4 Seat Single bed With Balcony & Common Washroom', price: '9,490', originalPrice: '9,990', deposit: '7000', refundable: '5500', popular: true, icon: <Zap className="w-5 h-5" /> },
    { id: 5, category: 'Elegant', name: 'Elegant Master', room: '4 Seat Single bed With Balcony & Attach Washroom', price: '10,000', originalPrice: '10,490', deposit: '7000', refundable: '5500', icon: <Zap className="w-5 h-5" /> },
    { id: 6, category: 'AC', name: 'Elegant AC Deck', room: '6, 8 Seat Double Deck Bed & Common Washroom', price: '11,490', originalPrice: '11,990', deposit: '7500', refundable: '6000', icon: <Snowflake className="w-5 h-5" /> },
    { id: 7, category: 'AC', name: 'Elegant AC Master', room: '8, 10 Seat Double Deck Bed & Attach Washroom', price: '11,490', originalPrice: '11,990', deposit: '7500', refundable: '6000', icon: <Snowflake className="w-5 h-5" /> },
    { id: 8, category: 'AC', name: 'Premium AC Deck', room: '4 Seat Double Deck Bed & Common Washroom', price: '12,000', originalPrice: '12,490', deposit: '7500', refundable: '6000', icon: <Snowflake className="w-5 h-5" /> },
];

const PackageSection = () => {
    const [activeTab, setActiveTab] = useState('All');
    const filteredPackages = activeTab === 'All' ? packages : packages.filter(pkg => pkg.category === activeTab);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Soft Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black tracking-[0.2em] uppercase">
                        Pricing Plans
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
                        Choose Your <span className="text-blue-600">Perfect Stay</span>
                    </h2>

                    {/* Tab Selector - Minimal White Style */}
                    <div className="flex flex-wrap justify-center gap-2 mt-10">
                        {['All', 'Economic', 'Elegant', 'AC'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer ${
                                    activeTab === tab
                                        ? 'bg-slate-900 text-white shadow-xl shadow-slate-200'
                                        : 'bg-slate-50 text-slate-500 border border-slate-200 hover:bg-white hover:border-blue-400'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Dynamic Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 cursor-pointer">
                    {filteredPackages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className={`group relative p-7 rounded-[2.5rem] border transition-all duration-500 flex flex-col justify-between overflow-hidden ${
                                pkg.popular
                                    ? 'bg-white border-blue-200 shadow-[0_20px_50px_rgba(37,99,235,0.1)] scale-[1.02]'
                                    : 'bg-white border-slate-100 hover:border-blue-300 hover:shadow-2xl hover:shadow-slate-200 shadow-sm'
                            }`}
                        >
                            {pkg.popular && (
                                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[9px] font-black px-4 py-1.5 rounded-bl-2xl uppercase tracking-tighter">
                                    Best Value
                                </div>
                            )}

                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                    {pkg.icon}
                                </div>
                                <h4 className="text-slate-900 text-xl font-black mb-1 tracking-tight">{pkg.name}</h4>
                                <p className="text-slate-500 text-[11px] leading-snug mb-6 h-8 line-clamp-2 font-medium">{pkg.room}</p>

                                <div className="mb-6 p-4 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-white group-hover:border-blue-100 transition-colors">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-black text-slate-900 font-mono">৳{pkg.price}</span>
                                        <span className="text-slate-400 line-through text-xs italic">৳{pkg.originalPrice}</span>
                                    </div>
                                    <p className="text-[10px] text-blue-600 font-bold mt-1 uppercase tracking-tighter">
                                        Refundable: ৳{pkg.refundable}
                                    </p>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {['3 Times Food', '30+ Facilities', 'High Speed Wifi'].map((feat, i) => (
                                        <li key={i} className="flex items-center gap-2 text-slate-600 text-xs font-semibold">
                                            <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                                                <Check className="w-2.5 h-2.5 text-green-600" strokeWidth={4} />
                                            </div>
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button className={`w-full py-4 rounded-2xl font-black text-xs tracking-widest transition-all duration-300 active:scale-95 cursor-pointer ${
                                pkg.popular
                                    ? 'bg-blue-600 text-white hover:bg-slate-900 shadow-lg shadow-blue-200'
                                    : 'bg-slate-900 text-white hover:bg-blue-600 shadow-lg shadow-slate-200'
                            }`}>
                                BOOK NOW
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PackageSection;