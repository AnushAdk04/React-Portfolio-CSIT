import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';

const Sidebar = () => {
    return (
        <div className="fixed left-0 top-0 h-full w-64 bg-black text-white flex flex-col justify-between p-6">
            {/* Logo Area */}
            <div>
                <Link  to="/">
                <h1 className="text-2xl font-bold tracking-widest mb-12">AA</h1>
                </Link>

                {/* Navigation Links */}
                <nav className="flex flex-col space-y-4">
                    <Link to="/" className="flex items-center space-x-3 text-sm tracking-widest hover:text-orange-400 transition-colors">
                        <span>HOME</span>
                    </Link>
                    <Link to="/about" className="flex items-center space-x-3 text-sm tracking-widest hover:text-orange-400 transition-colors">
                        <span>ABOUT</span>
                    </Link>
                    <Link to="/interests" className="flex items-center space-x-3 text-sm tracking-widest hover:text-orange-400 transition-colors">
                        <span>INTERESTS</span>
                    </Link>
                    <Link to="/services" className="flex items-center space-x-3 text-sm tracking-widest hover:text-orange-400 transition-colors">
                        <span>SERVICES</span>
                    </Link>
                    <Link to="/contact" className="flex items-center space-x-3 text-sm tracking-widest hover:text-orange-400 transition-colors">
                        <span>CONTACT</span>
                    </Link>
                </nav>
            </div>

            {/* Social Icons & Footer */}
            <div className="flex flex-col space-y-6">
                <div className="flex space-x-4">
                    <a href="https://github.com/AnushAdk04" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-orange-400 transition-colors cursor-pointer">
                        <Github size={16} />
                    </a>
                    <a href="https://www.linkedin.com/in/anushadhikari/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-orange-400 transition-colors cursor-pointer">
                        <Linkedin size={16} />
                    </a>
                </div>
                <div className="text-xs text-gray-500">
                    <p>Copyright ©2026 Anush Adhikari</p>
                    <p>All right reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
