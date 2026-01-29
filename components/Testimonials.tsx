'use client';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2, UserCircle2 } from 'lucide-react';

const reviews = [
    {
        id: 1,
        name: "Ariful Islam",
        role: "University Student",
        comment: "The best hostel in Uttara! The food quality is consistent, and the 5G WiFi is a lifesaver for my online classes. Highly recommended.",
        rating: 5,
        image: null
    },
    {
        id: 2,
        name: "Mehedee Haque",
        role: "Software Engineer",
        comment: "Proper security and peaceful environment for work. The rooftop garden is my favorite place to relax after a long day.",
        rating: 5,
        image: null
    },
    {
        id: 3,
        name: "Rakibul Hasan",
        role: "Graduate Student",
        comment: "I've stayed in many hostels, but Vision 64 stands out because of their daily cleaning and professional management. It feels like home.",
        rating: 4,
        image: null
    },
    {
        id: 4,
        name: "Mahmudul Hasan",
        role: "Job Seeker",
        comment: "The 3-times meal plan is very healthy. I don't have to worry about cooking or outside food anymore. Great service!",
        rating: 5,
        image: null
    },
    {
        id: 5,
        name: "Sabbir Hossain",
        role: "Student",
        comment: "The environment is extremely quiet and perfect for someone like me who works from home. The high-speed internet and power backup are the real game changers here!",
        rating: 5,
        image: null
    },
    {
        id: 6,
        name: "Zubayer Al-Mamun",
        role: "Medical Student",
        comment: "Location is perfect, everything is within reach. The management is very responsive, and the overall cleanliness is much better than any other hostel in Uttara.",
        rating: 5,
        image: null
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4 shadow-sm border border-blue-50"
                    >
                        <Star className="w-3 h-3 fill-blue-600" /> Real Student Stories
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
                        What Our <span className="text-blue-600">Residents Say.</span>
                    </h2>
                </div>

                {/* Testimonial Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-[2.5rem] border-2 border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-200 transition-all duration-500 group relative cursor-pointer"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-8 right-8 text-slate-50 group-hover:text-blue-50 transition-colors">
                                <Quote className="w-12 h-12 rotate-180" />
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>

                            {/* Comment */}
                            <p className="text-slate-600 font-bold text-lg leading-relaxed mb-8 relative z-10">
                                "{review.comment}"
                            </p>

                            {/* Profile */}
                            <div className="flex items-center gap-4 mt-auto border-t border-slate-50 pt-6">
                                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                                    <UserCircle2 className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="text-slate-900 font-black text-base flex items-center gap-2">
                                        {review.name}
                                        <CheckCircle2 className="w-4 h-4 text-blue-500" />
                                    </h4>
                                    <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">{review.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Trust Badge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block p-8 rounded-[3rem] bg-slate-900 text-white">
                        <p className="text-slate-400 font-bold mb-2 uppercase tracking-widest text-[10px]">Trusted by Hundreds</p>
                        <h4 className="text-2xl font-black">4.5/5 Average Rating on Google Maps</h4>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;