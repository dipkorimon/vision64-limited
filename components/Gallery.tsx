'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Images, X, ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react';

const galleryImages = [
    { id: 27, src: '/common-3.jpg', alt: 'Common Area View 3', category: 'Amenities' },
    { id: 25, src: '/common-1.jpg', alt: 'Common Area View 1', category: 'Amenities' },
    { id: 29, src: '/common-5.jpg', alt: 'Common Area View 5', category: 'Amenities' },
    { id: 33, src: '/common-9.jpg', alt: 'Common Area View 9', category: 'Amenities' },
    { id: 31, src: '/common-7.jpg', alt: 'Common Area View 7', category: 'Amenities' },
    { id: 32, src: '/common-8.jpg', alt: 'Common Area View 8', category: 'Amenities' },
    { id: 28, src: '/common-4.jpg', alt: 'Common Area View 4', category: 'Amenities' },
    { id: 30, src: '/common-6.jpg', alt: 'Common Area View 6', category: 'Amenities' },
    { id: 34, src: '/common-10.jpg', alt: 'Common Area View 10', category: 'Amenities' },

    { id: 7, src: '/room-1.jpg', alt: 'Hostel Room Interior', category: 'Non AC Rooms' },
    { id: 8, src: '/room-2.jpg', alt: 'Cozy Room View', category: 'Non AC Rooms' },
    { id: 9, src: '/room-3.jpg', alt: 'Cozy Bed Space', category: 'Non AC Rooms' },
    { id: 10, src: '/room-4.jpg', alt: 'Private Room with Desk', category: 'Non AC Rooms' },
    { id: 11, src: '/room-5.jpg', alt: 'Dormitory Style', category: 'Non AC Rooms' },
    { id: 12, src: '/room-6.jpg', alt: 'Premium Suite', category: 'Non AC Rooms' },
    { id: 13, src: '/room-7.jpg', alt: 'Standard Single', category: 'Non AC Rooms' },
    { id: 14, src: '/room-8.jpg', alt: 'Twin Sharing Room', category: 'Non AC Rooms' },
    { id: 15, src: '/room-9.jpg', alt: 'Deluxe Room', category: 'Non AC Rooms' },
    { id: 16, src: '/room-10.jpg', alt: 'Modern Living Space', category: 'Non AC Rooms' },
    { id: 17, src: '/room-11.jpg', alt: 'Minimalist Room', category: 'Non AC Rooms' },
    { id: 18, src: '/room-12.jpg', alt: 'Spacious Dorm', category: 'Non AC Rooms' },

    { id: 19, src: '/ac-room-1.jpg', alt: 'Premium AC Room', category: 'AC Rooms' },
    { id: 20, src: '/ac-room-2.jpg', alt: 'Luxury AC Suite', category: 'AC Rooms' },
    { id: 21, src: '/ac-room-3.jpg', alt: 'AC Deluxe Room', category: 'AC Rooms' },
    { id: 22, src: '/ac-room-4.jpg', alt: 'Comfort AC Space', category: 'AC Rooms' },
    { id: 23, src: '/ac-room-5.jpg', alt: 'AC Twin Sharing', category: 'AC Rooms' },
    { id: 1, src: '/food-1.jpg', alt: 'Delicious Meal', category: 'Food' },
    { id: 2, src: '/food-2.jpg', alt: 'Delicious Meal', category: 'Food' },
    { id: 3, src: '/food-3.jpg', alt: 'Breakfast Spread', category: 'Food' },
    { id: 4, src: '/food-4.jpg', alt: 'Breakfast Spread', category: 'Food' },
    { id: 5, src: '/food-5.jpg', alt: 'Breakfast Spread', category: 'Food' },
    { id: 6, src: '/food-6.jpg', alt: 'Breakfast Spread', category: 'Food' },

    // { id: 26, src: '/common-2.jpg', alt: 'Common Area View 2', category: 'Amenities' },
    { id: 27, src: '/common-11.jpeg', alt: 'Common Area View 2', category: 'Amenities' },
    { id: 28, src: '/common-12.jpeg', alt: 'Common Area View 2', category: 'Amenities' },
    { id: 29, src: '/common-13.jpeg', alt: 'Common Area View 2', category: 'Amenities' },
    { id: 30, src: '/common-14.jpeg', alt: 'Common Area View 2', category: 'Amenities' },
];

