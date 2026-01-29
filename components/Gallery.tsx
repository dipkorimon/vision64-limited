'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Images, X, ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react';

const galleryImages = [
    { id: 1, src: '/hostel_room_interior.jpg', alt: 'Hostel Room Interior', category: 'Rooms' },
    { id: 2, src: '/images/gallery/food-1.jpg', alt: 'Delicious Meal', category: 'Food' },
    { id: 3, src: '/images/gallery/common-area-1.jpg', alt: 'Common Lounge Area', category: 'Common Area' },
    { id: 4, src: '/images/gallery/room-2.jpg', alt: 'Shared Room Setup', category: 'Rooms' },
    { id: 5, src: '/images/gallery/food-2.jpg', alt: 'Breakfast Spread', category: 'Food' },
    { id: 6, src: '/images/gallery/study-area.jpg', alt: 'Quiet Study Zone', category: 'Common Area' },
    { id: 7, src: '/images/gallery/room-3.jpg', alt: 'Cozy Bed Space', category: 'Rooms' },
    { id: 8, src: '/images/gallery/rooftop-garden.jpg', alt: 'Rooftop Garden View', category: 'Common Area' },
    { id: 9, src: '/images/gallery/kitchen-area.jpg', alt: 'Modern Kitchen Area', category: 'Food' },
    { id: 10, src: '/images/gallery/room-4.jpg', alt: 'Private Room with Desk', category: 'Rooms' },
];

const categories = ['All', 'Rooms', 'Food', 'Common Area'];

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
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-blue-100">
                        <Images className="w-3 h-3" /> Our Vibrant Spaces
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-4">
                        A Glimpse of <span className="text-blue-600 italic">Vision.</span>
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
                                    className="absolute inset-0 bg-blue-600 shadow-xl shadow-blue-200"
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