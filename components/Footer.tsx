import Link from 'next/link';

const serialYears = ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'];
const kinoYears = ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'];

export default function Footer() {
    return (
        <footer className="bg-[#0f0f0f] text-gray-400 mt-10">

            {/* Main Footer */}
            <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-12 flex flex-col gap-10">

                {/* Top section */}
                <div className="flex flex-col md:flex-row justify-between gap-10">

                    {/* Left - Logo + Description */}
                    <div className="max-w-xs">
                        <Link href="/" className="flex items-center text-white font-bold text-xl mb-4">
                            <span className="text-white">freekino</span>
                            <span className="bg-[#aaff00] text-black text-xs font-bold px-1.5 py-0.5 rounded ml-0.5">.net</span>
                        </Link>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Filmlarga bo'lgan huquq ularning mualliflariga tegishli. Barcha filmlar faqat ma'lumot olish uchun mo'ljallangan.
                            Foydalanuvchilar joylashtirgan noqonuniy materiallar uchun ma'muriyat javobgar emas! Har qanday film mualliflik huquqi
                            egasining iltimosiga binoan olib tashlanadi.
                        </p>
                    </div>

                    {/* Right - Links */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

                        {/* Yil bo'yicha seriallar */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Yil bo'yicha seriallar</h4>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
                                {serialYears.map((year) => (
                                    <Link key={year} href={`/serial/${year}`} className="text-sm text-gray-400 hover:text-white transition">
                                        {year}-yil
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Yil bo'yicha kinolar */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Yil bo'yicha kinolar</h4>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
                                {kinoYears.map((year) => (
                                    <Link key={year} href={`/kino/${year}`} className="text-sm text-gray-400 hover:text-white transition">
                                        {year}-yil
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Aloqa / Contact */}
                        <div className="col-span-2 md:col-span-1">
                            <h4 className="text-white font-semibold mb-4">Aloqa / Contact</h4>
                            <div className="flex flex-col gap-1.5">
                                <Link href="#" className="text-sm text-gray-400 hover:text-white transition">Telegram</Link>
                                <Link href="#" className="text-sm text-gray-400 hover:text-white transition">DMCA</Link>
                                <Link href="#" className="text-sm text-gray-400 hover:text-white transition">Правообладателям</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[#1a1a1a]">
                <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-sm text-gray-500 text-center md:text-left">
                        © 2021-2026 Freekino.net — Barcha huquqlar himoyalangan.
                    </p>
                    <div className="flex items-center flex-wrap justify-center md:justify-end gap-4">
                        <Link href="#" className="text-sm text-gray-400 hover:text-white transition">Foydalanish shartlari</Link>
                        <Link href="#" className="text-sm text-gray-400 hover:text-white transition">Maxfiylik</Link>
                        <Link href="#" className="text-sm text-gray-400 hover:text-white transition">Sitemap</Link>
                        <Link href="#" className="bg-[#aaff00] text-black p-1.5 rounded hover:opacity-80 transition">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14 3v4a1 1 0 001 1h4M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z" />
                                <polyline points="9 17 12 20 15 17" />
                                <line x1="12" y1="12" x2="12" y2="20" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

        </footer>
    );
}