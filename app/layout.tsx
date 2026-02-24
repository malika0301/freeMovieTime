import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Categories from '@/components/Categories';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz">
      <body className="bg-[#0f0f0f]">
        <Header />
        {children}
        <Categories/>
        <Footer/>
      </body>
    </html>
  );
}