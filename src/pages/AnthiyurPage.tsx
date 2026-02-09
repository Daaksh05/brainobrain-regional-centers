import React from 'react';
import { Navbar } from '../components/Navbar';
import { Phone, MapPin, CheckCircle2 } from 'lucide-react';

export const AnthiyurPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar centerName="Brainobrain Anthiyur" />

            <section className="pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <span className="px-4 py-2 bg-primary-yellow/20 text-primary-red font-bold rounded-full text-sm">Nilgiris District Premiere</span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black">
                            Unlock the <span className="text-primary-pink">Genius</span> in Anthiyur
                        </h1>
                        <p className="text-lg text-gray-600">Advanced Skill Development for the leaders of tomorrow.</p>
                        <div className="flex gap-4">
                            <a href="#contact" className="px-8 py-4 bg-primary-blue text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform">Book a Seat</a>
                            <a href="tel:9942148022" className="px-8 py-4 bg-white border-2 border-primary-blue text-primary-blue font-bold rounded-full transition-colors font-bold">Call Center</a>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="/assets/hero_kids.png" alt="Happy Kids" className="rounded-[2rem] shadow-2xl w-full" />
                    </div>
                </div>
            </section>

            <section id="about" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold">Anthiyur Center</h2>
                        <p className="text-gray-600">Providing a supportive and stimulating environment where kids can develop vital life skills.</p>
                        <ul className="grid gap-4">
                            {["Global Standards", "Certified Trainers", "NLP & Abacus Expertist"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 font-semibold">
                                    <CheckCircle2 className="text-primary-green" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <img src="/assets/classroom_1.png" alt="Classroom" className="rounded-3xl shadow-xl" />
                    </div>
                </div>
            </section>

            <section id="contact" className="py-20 bg-black text-white">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold">Visit Us</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <MapPin className="text-primary-yellow" />
                                <div><p className="font-bold">Anthiyur Center</p><p className="text-gray-400">Location TBC, Nilgiris District</p></div>
                            </div>
                            <div className="flex gap-4">
                                <Phone className="text-primary-yellow" />
                                <div><p className="font-bold">Phone</p><p className="text-gray-400">9942148022</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-md border border-white/10">
                        <h3 className="text-2xl font-bold mb-6">Inquiry Form</h3>
                        <form className="grid gap-4">
                            <input type="text" placeholder="Name" className="p-4 bg-white/10 rounded-xl border border-white/10" />
                            <input type="tel" placeholder="Mobile" className="p-4 bg-white/10 rounded-xl border border-white/10" />
                            <button className="py-4 bg-primary-blue text-white font-bold rounded-xl mt-4">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};
