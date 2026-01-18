import React from 'react';
import { Code, Shield, Palette, Music, Trophy, Heart } from 'lucide-react';

const Interests = () => {
    const interests = [
        {
            icon: <Palette size={32} />,
            title: "UI/UX Designing",
            description: "Crafting intuitive and visually appealing user interfaces that enhance user experience and engagement."
        },
        {
            icon: <Shield size={32} />,
            title: "Cybersecurity",
            description: "Passionate about digital security, ethical hacking, and protecting systems from vulnerabilities."
        },
        {
            icon: <Code size={32} />,
            title: "Coding",
            description: "Love solving problems through code, building web applications, and exploring new technologies."
        }
    ];

    const hobbies = [
        {
            icon: <Trophy size={32} />,
            title: "Playing Cricket",
            description: "Enjoy the thrill of the game, teamwork, and the competitive spirit on the field."
        },
        {
            icon: <Music size={32} />,
            title: "Listening to Music",
            description: "Music fuels my creativity and keeps me motivated throughout my coding sessions."
        },
        {
            icon: <Heart size={32} />,
            title: "Learning New Things",
            description: "Always curious about new technologies, tools, and skills to expand my knowledge."
        }
    ];

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-10">
            <div className="container mx-auto">
                
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-sm font-bold text-gray-500 tracking-widest mb-2">What drives me</p>
                    <h1 className="text-5xl font-black text-black mb-4">MY INTERESTS</h1>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        A glimpse into what I'm passionate about and what keeps me inspired outside of work.
                    </p>
                </div>

                {/* Interests Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-black mb-8 text-center md:text-left">
                        Professional Interests
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {interests.map((interest, index) => (
                            <div 
                                key={index}
                                className="bg-white border-2 border-gray-200 rounded-xl p-6"
                            >
                                <div className="text-neutral-900 mb-4">
                                    {interest.icon}
                                </div>
                                <h3 className="text-xl font-bold text-black mb-3">{interest.title}</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">{interest.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hobbies Section */}
                <div>
                    <h2 className="text-3xl font-bold text-black mb-8 text-center md:text-left">
                        Hobbies & Passions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {hobbies.map((hobby, index) => (
                            <div 
                                key={index}
                                className="bg-neutral-900 text-white rounded-xl p-6 hover:scale-105 transition-transform duration-300"
                            >
                                <div className="text-gray-400 mb-4">
                                    {hobby.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{hobby.title}</h3>
                                <p className="text-gray-300 text-sm">{hobby.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Quote */}
                <div className="mt-16 bg-linear-to-r from-neutral-800 to-neutral-950 rounded-xl p-8 text-center">
                    <p className="text-white text-xl font-semibold italic">
                        "The only way to do great work is to love what you do."
                    </p>
                    <p className="text-white text-sm mt-2 opacity-80">- Steve Jobs</p>
                </div>

            </div>
        </div>
    );
};

export default Interests;
