import React, { useState } from 'react';
import { Menu, X, ChevronDown, MapPin } from 'lucide-react';
import { centersData } from '../data/centersData';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
    selectedCenter: string;
    onCenterChange: (centerId: string) => void;
}

export const Navbar = ({ selectedCenter, onCenterChange }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const currentCenter = centersData[selectedCenter];
    const navigate = useNavigate();

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 md:px-8 py-3 flex justify-between items-center shadow-2xl">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1 overflow-hidden shadow-inner">
                    <img src="/assets/bob_logo.png" alt="Brainobrain Logo" className="w-full h-full object-contain" />
                </div>
                <span className="font-bold text-lg text-white">Brainobrain {currentCenter.name}</span>
            </div>

            <div className="hidden lg:flex items-center gap-8">
                <a href="#about" className="text-sm font-bold text-white/80 hover:text-white transition-colors">About</a>
                <a href="#courses" className="text-sm font-bold text-white/80 hover:text-white transition-colors">Courses</a>
                <a href="#success" className="text-sm font-bold text-white/80 hover:text-white transition-colors">Success Stories</a>
                <a href="#contact" className="text-sm font-bold text-white/80 hover:text-white transition-colors">Contact</a>
            </div>

            <div className="flex items-center gap-4">
                {/* Center Selector Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center gap-2 px-4 py-2 bg-primary-pink text-white rounded-full font-bold text-sm shadow-lg hover:scale-105 transition-transform"
                    >
                        <MapPin size={16} />
                        <span className="hidden sm:inline">{currentCenter.name} Center</span>
                        <ChevronDown size={14} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute top-12 right-0 w-56 bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 shadow-2xl animate-in fade-in slide-in-from-top-2">
                            {Object.values(centersData).map((center) => (
                                <button
                                    key={center.id}
                                    onClick={() => {
                                        onCenterChange(center.id);
                                        setIsDropdownOpen(false);
                                        navigate(`/${center.id === 'bhavani' && window.location.pathname === '/' ? '' : center.id}`);
                                    }}
                                    className={`w-full flex flex-col items-start p-3 rounded-xl transition-colors ${selectedCenter === center.id ? 'bg-primary-pink/20 text-primary-pink' : 'text-white hover:bg-white/5'
                                        }`}
                                >
                                    <span className="font-bold">{center.name}</span>
                                    <span className="text-xs opacity-60 uppercase tracking-wider">{center.district} District</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-20 left-0 w-full bg-slate-900/98 backdrop-blur-3xl rounded-3xl p-8 flex flex-col gap-6 shadow-2xl lg:hidden border border-white/5 animate-in slide-in-from-top-4">
                    <a href="#about" onClick={() => setIsOpen(false)} className="text-lg font-bold text-white">About Us</a>
                    <a href="#courses" onClick={() => setIsOpen(false)} className="text-lg font-bold text-white">Our Courses</a>
                    <a href="#success" onClick={() => setIsOpen(false)} className="text-lg font-bold text-white">Success Stories</a>
                    <a href="#contact" onClick={() => setIsOpen(false)} className="text-lg font-bold text-white">Contact</a>
                </div>
            )}
        </nav>
    );
};