const categories = ['All', 'Non AC Rooms', 'AC Rooms', 'Food', 'Amenities'];

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [filteredImages, setFilteredImages] = useState(galleryImages);

    useEffect(() => {
        if (activeCategory === 'All') {
            setFilteredImages(galleryImages);
        } else {
            setFilteredImages(galleryImages.filter(img => img.category === activeCategory));
        }
    }, [activeCategory]);

    useEffect(() => {
        if (selectedImage !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedImage]);

    const goToNextImage = () => {
        if (selectedImage !== null) {
            const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
            const nextIndex = (currentIndex + 1) % filteredImages.length;
            setSelectedImage(filteredImages[nextIndex].id);
        }
    };

    const goToPrevImage = () => {
        if (selectedImage !== null) {
            const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
            const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
            setSelectedImage(filteredImages[prevIndex].id);
        }
    };

    const currentSelectedImageSrc = filteredImages.find(img => img.id === selectedImage)?.src;

    return (
        <section className="py-24 bg-white relative" id="gallery">
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#85bc44] text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-blue-100">
                        <Images className="w-3 h-3" /> Our Vibrant Spaces
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-4">
                        A Glimpse of <span className="text-[#85bc44] italic">Vision</span>
                    </h2>
                    <p className="text-slate-500 font-bold max-w-2xl mx-auto">
                        Explore our state-of-the-art facilities, comfortable rooms, and delicious food through our gallery.
                    </p>
                </div>

                {/* Category Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className="relative px-8 py-4 rounded-2xl text-sm font-black transition-all duration-500 overflow-hidden group cursor-pointer"
                            whileTap={{ scale: 0.95 }}
                        >
                            {activeCategory === category && (
                                <motion.div
                                    layoutId="activeCategory"
                                    className="absolute inset-0 bg-[#85bc44] shadow-xl shadow-blue-200"
                                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                                />
                            )}
                            <span className={`relative z-10 transition-colors duration-300 ${activeCategory === category ? 'text-white' : 'text-slate-400 group-hover:text-slate-900'}`}>
                {category}
              </span>
                        </motion.button>
                    ))}
                </div>

                {/* Image Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    <AnimatePresence>
                        {filteredImages.map((image) => (
                            <motion.div
                                key={image.id}
                                layoutId={`gallery-image-${image.id}`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3, type: "spring", damping: 20, stiffness: 100 }}
                                className="relative h-64 w-full rounded-3xl overflow-hidden cursor-pointer group shadow-lg"
                                onClick={() => setSelectedImage(image.id)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <p className="text-white font-bold text-lg">{image.alt}</p>
                                    <LayoutGrid className="absolute top-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:rotate-6" />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Full-screen Image Modal */}
                <AnimatePresence>
                    {selectedImage !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 !z-[9999999] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 md:p-8"
                        >
                            <motion.div
                                layoutId={`gallery-image-${selectedImage}`}
                                className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
                            >
                                <img
                                    src={currentSelectedImageSrc}
                                    alt="Selected Image"
                                    className="max-w-full max-h-full object-contain rounded-3xl shadow-2xl"
                                />

                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full text-white flex items-center justify-center hover:bg-white/40 transition-colors z-20 cursor-pointer"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                {/* Navigation Buttons */}
                                <button
                                    onClick={goToPrevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full text-white flex items-center justify-center hover:bg-white/40 transition-colors z-20 cursor-pointer"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={goToNextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full text-white flex items-center justify-center hover:bg-white/40 transition-colors z-20 cursor-pointer"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Gallery;