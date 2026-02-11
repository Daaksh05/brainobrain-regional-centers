import React, { FC } from 'react';

const images = [
    '/assets/gallery/brain 1.jpeg',
    '/assets/gallery/brain 2.jpeg',
    '/assets/gallery/brain 4.jpeg',
    '/assets/gallery/brain 6.jpeg',
    '/assets/gallery/img1.jpg',
    '/assets/gallery/image 7.jpeg',
    '/assets/gallery/image 8.jpeg',
    '/assets/gallery/image 9.jpeg',
];

export const Gallery: FC = () => {
    return (
        <section id="gallery" className="py-32 px-4 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-pink/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-yellow/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter">
                        Memorable <span className="text-primary-pink">Moments</span>
                    </h2>
                    <p className="text-white/50 text-xl font-medium tracking-tight max-w-2xl mx-auto">
                        Celebrating the achievements, joy, and growth of our young geniuses.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className={`group relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(236,0,140,0.3)] hover:-translate-y-2`}
                        >
                            <img
                                src={src}
                                alt={`Brainobrain Moment ${index + 1}`}
                                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                            <div className="absolute inset-x-0 bottom-0 p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                <div className="inline-block px-4 py-1.5 bg-primary-pink/90 backdrop-blur-md rounded-full text-white text-xs font-black uppercase tracking-widest mb-2 shadow-lg">
                                    Brainobrain Event
                                </div>
                                <h3 className="text-white font-bold text-lg leading-tight">
                                    Capturing Excellence
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
