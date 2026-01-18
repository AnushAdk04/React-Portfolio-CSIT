import React from 'react';
import AboutImage from '../assets/About.png';
import CVImage from '../assets/CV.png';
import { ArrowUpRight, Phone, Mail, User, MapPin } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-10">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Left Side - Image */}
                <div className="md:w-1/3 flex flex-col items-center justify-center text-center space-y-4">
                    <div>
                        <p className="text-sm font-bold text-gray-500 text-left mb-2">Nice to meet you!</p>
                        <h1 className="text-4xl font-black text-black">WELCOME TO...</h1>
                    </div>
                    <img
                        src={AboutImage}
                        alt="Anush Adhikari"
                        className="max-h-[70vh] object-cover rounded-xl shadow-none"
                    />
                    <div className="flex flex-col items-center">
                        <h2 className="text-4xl font-bold bg-linear-to-r from-[#FFB147] via-[#FF6C63] to-[#B86ADF] bg-clip-text text-transparent w-fit">
                            ANUSH ADHIKARI
                        </h2>
                        <p className="text-md font-bold text-black mt-2">
                            Frontend Developer based in Nepal
                        </p>
                        <a
                            href={CVImage}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center space-x-2 text-black font-bold border-b-2 border-black mt-2"
                        >
                            <span>Download CV</span>
                            <ArrowUpRight size={16} />
                        </a>
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className="md:w-2/3 flex flex-col space-y-8">

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm font-medium text-black">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-gray-100 rounded-full">
                                <Phone size={16} />
                            </div>
                            <span>+977 9815151515</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-gray-100 rounded-full">
                                <User size={16} />
                            </div>
                            <span>25 yrs</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-gray-100 rounded-full">
                                <Mail size={16} />
                            </div>
                            <span>contactanushadhikari@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-gray-100 rounded-full">
                                <MapPin size={16} />
                            </div>
                            <span>Kathmandu, Nepal</span>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 w-full my-2"></div>

                    {/* Stats */}
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="flex-1 space-y-3">
                            <div className="flex items-center gap-4">
                                <span className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#FFB147] via-[#FF6C63] to-[#B86ADF]">
                                    5+
                                </span>
                                <div className="flex flex-col text-xs font-bold text-black">
                                    <span>Years</span>
                                    <span>experience...</span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-700">
                                Dedicated frontend developer crafting thoughtful digital experiences with a decade of hands-on design-to-code delivery.
                            </p>
                        </div>
                        <div className="flex-1 space-y-3">
                            <div className="flex items-center gap-4">
                                <span className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#FFB147] via-[#FF6C63] to-[#B86ADF]">
                                    11
                                </span>
                                <div className="flex flex-col text-xs font-bold text-black">
                                    <span>Clients</span>
                                    <span>Worldwide...</span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-700">
                                Partnered with teams across the globe to launch products that balance usability, performance, and visual polish.
                            </p>
                        </div>
                    </div>


                    {/* Quote Block */}
                    <div className="bg-black text-white p-8 relative rounded-sm shadow-xl">
                        <span className="text-6xl absolute top-4 left-4 opacity-20 font-serif">“</span>
                        <p className="italic font-medium text-lg relative z-10 pl-6">
                            "Code is like humor. When you have to explain it, it’s bad."
                        </p>
                        <p className="text-right text-xs text-gray-400 mt-4">- Anush Adhikari</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
