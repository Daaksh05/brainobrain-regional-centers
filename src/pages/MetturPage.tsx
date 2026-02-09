import React from 'react';
import { Navbar } from '../components/Navbar';
import { Phone, MapPin, CheckCircle2 } from 'lucide-react';

export const MetturPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar centerName="Brainobrain Mettur" />

            <section className="pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <span className="px-4 py-2 bg-primary-yellow/20 text-primary-red font-bold rounded-full text-sm">Now in Salem District</span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black">
                            Start Your <span className="text-primary-pink">Genius</span> Journey in Mettur
                        </h1>
                        <p className="text-lg text-gray-600">World-class cognitive development for children in the Mettur region.</p>
                        <div className="flex gap-4">
                            <a href="#contact" className="px-8 py-4 bg-primary-green text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform">Enrol Now</a>
                            <a href="https://wa.me/919942148022" className="px-8 py-4 bg-green-500 text-white font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2">WhatsApp</a>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="/assets/hero_kids.png" alt="Happy Kids" className="rounded-[2rem] shadow-2xl w-full" />
                    </div>
                </div>
            </section>

            <section id="about" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <img src="/assets/classroom_2.png" alt="Classroom" className="rounded-3xl shadow-xl" />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold">About Mettur Center</h2>
                        <p className="text-gray-600">We are dedicated to nurturing the hidden potential in every child in the Salem District through Abacus and NLP.</p>
                        <ul className="grid gap-4">
                            {["Salem's Leading Learning Center", "Certified Mentors", "Global Quality Standards"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 font-semibold">
                                    <CheckCircle2 className="text-primary-green" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section id="contact" className="py-20 bg-black text-white">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold">Contact Mettur</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <MapPin className="text-primary-yellow" />
                                <div><p className="font-bold">Mettur Center</p><p className="text-gray-400">Location Details to be Confirmed, Salem</p></div>
                            </div>
                            <div className="flex gap-4">
                                <Phone className="text-primary-yellow" />
                                <div><p className="font-bold">Phone</p><p className="text-gray-400">9942148022</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-md border border-white/10">
                        <h3 className="text-2xl font-bold mb-6">Trial Class Booking</h3>
                        <form className="grid gap-4">
                            <input type="text" placeholder="Name" className="p-4 bg-white/10 rounded-xl border border-white/10" />
                            <input type="tel" placeholder="Mobile" className="p-4 bg-white/10 rounded-xl border border-white/10" />
                            <button className="py-4 bg-primary-green text-white font-bold rounded-xl mt-4">Request Callback</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};
