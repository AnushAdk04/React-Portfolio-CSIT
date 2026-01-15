import React from 'react';
import { Phone, Mail } from 'lucide-react';
import ProfileImage from '../assets/Profile.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-white relative">
            <div className="container mx-auto px-12 flex flex-col md:flex-row items-center justify-between w-full">

                {/* Left Content Area */}
                <div className="md:w-1/2 flex flex-col space-y-6 z-10">
                    <h1 className="text-6xl md:text-8xl font-black text-black leading-tight tracking-tighter">
                        MY NAME<br />
                        IS ANUSH<br />
                        ADHIKARI
                    </h1>

                    <p className="text-xl md:text-2xl text-black font-medium italic">
                        Frontend Developer based in Nepal
                    </p>

                    <Link to="contact" className="bg-black text-white px-6 py-4 w-fit mt-4 hover:bg-gray-900 cursor-pointer">Let's talk with me</Link>

                    <div className="flex flex-col md:flex-row gap-6 mt-12 pt-8 text-black font-bold">
                        <div className="flex items-center space-x-3">
                            <Phone size={20} />
                            <span>+977 9815151515</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Mail size={20} />
                            <span>contactanushadhikari@gmail.com</span>
                        </div>
                    </div>
                </div>

                {/* Right Content Area - Image */}
                <div className="md:w-1/2 relative flex justify-center items-center mt-10 md:mt-0">

                    {/* Profile Image */}
                    <img
                        src={ProfileImage}
                        alt="Anush Adhikari"
                        className="max-h-[80vh] object-cover"
                    />
                </div>

            </div>
        </div>
    );
};

export default Home;
