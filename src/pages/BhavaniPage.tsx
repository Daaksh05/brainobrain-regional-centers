import React, { useState, FormEvent } from 'react';
import { Navbar } from '../components/Navbar';
import { Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { submitInquiry } from '../lib/firebase';

export const BhavaniPage = () => {
    const [selectedCenterId, setSelectedCenterId] = useState('bhavani');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const formData = new FormData(e.currentTarget);
        const data = {
            fullName: formData.get('fullName') as string,
            age: parseInt(formData.get('age') as string),
            parentPhone: formData.get('parentPhone') as string,
            program: formData.get('program') as string,
            centerName: 'Bhavani'
        };

        try {
            await submitInquiry(data);
            setSubmitStatus({ type: 'success', message: '🎉 Success! We will contact you soon.' });
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            setSubmitStatus({ type: 'error', message: 'Error! Please call us directly.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar selectedCenter={selectedCenterId} onCenterChange={setSelectedCenterId} />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <img src="/assets/bob_logo.png" alt="Brainobrain" className="h-10 bg-white rounded-lg p-1 shadow-md" />
                            <span className="px-4 py-2 bg-primary-yellow/20 text-primary-red font-bold rounded-full text-sm">Empowering Young Minds</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black">
                            Unlock Your Child's <span className="text-primary-pink">Potential</span> in Bhavani
                        </h1>
                        <p className="text-lg text-gray-600">The world's leading Skill Development Programme for children (4-14 years), specializing in Abacus and NLP.</p>
                        <div className="flex gap-4">
                            <a href="#contact" className="px-8 py-4 bg-primary-red text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform">Book Free Trial</a>
                            <a href="tel:9942148022" className="px-8 py-4 bg-white border-2 border-primary-red text-primary-red font-bold rounded-full hover:bg-primary-red/5 transition-colors">Call Now</a>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-primary-yellow rounded-[2rem] rotate-3 opacity-20"></div>
                        <img src="/assets/hero_new.png" alt="Happy Kids" className="relative rounded-[2rem] shadow-2xl w-full" />
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <img src="/assets/brain 3.jpeg" alt="Brainobrain Students" className="rounded-3xl shadow-xl" />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold">About Brainobrain Bhavani</h2>
                        <p className="text-gray-600">Located in the heart of Bhavani, our center is dedicated to nurturing the hidden potential in every child. We provide a world-class cognitive development training environment.</p>
                        <ul className="grid gap-4">
                            {[
                                "Certified & Passionate Mentors",
                                "Personalized Attention",
                                "Proven Abacus & NLP Curriculum",
                                "Safe & Creative Environment"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 font-semibold">
                                    <CheckCircle2 className="text-primary-green" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Courses */}
            <section id="courses" className="py-20 px-4">
                <div className="max-w-7xl mx-auto text-center space-y-4 mb-12">
                    <h2 className="text-4xl font-bold">Our World-Class Courses</h2>
                    <p className="text-gray-500">Tailored programs designed for specific age groups and skill levels.</p>
                </div>
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Littlebobs", age: "4-6 Years", icon: "👶", color: "bg-primary-yellow" },
                        { title: "Brainobrain", age: "7-14 Years", icon: "🧠", color: "bg-primary-pink" },
                        { title: "NLP Camps", age: "All Ages", icon: "🚀", color: "bg-primary-blue" }
                    ].map((course, i) => (
                        <div key={i} className="p-8 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-2 text-center group">
                            <div className={`${course.color} w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6`}>{course.icon}</div>
                            <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                            <p className="text-gray-500 mb-6">Age Group: {course.age}</p>
                            <button className="w-full py-3 bg-gray-100 group-hover:bg-black group-hover:text-white rounded-xl font-bold transition-colors">Learn More</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-20 bg-black text-white">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold">Get In Touch</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center"><MapPin className="text-primary-yellow" /></div>
                                <div><p className="font-bold">Bhavani Center</p><p className="text-gray-400">Main Road, Near Old Bus Stand, Bhavani</p></div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center"><Phone className="text-primary-yellow" /></div>
                                <div><p className="font-bold">Phone</p><p className="text-gray-400">9942148022 | 9659351752</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-md border border-white/10">
                        <h3 className="text-2xl font-bold mb-6">Book a Free Trial</h3>
                        <form className="grid gap-4" onSubmit={handleSubmit}>
                            <input name="fullName" type="text" placeholder="Child's Name" required className="p-4 bg-white/10 rounded-xl border border-white/10 focus:outline-none focus:border-primary-pink text-white" />
                            <input name="age" type="number" placeholder="Child's Age" required className="p-4 bg-white/10 rounded-xl border border-white/10 focus:outline-none focus:border-primary-pink text-white" />
                            <input name="parentPhone" type="tel" placeholder="Parent Mobile" required className="p-4 bg-white/10 rounded-xl border border-white/10 focus:outline-none focus:border-primary-pink text-white" />
                            <select name="program" required className="p-4 bg-white/10 rounded-xl border border-white/10 text-white [&>option]:text-black">
                                <option value="">Select Program</option>
                                <option value="Littlebobs">Littlebobs (4-6)</option>
                                <option value="Brainobrain">Brainobrain (7-14)</option>
                            </select>

                            {submitStatus && (
                                <div className={`p-3 rounded-lg text-center font-bold ${submitStatus.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                    {submitStatus.message}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="py-4 bg-primary-pink text-white font-bold rounded-xl mt-4 disabled:opacity-50"
                            >
                                {isSubmitting ? 'Sending...' : 'Submit Application'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <footer className="py-8 text-center text-gray-400 border-t border-gray-100">
                <p>&copy; 2026 Brainobrain Bhavani Center. All Rights Reserved.</p>
            </footer>
        </div>
    );
};
