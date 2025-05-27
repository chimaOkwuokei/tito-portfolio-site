"use client"

import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

export default function Footer() {
    return (
        <div className="border-t border-white/10 text-white py-12 px-6">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Left Section */}
                <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FFFFFF] bg-clip-text text-transparent">
                        Tito Osadebey
                    </h2>
                    <p className="mt-4 text-white/80">
                        Senior AI Engineer passionate about machine learning, and cutting-edge AI technologies.
                        Based in London, UK.
                    </p>
                    <div className="flex gap-4 mt-6">
                        <a href="http://linkedin.com/in/tito-osadebe" aria-label="LinkedIn" className="bg-black/80 p-3 rounded-md hover:bg-[#FFD700]">
                            <FaLinkedin size={20} />
                        </a>
                        <a href="http://github.com/titoausten" aria-label="Github" className="bg-black/80  p-3 rounded-md hover:bg-[#FFD700]">
                            <FaGithub size={20} />
                        </a>
                        <a href="mailto:khaliladib11@gmail.com" aria-label="Email" className="bg-black/80 p-3 rounded-md hover:bg-[#FFD700]">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-white/80">
                        {['Home', 'About', 'Experience', 'Projects', 'Research', 'Blogs', 'Contact'].map((item) => (
                            <li key={item}>
                                <ScrollLink
                                    to={item.toLowerCase()}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className="cursor-pointer hover:text-[#FFD700] text-white"
                                >
                                    {item}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <div className="text-white/80 space-y-2">
                        <p>
                            <span className="font-semibold">Email:</span> osadebe.tito@gmail.com
                        </p>
                        <p>
                            <span className="font-semibold">Location:</span> London, UK
                        </p>
                        {/* <p className="flex items-center gap-2">
                            <span className="font-semibold">Status:</span>
                            <span className="h-2 w-2 bg-green-500 rounded-full inline-block"></span>
                            Available for opportunities
                        </p> */}
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50">
                © 2025 Tito Osadebey. All rights reserved.
            </div>
        </div>

    );
}
