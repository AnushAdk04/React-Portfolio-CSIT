import React from "react";
import { Home, User, Heart, Briefcase, Mail, Globe } from "lucide-react";

const navItems = [
    { key: "home", label: "Home", icon: Home },
    { key: "about", label: "About", icon: User },
    { key: "interests", label: "Interests", icon: Heart },
    { key: "services", label: "Services", icon: Briefcase },
    { key: "contact", label: "Contact", icon: Mail },
];

export default function Sidebar({ active = "home" }) {
    return (
        <div className="fixed h-screen w-64 bg-neutral-950 text-white flex flex-col justify-between px-6 py-8">
            {/* Brand */}
            <div>
                <div className="text-2xl font-semibold tracking-wider">Anush Adhikari</div>
                {/* Nav */}
                <div className="mt-10">
                    <ul className="space-y-6">
                        {navItems.map(({ key, label, icon: Icon }) => {
                            const isActive = key === active;
                            return (
                                <li key={key}>
                                    <a
                                        href={`#${key}`}
                                        className="group flex items-center gap-3 text-neutral-300 hover:text-white transition-colors"
                                    >
                                        <Icon className="size-4 opacity-60 group-hover:opacity-100" />
                                        <span className={`uppercase tracking-wide text-sm ${isActive ? "text-white" : ""
                                            }`}>
                                            {label}
                                        </span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            {/* Footer */}
            <div className="space-y-6">
                {/* Socials */}
                <div className="flex items-center gap-3">
                    {[Globe].map((Icon, idx) => (
                        <a
                            key={idx}
                            href="#"
                            className="grid place-items-center size-10 rounded-full bg-neutral-900/70 ring-1 ring-neutral-800 hover:ring-neutral-700 hover:bg-neutral-800 transition-colors"
                            aria-label="social link"
                        >
                            <Icon className="size-4 text-neutral-300" />
                        </a>
                    ))}
                </div>
                {/* Copyright */}
                <p className="text-xs text-neutral-400 leading-relaxed">
                    Copyright &copy; Anush Adhikari. All rights reserved.
                </p>
            </div>
        </div>
    );
}

