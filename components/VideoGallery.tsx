"use client";

import React, { useState, useEffect } from 'react';
import { Play, X, Video, ArrowRight } from 'lucide-react';

interface VideoData {
    id: number;
    title: string;
    thumbnail: string;
    duration: string;
    videoUrl: string;
}

const videos: VideoData[] = [
    {
        id: 1,
        title: "Hostel Life at a Glance",
        thumbnail: "https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&q=80&w=800",
        duration: "2:30",
        videoUrl: "/video-1.mp4"
    },
    {
        id: 2,
        title: "Virtual Tour of Our Campus",
        thumbnail: "video-thumbnail.jpg",
        duration: "1:45",
        videoUrl: "/video-2.mp4"
    },
    {
        id: 3,
        title: "Your Home, Redefined",
        thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
        duration: "3:15",
        videoUrl: "/video-3.mp4"
    },
    {
        id: 4,
        title: "See It To Believe It",
        thumbnail: "/video-thumbnail-2.jpg",
        duration: "2:10",
        videoUrl: "/video-4.mp4"
    }
];

export const VideoGallery: React.FC = () => {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    useEffect(() => {
        if (selectedVideo) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedVideo]);

    return (
        <section className="bg-white py-24 px-6 md:px-12 lg:px-20" id="video-gallery">
            <div className="max-w-7xl mx-auto">

                {/* --- Left-Aligned Modern Header --- */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 text-[#1aa5c3] font-bold uppercase tracking-[0.2em] text-xs mb-4">
                            <span className="w-10 h-[2px] bg-[#1aa5c3]"></span>
                            Virtual Tour
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1]">
                            Life at Our Hostel <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#85bc44] to-[#b4d98c]">
                Through The Lens
              </span>
                        </h2>
                    </div>

                    <div className="lg:max-w-sm">
                        <p className="text-slate-500 text-lg leading-relaxed mb-4">
                            Explore our facilities and the vibrant community that makes us unique.
                        </p>
                        <button className="flex items-center gap-2 text-slate-900 font-bold hover:text-[#1aa5c3] transition-colors group">
                            View All Videos <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* --- Video Grid --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {videos.map((video) => (
                        <div
                            key={video.id}
                            onClick={() => setSelectedVideo(video.videoUrl)}
                            className="group cursor-pointer"
                        >
                            {/* Thumbnail Container */}
                            <div className="relative aspect-[10/12] overflow-hidden rounded-3xl mb-4">
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />

                                <div className="absolute bottom-6 left-6">
                                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl transform transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1aa5c3]">
                                        <Play className="text-[#1aa5c3] fill-[#1aa5c3] group-hover:text-white group-hover:fill-white ml-1" size={24} />
                                    </div>
                                </div>

                                {/* Duration Tag */}
                                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md text-white text-[10px] px-3 py-1 rounded-full border border-white/30 font-bold">
                                    {video.duration}
                                </div>
                            </div>

                            {/* Title Text */}
                            <h3 className="font-bold text-slate-800 text-lg leading-tight group-hover:text-[#1aa5c3] transition-colors pr-4">
                                {video.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- Modern Video Modal --- */}
            {selectedVideo && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/98 backdrop-blur-md p-4 transition-all animate-in fade-in duration-300">
                    <button
                        onClick={() => setSelectedVideo(null)}
                        className="absolute top-8 right-8 text-white/70 hover:text-white transition-all bg-white/10 p-4 rounded-full"
                    >
                        <X size={32} />
                    </button>

                    <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                        <iframe
                            src={`${selectedVideo}?autoplay=1`}
                            className="w-full h-full"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
};