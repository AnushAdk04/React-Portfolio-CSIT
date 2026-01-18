import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "YOUR_API_KEY");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            event.target.reset();
            setTimeout(() => setResult(""), 3000);
            setResult("Success!");
            alert("Form submitted successfully!");

        } else {
            alert("Unsuccessful Submission!")
            setResult("Error");

        }
    };
    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-6">
            <div className="container mx-auto flex flex-col md:flex-row gap-12">

                {/* Left Side - Contact Info */}
                <div className="md:w-2/5 flex flex-col justify-start space-y-8">
                    <div>
                        <h1 className="text-4xl font-black mb-3">Get in touch</h1>
                        <p>
                            I am available for new projects and collaborations. Tell me the basics and i will get back with a tailored plan.
                        </p>
                    </div>

                    {/* Address */}
                    <div className="bg-neutral-900 rounded-lg p-6 flex items-start gap-4 text-white">
                        <div className="p-3 rounded-lg shrink-0">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Address</h3>
                            <p className="text-sm mt-1">Kathmandu, Nepal</p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="bg-neutral-900 rounded-lg p-6 flex items-start gap-4 text-white">
                        <div className="p-3 rounded-lg shrink-0">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Phone</h3>
                            <p className="text-sm mt-1">+977 9815151515</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="bg-neutral-900 rounded-lg p-6 flex items-start gap-4 text-white">
                        <div className="p-3 rounded-lg shrink-0">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Email</h3>
                            <p className="text-sm mt-1">contactanushadhikari@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="md:w-3/5 flex flex-col">
                    <form className="space-y-6" onSubmit={onSubmit}>

                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-bold text-black mb-2">
                                Full name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Enter your full name"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-bold text-black mb-2">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="you@company.com"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
                                required
                            />
                        </div>

                        {/* Subject */}
                        <div>
                            <label className="block text-sm font-bold text-black mb-2">
                                Subject <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Brief subject"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
                                required
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-bold text-black mb-2">
                                Your message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                name="message"
                                placeholder="How can we help you?"
                                rows="5"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg resize-none"
                                required
                            ></textarea>
                            <p className="text-xs text-gray-500 mt-2">Be concise helps us respond faster. We respect your privacy and wont share your information.</p>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="mt-8 bg-neutral-900 hover:bg-neutral-950 text-white font-bold py-3 px-8 rounded-lg flex items-center gap-2 cursor-pointer"
                        >
                            Submit<ArrowRight size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
