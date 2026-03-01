import Link from 'next/link';

const categories = [
    { flag: '🇮🇳', name: 'Hindiston kinolari', count: '350+', href: '/kino/hindiston' },
    { flag: '🇺🇸', name: 'AQSH kinolari', count: '2K+', href: '/kino/aqsh' },
    { flag: '🇹🇷', name: 'Turk kinolari', count: '300+', href: '/kino/turk' },
    { flag: '🇰🇷', name: 'Janubiy Koreya kinolari', count: '200+', href: '/kino/koreya' },
    { flag: '🇺🇸', name: 'AQSH seriallari', count: '100+', href: '/serial/aqsh' },
    { flag: '🇹🇷', name: 'Turk seriallari', count: '60+', href: '/serial/turk' },
    { flag: '🇰🇷', name: 'Janubiy Koreya seriallari', count: '150+', href: '/serial/koreya' },
    { flag: '🇺🇿', name: "O'zbek tilida yangi kinolar 2025", count: 'HD', href: '/kino/uzbek' },
];

export default function Categories() {
    return (
        <section className="container mx-auto  md:px-6 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {categories.map((cat) => (
                    <Link
                        key={cat.href}
                        href={cat.href}
                        className="flex items-center justify-between bg-[#1c1c1c] hover:bg-[#252525] transition rounded-lg px-4 py-3"
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-2xl text-[white] ">{cat.flag}</span>
                            <span className="text-sm text-gray-300">{cat.name}</span>
                        </div>
                        <span className="text-sm text-gray-500 shrink-0 ml-2">{cat.count}</span>
                    </Link>
                ))}
            </div>
        </section>
    );
}