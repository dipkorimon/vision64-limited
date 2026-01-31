'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Sunrise, Sun, Moon, Coffee, ChevronRight } from 'lucide-react';

const weeklyMenu = [
    {
        day: "Friday",
        breakfast: "Plain Khichuri, Egg Curry, Pickle, Salad",
        lunch: "Plain Rice, Chicken Roast, Fish Fry, Mixed Vegetable, Thick Lentil, Salad",
        dinner: "Beef Tehari, Salad, Cold Drink"
    },
    {
        day: "Saturday",
        breakfast: "Paratha, Dal Butter, Halwa/Egg, Tea",
        lunch: "Plain Rice, Fish/Chicken, Vegetable, Vorta, Lentil, Salad",
        dinner: "Plain Rice, Fish/Chicken, Vegetable, Lentil, Salad"
    },
    {
        day: "Sunday",
        breakfast: "Buna Khichuri, Egg Buna, Pickle, Salad",
        lunch: "Plain Rice, Fish/Chicken, Vegetable, Vorta, Lentil, Salad",
        dinner: "Plain Rice, Fish/Chicken, Vegetable, Lentil, Salad"
    },
    {
        day: "Monday",
        breakfast: "Paratha, Mix Vegetable, Egg Buna/Fry, Tea",
        lunch: "Plain Rice, Fish/Chicken, Vegetable, Vorta, Lentil, Salad",
        dinner: "Plain Rice, Chicken/Fish, Vegetable, Lentil, Salad"
    },
    {
        day: "Tuesday",
        breakfast: "Vegetable Khichuri, Egg Buna, Pickle, Salad",
        lunch: "Plain Rice, Fish/Chicken, Vegetable, Vorta, Lentil, Salad",
        dinner: "Chicken Biryani, Salad, Cold Drink"
    },
    {
        day: "Wednesday",
        breakfast: "Paratha, Dal Butter, Halwa/Egg, Tea",
        lunch: "Plain Rice, Fish/Chicken, Vegetable, Vorta, Lentil, Salad",
        dinner: "Plain Rice, Fish/Chicken, Vegetable, Lentil, Salad"
    },
    {
        day: "Thursday",
        breakfast: "Plain Khichuri, Egg Buna, Pickle, Salad",
        lunch: "Plain Rice, Fish/Chicken, Vegetable, Vorta, Lentil, Salad",
        dinner: "Plain Rice, Chicken/Fish, Vegetable, Lentil, Salad"
    }
];

const FoodMenu = () => {
    const [activeDay, setActiveDay] = useState("Friday");
    const currentMenu = weeklyMenu.find(m => m.day === activeDay);

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden" id="dining">
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-black uppercase tracking-widest mb-4">
                        <Utensils className="w-4 h-4" />
                        Weekly Meal Plan
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
                        Delicious & <span className="text-blue-600">Healthy Food</span>
                    </h2>
                    <p className="text-slate-500 font-bold max-w-xl mx-auto">
                        We provide 3-times hygienic and nutritious meals prepared with fresh ingredients.
                    </p>
                </div>

                {/* Day Selector Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {weeklyMenu.map((item) => (
                        <button
                            key={item.day}
                            onClick={() => setActiveDay(item.day)}
                            className={`relative px-6 py-3 rounded-2xl text-sm font-black transition-all duration-300 cursor-pointer ${
                                activeDay === item.day
                                    ? 'bg-blue-600 text-white shadow-xl shadow-blue-200 scale-105'
                                    : 'bg-white text-slate-500 hover:bg-blue-50 border border-slate-100'
                            }`}
                        >
                            {item.day}
                        </button>
                    ))}
                </div>

                {/* Menu Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden py-4 cursor-pointer">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeDay}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={{
                                animate: { transition: { staggerChildren: 0.08 } }
                            }}
                            className="contents"
                        >
                            <MenuCard
                                time="Breakfast"
                                icon={<Sunrise className="w-6 h-6 text-orange-500" />}
                                items={currentMenu?.breakfast}
                            />
                            <MenuCard
                                time="Lunch"
                                icon={<Sun className="w-6 h-6 text-yellow-500" />}
                                items={currentMenu?.lunch}
                            />
                            <MenuCard
                                time="Dinner"
                                icon={<Moon className="w-6 h-6 text-indigo-500" />}
                                items={currentMenu?.dinner}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Footer Info */}
                <div className="mt-12 p-6 rounded-3xl bg-blue-50 border border-blue-100 flex items-center justify-center gap-4 text-center">
                    <Coffee className="w-5 h-5 text-blue-600" />
                    <p className="text-blue-900 font-bold text-sm">
                        Evening Tea & Snacks are not provided according to the routine.
                    </p>
                </div>
            </div>
        </section>
    );
};

const MenuCard = ({ time, icon, items, activeColor, shadowColor }: any) => {
    const variants = {
        initial: { opacity: 0, y: 30, scale: 0.95 },
        animate: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", damping: 20, stiffness: 100 }
        },
        exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
    };

    return (
        <motion.div
            variants={variants}
            whileHover={{ y: -8 }}
            className="relative bg-white p-8 rounded-[2.5rem] border-2 border-slate-100 shadow-sm hover:shadow-2xl hover:border-slate-200 transition-all duration-500 group overflow-hidden"
        >
            {/* Background Watermark */}
            <div className={`absolute -right-6 -bottom-6 text-slate-100 opacity-[0.05] group-hover:opacity-[0.1] transition-all duration-700 scale-[2.5] rotate-12`}>
                {icon}
            </div>

            {/* Icon Header Section */}
            <div className="flex items-center justify-between mb-8">
                {/* DYNAMIC ICON BOX */}
                <div className={`w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600 ${activeColor} group-hover:text-white ${shadowColor} transition-all duration-500 shadow-inner relative overflow-hidden`}>
                    <span className="relative z-10 transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-110">
                        {icon}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                    Daily Fresh
                </span>
            </div>

            {/* Title Section */}
            <div className="mb-8">
                <h4 className="text-3xl font-black text-slate-900 mb-2">{time}</h4>
                <div className="h-1.5 w-12 bg-blue-600 rounded-full group-hover:w-24 transition-all duration-500"></div>
            </div>

            {/* Food Items List */}
            <div className="space-y-4 relative z-10">
                {items?.split(',').map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-4 group/item">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-600 group-hover/item:scale-150 transition-all duration-300" />
                        <span className="text-slate-700 font-bold text-[15px] leading-snug group-hover/item:text-slate-950 transition-colors">
                            {item.trim()}
                        </span>
                    </div>
                ))}
            </div>

            {/* Bottom Footer Section */}
            <div className="mt-10 pt-6 border-t border-slate-50 flex items-center justify-between">
                <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Kitchen Status</span>
                    <span className="text-[11px] font-bold text-green-500 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> Open Now
                    </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-slate-100 transition-colors">
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-slate-900 transition-all" />
                </div>
            </div>
        </motion.div>
    );
};

export default FoodMenu;