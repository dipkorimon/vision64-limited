import Link from 'next/link';
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';

const socialLinks = [
    { Icon: Facebook, url: "https://www.facebook.com/vision64hostel" },
    { Icon: Instagram, url: "https://www.instagram.com/vision64limited" },
    { Icon: Linkedin, url: "https://www.linkedin.com/company/vision64hostel/" },
];

const Footer = () => {
    return (
        <footer className="relative bg-[#020617] text-white pt-20 pb-10 overflow-hidden">
            {/* Background Decorative Glow */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Brand Section */}
                    <div className="space-y-6 mr-3">
                        <Link href="/" className="outline-none">
                            <div className="flex items-center justify-center w-44 h-14">
                                <img
                                    src="/vision64-logo.png"
                                    alt="Vision 64 Limited"
                                    className="w-full h-full object-contain scale-[3.0]"
                                />
                            </div>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Redefining urban living with secure, comfortable, and premium housing for the next generation of leaders.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300 border border-slate-700"
                                >
                                    <item.Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-widest text-xs">Navigation</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Our Rooms', 'Packages', 'Testimonials'].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-slate-400 hover:text-blue-400 hover:pl-2 transition-all duration-300 flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full scale-0 group-hover:scale-100 transition-transform"></span>
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-widest text-xs">Support</h4>
                        <ul className="space-y-4">
                            {['Privacy Policy', 'Terms of Service', 'FAQ', 'Refund Policy'].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-widest text-xs">Get In Touch</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 text-slate-400">
                                <MapPin size={20} className="text-[#1aa5c3] mt-1 shrink-0" />
                                <span className="text-sm leading-relaxed">
                                    House 23, Road 11, Sector 10<br />
                                    Uttara, Dhaka-1230, Bangladesh
                                </span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-400">
                                <Phone size={20} className="text-[#1aa5c3] shrink-0" />
                                <span className="text-sm">+880 1328 960996</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-400">
                                <Phone size={20} className="text-[#1aa5c3] shrink-0" />
                                <span className="text-sm">+880 1985 698402</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-400">
                                <Mail size={20} className="text-[#1aa5c3] shrink-0" />
                                <span className="text-sm">vision64hostel@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-xs">
                        © 2023 - {new Date().getFullYear()} <span className="text-slate-300 font-semibold">Vision64 Limited</span>. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Designed for Excellence</span>
                        <div className="h-4 w-px bg-slate-800"></div>
                        <div className="flex items-center gap-2 px-3 py-1 bg-slate-800/30 rounded-full border border-slate-700/50 hover:border-blue-500/50 transition-colors duration-500 group">
                            {/* Active Status Indicator */}
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>

                            <p className="text-[10px] text-slate-400 font-medium tracking-wide">
                                Handcrafted by
                                <Link
                                    href="https://www.linkedin.com/in/dipkorimon"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-1 text-white hover:text-blue-400 transition-colors duration-300 font-bold underline-offset-4 decoration-blue-500/50"
                                >
                                    Dip Kor Imon
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;