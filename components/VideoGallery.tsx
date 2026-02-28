"use client";

import React, { useState, useEffect } from 'react';
import { Play, X, ArrowRight } from 'lucide-react';

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
        title: "Your Home, Redefined",
        thumbnail: "/thumb-1.jpeg",
        duration: "3:15",
        videoUrl: "/video-3.mp4"
    },
    {
        id: 2,
        title: "Official Introduction",
        thumbnail: "/thumb-2.png",
        duration: "2:30",
        videoUrl: "/bachelors-life.mp4"
    },
    {
        id: 3,
        title: "See It To Believe It",
        thumbnail: "/thumb-3.jpeg",
        duration: "2:10",
        videoUrl: "/video-4.mp4"
    },
    {
        id: 4,
        title: "Hostel Life at a Glance",
        thumbnail: "/thumb-4.jpeg",
        duration: "2:30",
        videoUrl: "/video-1.mp4"
    },
    {
        id: 5,
        title: "Virtual Tour of Our Campus",
        thumbnail: "/thumb-5.jpeg",
        duration: "1:45",
        videoUrl: "/video-2.mp4"
    },
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

    // ভিডিওগুলোকে ২ ভাগে ভাগ করা (প্রথম ৩টি এবং পরের ২টি)
    const topRow = videos.slice(0, 3);
    const bottomRow = videos.slice(3, 5);

    return (
        <section className="bg-white py-24 px-6 md:px-12 lg:px-20" id="video-gallery">
            <div className="max-w-7xl mx-auto">

                {/* --- Header Section --- */}
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

                {/* --- Video Grid Layout --- */}
                <div className="space-y-8">
                    {/* Top Row: 3 Videos */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {topRow.map((video) => (
                            <VideoCard key={video.id} video={video} onPlay={setSelectedVideo} />
                        ))}
                    </div>

                    {/* Bottom Row: 2 Videos (Centered on Desktop) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {bottomRow.map((video) => (
                            <VideoCard key={video.id} video={video} onPlay={setSelectedVideo} />
                        ))}
                    </div>
                </div>
            </div>

            {/* --- Modern Video Modal --- */}
            {selectedVideo && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 transition-all animate-in fade-in duration-300">
                    <button
                        onClick={() => setSelectedVideo(null)}
                        className="absolute top-8 right-8 text-white/70 hover:text-white transition-all bg-white/10 p-4 rounded-full z-[101]"
                    >
                        <X size={32} />
                    </button>

                    <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                        <iframe
                            src={selectedVideo}
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

// Reusable Video Card Component
const VideoCard = ({ video, onPlay }: { video: VideoData; onPlay: (url: string) => void }) => (
    <div
        onClick={() => onPlay(video.videoUrl)}
        className="group cursor-pointer"
    >
        {/* Thumbnail Container: Aspect 16/9 for Landscape Rectangle */}
        <div className="relative aspect-video overflow-hidden rounded-2xl mb-4 border border-slate-100">
            <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1aa5c3]">
                    <Play className="text-[#1aa5c3] fill-[#1aa5c3] group-hover:text-white group-hover:fill-white ml-1" size={28} />
                </div>
            </div>

            {/* Duration Tag */}
            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white text-[11px] px-3 py-1 rounded-lg font-medium">
                {video.duration}
            </div>
        </div>

        {/* Title Text */}
        <h3 className="font-bold text-slate-800 text-lg leading-snug group-hover:text-[#1aa5c3] transition-colors">
            {video.title}
        </h3>
    </div>
);