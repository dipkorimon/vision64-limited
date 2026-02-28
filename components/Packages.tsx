'use client';
import { useState } from 'react';
import { Check, Zap, Star, Shield, Snowflake } from 'lucide-react';
import { JSX } from "react/jsx-runtime";

const packages = [
    {
        id: 1,
        category: 'Economic',
        name: 'Economic Single',
        room: 'Single Room & Attach Washroom',
        price: '10,490',
        originalPrice: '10,990',
        deposit: '7000',
        admin_charge: '1500',
        refundable: '5500',
        icon: <Star className="w-5 h-5"/>
    },
    {
        id: 2,
        category: 'Elegant',
        name: 'Elegant Shared-2',
        room: '2 Seat Single bed & Common Washroom',
        price: '10,000',
        originalPrice: '10,490',
        deposit: '7000',
        admin_charge: '1500',
        refundable: '5500',
        icon: <Zap className="w-5 h-5"/>
    },
    {
        id: 3,
        category: 'Elegant',
        name: 'Elegant Shared-3',
        room: '3 Seat Single bed & Common Washroom',
        price: '9,490',
        originalPrice: '9,990',
        deposit: '7000',
        admin_charge: '1500',
        refundable: '5500',
        icon: <Zap className="w-5 h-5"/>
    },
    {
        id: 4,
        category: 'Elegant',
        name: 'Elegant Balcony',
        room: '4 Seat Single bed With Balcony & Common Washroom',
        price: '9,490',
        originalPrice: '9,990',
        deposit: '7000',
        admin_charge: '1500',
        refundable: '5500',
        popular: true,
        icon: <Zap className="w-5 h-5"/>
    },
    {
        id: 5,
        category: 'Elegant',
        name: 'Elegant Master',
        room: '4 Seat Single bed With Balcony & Attach Washroom',
        price: '10,000',
        originalPrice: '10,490',
        deposit: '7000',
        admin_charge: '1500',
        refundable: '5500',
        icon: <Zap className="w-5 h-5"/>
    },
    {
        id: 6,
        category: 'AC',
        name: 'Elegant AC Deck',
        room: '6, 8 Seat Double Deck Bed & Common Washroom',
        price: '11,490',
        originalPrice: '11,990',
        deposit: '7500',
        admin_charge: '1500',
        refundable: '6000',
        icon: <Snowflake className="w-5 h-5"/>
    },
    {
        id: 7,
        category: 'AC',
        name: 'Elegant AC Master',
        room: '8, 10 Seat Double Deck Bed & Attach Washroom',
        price: '11,490',
        originalPrice: '11,990',
        deposit: '7500',
        admin_charge: '1500',
        refundable: '6000',
        icon: <Snowflake className="w-5 h-5"/>
    },
    {
        id: 8,
        category: 'AC',
        name: 'Premium AC Deck',
        room: '4 Seat Double Deck Bed & Common Washroom',
        price: '12,000',
        originalPrice: '12,490',
        deposit: '7500',
        admin_charge: '1500',
        refundable: '6000',
        icon: <Snowflake className="w-5 h-5"/>
    },
];

const PackageSection = () => {
    const [activeTab, setActiveTab] = useState('All');
    const filteredPackages = activeTab === 'All' ? packages : packages.filter(pkg => pkg.category === activeTab);

    const handleBookNow = (pkg: any) => {
        const phoneNumber = "8801328960996";
        const message = `Hello, I am interested in booking a stay at your hostel. 

Package Details:
-------------------------
📌 Name: ${pkg.name}
🏠 Room: ${pkg.room}
💵 Price: ৳${pkg.price}
💰 Admin charge: ৳${pkg.admin_charge}
💰 Advance Money: ৳${pkg.refundable}

Please let me know the availability and booking process. Thank you!`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden" id="packages">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[#1aa5c3]/10 border border-[#1aa5c3]/20 text-[#85bc44] text-[10px] font-black tracking-[0.2em] uppercase">
                        Pricing Plans
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
                        Choose Your <span className="text-[#85bc44]">Perfect Stay</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-2 mt-10">
                        {['All', 'Economic', 'Elegant', 'AC'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer ${
                                    activeTab === tab
                                        ? 'bg-slate-900 text-white shadow-xl shadow-slate-200'
                                        : 'bg-slate-50 text-slate-500 border border-slate-200 hover:bg-white hover:border-[#85bc44]'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredPackages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className={`group relative p-7 rounded-[2.5rem] border transition-all duration-500 flex flex-col justify-between overflow-hidden ${
                                pkg.popular
                                    ? 'bg-white border-[#1aa5c3]/30 shadow-[0_20px_50px_rgba(26,165,195,0.1)] scale-[1.02]'
                                    : 'bg-white border-slate-100 hover:border-[#1aa5c3]/30 hover:shadow-2xl hover:shadow-slate-200 shadow-sm'
                            }`}
                        >
                            {pkg.popular && (
                                <div className="absolute top-0 right-0 bg-[#85bc44] text-white text-[9px] font-black px-4 py-1.5 rounded-bl-2xl uppercase tracking-tighter">
                                    Best Value
                                </div>
                            )}

                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#85bc44] mb-2 group-hover:bg-[#85bc44] group-hover:text-white transition-all duration-500">
                                    {pkg.icon}
                                </div>
                                <h4 className="text-slate-900 text-xl font-black mb-1 tracking-tight">{pkg.name}</h4>
                                <p className="text-slate-500 text-[11px] leading-snug mb-1 h-8 line-clamp-2 font-medium">{pkg.room}</p>

                                <div className="mb-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-white group-hover:border-[#1aa5c3]/20 transition-all duration-300">
                                    {/* Price Section */}
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="text-3xl font-black text-slate-900 font-mono tracking-tighter">৳{pkg.price}</span>
                                        <span className="text-slate-400 line-through text-xs italic">৳{pkg.originalPrice}</span>
                                    </div>

                                    {/* Fees Section - Tags Style */}
                                    <div className="flex flex-col gap-1.5">
                                        <div className="flex items-center justify-between px-3 py-1.5 bg-[#1aa5c3]/5 border border-[#1aa5c3]/10 rounded-lg group-hover:bg-[#1aa5c3]/10 transition-colors">
                                            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Admin Charge</span>
                                            <span className="text-xs font-black text-[#1aa5c3]">৳{pkg.admin_charge}</span>
                                        </div>

                                        <div className="flex items-center justify-between px-3 py-1.5 bg-[#85bc44]/5 border border-[#85bc44]/10 rounded-lg group-hover:bg-[#85bc44]/10 transition-colors">
                                            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Advance Money</span>
                                            <span className="text-xs font-black text-[#85bc44]">৳{pkg.refundable}</span>
                                        </div>
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-4">
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

                            <button
                                onClick={() => handleBookNow(pkg)}
                                className={`w-full py-4 rounded-2xl font-black text-xs tracking-widest transition-all duration-300 active:scale-95 cursor-pointer ${
                                    pkg.popular
                                        ? 'bg-[#85bc44] text-white hover:bg-slate-900 shadow-lg shadow-[#1aa5c3]/20'
                                        : 'bg-slate-900 text-white hover:bg-[#85bc44] shadow-lg shadow-slate-200'
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