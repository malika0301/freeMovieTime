'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Home, Film, Tv, Layers, Sun, Menu, X } from 'lucide-react';

export default function Header() {
    const [query, setQuery] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full bg-[#0f0f0f] border-b border-[#1a1a1a]">
            <div className=" py-3 flex items-center justify-between gap-4">

                {/* Logo */}
                <Link href="/" className="flex items-center text-white font-bold text-xl tracking-tight shrink-0">
                    <span className="text-white">freekino</span>
                    <span className="bg-[#aaff00] text-black text-xs font-bold px-1.5 py-0.5 rounded ml-0.5">.net</span>
                </Link>

                {/* Search - hidden on mobile */}
                <div className="hidden md:flex items-center gap-2 flex-1 max-w-sm">
                    <div className="flex items-center bg-[#1c1c1c] rounded-md px-3 py-2 w-full">
                        <Search size={16} className="text-gray-500 mr-2 shrink-0" />
                        <input
                            type="text"
                            placeholder="Qidirish..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="bg-transparent outline-none text-white text-sm placeholder-gray-500 w-full"
                        />
                    </div>
                    <button className="bg-[#1c1c1c] hover:bg-[#2a2a2a] text-white text-sm px-4 py-2 rounded-md transition shrink-0">
                        Qidirish
                    </button>
                </div>

                {/* Nav - hidden on mobile */}
                <nav className="hidden md:flex items-center gap-5">
                    <Link href="/" className="flex items-center gap-1.5 text-gray-300 hover:text-white text-sm transition">
                        <Home size={16} />
                        Bosh sahifa
                    </Link>
                    <Link href="/kino" className="flex items-center gap-1.5 text-gray-300 hover:text-white text-sm transition">
                        <Film size={16} />
                        Kino
                    </Link>
                    <Link href="/serial" className="flex items-center gap-1.5 text-gray-300 hover:text-white text-sm transition">
                        <Tv size={16} />
                        Serial
                    </Link>
                    <Link href="/multfilm" className="flex items-center gap-1.5 text-gray-300 hover:text-white text-sm transition">
                        <Layers size={16} />
                        Multfilm
                    </Link>
                    <button className="text-gray-300 hover:text-white transition">
                        <Sun size={18} />
                    </button>
                </nav>

                {/* Mobile right side */}
                <div className="flex md:hidden items-center gap-3">
                    <button className="text-gray-300 hover:text-white transition">
                        <Sun size={18} />
                    </button>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-gray-300 hover:text-white transition"
                    >
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-[#0f0f0f] border-t border-[#1a1a1a] px-4 py-4 flex flex-col gap-4">

                    {/* Mobile Search */}
                    <div className="flex items-center gap-2">
                        <div className="flex items-center bg-[#1c1c1c] rounded-md px-3 py-2 w-full">
                            <Search size={16} className="text-gray-500 mr-2 shrink-0" />
                            <input
                                type="text"
                                placeholder="Qidirish..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="bg-transparent outline-none text-white text-sm placeholder-gray-500 w-full"
                            />
                        </div>
                        <button className="bg-[#1c1c1c] hover:bg-[#2a2a2a] text-white text-sm px-4 py-2 rounded-md transition shrink-0">
                            Qidirish
                        </button>
                    </div>

                    {/* Mobile Nav Links */}
                    <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition py-1">
                        <Home size={16} /> Bosh sahifa
                    </Link>
                    <Link href="/kino" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition py-1">
                        <Film size={16} /> Kino
                    </Link>
                    <Link href="/serial" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition py-1">
                        <Tv size={16} /> Serial
                    </Link>
                    <Link href="/multfilm" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition py-1">
                        <Layers size={16} /> Multfilm
                    </Link>
                </div>
            )}
            
        </header>
    );
}