import { useState, FormEvent } from 'react';
import { Navbar } from './components/Navbar';
import { Gallery } from './components/Gallery';
import { TubesBackground } from './components/ui/neon-flow';
import { MousePointer2, MapPin, Phone, Clock, ExternalLink, CheckCircle2, Star } from 'lucide-react';
import { centersData } from './data/centersData';
import { submitInquiry } from './lib/firebase';

export default function App() {
    const [selectedCenterId, setSelectedCenterId] = useState('bhavani');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const center = centersData[selectedCenterId];

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
            centerName: center.name
        };

        try {
            await submitInquiry(data);
            setSubmitStatus({ type: 'success', message: '🎉 Inquiry submitted successfully! We will contact you soon.' });
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            console.error('Firebase submission error:', error);
            setSubmitStatus({ type: 'error', message: 'Something went wrong. Please try again or call us directly.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-primary-pink selection:text-white">
            <Navbar selectedCenter={selectedCenterId} onCenterChange={setSelectedCenterId} />

            {/* Hero Section */}
            <section className="relative h-screen w-full flex items-center justify-center pt-20">
                <TubesBackground className="absolute inset-0 z-0 opacity-40" />
                <div className="container relative z-10 px-4 text-center space-y-8">
                    <div className="space-y-4 animate-in fade-in zoom-in duration-700">
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter drop-shadow-2xl flex items-center justify-center gap-4">
                            <img src="/assets/bob_logo.png" alt="Brainobrain" className="h-16 md:h-24 object-contain bg-white rounded-2xl p-2 shadow-xl" />
                            <span>Brainobrain <span className="text-primary-pink">{center.name}</span></span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl md:text-2xl font-bold text-white/70 uppercase tracking-[0.2em]">
                            Empowering Young Geniuses in {center.district} District
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 pt-4">
                        <a href="#contact" className="px-10 py-5 bg-primary-pink text-white font-black rounded-full shadow-[0_0_30px_rgba(236,0,140,0.5)] hover:scale-105 transition-all">
                            Send Inquiry
                        </a>
                        <a href="/assets/1000210516.pdf" download className="px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-black rounded-full transition-all">
                            Download Prospectus
                        </a>
                    </div>

                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-pulse">
                        <span className="text-xs uppercase tracking-widest flex items-center gap-2">
                            <MousePointer2 size={14} /> Interaction: Enabled • Click to randomize
                        </span>
                    </div>
                </div>
            </section>

            {/* Quick Info Bar */}
            <section className="relative z-20 -mt-20 container px-4">
                <div className="bg-slate-900/80 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl grid md:grid-cols-3 gap-8">
                    <div className="flex gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-primary-yellow/10 flex items-center justify-center shrink-0">
                            <MapPin className="text-primary-yellow" />
                        </div>
                        <div>
                            <p className="text-sm font-black text-primary-yellow uppercase tracking-widest mb-1">Our Location</p>
                            <p className="text-white/80 font-semibold leading-relaxed">{center.address}</p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-primary-pink/10 flex items-center justify-center shrink-0">
                            <Phone className="text-primary-pink" />
                        </div>
                        <div>
                            <p className="text-sm font-black text-primary-pink uppercase tracking-widest mb-1">Direct Contact</p>
                            <div className="space-y-1">
                                {center.phone.map(p => <p key={p} className="text-white/80 font-bold tracking-wider">{p}</p>)}
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-primary-green/10 flex items-center justify-center shrink-0">
                            <Clock className="text-primary-green" />
                        </div>
                        <div>
                            <p className="text-sm font-black text-primary-green uppercase tracking-widest mb-1">Opening Hours</p>
                            <p className="text-white/80 font-semibold">{center.hours}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-32 px-4">
                <div className="container grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8 animate-in slide-in-from-left duration-700">
                        <h2 className="text-4xl md:text-6xl font-black">About the <span className="text-primary-pink">Center</span></h2>
                        <p className="text-xl text-white/60 leading-relaxed font-medium">{center.about}</p>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { label: "District Premiere", icon: <Star /> },
                                { label: "Certified Mentors", icon: <CheckCircle2 /> },
                                { label: "Advanced Lab", icon: <CheckCircle2 /> },
                                { label: "Global Quality", icon: <CheckCircle2 /> }
                            ].map((feat, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                                    <span className="text-primary-yellow">{feat.icon}</span>
                                    <span className="font-bold text-sm tracking-wide">{feat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative group animate-in slide-in-from-right duration-700">
                        <div className="absolute -inset-4 bg-primary-pink/20 rounded-[3rem] blur-2xl group-hover:bg-primary-pink/30 transition-all"></div>
                        <img src="/assets/brain 3.jpeg" alt="Brainobrain Students" className="relative rounded-[3rem] border border-white/10 shadow-2xl w-full" />
                    </div>
                </div>
            </section>

            {/* Course Sections */}
            <section id="courses" className="py-32 bg-slate-900/50">
                <div className="container px-4">
                    <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
                        <h2 className="text-4xl md:text-6xl font-black italic">World-Class <span className="text-primary-yellow">Programs</span></h2>
                        <p className="text-white/50 text-xl font-medium tracking-tight">Scientifically developed courses for children aged 4-14.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                name: "Littlebobs",
                                age: "4-6 Years",
                                color: "bg-primary-yellow",
                                desc: "Foundation program to develop curiosity, concentration and basic arithmetic skills."
                            },
                            {
                                name: "Brainobrain",
                                age: "7-14 Years",
                                color: "bg-primary-pink",
                                desc: "Advanced Skill Development program using Abacus and NLP techniques for mental mastery."
                            },
                            {
                                name: "NLP Mastery",
                                age: "Advanced",
                                color: "bg-primary-green",
                                desc: "Empowering children with confidence, leadership and emotional intelligence."
                            }
                        ].map((course, i) => (
                            <div key={i} className="group relative p-10 bg-slate-900 border border-white/5 rounded-[3rem] hover:bg-slate-800 transition-all overflow-hidden">
                                <div className={`absolute top-0 right-0 w-32 h-32 ${course.color} opacity-10 rounded-bl-[5rem] group-hover:scale-110 transition-transform`}></div>
                                <h3 className="text-3xl font-black mb-2 tracking-tight">{course.name}</h3>
                                <span className="inline-block px-4 py-1.5 bg-white/5 text-white/50 rounded-full text-sm font-bold tracking-widest mb-6">{course.age}</span>
                                <p className="text-white/60 font-medium leading-relaxed mb-8">{course.desc}</p>
                                <button className="flex items-center gap-2 font-black text-sm uppercase tracking-widest text-white group-hover:text-primary-pink transition-colors">
                                    Learn More <ExternalLink size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <Gallery />

            {/* Map & Contact */}
            <section id="contact" className="py-32 px-4">
                <div className="container grid lg:grid-cols-2 gap-16">
                    <div className="space-y-10">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight italic">Find Us In <span className="text-primary-green">{center.name}</span></h2>
                        <div className="space-y-6">
                            <div className="p-8 bg-white/5 border border-white/10 rounded-[3rem]">
                                <p className="text-sm font-black text-primary-green uppercase tracking-[0.3em] mb-4">Official Address</p>
                                <p className="text-2xl font-bold leading-snug tracking-tight">{center.address}</p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href={`tel:${center.phone[0]}`}
                                    className="flex-1 min-w-[200px] flex items-center justify-center gap-3 px-8 py-5 bg-white text-black font-black rounded-full hover:bg-primary-green hover:text-white transition-all shadow-xl"
                                >
                                    <Phone size={20} /> Call Now
                                </a>
                                <a
                                    href={`https://wa.me/91${center.phone[0]}?text=${encodeURIComponent(center.whatsappMsg)}`}
                                    className="flex-1 min-w-[200px] flex items-center justify-center gap-3 px-8 py-5 bg-[#25D366] text-white font-black rounded-full hover:scale-105 transition-all shadow-xl"
                                >
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-6 h-6 invert" alt="" /> WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="h-[500px] bg-slate-900 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative">
                        {center.mapEmbed ? (
                            <iframe
                                src={center.mapEmbed}
                                className="w-full h-full grayscale opacity-70 contrast-125"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                            ></iframe>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full text-white/30 space-y-4">
                                <MapPin size={60} />
                                <p className="font-bold tracking-widest uppercase">Map Location TBC</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Inquiry Form */}
            <section className="pb-32 px-4">
                <div className="container max-w-4xl bg-primary-pink p-1 md:p-1.5 rounded-[4rem]">
                    <div className="bg-slate-950 rounded-[3.8rem] p-10 md:p-20 space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter">Register for <span className="text-primary-pink italic">Inquiry</span></h2>
                            <p className="text-white/50 text-xl font-medium tracking-tight uppercase tracking-[0.2em]">Bhavani • Mettur • Anthiyur</p>
                        </div>

                        <form className="grid sm:grid-cols-2 gap-8" onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <label className="text-xs font-black uppercase tracking-widest text-white/30 px-2">Child's Detail</label>
                                <input name="fullName" type="text" placeholder="Full Name" required className="w-full px-8 py-6 bg-white/5 border border-white/10 rounded-3xl focus:border-primary-pink focus:outline-none transition-colors font-bold" />
                                <input name="age" type="number" placeholder="Age" required className="w-full px-8 py-6 bg-white/5 border border-white/10 rounded-3xl focus:border-primary-pink focus:outline-none transition-colors font-bold" />
                            </div>
                            <div className="space-y-4">
                                <label className="text-xs font-black uppercase tracking-widest text-white/30 px-2">Contact Detail</label>
                                <input name="parentPhone" type="tel" placeholder="Parent Mob Number" required className="w-full px-8 py-6 bg-white/5 border border-white/10 rounded-3xl focus:border-primary-pink focus:outline-none transition-colors font-bold" />
                                <select name="program" required className="w-full px-8 py-6 bg-white/5 border border-white/10 rounded-3xl focus:border-primary-pink focus:outline-none transition-colors font-bold appearance-none">
                                    <option value="">Select Program</option>
                                    <option value="Littlebobs">Littlebobs (4-6)</option>
                                    <option value="Brainobrain">Brainobrain (7-14)</option>
                                </select>
                            </div>
                            <div className="sm:col-span-2 space-y-4 pt-4">
                                {submitStatus && (
                                    <div className={`p-4 rounded-2xl text-center font-bold mb-4 ${submitStatus.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                        {submitStatus.message}
                                    </div>
                                )}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-8 bg-primary-pink text-white font-black rounded-full text-xl shadow-[0_20px_50px_rgba(236,0,140,0.3)] hover:scale-[1.02] transition-all uppercase tracking-widest ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? 'Sending...' : `Submit Inquiry for ${center.name}`}
                                </button>
                                <p className="text-center text-xs text-white/30 font-bold uppercase tracking-widest">Selected Center: {center.name} | {center.district} District</p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 border-t border-white/5">
                <div className="container px-4 text-center space-y-8">
                    <div className="flex justify-center gap-8 text-white/30 font-black text-sm uppercase tracking-widest">
                        <a href="#about" className="hover:text-white transition-all">About</a>
                        <a href="#courses" className="hover:text-white transition-all">Courses</a>
                        <a href="#contact" className="hover:text-white transition-all">Contact</a>
                        <a href="#contact" className="hover:text-white transition-all">FAQs</a>
                    </div>
                    <p className="text-white/20 text-xs font-bold uppercase tracking-[0.5em]">&copy; 2026 Brainobrain Consolidated • Bhavani • Mettur • Anthiyur</p>
                </div>
            </footer>
        </div>
    );
}
