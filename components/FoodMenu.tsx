'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Sunrise, Sun, Moon, Clock, Activity, Flame } from 'lucide-react';

const weeklyMenu = [
    {
        day: "Sunday",
        breakfast: { items: "Vegetable khicuri", protein: "8g", calories: "320", image: '/khichuri.jpg' },
        lunch: { items: "Rice, Dal, Fish, Vegetable", protein: "28g", calories: "650", image: "fish.jpg" },
        dinner: { items: "Rice, Dal, Chicken Curry", protein: "32g", calories: "700", image: "chicken.jpg" }
    },
    {
        day: "Monday",
        breakfast: { items: "Rice, Vorta, Dal", protein: "6g", calories: "380", image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?q=80&w=800&auto=format&fit=crop" },
        lunch: { items: "Rice, Dal, Chicken Curry", protein: "32g", calories: "720", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop" },
        dinner: { items: "Rice, Dal, Fish, Vegetable", protein: "26g", calories: "610", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop" }
    },
    {
        day: "Tuesday",
        breakfast: { items: "Ruti, Vegetable", protein: "5g", calories: "280", image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=800&auto=format&fit=crop" },
        lunch: { items: "Rice, Dal, Dim, Vaji/Vorta", protein: "14g", calories: "550", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop" },
        dinner: { items: "Rice, Dal, Chicken Curry", protein: "32g", calories: "700", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop" }
    },
    {
        day: "Wednesday",
        breakfast: { items: "Ruti, Dal/Vaji", protein: "7g", calories: "310", image: "/dal.jpg" },
        lunch: { items: "Rice, Dal, Chicken Curry", protein: "32g", calories: "720", image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?q=80&w=800&auto=format&fit=crop" },
        dinner: { items: "Rice, Dal, Fish, Vegetable", protein: "28g", calories: "630", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop" }
    },
    {
        day: "Thursday",
        breakfast: { items: "Rice, Vorta/Shak, Dal", protein: "6g", calories: "380", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop" },
        lunch: { items: "Rice, Dal, Chicken Curry", protein: "32g", calories: "720", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800&auto=format&fit=crop" },
        dinner: { items: "Khicuri, Dim Vuna", protein: "18g", calories: "590", image: "/khichuri.jpg" }
    },
    {
        day: "Friday",
        breakfast: { items: "Ruti, Gila koliza/Dal", protein: "12g", calories: "350", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop" },
        lunch: { items: "Beef Curry, Steamed Rice, Dal, Chicken Roast, Ghee Polao", protein: "35g", calories: "850", image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=800&auto=format&fit=crop" },
        dinner: { items: "Rice, Dal, Vegetable, Vorta", protein: "10g", calories: "500", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop" }
    },
    {
        day: "Saturday",
        breakfast: { items: "Ruti, Dal/Vaji", protein: "7g", calories: "310", image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=800&auto=format&fit=crop" },
        lunch: { items: "Rice, Dal, Fish, Vegetable", protein: "28g", calories: "630", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop" },
        dinner: { items: "Rice, Dal, Dim, Vaji/Vorta", protein: "14g", calories: "550", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop" }
    },
];

const FoodMenu = () => {
    const [activeDay, setActiveDay] = useState("Sunday");
    const currentMenu: any = weeklyMenu.find(m => m.day === activeDay);

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden" id="dining">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-[#1aa5c3] text-xs font-black uppercase tracking-widest mb-4">
                        <Utensils className="w-4 h-4" />
                        Weekly Meal Plan
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
                        Delicious & <span className="text-[#1aa5c3]">Healthy Food</span>
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {weeklyMenu.map((item) => (
                        <button
                            key={item.day}
                            onClick={() => setActiveDay(item.day)}
                            className={`px-6 py-3 rounded-2xl text-sm font-black transition-all duration-300 cursor-pointer ${
                                activeDay === item.day ? 'bg-[#1aa5c3] text-white shadow-xl scale-105' : 'bg-white text-slate-500 border border-slate-100 hover:bg-blue-50'
                            }`}
                        >
                            {item.day}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <AnimatePresence mode="wait">
                        <motion.div key={activeDay} className="contents">
                            <MenuCard time="Breakfast" icon={<Sunrise className="w-6 h-6 text-orange-500" />} data={currentMenu?.breakfast} accentColor="bg-orange-500" />
                            <MenuCard time="Lunch" icon={<Sun className="w-6 h-6 text-yellow-500" />} data={currentMenu?.lunch} accentColor="bg-yellow-500" />
                            <MenuCard time="Dinner" icon={<Moon className="w-6 h-6 text-indigo-500" />} data={currentMenu?.dinner} accentColor="bg-indigo-500" />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

const MenuCard = ({ time, icon, data, accentColor }: any) => {
    const [status, setStatus] = useState({ isOpen: false, message: "" });
    const itemsList = data?.items?.split(',') || [];

    useEffect(() => {
        const checkStatus = () => {
            const now = new Date();
            const currentTime = now.getHours() * 60 + now.getMinutes();

            const slots: any = {
                "Breakfast": { start: 8 * 60, end: 10 * 60, label: "08:00 AM", endLabel: "10:00 AM" },
                "Lunch": { start: 13 * 60 + 30, end: 17 * 60, label: "01:30 PM", endLabel: "05:00 PM" },
                "Dinner": { start: 20 * 60, end: 22 * 60 + 30, label: "08:00 PM", endLabel: "10:30 PM" }
            };

            const mySlot = slots[time];
            const isOpen = currentTime >= mySlot.start && currentTime < mySlot.end;

            setStatus({
                isOpen,
                message: isOpen ? `Open until ${mySlot.endLabel}` : `Opens at ${mySlot.label}`
            });
        };

        checkStatus();
        const timer = setInterval(checkStatus, 60000);
        return () => clearInterval(timer);
    }, [time]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            whileHover={{ y: -10 }}
            className="group relative bg-white rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full"
        >
            <div className="relative h-52 w-full overflow-hidden">
                <img src={data?.image} alt={time} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg">
                        {icon}
                    </div>
                    <h4 className="text-2xl font-black text-white">{time}</h4>
                </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
                <div className="flex gap-4 mb-6">
                    <div className="flex items-center gap-1.5 text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
                        <Flame className="w-3.5 h-3.5" />
                        <span className="text-[11px] font-black">{data?.calories} kcal</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                        <Activity className="w-3.5 h-3.5" />
                        <span className="text-[11px] font-black">{data?.protein} Protein</span>
                    </div>
                </div>

                <div className="space-y-3 mb-8 flex-grow">
                    {itemsList.map((item: string, i: number) => (
                        <div key={i} className="flex items-center gap-3 group/item">
                            <div className={`flex-shrink-0 w-1.5 h-1.5 rounded-full ${accentColor} opacity-40 group-hover/item:opacity-100 group-hover/item:scale-150 transition-all duration-300`} />
                            <span className="text-slate-600 font-bold text-[14px] leading-tight tracking-tight group-hover/item:text-slate-900 transition-colors">
                                {item.trim()}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="pt-6 border-t border-slate-50 flex items-center justify-between mt-auto">
                    <div className="flex flex-col text-left">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Kitchen Status</span>
                        <span className={`text-[11px] font-bold flex items-center gap-1.5 ${status.isOpen ? 'text-green-500' : 'text-red-500'}`}>
                            <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-red-500'}`}></span>
                            {status.isOpen ? 'Open Now' : 'Closed Now'}
                        </span>
                        <span className="text-[9px] font-medium text-slate-400 mt-0.5">{status.message}</span>
                    </div>

                    <div className="group/sch relative">
                        <div className="relative w-12 h-12 flex items-center justify-center cursor-help">
                            <div className="absolute inset-0 bg-blue-600 rounded-2xl opacity-10" />
                            <div className="relative w-10 h-10 bg-white border border-slate-100 rounded-xl shadow-sm flex items-center justify-center">
                                <Clock className="w-4 h-4 text-slate-900" />
                            </div>
                        </div>

                        <div className="absolute bottom-full right-0 mb-4 opacity-0 invisible group-hover/sch:opacity-100 group-hover/sch:visible group-hover/sch:translate-y-0 translate-y-4 transition-all duration-500 z-[100] pointer-events-none text-left">
                            <div className="bg-white/95 backdrop-blur-xl border border-slate-200 p-5 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] w-60 overflow-hidden relative">
                                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 border-b border-slate-100 pb-2">Service Hours</div>
                                <div className="space-y-4">
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-500" /><span className="text-[10px] font-black uppercase tracking-widest text-orange-500">Morning</span></div>
                                        <span className="text-[14px] font-bold tracking-tight text-slate-700 pl-3.5">08:00 AM - 10:00 AM</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-600" /><span className="text-[10px] font-black uppercase tracking-widest text-blue-600">Lunch</span></div>
                                        <span className="text-[14px] font-bold tracking-tight text-slate-700 pl-3.5">01:30 PM - 05:00 PM</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-600" /><span className="text-[10px] font-black uppercase tracking-widest text-red-600">Dinner</span></div>
                                        <span className="text-[14px] font-bold tracking-tight text-slate-700 pl-3.5">08:00 PM - 10:30 PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`h-1.5 w-0 group-hover:w-full transition-all duration-500 ${accentColor} absolute bottom-0 left-0`} />
        </motion.div>
    );
};

export default FoodMenu;