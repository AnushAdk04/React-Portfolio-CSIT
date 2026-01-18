import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import WebDevImage from '../assets/Web Development.jpg';
import UIUXImage from '../assets/UI-UX Design.jpg';
import GraphicsImage from '../assets/Graphics Design.jpg';
import MobileDevImage from '../assets/Mobile Development.jpg';

const Services = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const services = [
        {
            title: "WEB DEVELOPMENT",
            description: "Build responsive and modern websites using the latest technologies. From simple landing pages to complex web applications, I create solutions that are fast, scalable, and user-friendly.",
            image: WebDevImage
        },
        {
            title: "UI/UX DESIGN",
            description: "Design intuitive and visually appealing interfaces that enhance user experience. I focus on creating designs that are not only beautiful but also functional and accessible to all users.",
            image: UIUXImage
        },
        {
            title: "GRAPHICS DESIGNING",
            description: "Create stunning visual content for your brand including logos, banners, social media graphics, and more. I help bring your creative vision to life with professional design work.",
            image: GraphicsImage
        },
        {
            title: "MOBILE APP DEVELOPMENT",
            description: "Develop cross-platform mobile applications that work seamlessly on both iOS and Android. I build mobile experiences that are fast, reliable, and engaging for your users.",
            image: MobileDevImage
        }
    ];

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-white p-5">
            <div className="container mx-auto max-w-5xl">
                
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-5xl font-black text-black">MY SPECIALTIES</h1>
                </div>

                {/* Services List */}
                <div className="space-y-6">
                    {services.map((service, index) => (
                        <div key={index} className="border-b border-gray-300 pb-6">
                            
                            {/* Service Header */}
                            <div 
                                className="flex items-center justify-between cursor-pointer group"
                                onClick={() => toggleExpand(index)}
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-2xl font-bold text-black">•</span>
                                    <h2 className="text-2xl font-bold text-black group-hover:text-gray-700 transition-colors">
                                        {service.title}
                                    </h2>
                                </div>
                                
                                <button className="text-black hover:text-gray-700 transition-colors">
                                    {expandedIndex === index ? (
                                        <Minus className='cursor-pointer' size={32} strokeWidth={2} />
                                    ) : (
                                        <Plus className='cursor-pointer' size={32} strokeWidth={2} />
                                    )}
                                </button>
                            </div>

                            {/* Expanded Content */}
                            {expandedIndex === index && (
                                <div className="mt-6 flex flex-col md:flex-row gap-6 animate-fadeIn">
                                    <div className="md:w-1/2">
                                        <img 
                                            src={service.image} 
                                            alt={service.title}
                                            className="w-full h-44 object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className="md:w-1/2 flex items-center">
                                        <p className="text-gray-700 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Services;
